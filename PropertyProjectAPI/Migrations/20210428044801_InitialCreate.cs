using Microsoft.EntityFrameworkCore.Migrations;

namespace PropertyProjectAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    Address1 = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    Address2 = table.Column<string>(type: "nvarchar(255)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    County = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    District = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Zip = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    ZipPlus4 = table.Column<string>(type: "nvarchar(4)", nullable: true),
                    YearBuilt = table.Column<int>(type: "int", nullable: false),
                    ListPrice = table.Column<decimal>(type: "DECIMAL(19,4)", nullable: false),
                    MonthlyRent = table.Column<decimal>(type: "DECIMAL(19,4)", nullable: false),
                    GrossYield = table.Column<decimal>(type: "DECIMAL(5,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
