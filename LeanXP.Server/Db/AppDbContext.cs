using Microsoft.EntityFrameworkCore;

using LeanXP.Server.Model;

namespace LeanXP.Server.Db;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    public DbSet<User> Users { get; set; }

    public DbSet<Achievement> Achievements { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {


        modelBuilder.Entity<User>()
            .ToTable("Users")
            .HasKey(User => User.Id);

        modelBuilder.Entity<User>()
            .Property(u => u.Id)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<User>()
            .Property(u => u.Name)
            .IsRequired()
            .HasMaxLength(255);

        modelBuilder.Entity<User>()
            .Property(u => u.Email)
            .IsRequired();

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .Property(u => u.Password)
            .IsRequired();

        modelBuilder.Entity<User>()
            .Property(u => u.Percentual)
            .HasConversion<int>()
            .IsRequired();

        modelBuilder.Entity<User>()
            .Property(u => u.ModuleNumber)
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .ToTable("Achievement")
            .HasKey(a => a.Id);

        modelBuilder.Entity<Achievement>()
            .Property(a => a.Id)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.Title)
            .HasMaxLength(100)
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.Description)
            .HasMaxLength(700)
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.achievementStatus)
            .HasConversion<string>()
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.CssName)
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.AchievementNumber)
            .IsRequired();

        modelBuilder.Entity<Achievement>()
            .Property(a => a.Image)
            .IsRequired();

        
        
        modelBuilder.Entity<Achievement>()
            .HasOne(a => a.User)
            .WithMany(u => u.Achievements)
            .HasForeignKey(a => a.UserId)
            .OnDelete(DeleteBehavior.Cascade);

    }
}
