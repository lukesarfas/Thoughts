// @ts-nocheck
import { wordCount } from '../wordCount';

describe('wordCount', () => {
  it('counts words correctly', () => {
    expect(wordCount('hello world')).toBe(2);
    expect(wordCount('  multiple   spaces  here ')).toBe(3);
    expect(wordCount('')).toBe(0);
  });
}); 