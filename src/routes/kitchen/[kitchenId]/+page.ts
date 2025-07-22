import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [
        { kitchenId: 'hello' },
    ];
};

export const prerender = true;