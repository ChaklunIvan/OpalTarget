using OpalTarget.Models.Requests;
using OpalTarget.Services.Interfaces;

namespace OpalTarget.Services
{
    public class NotificationBotService : INotificationBotService
    {
        public Task<bool> NotifyBotAsync(AuditFormRequest audit)
        {
            throw new NotImplementedException();
        }
    }
}
