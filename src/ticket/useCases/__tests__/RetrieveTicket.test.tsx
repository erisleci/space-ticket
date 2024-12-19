import { ContextProvider } from '../../../common/context';
import { provideTicketAudit } from '../../../TicketAuditProvider';
import { App } from '../../../App';

describe('Retrieve ticket', () => {
    it('retrieve a ticket to space', () => {
        cy.intercept('GET', 'http://localhost:3000/ticket', {
            body: {
                "destination": "Plutonium",
                "departure": "2024-12-19T20:53:03.932Z"
            }
        });

        const fake = () => Promise.resolve({ ticketType: 'SUPER CLASS' });

        cy.mount(
            <ContextProvider providers={[
                provideTicketAudit(fake)
            ]}>
                <App />
            </ContextProvider>, '/');

        cy.getByTestId('menu-ticket').click();
        cy.getByTestId('control-get-ticket').click();

        cy.getByTestId('ticket').contains('Plutonium').should('be.visible');
        cy.contains('Departure').next().should('contain', '19').and('contain', '12').and('contain', '2024');
        cy.contains('Type').next().should('have.text', 'SUPER CLASS');
    });
});
