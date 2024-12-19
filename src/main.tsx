import React from 'react';
import ReactDOM from 'react-dom/client';
import { auditTicket } from 'nasa-client';

import { App } from './App';
import './index.css';
import { ContextProvider } from './common/context';
import { provideTicketAudit } from './TicketAuditProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider providers={[
            provideTicketAudit(auditTicket)
        ]}>
            <App />
        </ContextProvider>
    </React.StrictMode>,
);
