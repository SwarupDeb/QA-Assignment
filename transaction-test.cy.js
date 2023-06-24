describe("Transaction Table Sorting", () => {
  it("should visit the website and verify sorted values in the transaction table", () => {
    // Visit the website
    cy.visit("https://sakshingp.github.io/assignment/home.html");

    // Click the "AMOUNT" header in the transaction table
    it('should display the correct amount', () => {
      cy.get('th#amount.text-right')
        .invoke('text')
        .then((text) => {
          const expectedAmount = 'AMOUNT'; // Replace 'AMOUNT' with the expected amount
    
          expect(text.trim()).to.equal(expectedAmount);
        });
    });

    // Get the transaction table rows
    cy.get("table#transactionsTable")
      .find("tbody tr")
      .then(($rows) => {
        // Extract the transaction amounts
        const amounts = $rows.map((_, row) =>
          Cypress.$(row).find("td").eq(2).text()
        );

        // Convert amounts to numbers
        const numericAmounts = amounts.toArray().map((amount) => parseFloat(amount));

        // Check if the amounts are sorted in ascending order
        const isSorted = numericAmounts.slice().sort((a, b) => a - b).join() === numericAmounts.join();

        // Assert that the amounts are sorted
        expect(isSorted).to.be.true;
      });
  });
});
