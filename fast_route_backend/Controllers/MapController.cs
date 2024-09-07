using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
//using fast_route_backend.Data; // Adapte ao seu namespace para o DbContext
using fast_route_backend.Models; // Adapte ao seu namespace para os modelos

namespace fast_route_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MapController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Contexto do banco de dados

        public MapController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/map/locations
        [HttpGet("locations")]
        public IActionResult GetLocations()
        {
            // Aqui você pode obter dados reais do banco de dados, por exemplo:
            var locations = _context.PontosEntrega.ToList(); // Obter todos os pontos de entrega

            return Ok(locations);
        }

        // GET: api/map/route?startLat=40.7128&startLon=-74.0060&endLat=34.0522&endLon=-118.2437
        [HttpGet("route")]
        public IActionResult GetRoute(double startLat, double startLon, double endLat, double endLon)
        {
            // Aqui você deve implementar a lógica para calcular a rota
            var route = new Route
            {
                Start = new Location { Latitude = startLat, Longitude = startLon },
                End = new Location { Latitude = endLat, Longitude = endLon },
                Distance = 10.0 // Esta é uma distância fictícia, ajuste para valores reais
            };

            return Ok(route);
        }

    [HttpPost]
[Route("AdicionarPonto")]
public async Task<IActionResult> AdicionarPonto([FromBody] PontoEntrega pontoEntrega)
{
    if (ModelState.IsValid)
    {
        _context.PontosEntrega.Add(pontoEntrega);
        await _context.SaveChangesAsync();
        return Ok();
    }
    return BadRequest();
}


    }

    // Modelos
    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class Route
    {
        public Location Start { get; set; }
        public Location End { get; set; }
        public double Distance { get; set; } // Distância em quilômetros ou milhas
    }

    public class PontoEntrega // Model do banco de dados
    {
        public int Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
