import { App } from '../../../App';

describe('IntroPage', () => {
    it('should see app introduction', () => {
        cy.mount(<App />, '/');
        cy.getByTestId('menu-intro').click();
        cy.getByTestId('intro-paragraph').should('be.visible');
    });
});
