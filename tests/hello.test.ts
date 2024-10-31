import { test, expect } from 'bun:test';

const hello = () => {
    return 'Hello via Bun!';
};

test('hello', () => {
    expect(hello()).toBe('Hello via Bun!');
});
