using LeanXP.Server.Enum;
using System.Text.Json.Serialization;

namespace LeanXP.Server.DTOs.Achievement;

public class AchievementCreateDto
{
    [JsonPropertyName("Titulo")]
    public string Title { get; set; } = string.Empty;

    [JsonPropertyName("Descricao")]
    public string Description { get; set; } = string.Empty;

    [JsonPropertyName("CssName")]
    public string CssName { get; set; } = string.Empty;

    [JsonPropertyName("AchievementNumber")]
    public int AchievementNumber { get; set; }

    [JsonPropertyName("Image")]
    public string Image { get; set; } = string.Empty;

    [JsonPropertyName("AchievementStatus")]
    public AchievementStatus achievementStatus { get; set; }

    [JsonPropertyName("UserId")]
    public int UserId { get; set; }
}
