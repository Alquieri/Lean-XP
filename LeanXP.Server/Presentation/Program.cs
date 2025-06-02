using LeanXP.Server.ApplicationServices.Services;
using LeanXP.Server.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

var databaseName = new MySqlConnectionStringBuilder(connectionString).Database;

var masterConnetionString = new MySqlConnectionStringBuilder(connectionString)
{
    Database = ""
}.ConnectionString;

using (var connection = new MySqlConnection(masterConnetionString))
{
    connection.Open();
    using var cmd = connection.CreateCommand();
    cmd.CommandText = $"CREATE DATABASE IF NOT EXISTS `{databaseName}`";
    cmd.ExecuteNonQuery();
}

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySQL(connectionString);
});


// Add cors to receive frontEnd requests

builder.Services.AddCors(option =>
{
    option.AddPolicy("FrontendPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();

    });

});

builder.Services.AddEndpointsApiExplorer();

//Auto mapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddControllers();

builder.Services.AddSwaggerGen(c =>
{
    var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
});

//Add Services
builder.Services.AddScoped<AchievementService>();
builder.Services.AddScoped<UserService>();





var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors("FrontendPolicy");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
