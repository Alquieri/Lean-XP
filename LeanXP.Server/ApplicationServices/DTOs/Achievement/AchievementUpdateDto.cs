

using LeanXP.Server.Domain.Enum;
using System.Text.Json.Serialization;

namespace LeanXP.Server.ApplicationServices.DTOs.Achievement;

public class AchievementUpdateDto
{
    [JsonPropertyName("Titulo")]
    public string? Title { get; set; }

    [JsonPropertyName("Descricao")]
    public string? Description { get; set; }

    [JsonPropertyName("CssName")]
    public string? CssName { get; set; }

    [JsonPropertyName("Image")]
    public string? Image { get; set; }

    [JsonPropertyName("AchievementStatus")]
    public AchievementStatus? achievementStatus { get; set; }

    [JsonPropertyName("ConquerDate")]
    public DateTime? ConquerDate { get; set; } = DateTime.UtcNow;


}
