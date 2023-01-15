using System.Text.Json.Serialization;

namespace OpalTarget.Extensions
{
    public static class JsonExtensions
    {
        public static IMvcBuilder ConfigureJsonOptions(this IMvcBuilder builder)
        {
            builder.AddJsonOptions(opt => 
            {
                opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });

            return builder;
        }
    }
}
