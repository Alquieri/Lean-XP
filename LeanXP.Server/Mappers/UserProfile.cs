using AutoMapper;
using LeanXP.Server.DTOs.User;
using LeanXP.Server.Model;

namespace LeanXP.Server.Mappers;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserReadDto>();
        CreateMap<UserCreateDto, User>();
        CreateMap<User, UserCreateDto>();
        CreateMap<IEnumerable<User>, IEnumerable<UserReadDto>>();
        CreateMap<IEnumerable<UserReadDto>, IEnumerable<User>>();
    }
}
