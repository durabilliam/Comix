describe("Navigation", () => {

  let LOCAL_STORAGE_MEMORY = {};

  Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
  });

  Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  });



  it("should visit Register Page", () => {
    cy.visit("/register");
  });

  it("should register a user", () => {
    cy.visit("/register")
    cy.get("[name=first_name]")
      .type("Kent C")
    cy.get("[name=last_name]")
      .type("Straight")
    cy.get("[name=email]")
      .type("123@123.com")
    cy.get("[name=password]")
      .type("1")
    cy.get("[name=password_confirmation]")
      .type("1")
    cy.get("[placeholder='submit']")
      .click()
    cy.contains(".comixs-title", "Comic Book List");
    cy.saveLocalStorage();
  });

  it("should logout a user", () => {
    cy.restoreLocalStorage()
    cy.visit("/comixs")
    cy.get(".logout-button").click()
    cy.contains(".redirect-register", "Register");
  });

  it("should login a user", () => {
    cy.visit("/login")
    cy.get("[placeholder=email]")
      .type("123@123.com")
    cy.get("[placeholder=password]")
      .type("1")
    cy.get("[placeholder='submit']")
      .click()
    cy.contains(".comix-name", "The Man Of Steel");
    cy.saveLocalStorage();
  });


  it("should navigate to next comix", () => {
    cy.restoreLocalStorage()
    cy.contains("Next").click()
    cy.contains(".comix-name", "The Amazing Spider-Man")
    cy.saveLocalStorage();
  });

  it("should navigate to previous comix", () => {
    cy.restoreLocalStorage()
    cy.contains("Previous").click()
    cy.contains(".comix-name", "The Man Of Steel")
    cy.saveLocalStorage();
  });

  it("should add comic to cart", () => {
    cy.restoreLocalStorage()
    cy.get("#cart").click()
    cy.contains(".comixs-title", "Kent C Straight's Comic Cart")
    cy.saveLocalStorage();
    //cy.contains(".comixs-name", "The Man Of Steel");
  });

});