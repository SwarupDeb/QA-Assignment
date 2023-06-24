describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("https://sakshingp.github.io/assignment/login.html");
  });

  it("Logs in with valid credentials", () => {
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.url().should("include", "https://sakshingp.github.io/assignment/home.html");
  });
  

  it("Displays error message for empty username", () => {
    cy.get("#password").type("validPassword");
    cy.get("#log-in").click();
    cy.on('window:alert',(txt)=>{
      
      expect(txt).to.contains('Username must be present'); })
  })

  it("Displays error message for empty password", () => {
    cy.get("#username").type("validUsername");
    cy.get("#log-in").click();
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Password must be present'); })
    
  });

  it("Displays error message for both fields empty", () => {
    cy.get("#log-in").click();
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('Both Username and Password must be present'); })
  });

  it("Redirects to social media links", () => {
    cy.get("a[href='#']").eq(0).click(); // Twitter link

    cy.get("a[href='#']").eq(1).click(); // Facebook link

    cy.get("a[href='#']").eq(2).click(); // LinkedIn link

});

  it("Does not remember user login when 'Remember Me' checkbox is unchecked", () => {
    cy.get("#username").type("validUsername");
    cy.get("#password").type("validPassword");
    cy.get(".form-check-input").uncheck();
    cy.get("#log-in").click();

    // Log out or navigate back to the login page

    cy.visit("https://sakshingp.github.io/assignment/login.html");

    // Assert that the username and password fields are empty
    cy.get("#username").should("have.value", "");
    cy.get("#password").should("have.value", "");
  });
});
