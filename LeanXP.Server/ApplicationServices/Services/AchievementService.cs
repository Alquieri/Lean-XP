using AutoMapper;
using LeanXP.Server.ApplicationServices.DTOs.Achievement;
using LeanXP.Server.Domain.Enum;
using LeanXP.Server.Domain.Model;
using LeanXP.Server.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LeanXP.Server.ApplicationServices.Services;

public class AchievementService
{
    private readonly IMapper _mapper;
    private readonly AppDbContext _context;

    public AchievementService(IMapper mapper, AppDbContext context)
    {
        _mapper = mapper;
        _context = context;
    }

    public bool IsUrl(string path)
    {
        return Uri.TryCreate(path, UriKind.Absolute, out Uri? uriResult)
            && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
    }

    public async Task CreateAllAchievements(int userId)
    {
        var achievements = new List<AchievementCreateDto>
           {
           new AchievementCreateDto
           {
               Title = "Primeiro Login",
               Description = "Você acessou o sistema pela primeira vez!",
               CssName = "perfil-achievement-item",
               Image = "https://img.icons8.com/fluency/48/000000/login-rounded-right.png",
               AchievementNumber = 1,
               achievementStatus = AchievementStatus.nok,
               UserId = userId
           },
           new AchievementCreateDto
           {
               Title = "Módulo Concluído",
               Description = "Parabéns por concluir seu primeiro módulo!",
               CssName = "perfil-achievement-item",
               Image = "https://img.icons8.com/fluency/48/000000/graduation-cap.png",
               AchievementNumber = 2,
               achievementStatus = AchievementStatus.nok,
               UserId = userId
           },
            new AchievementCreateDto
           {
               Title = "LeanXP",
               Description = "Leu sobre o LeanXP",
               CssName = "perfil-achievement-item",
               Image = "https://img.icons8.com/fluency/48/000000/book.png",
               AchievementNumber = 3,
               achievementStatus = AchievementStatus.nok,
               UserId = userId
           },
             new AchievementCreateDto
              {
                Title = "Primeiro Diamante",
                Description = "Você ganhou seu primeiro Diamante!",
                CssName = "perfil-achievement-item",
                Image = "https://img.icons8.com/fluency/48/000000/graduation-cap.png",
                AchievementNumber = 4,
                achievementStatus = AchievementStatus.nok,
                UserId = userId
              },
              new AchievementCreateDto
              {
                Title = "100%",
                Description = "Você atingiu 100% de XP!",
                CssName = "perfil-achievement-item",
                Image = "https://img.icons8.com/fluency/48/000000/graduation-cap.png",
                AchievementNumber = 5,
                achievementStatus = AchievementStatus.nok,
                UserId = userId
              }

           };

        foreach (var achievementDto in achievements)
        {


            if (IsUrl(achievementDto.Image))
            {
                await CreateAchievementFromUrl(achievementDto);
            }
            else
            {
                await CreateAchievement(achievementDto);
            }
        }
    }

    public async Task<Achievement> GetAchievementById(int id)
    {
        var achievement = await _context.Achievements.FindAsync(id);

        if (achievement == null)
        {
            throw new Exception($"Achievement with id {id} not found");
        }

        return achievement;
    }

    public async Task<IEnumerable<Achievement>> GetAllAchievement()
    {
        var achievements = await _context.Achievements.ToListAsync();

        if (!achievements.Any())
        {
            throw new Exception("No achievements found");
        }
        return achievements;
    }

    public async Task<IEnumerable<Achievement>> GetAllAchievementsByUserId(int userId)
    {
        var achievements = await _context.Achievements
            .Where(a => a.UserId == userId)
            .ToListAsync();

        if (!achievements.Any())
        {
            throw new Exception($"No achievements found for user with id {userId}");
        }
        return achievements;
    }

