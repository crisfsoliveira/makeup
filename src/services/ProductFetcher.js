class ProductFetcher {
  constructor() {
    //Being that the Api is slow, only fetch one brand
    this.defaultBrand = "physicians formula";
  }

  async fetch(tag) {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${
        this.defaultBrand
      }&product_tags=${tag}`
    );

    const products = await response.json(),
      sortedProducts = this.sortData("rating", products),
      formattedProducts = this.convertRating(sortedProducts);

    return new Products(formattedProducts);
  }

  async fetchById(id) {
    const products = await this.fetch("");
    return products.getById(id);
  }

  sortData(sortKey, data) {
    return data.sort((a, b) => {
      const keyA = a[sortKey],
        keyB = b[sortKey];

      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }

  convertRating(products) {
    return products.map(product => {
      product.rating = product.rating
        ? Math.round((product.rating * 100) / 5)
        : 0;
      return product;
    });
  }
}

class Products {
  constructor(products) {
    this.products = products;
  }

  getById(id) {
    for (let idx in this.products) {
      const item = this.products[idx];

      if (item.id === id) {
        return item;
      }
    }
    throw new Error("product data not found");
  }

  paginate(pageSize, pageNumber) {
    pageNumber -= 1;
    const pagedProducts = this.products.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      ),
      pages = Math.ceil(this.products.length / pageSize);

    return {
      pagedProducts,
      pages
    };
  }
}

export default ProductFetcher;
