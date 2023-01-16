using Microsoft.Extensions.Options;
using OpalTarget.Models.Constans;
using OpalTarget.Models.Settings;

namespace OpalTarget.Extensions
{
    public static class HttpClientExtensions
    {
        public static IServiceCollection AddHttpTelegramBotClient(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<TelegramBotSettings>(configuration.GetSection(TelegramBotConstans.Section));

            services.AddHttpClient(TelegramBotConstans.Client, httpClient =>
            {
                var settings = services.BuildServiceProvider().GetRequiredService<IOptions<TelegramBotSettings>>();

                httpClient.BaseAddress = new Uri(settings.Value.BaseUrl);
            });

            return services;
        }
    }
}
