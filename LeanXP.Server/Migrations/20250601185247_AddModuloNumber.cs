using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LeanXP.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddModuloNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ModuleNumber",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ModuleNumber",
                table: "Users");
        }
    }
}
