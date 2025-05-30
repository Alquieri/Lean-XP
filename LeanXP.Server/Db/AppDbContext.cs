using Microsoft.EntityFrameworkCore;

using LeanXP.Server.Model;

namespace LeanXP.Server.Db;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    public DbSet<User> Users { get; set; }
    public DbSet<UserProgress> UserProgresses { get; set; }
    public DbSet<Modulo> Modulos { get; set; }
    public DbSet<Quiz> Quizzes { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {


        modelBuilder.Entity<User>()
            .ToTable("Users");


        modelBuilder.Entity<UserProgress>()
            .ToTable("UserProgresses");


        modelBuilder.Entity<Modulo>()
            .ToTable("Modulos");


        modelBuilder.Entity<Quiz>()
            .ToTable("Quizzes");
    }
}
