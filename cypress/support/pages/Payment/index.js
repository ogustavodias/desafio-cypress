/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class Payment {
   checkIfIsCurrentPage() {
      cy.get(ELEMENTS.pageElementIdentifier)
         .should("exist")
         .and("have.text", "Payment");
   }

   fillAndConfirmOrder(user) {
      cy.get(ELEMENTS.cardNameInput).type(`${user.firstname} ${user.lastname}`);
      cy.get(ELEMENTS.cardNumberInput).type(user.card_number);
      cy.get(ELEMENTS.cvcInput).type(user.cvc);
      cy.get(ELEMENTS.expMonthInput).type(user.exp_date.getMonth() + 1);
      cy.get(ELEMENTS.expYearInput).type(user.exp_date.getFullYear());
      cy.get(ELEMENTS.confirmButton).click();
   }

   checkIfSuccess() {
      cy.get(ELEMENTS.successMessage).should("exist");
   }
}

export default new Payment();
