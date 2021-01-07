using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class UserDetail
    {
        [Key]
        [Required]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string Email { get; set; }

        [Column(TypeName = "integer")]
        [Required]
        public int Phone { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string UserName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string ConfirmPassword { get; set; }
    }
}
