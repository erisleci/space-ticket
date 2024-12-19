import { describe, expect, it } from 'vitest';
import { formatDate } from '../ticketPageUtils';

describe('ticketPage', () => {
    describe('format departure date', () => {
        it('returns formatted departure date', () => {
            const result = formatDate('2024-12-12T20:53:03.932Z');
            expect(result).toBe('12/12/2024');
        });
    });
});
