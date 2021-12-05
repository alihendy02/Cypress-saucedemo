import { CommonPage, LoginPage } from '../support/pages';

context('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
 
  describe('Page', () => {
    it('has user name input', () => {
      LoginPage.UserName()
        .should('have.value', '')
        .and('have.attr', 'placeholder', 'Username')
        .and('be.visible')
        .and('have.css', 'font-size', '18px')
        
    })
    it('has password input', () => {
      LoginPage.Password()
        .should('have.value', '')
        .and('have.attr', 'placeholder', 'Password')
        .and('be.visible')
        .and('have.css', 'font-size', '18px')

    })
    it('has login button', () => {
      LoginPage.LoginButton()
        .should('have.value', 'Login')
        .and('be.visible')
        .and('have.css', 'background-color', 'rgb(226, 35, 26)')

    })
  })
  describe('User', () => {
    it('can login with standard user', () => {
      LoginPage.UserName()
        .type('standard_user')
        .should('have.value', 'standard_user')

      LoginPage.Password()
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')

      LoginPage.LoginButton().click()

      CommonPage.MainBurgerButton()
        .invoke('text')
        .should('match', /Menu/i)
    })
  })
})
