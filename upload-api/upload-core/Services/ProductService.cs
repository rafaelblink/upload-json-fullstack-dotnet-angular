using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using upload_core.Entities;
using upload_core.Repository;

namespace upload_core.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Product> GetAsync(int id)
        {
            return await _productRepository.GetAsync(id);
        }

        public Task<Product[]> GetAllAsync()
        {
            return _productRepository.GetAllAsync();
        }

        public async Task<IEnumerable<Product>> AddRangeAsync(
            IEnumerable<Product> products
        )
        {
            foreach (var product in products) {
                product.CreatedAt = DateTime.Now;
            };
            return await _productRepository.AddRangeAsync(products);
        }

        public async Task<Product> UpdateAsync(Product product)
        {
            await _productRepository.UpdateAsync(product);

            return product;
        }

        public async Task<Product> RemoveAsync(Product product)
        {
            await _productRepository.RemoveAsync(product);

            return product;
        }
    }
}
