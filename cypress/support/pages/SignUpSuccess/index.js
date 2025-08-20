/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class SignUpSuccess {
   checkSuccess() {
      cy.get(ELEMENTS.successMessage).should("exist");
   }
}

export default new SignUpSuccess();
