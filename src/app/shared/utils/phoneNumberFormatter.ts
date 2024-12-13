export const formatArgentinaPhoneNumber = (
  phoneNumberString: string
): string | null => {
  // Remove all non-digit characters
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');

  // Handle various Argentine phone number formats
  // Match numbers with or without country code
  const match = cleaned.match(/^(?:54)?(\d{2,3})(\d{3})(\d{4,7})$/);

  if (match) {
    // Format as: (+54) 123 4567500
    return `(+54) ${match[1]} ${match[2]}${match[3]}`;
  }

  return null;
};
