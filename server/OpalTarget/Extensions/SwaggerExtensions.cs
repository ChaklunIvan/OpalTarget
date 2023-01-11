using Microsoft.OpenApi.Models;

namespace OpalTarget.Extensions
{
    public static class SwaggerExtensions
    {
        public static IServiceCollection AddSwaggerGenerator(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "OpalTarget API", Version = "v1" });
            });
            return services;
        }
    }
}
