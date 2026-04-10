Cypress.Commands.add("loginTMDB", () => {
  cy.visit("https://www.themoviedb.org/login");

  cy.get('#username').type("MrTz1906");
  cy.get('#password').type("123123123");
  cy.get('#login_button').click();

  cy.url().should("not.include", "/login");
});