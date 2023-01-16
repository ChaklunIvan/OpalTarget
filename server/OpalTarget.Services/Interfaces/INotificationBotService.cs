
using OpalTarget.Models.Requests;

namespace OpalTarget.Services.Interfaces
{
    public interface INotificationBotService
    {
        Task<bool> NotifyBotAsync(AuditFormRequest audit);
    }
}
