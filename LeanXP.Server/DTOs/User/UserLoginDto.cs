using System.Text.Json.Serialization;

namespace LeanXP.Server.DTOs.User;

public class UserLoginDto
{
    [JsonPropertyName("Login")]
    public string Login { get; set; }

    [JsonPropertyName("Password")]
    public string Password { get; set; }

}
