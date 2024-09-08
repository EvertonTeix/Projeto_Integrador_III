using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fast_route_backend.Migrations
{
    /// <inheritdoc />
    public partial class adicionandoEnderecoDoPonto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "PontosEntrega",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "PontosEntrega");
        }
    }
}
