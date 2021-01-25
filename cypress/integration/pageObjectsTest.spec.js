import { navigateTo } from "../support/pageobjects/navigationObject";

describe("This is my first page object", () => {
  beforeEach("Open site ", () => {
    cy.openHomePage();
  });
  it.only("first object", () => {
    navigateTo.formTablenData();
  });
});
