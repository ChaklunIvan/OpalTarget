using OpalTarget.Models.Settings;

namespace OpalTarget.Extensions
{
    public static class HttpClientExtensions
    {
        public static IServiceCollection AddHttpTelegramBotClient(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<TelegramBotSettings>(configuration.GetSection())

            return services;
        }
    }
}
