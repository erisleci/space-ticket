import { Alert, Button, FocusPageLayout, HeroTitle, Ticket } from '@design-system';
import { useState } from 'react';

import { type TicketAudit, useTicketAuditAdapter } from '../../TicketAuditProvider';
import { formatDate } from './utils/ticketPageUtils';

type Ticket = { id: string; destination: string; departure: string };

export const TicketPage = () => {
    const [ticket, setTicket] = useState<Ticket>();
    const [isError, setIsError] = useState(false);
    const [audit, setAudit] = useState<TicketAudit>();
    const auditTicket = useTicketAuditAdapter();

    const createTicket = async () => {
        const response = await fetch('http://localhost:3000/ticket', {
            headers: { 'X-SCOPE': 'BUSINESS' },
        });

        if (!response.ok) {
            setIsError(true);
        } else {
            const data: Ticket = await response.json();
            setTicket(data);

            const nasaAudit = await auditTicket(data.id);
            setAudit(nasaAudit);
        }
    };

    return (
        <FocusPageLayout>
            <HeroTitle title="/Ticket" disabled />
            {isError && <Alert variant="info">No space travels are planned yet.</Alert>}
            {!ticket && isError === false && (
                <p className="mt-20">
                    <Button onClick={createTicket} data-test="control-get-ticket">
                        Get ticket
                    </Button>
                </p>
            )}
            {ticket && (
                <>
                    <h2>Congratulations 🎉</h2>
                    <p className="mb-10">Here is your ticket:</p>
                    <Ticket
                        data-test="ticket"
                        destination={ticket.destination}
                        departure={formatDate(ticket.departure)}
                        type={audit?.ticketType}
                    />
                </>
            )}
        </FocusPageLayout>
    );
};
