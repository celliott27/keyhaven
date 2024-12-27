describe('home', () => {
    it('should show hello', () => {
        cy.visit("http://localhost:3000");
        cy.get("h1").contains(/hello/i)
    })
    
})