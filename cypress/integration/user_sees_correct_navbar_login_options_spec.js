describe("Home Page", () => {
  it("has a title", () => {
    cy.visit("/");
    cy.get(".title").should("contain", "Acebook");
  });

  it ("it has a login button that can be clicked", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.url().should("include", "/sessions/new");
  });

  it ("it has a home button that can be clicked", () => {
    cy.visit("/sessions/new");
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });


  it ("it shows logout button on home page when user is logged in", () => {
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/posts");
    cy.visit("/")
    cy.contains("Log out")
  });

  it ("it shows logout button on login page when user is logged in", () => {
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/posts");
    cy.visit("/")
    cy.visit("/sessions/new")
    cy.contains("Log out")
  });

  it ("it shows logout button on sign up page when user is logged in", () => {
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/posts");
    cy.visit("/")
    cy.visit("/users/new")
    cy.contains("Log out")
  });
});