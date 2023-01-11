using OpalTarget.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services
       .AddControllers()
       .Services
       .AddSwaggerGenerator();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.MapControllers();
app.Run();