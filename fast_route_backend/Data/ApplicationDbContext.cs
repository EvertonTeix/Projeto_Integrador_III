using fast_route_backend.Controllers;
using fast_route_backend.Models;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }

    public DbSet<Veiculo> Veiculos { get; set; }

    public DbSet<PontoEntrega> PontosEntrega { get; set; }
}
