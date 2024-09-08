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
        private readonly ApplicationDbContext _context;

        public MapController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("locations")]
        public IActionResult GetLocations()
        {
            var locations = _context.PontosEntrega.ToList();
            return Ok(locations);
        }

        [HttpGet("route")]
        public IActionResult GetRoute(double startLat, double startLon, double endLat, double endLon)
        {
            var route = new Route
            {
                Start = new Location { Latitude = startLat, Longitude = startLon },
                End = new Location { Latitude = endLat, Longitude = endLon },
                Distance = 10.0 // Distância fictícia; substitua pela lógica real
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

    public class PontoEntrega
    {
        public int Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Address { get; set; } // Novo campo para armazenar o endereço
    }
}