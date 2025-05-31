
using LeanXP.Server.DTOs.Achievement;
using LeanXP.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace LeanXP.Server.Controllers;


[ApiController]
[Route("api/achievement")]
public class AchievementController : Controller
{

    private readonly AchievementService _achievementService;

    public AchievementController(AchievementService achievementService)
    {
        _achievementService = achievementService;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllAchievements()
    {
        try
        {
            var achievements = await _achievementService.GetAllAchievement();
            return Ok(achievements);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
    [HttpGet("type")]
    public async Task<IActionResult> GetAchievementById(int id)
    {
        try
        {
            var achievement = await _achievementService.GetAchievementById(id);
            return Ok(achievement);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("all/{userId}")]
    public async Task<IActionResult> GetAllAchievementsByUserId(int userId)
    {
        try
        {
            var achievements = await _achievementService.GetAllAchievementsByUserId(userId);
            return Ok(achievements);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost]
    public async Task<IActionResult> PostAchievement([FromBody] AchievementCreateDto achievement)
    {
        try
        {
            if (achievement == null)
            {
                return BadRequest(new { message = "Achievement cannot be null" });
            }
            var createdAchievement = await _achievementService.CreateAchievement(achievement);
            return Ok(createdAchievement);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPatch]
    public async Task<IActionResult> UpdateAchievement(int id,[FromBody] AchievementUpdateDto achievement)
    {
        try
        {
            if (achievement == null)
            {
                return BadRequest(new { message = "Achievement cannot be null" });
            }
            var updatedAchievement = await _achievementService.UpdateAchievement(id,achievement);
            return Ok(updatedAchievement);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }


}
