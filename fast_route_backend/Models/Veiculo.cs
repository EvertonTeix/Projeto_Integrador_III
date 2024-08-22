using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fast_route_backend.Models;


[Table("veiculo")]
public class Veiculo
{
    [Key]
    [Column("veiculo_id")]
    public int VeiculoId { get; set; }

    [Required]
    [Column("placa")]
    [MaxLength(100)]
    public string Placa { get; set; }

    [Required]
    [Column("num_Veiculo")]
    [MaxLength(200)]
    public string NumVeiculo { get; set; }

    [Required]
    [Column("cidade_campus")]
    [MaxLength(255)]
    public string CidadeCampus { get; set; }

    [Column("usuario_id")]
    public int? UsuarioId { get; set; }
}


