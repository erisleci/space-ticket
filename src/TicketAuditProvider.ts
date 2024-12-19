import { createGenericContext } from './common/context';

export type TicketAudit = { ticketType: string };
type Adapter = (id: string) => Promise<TicketAudit>

export const { useContext, createContextProvider: provideTicketAudit } = createGenericContext<Adapter>()

export function useTicketAuditAdapter() {
    return useContext().value;
}
