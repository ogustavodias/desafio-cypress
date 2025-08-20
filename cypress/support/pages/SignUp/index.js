/// <reference types="cypress" />

import { ELEMENTS } from "./elements";

class SignUp {
   fillSignupForm(user) {
      cy.get(ELEMENTS.maleGenderRadio).click();
      cy.get(ELEMENTS.passwordInput).type(user.password);
      cy.get(ELEMENTS.birthDaySelect).select(String(user.birthdate.getDate()))
      cy.get(ELEMENTS.birthMonthSelect).select(String(user.birthdate.getMonth() + 1))
      cy.get(ELEMENTS.birthYearSelect).select(String(user.birthdate.getFullYear()))
      cy.get(ELEMENTS.newsletterCheckbox).check();
      cy.get(ELEMENTS.offersCheckbox).check();
      cy.get(ELEMENTS.firstNameInput).type(user.firstname);      
      cy.get(ELEMENTS.lastNameInput).type(user.lastname);
      cy.get(ELEMENTS.companyInput).type(user.company);
      cy.get(ELEMENTS.addressInput).type(user.address);
      cy.get(ELEMENTS.secondAddressInput).type(user.second_address)
      cy.get(ELEMENTS.countrySelect).select("India");
      cy.get(ELEMENTS.stateInput).type(user.state);
      cy.get(ELEMENTS.cityInput).type(user.city);
      cy.get(ELEMENTS.zipCodeInput).type(user.zipcode);
      cy.get(ELEMENTS.mobileNumberInput).type(user.mobile_number)
      cy.get(ELEMENTS.createAccountButton).click();
   }

   checkIfIsCurrentPage() {
      cy.get(ELEMENTS.pageElementIdentifier)
         .should("exist")
         .and("have.text", "Enter Account Information");
   }
}

export default new SignUp();
