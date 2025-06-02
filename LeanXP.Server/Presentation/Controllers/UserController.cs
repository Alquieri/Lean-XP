
using LeanXP.Server.ApplicationServices.DTOs.User;
using LeanXP.Server.ApplicationServices.Services;
using Microsoft.AspNetCore.Mvc;

namespace LeanXP.Server.Presentation.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : Controller
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(int id)
    {
        try
        {
            var user = _userService.GetUserById(id);
            return Ok(await user);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });

        }
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllUsers()
    {
        try
        {
            var user = _userService.GetAllUsers();
            return Ok(await user);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });

        }
    }

    [HttpPost("create")]
    public async Task<IActionResult> PostUser([FromBody] UserCreateDto userDto)
    {
        try
        {
            if (userDto == null)
            {
                return BadRequest(new { message = "User cannot be null" });
            }
            var user = _userService.CreateUser(userDto);
            return Ok(await user);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });

        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginUser([FromBody] UserLoginDto userDto)
    {
        try
        {
            if (userDto == null)
            {
                return BadRequest("User cannot be null");
            }
            var user = await _userService.LoginUser(userDto);

            return Ok(user);

        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPatch("patch/{id}")]
    public async Task<IActionResult> PatchUser(int id, [FromBody] UserCreateDto userDto)
    {
        try
        {
            if (userDto == null)
            {
                return BadRequest(new { message = "User cannot be null" });
            }
            var user = _userService.UpdateUser(id, userDto);
            return Ok(await user);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });

        }
    }
}
