using AutoMapper;
using LeanXP.Server.ApplicationServices.DTOs.User;
using LeanXP.Server.Domain.Model;
using LeanXP.Server.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace LeanXP.Server.ApplicationServices.Services;

public class UserService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    private readonly AchievementService _achievementService;


    public UserService(AppDbContext context, IMapper mapper, AchievementService achievementService)
    {
        _context = context;
        _mapper = mapper;
        _achievementService = achievementService;
    }

    public async Task<UserReadDto> GetUserById(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new Exception($"User with id {id} not found");
        }

        var userRead = _mapper.Map<UserReadDto>(user);

        return userRead;
    }

    public async Task<IEnumerable<UserReadDto>> GetAllUsers()
    {
        var users = await _context.Users.ToListAsync();
        if (users == null || !users.Any())
        {
            throw new Exception("No users found");
        }

        var usersRead = _mapper.Map<IEnumerable<UserReadDto>>(users);
        return usersRead;
    }

    public async Task<UserReadDto> CreateUser(UserCreateDto userDto)
    {

        using var transaction = await _context.Database.BeginTransactionAsync();
        if (userDto == null)
        {
            throw new Exception("User cannot be null");
        }

        var user = _mapper.Map<User>(userDto);
        _context.Users.Add(user);
        var result = await _context.SaveChangesAsync();

        if (result == 0)
        {
            throw new Exception("There were no changes in database");
        }

        await _achievementService.CreateAllAchievements(user.Id);

        await transaction.CommitAsync();
        return _mapper.Map<UserReadDto>(user);
    }

    public async Task<UserReadDto> UpdateUser(int id, UserCreateDto userDto)
    {
        if (userDto == null)
        {
            throw new Exception("User cannot be null");
        }

        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new Exception($"User with id {id} not found");
        }

        if (userDto.Name != null)
        {
            user.Name = userDto.Name;
        }
        if (userDto.Email != null)
        {
            user.Email = userDto.Email;
        }
        if (userDto.Percentual != 0)
        {
            user.Percentual = userDto.Percentual;
        }
        if (userDto.ModuleNumber != 0)
        {
            user.ModuleNumber = userDto.ModuleNumber;
        }

        await _context.SaveChangesAsync();

        return _mapper.Map<UserReadDto>(user);
    }

    public async Task<User> LoginUser(UserLoginDto userDto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userDto.Login);

        if (user == null)
        {
            throw new Exception("User not found");
        }

        if (user.Password != userDto.Password)
        {
            throw new Exception("Invalid password");
        }

        return user;
    }
}
