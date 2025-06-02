using System.Text.Json.Serialization;

namespace LeanXP.Server.DTOs.User;

public class UserReadDto
{

    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }

    public int Percentual { get; set; } // 0 a 100
    [JsonPropertyName("ModuleNumber")]
    public int ModuleNumber { get; set; }
}
