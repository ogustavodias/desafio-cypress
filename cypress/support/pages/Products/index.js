/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class Products {
   filterWomenDress() {
      cy.visit("/category_products/1");
      cy.get(ELEMENTS.pageElementIdentifier)
         .should("exist")
         .and("have.text", "Women - Dress Products");
   }

   goToFirstProduct() {
      cy.get(ELEMENTS.productsDetailsButton).first().click();
   }

   addProductToCart() {
      cy.get(ELEMENTS.addToCartButton).click();
      cy.get(ELEMENTS.modalCartMessage)
         .should("exist")
         .should("have.text", "Added!");
   }

   checkIfIsCurrentPage() {
      cy.get(ELEMENTS.pageElementIdentifier)
         .should("exist")
         .and("have.text", "All Products");
   }
}

export default new Products();
