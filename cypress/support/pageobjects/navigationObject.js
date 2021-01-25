export class NavigationObject {
  formTablenData() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
  }
}

export const navigateTo = new NavigationObject();
