using FullStack.API.Auth;
using FullStack.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.API.Controllers
{
    //Ref : www.c-sharpcorner.com/article/asp-net-core-web-api-5-0-authentication-using-jwtjson-base-token 
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly IJwtAuth jwtAuth;

        private readonly List<Members> lstMember = new List<Members>()        {
            new Members{Id=1, Name="root",Password="root" }            
        };
        public LoginController(IJwtAuth jwtAuth)
        {
            this.jwtAuth = jwtAuth;
        }
      
        [HttpGet]
        public IEnumerable<Members> AllMembers()
        {
            return lstMember;
        }            


        //Login Auth call
        [HttpPost]
        [AllowAnonymous]
        [Route("Auth")]
        public IActionResult LoginAuthentication([FromBody] UserCredential userCredential)
        {
            var member = lstMember.Find(x=> x.Name == userCredential.UserName && x.Password == userCredential.Password);
            if (member == null) {
                return Unauthorized();
            }
            var token = jwtAuth.Authentication(userCredential.UserName, userCredential.Password);
            if (token == null)
                return Unauthorized();
            return Ok(token);

        }

    }

}