    public async Task<Achievement> GetAchievementByUserIdNumber(int userId, int number)
    {
        var achievement = await _context.Achievements
            .FirstOrDefaultAsync(a => a.UserId == userId && a.AchievementNumber == number);
        if (achievement == null)
        {
            throw new Exception($"Achievement with number {number} not found for user with id {userId}");
        }
        return achievement;
    }

    public async Task<Achievement> CreateAchievement(AchievementCreateDto achievementDto)
    {
        if (achievementDto == null)
        {
            throw new Exception("Achievement cannot be null");
        }

        if (!File.Exists(achievementDto.Image))
        {
            throw new Exception("Image file does not exist");
        }
        var extension = Path.GetExtension(achievementDto.Image).ToLowerInvariant();
        var allowedExtensions = new List<string> { ".jpg", ".jpeg", ".png", ".gif", ".bmp" };

        if (!allowedExtensions.Contains(extension))
        {
            throw new Exception($"Extensão '{extension}' não permitida. Use: {string.Join(", ", allowedExtensions)}");
        }

        var imageBytes = await File.ReadAllBytesAsync(achievementDto.Image);
        var base64String = Convert.ToBase64String(imageBytes);

        achievementDto.Image = base64String;

        var achievement = _mapper.Map<Achievement>(achievementDto);

        _context.Achievements.Add(achievement);

        var dbTest = await _context.SaveChangesAsync();

        if (dbTest == 0)
        {
            throw new Exception("There were no changes in database");
        }
        return achievement;
    }

    public async Task CreateAchievementFromUrl(AchievementCreateDto achievementDto)
    {
        if (achievementDto == null)
            throw new ArgumentNullException(nameof(achievementDto));

        if (string.IsNullOrWhiteSpace(achievementDto.Image))
            throw new ArgumentException("Image URL cannot be empty");

        var allowedExtensions = new List<string> { ".jpg", ".jpeg", ".png", ".gif", ".bmp" };
        var uri = new Uri(achievementDto.Image);
        var extension = Path.GetExtension(uri.AbsolutePath).ToLowerInvariant();

        if (!allowedExtensions.Contains(extension))
            throw new InvalidOperationException($"Extensão '{extension}' não permitida. " +
                                                $"Use: {string.Join(", ", allowedExtensions)}");

        using var httpClient = new HttpClient();
        var imageBytes = await httpClient.GetByteArrayAsync(achievementDto.Image);

        var base64String = Convert.ToBase64String(imageBytes);

        var achievement = _mapper.Map<Achievement>(achievementDto);


        achievement.Image = base64String;

        _context.Achievements.Add(achievement);
        var dbTest = await _context.SaveChangesAsync();

        if (dbTest == 0)
            throw new Exception("There were no changes in database");
    }



    public async Task<Achievement> UpdateAchievement(int id, AchievementUpdateDto achievementDto)
    {
        if (achievementDto == null)
        {
            throw new Exception("Achievement cannot be null");
        }

        var achievement = await _context.Achievements.FindAsync(id);

        if (achievement == null)
        {
            throw new Exception($"Achievement with id {id} not found");
        }


        if (!string.IsNullOrEmpty(achievementDto.Title))
        {
            achievement.Description = achievementDto.Description;
        }

        if (!string.IsNullOrEmpty(achievementDto.Title))
        {
            achievement.CssName = achievementDto.CssName;
        }

        if (!string.IsNullOrEmpty(achievementDto.Title))
        {
            achievement.Image = achievementDto.Image;
        }



        if (achievementDto.achievementStatus != achievement.achievementStatus)
        {
            achievement.achievementStatus = (AchievementStatus)achievementDto.achievementStatus;
        }

        var dbTest = await _context.SaveChangesAsync();

        return achievement;
    }

    public async Task DeleteAchievement(int id)
    {
        var achievement = await GetAchievementById(id);

        _context.Achievements.Remove(achievement);

        var dbTest = await _context.SaveChangesAsync();

        if (dbTest == 0)
        {
            throw new Exception("There were no changes in database");
        }
    }
}

