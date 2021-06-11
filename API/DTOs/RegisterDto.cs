using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Email {get; set;}
        public string Telephone {get;set;}
        [Required]
        public string Password{get;set;}
    }
}