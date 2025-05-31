using LeanXP.Server.Enum;
using System.Text.Json.Serialization;

namespace LeanXP.Server.DTOs.Achievement;

public class AchievementUpdateDto
{
    [JsonPropertyName("Titulo")]
    public string Title { get; set; } = string.Empty;

    [JsonPropertyName("Descricao")]
    public string Description { get; set; } = string.Empty;

    [JsonPropertyName("CssName")]
    public string CssName { get; set; } = string.Empty;

    [JsonPropertyName("Image")]
    public string Image { get; set; } = string.Empty;

    [JsonPropertyName("AchievementStatus")]
    public AchievementStatus achievementStatus { get; set; }

    [JsonPropertyName("ConquerDate")]
    public DateTime? ConquerDate { get; set; }

}
