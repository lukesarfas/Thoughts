import { wordCount } from '../wordCount';

describe('wordCount', () => {
  it('should return 0 for an empty string', () => {
    expect(wordCount('')).toBe(0);
  });

  it('should return 0 for a string with only whitespace', () => {
    expect(wordCount('   ')).toBe(0);
  });

  it('should count the words in a simple sentence', () => {
    expect(wordCount('Hello world')).toBe(2);
  });

  it('should handle leading and trailing spaces', () => {
    expect(wordCount('  leading and trailing  ')).toBe(3);
  });

  it('should handle multiple spaces between words', () => {
    expect(wordCount('multiple   spaces    between')).toBe(3);
  });

  it('should handle strings with punctuation', () => {
    expect(wordCount('Hello, world!')).toBe(2);
  });
}); 