using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Model
{
public class UserProgress
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int ModuloId { get; set; }
    public int Percentual { get; set; } // 0 a 100
}

}