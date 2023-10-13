/// <reference types="Cypress" />

import HomePage from "./HomePage";

class ProductsPage {
  private elements = {
    openProductBtn: (number) => cy.get(`#showProductId${number}`),

    productCartBtn: (number) => cy.get(`#cartFillId${number}`),

    wishBtn: (number) => cy.get(`#wishListId${number}`),
  };

  addProductsCart(numberProducts: number): HomePage {
    const amountProducts = Math.floor(Math.random() * numberProducts + 1);
    for (let i = 0; i < amountProducts; i++) {
      const number = Math.floor(Math.random() * 11);
      this.elements.productCartBtn(number).click({ force: true });
    }

    return new HomePage();
  }
}

export default ProductsPage;
