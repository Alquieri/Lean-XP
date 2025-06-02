using LeanXP.Server.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Domain.Model;

public class Achievement
{

    public int Id { get; set; }

    public string Title { get; set; }

    public int AchievementNumber { get; set; }
    public string Description { get; set; }

    public string CssName { get; set; }

    public string Image { get; set; }

    public AchievementStatus achievementStatus { get; set; }

    public User User { get; set; }

    public int UserId { get; set; }
    public DateTime? ConquerDate { get; set; }
}

