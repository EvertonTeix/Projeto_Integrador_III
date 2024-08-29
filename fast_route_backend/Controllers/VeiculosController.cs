using fast_route_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("campus/{cidadeCampus}")]
        public async Task<IActionResult> ObterVeiculosPorCampus(string cidadeCampus)
        {
            try
            {
                var veiculos = await _context.Veiculos
                    .Where(v => v.CidadeCampus == cidadeCampus)
                    .ToListAsync();

                if (veiculos == null || veiculos.Count == 0)
                {
                    return NotFound("Nenhum veículo encontrado para o campus especificado.");
                }

                var resultado = new 
                {
                    QuantidadeTotal = veiculos.Count,
                    Veiculos = veiculos
                };

                return Ok(resultado);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }


        [HttpGet("campi")]
public async Task<IActionResult> ObterCampi()
{
    try
    {
        var campi = await _context.Veiculos
            .Select(v => v.CidadeCampus)
            .Distinct()
            .ToListAsync();

        if (campi == null || campi.Count == 0)
        {
            return NotFound("Nenhum campus encontrado.");
        }

        return Ok(campi);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Erro interno: {ex.Message}");
    }
}


    }
}
