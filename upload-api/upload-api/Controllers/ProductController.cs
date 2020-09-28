using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using upload_core.Entities;
using upload_core.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace upload_api.Controllers
{
    [Route("products")]
    public class ProductController : Controller
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var products = _productService.GetAllAsync();

                return Ok(await products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
            
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var product = _productService.GetAsync(id);

                if (product == null) return NotFound();

                return Ok(await product);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var file = Request.Form.Files[0];                

                if (file.Length > 0)
                {
                    #region Reading File
                    string fileContent = null;

                    using (var reader = new StreamReader(file.OpenReadStream()))
                    {
                        fileContent = reader.ReadToEnd();
                    }
                    #endregion

                    #region Deserialization
                    var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(fileContent);
                    #endregion

                    await _productService.AddRangeAsync(products);

                    return Ok(products);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Product product)
        {
            try
            {
                #region Validations
                if (id != product.Id) return BadRequest();
                #endregion

                var productUpdated = await _productService.UpdateAsync(product);

                if (productUpdated is null) return NotFound();

                return Ok(productUpdated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Product>> DeleteProduct([FromRoute] int id)
        {
            var product = _productService.GetAsync(id);

            if (product == null) return NotFound();

            try 
            {
                await _productService.RemoveAsync(await product);

                return await product;
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }

        }
    }
}
