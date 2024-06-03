using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDBContext _fullStackDBContext;
        public EmployeesController(FullStackDBContext fullStackDBContext)
        {
            _fullStackDBContext = fullStackDBContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employess = await _fullStackDBContext.Employess.ToListAsync();
            return Ok(employess);

        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDBContext.Employess.AddAsync(employeeRequest);
            await _fullStackDBContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDBContext.Employess.FirstOrDefaultAsync(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee UpdateEmployeeRequest)
        {
            var employee = await _fullStackDBContext.Employess.FirstOrDefaultAsync(x => x.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            employee.Name = UpdateEmployeeRequest.Name;
            employee.Email = UpdateEmployeeRequest.Email;
            employee.Phone = UpdateEmployeeRequest.Phone;
            employee.Salary = UpdateEmployeeRequest.Salary;
            employee.Department = UpdateEmployeeRequest.Department;
            await _fullStackDBContext.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDBContext.Employess.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _fullStackDBContext.Employess.Remove(employee);
            await _fullStackDBContext.SaveChangesAsync();
            return Ok(employee);
        }

    }
}
