using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeanXP.Server.Model
{
    public class Quiz
    {
        public int Id { get; set; }
        public int ModuloId { get; set; }
        public string Pergunta { get; set; }
        public List<string> Opcoes { get; set; } // Pode mapear como JSON
        public string RespostaCorreta { get; set; }
    }
}