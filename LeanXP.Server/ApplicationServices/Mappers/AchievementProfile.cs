

using AutoMapper;
using LeanXP.Server.ApplicationServices.DTOs.Achievement;
using LeanXP.Server.Domain.Model;

namespace LeanXP.Server.ApplicationServices.Mappers;

public class AchievementProfile : Profile
{
    public AchievementProfile()
    {
        CreateMap<Achievement, AchievementUpdateDto>();
        CreateMap<AchievementUpdateDto, Achievement>();
        CreateMap<AchievementCreateDto, Achievement>();
        CreateMap<Achievement, AchievementCreateDto>();
    }
}
