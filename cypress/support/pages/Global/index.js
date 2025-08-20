/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class Global {
   goToLoginPage() {
      cy.get(ELEMENTS.loginLink).click();
   }

   goToProductsPage() {
      cy.get(ELEMENTS.productsLink).click();
   }

   goToPaymentPage() {
      cy.visit("/payment");
   }

   continue() {
      cy.get(ELEMENTS.continueButton).click();
   }

   logout() {
      cy.get(ELEMENTS.logoutLink).click();
   }

   checkIfUserLoggedIn(user) {
      cy.get(ELEMENTS.currentUsername).should("have.text", user.username);
   }

   checkIfNotUserLoggedIn() {
      cy.get(ELEMENTS.currentUsername).should("not.exist");
   }
}

export default new Global();
