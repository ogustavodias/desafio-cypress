/// <reference types="cypress" />

import DeleteAccount from "../support/pages/DeleteAccount";
import Global from "../support/pages/Global";
import Login from "../support/pages/Login";
import Payment from "../support/pages/Payment";
import Products from "../support/pages/Products";
import SignUp from "../support/pages/SignUp";
import SignUpSuccess from "../support/pages/SignUpSuccess";

describe("Automation exercise.", () => {
   beforeEach(() => {
      cy.visit("/");
   });

   it("Cadastro com sucesso.", () => {
      cy.getFakerUser().then((user) => {
         Global.goToLoginPage();
         Login.checkIfIsCurrentPage();
         Login.fillBasicSignup(user);
         SignUp.checkIfIsCurrentPage();
         SignUp.fillSignupForm(user);
         SignUpSuccess.checkSuccess();
         Global.continue();
         Global.checkIfUserLoggedIn(user);
         DeleteAccount.delete();
         Global.continue();
      });
   });

   it("Cadastro com falha, usuário já cadastrado.", () => {
      cy.getFakerUser().then((user) => {
         Global.goToLoginPage();
         Login.checkIfIsCurrentPage();
         Login.fillBasicSignup(user);
         SignUp.checkIfIsCurrentPage();
         SignUp.fillSignupForm(user);
         SignUpSuccess.checkSuccess();
         Global.continue();
         Global.logout();
         Global.checkIfNotUserLoggedIn();
         Login.fillBasicSignup(user);
         Login.checkIfErrorInLoginOrSignup();
      });
   });

   it("Login com sucesso.", () => {
      cy.getFakerUser().then((user) => {
         Global.goToLoginPage();
         Login.checkIfIsCurrentPage();
         Login.fillBasicSignup(user);
         SignUp.checkIfIsCurrentPage();
         SignUp.fillSignupForm(user);
         SignUpSuccess.checkSuccess();
         Global.continue();
         Global.logout();
         Global.checkIfNotUserLoggedIn();
         Login.fillBasicLogin(user);
         Global.checkIfUserLoggedIn(user);
      });
   });

   it("Login com error, senha incorreta.", () => {
      cy.getFakerUser().then((user) => {
         Global.goToLoginPage();
         Login.checkIfIsCurrentPage();
         Login.fillBasicSignup(user);
         SignUp.checkIfIsCurrentPage();
         SignUp.fillSignupForm(user);
         SignUpSuccess.checkSuccess();
         Global.continue();
         Global.logout();
         Global.checkIfNotUserLoggedIn();

         user.password = "senhaalterada";
         Login.fillBasicLogin(user);
         Login.checkIfErrorInLoginOrSignup();
      });
   });

   it("Fluxo completo de compra com sucesso.", () => {
      cy.getFakerUser().then((user) => {
         Global.goToLoginPage();
         Login.checkIfIsCurrentPage();
         Login.fillBasicSignup(user);
         SignUp.checkIfIsCurrentPage();
         SignUp.fillSignupForm(user);
         SignUpSuccess.checkSuccess();
         Global.continue();
         Global.goToProductsPage();
         Products.checkIfIsCurrentPage();
         Products.filterWomenDress();
         Products.goToFirstProduct();
         Products.addProductToCart();
         Global.goToPaymentPage();
         Payment.checkIfIsCurrentPage();
         Payment.fillAndConfirmOrder(user);
         Payment.checkIfSuccess();
         Global.continue();
      });
   });
});
