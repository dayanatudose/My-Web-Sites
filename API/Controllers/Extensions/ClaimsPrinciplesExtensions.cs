using System.Security.Claims;

namespace API.Controllers.Extensions 
{
    public static class ClaimsPrinciplesExtensions
    {
        public static string GetEmail(this ClaimsPrincipal user) {
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}