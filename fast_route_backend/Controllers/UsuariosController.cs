using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using fast_route_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace fast_route_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuariosController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public UsuariosController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("cadastro")]
    public async Task<IActionResult> Cadastro(Usuario usuario)
    {
        if (ModelState.IsValid)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();
            return Ok(usuario);
        }
        return BadRequest(ModelState);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel loginRequest)
    {
        if (ModelState.IsValid)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == loginRequest.Email && u.Senha == loginRequest.Senha);

            if (usuario != null)
            {
                // Sucesso: Retorna as informações do usuário ou um token de autenticação
                return Ok(new
                {
                    usuario.UsuarioId,
                    usuario.NomeUsuario,
                    usuario.Email,
                    usuario.Permissao
                });
            }
            else
            {
                // Erro: Email ou senha incorretos
                return Unauthorized(new { message = "Email ou senha incorretos" });
            }
        }
        return BadRequest(ModelState);
    }

}
