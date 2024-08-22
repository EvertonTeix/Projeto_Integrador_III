using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Usuario")]
public class Usuario
{
    [Key]
    [Column("usuario_id")]
    public int UsuarioId { get; set; }

    [Required]
    [MaxLength(100)]
    [Column("nome_usuario")]
    public required string NomeUsuario { get; set; }

    [Required]
    [MaxLength(255)]
    [Column("email")]
    public required string Email { get; set; }

    [Required]
    [MaxLength(255)]
    [Column("senha")]
    public required string Senha { get; set; }

    [Column("foto")]
    public string? Foto { get; set; }

    [Required]
    [Column("permissao")]
    public bool Permissao { get; set; }
}
