export const getBgColor = variant => {
  switch (variant) {
    case '.docx':
      return 'docx';
    case '.pdf':
      return 'pdf';
    case '.mp3':
      return 'mp3';
    case '.psd':
      return 'psd';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};
