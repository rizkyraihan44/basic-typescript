import { test, expect } from 'bun:test';
import { sayHello } from '../src/say-hello';

test('sayHello', () => {
    expect(sayHello('Bun')).toBe('Hello Bun!');
});
