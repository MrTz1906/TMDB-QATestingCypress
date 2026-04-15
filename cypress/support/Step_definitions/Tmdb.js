import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the movie page and is not logged in", () => {
  cy.visit("https://www.themoviedb.org/");
});

When("the user clicks the options button on a movie", () => {
  cy.get('[data-id="76479"]').first().click();
});

Then("a notification should appear indicating login is required", () => {
  cy.get('[data-role="popup"] a[href="/login"]')
    .should("be.visible");
});


Given("In Home Page Default Langguage Indonesia Already Login", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/");
});

When("Click Langguage Button", () => {
  cy.get("li[class='translate'] div").click();
});

Then("Click Default Langguage Dropdown", () => {
  cy.get('#default_language_popup_label span.k-picker').click();

cy.get('input.k-input-inner[placeholder="Filter"]')
  .should("be.visible")
  .type("Indonesian");

cy.contains("li", "Indonesian")
  .should("be.visible")
  .click();
});

Then("Filter English", () => {
  cy.get('input.k-input-inner[placeholder="Filter"]').type("Indonesian{enter}");
});

Then("Click Reload Page Button", () => {
  cy.contains("Reload Page").click();
});

Then("Default Langguage Should Change to Indonesia", () => {
  cy.get('[data-role="popup"] a[href="/login"]')
    .should("be.visible");
});

Given("In Movie Listing Page", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/movie");
});

When("Click Favorite Button From Movie Listing", () => {
cy.get('[data-id="1290821"]').first().click();
cy.get('.k-animation-container-shown a[data-list-type="favourite"]').should('be.visible').wait(500).click();
});

Then("Movie Should be Added to Favorite", () => {
  cy.get('.notification.success').should('be.visible');
});


Given("In Movie Detail Page", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/movie/1327819-hoppers");
});

When("Click Favorite Button on Movie Detail Page", () => {
  cy.get('#favourite').should('be.visible').wait(500).click();
});

Then("Movie Should be Added to Favorite List", () => {
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites");
  cy.contains('Hoppers').should('be.visible');
});


Given("In Profile Page", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/u/MrTz1906");
});

When("Navigate to Favorite List", () => {
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites");
});

Then("Favorite Movies Should be Displayed", () => {
  cy.contains('Hoppers').should('be.visible');
});


Given("In Favorite Movie List", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites");
});

When("Select Sort by Popularity", () => {
  /* cy.get('#filter_by_popularity a').find('a').click({force: true}); */
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites/movie?sort_by=popularity&sort_order=desc");
});

Then("List Should be Sorted by Popularity", () => {
  cy.url().should('include', 'sort_by=popularity')
});


When("Select Sort by Release Date", () => {
  /* cy.get('#filter_by_Release_Date a').find('a').click({force: true}); */
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites/movie?sort_by=release_date&sort_order=desc");
});

Then("List Should be Sorted by Release Date", () => {
  cy.url().should('include', 'sort_by=release_date')
});


When("Click Remove Favorite Button", () => {
  cy.get('[id="favourite_66b6d7476c58a2eb5ca77df6"]').should('be.visible').first().click();
});

Then("Movie Should be Removed from Favorite", () => {
  cy.get('div.notification.success').should('be.visible');
});


When("Click Remove Favorite Button From Movie List Page", () => {
  cy.get('[data-id="1290821"]').first().click();
  cy.get('.k-animation-container-shown a[data-list-type="favourite"]').should('be.visible').click();
});


Given("In Movie Detail Page Mario", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/movie/1226863-the-super-mario-galaxy-movie");
});

When("Click Remove Favorite Button From Movie Detail Page", () => {
  cy.get('#favourite').should('be.visible').click();
});

Then("Movie Should be Removed from Favorite List", () => {
  cy.visit("https://www.themoviedb.org/u/MrTz1906/favorites");
  cy.contains('Mario Galaxy').should('not.exist');
});

Given("ignore for test 1", () => {
  cy.loginTMDB();
  cy.visit("https://www.themoviedb.org/movie/1226863-the-super-mario-galaxy-movie");
});

When("ignore for test 2", () => {
  cy.get('#favourite').should('be.visible').click();
});