using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Domain.Model;

public class User
{

    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public int Percentual { get; set; } // 0 a 100
    public ICollection<Achievement> Achievements { get; set; }

    public int ModuleNumber { get; set; }


}