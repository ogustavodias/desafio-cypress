/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class Login {
   fillBasicLogin(user) {
      cy.get(ELEMENTS.loginEmailInput).type(user.email);
      cy.get(ELEMENTS.loginPasswordInput).type(user.password);
      cy.get(ELEMENTS.loginButton).click();
   }

   fillBasicSignup(user) {
      cy.get(ELEMENTS.signupUsernameInput).type(user.username);
      cy.get(ELEMENTS.signupEmailInput).type(user.email);
      cy.get(ELEMENTS.signupButton).click();
   }

   checkIfErrorInLoginOrSignup() {
      cy.get(ELEMENTS.loginOrSignupError).should("exist");
   }

   checkIfIsCurrentPage() {
      cy.get(ELEMENTS.pageElementIdentifier)
         .should("exist")
         .and("have.text", "New User Signup!");
   }
}

export default new Login();
