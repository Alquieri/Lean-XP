using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Model;

public class Achievemets
{

    public int Id { get; set; }

    public string Titulo { get; set; }

    public string Descricao { get; set; }

    public string cssName { get; set; }
    public string Icone { get; set; } // URL ou nome do ícone

    enum achye
    {
        ok = 0,
        nok = 1,
    }
}

