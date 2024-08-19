using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Usuario")]
public class Usuario
{
    [Key]
    public int UsuarioId { get; set; }

    [Required]
    [MaxLength(100)]
    public required string NomeUsuario { get; set; }

    [Required]
    [MaxLength(255)]
    public required string Email { get; set; }

    [Required]
    [MaxLength(255)]
    public required string Senha { get; set; }

    public string? Foto { get; set; }

    [Required]
    public bool Permissao { get; set; }
}
