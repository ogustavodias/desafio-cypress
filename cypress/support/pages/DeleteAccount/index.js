/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class DeleteAccount {
   delete() {
      cy.get(ELEMENTS.deleteAccountButton).click();
      cy.get(ELEMENTS.successMessage).should("exist");
   }
}

export default new DeleteAccount();
