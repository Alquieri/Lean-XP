using AutoMapper;
using LeanXP.Server.ApplicationServices.DTOs.User;
using LeanXP.Server.Domain.Model;

namespace LeanXP.Server.ApplicationServices.Mappers;

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
