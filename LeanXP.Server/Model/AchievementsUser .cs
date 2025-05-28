using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Model
{
    public class AchievementsUser 
    {
        public int AchievementId { get; set; }
        public int UserId { get; set; }
        public int Achievements { get; set; }
        public DateTime Data { get; set; } 
    }
}