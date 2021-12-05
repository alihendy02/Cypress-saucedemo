import { CommonPage } from '../support/pages';

context('Cart', () => {
  beforeEach(() => {
    //cy.setSessionStorage('cart-contents', '[4,1,2]')
    cy.login('standard_user', 'secret_sauce')
    
  })

  describe('Cart', () => {
  
    it('buy product', () => {
      let firstName = 'Petr'
      let lastname = 'Skala'
      let psc = '68201'
      let CartButton = () => {
        cy.get('.cart_button').click();
      }
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.checkout_button')
        .click();

      cy.get('#first-name')
        .type(firstName)
        .should('have.value', firstName)

      cy.get('#last-name')
        .type(lastname)
        .should('have.value', lastname)

      cy.get('#postal-code')
        .type(psc)
        .should('have.value', psc)

      CartButton()

      cy.get('.summary_subtotal_label')
        .should('have.text', 'Item total: $29.99')

      cy.get('.summary_tax_label')
        .should('have.text', 'Tax: $2.40')

      cy.get('.summary_total_label')
        .should('have.text', 'Total: $32.39')

      CartButton()

      cy.get('.complete-header')
        .should('have.text', 'THANK YOU FOR YOUR ORDER')
      
    })
  })
})
