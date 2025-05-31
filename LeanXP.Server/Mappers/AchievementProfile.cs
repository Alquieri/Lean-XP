using AutoMapper;
using LeanXP.Server.DTOs.Achievement;
using LeanXP.Server.Model;

namespace LeanXP.Server.Mappers;

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
