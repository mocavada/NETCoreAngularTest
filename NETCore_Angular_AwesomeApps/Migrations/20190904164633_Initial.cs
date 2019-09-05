using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NETCore_Angular_AwesomeApps.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Applicant_Educations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Applicant = table.Column<Guid>(nullable: false),
                    Major = table.Column<string>(nullable: true),
                    Certificate_Diploma = table.Column<string>(nullable: true),
                    Start_Date = table.Column<DateTime>(nullable: true),
                    Completion_Date = table.Column<DateTime>(nullable: true),
                    Completion_Percent = table.Column<byte>(nullable: true),
                    Time_Stamp = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicant_Educations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Applicant_Profiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Login = table.Column<Guid>(nullable: false),
                    Current_Salary = table.Column<decimal>(nullable: true),
                    Current_Rate = table.Column<decimal>(nullable: true),
                    Currency = table.Column<string>(nullable: true),
                    Country_Code = table.Column<string>(nullable: true),
                    State_Province_Code = table.Column<string>(nullable: true),
                    Street_Address = table.Column<string>(nullable: true),
                    City_Town = table.Column<string>(nullable: true),
                    Zip_Postal_Code = table.Column<string>(nullable: true),
                    Time_Stamp = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicant_Profiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Movie",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(nullable: true),
                    ReleaseDate = table.Column<DateTime>(nullable: false),
                    Genre = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movie", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applicant_Educations");

            migrationBuilder.DropTable(
                name: "Applicant_Profiles");

            migrationBuilder.DropTable(
                name: "Movie");
        }
    }
}
