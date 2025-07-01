export const wordCount = (text: string): number => {
  if (!text) return 0;
  const trimmedText = text.trim();
  if (!trimmedText) return 0;
  return trimmedText.split(/\s+/).length;
}; 