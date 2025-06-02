using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LeanXP.Server.Migrations
{
    /// <inheritdoc />
    public partial class AchievementNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AchievementNumber",
                table: "Achievement",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AchievementNumber",
                table: "Achievement");
        }
    }
}
