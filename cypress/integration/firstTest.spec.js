/// <reference types="cypress"/>

describe("This is my first test suite", () => {
  beforeEach("Navigate to forms ", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
  });
  it("Second-describe", () => {
    cy.get("input");
    cy.get(".input-full-width");
    cy.contains('[status="warning"]', "Sign in");
    cy.get("#inputEmail3").parents("form").find("button").click();
  });

  it("Testing with Then and wrap", () => {
    cy.contains("nb-card", "Basic form").then((secondParam) => {
      const emailLableFirst = secondParam
        .find('[for="exampleInputPassword1"]')
        .text()
        .console.log(emailLableFirst);
    });
  });

  it.only("Invoke command", () => {
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    cy.get('[for="exampleInputEmail1"]').then((param) => {
      expect(param.text()).to.equal("Email address");
    });

    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Email address");
      });
  });

  it.only("Using Webtables", () => {});
});
