using fast_route_backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace fast_route_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VeiculosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VeiculosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarVeiculo([FromBody] Veiculo veiculo)
        {
            if (veiculo == null)
            {
                return BadRequest("Dados inválidos.");
            }

            try
            {
                _context.Veiculos.Add(veiculo);
                await _context.SaveChangesAsync();
                return Ok("Veículo adicionado com sucesso!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        // Outros métodos como Get, Update e Delete podem ser adicionados aqui
    }
}
