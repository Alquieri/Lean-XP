namespace LeanXP.Server.DTOs.User;

public class UserCreateDto
{
    public string Name { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public int Percentual { get; set; } // 0 a 100
}
