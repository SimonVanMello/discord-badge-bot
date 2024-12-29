const colors = {
  RESET: '\x1b[0m',
  ERROR: '\x1b[31m',
  SUCCESS: '\x1b[32m',
  INFO: '\x1b[34m',
};

const getDateTime = () => {
  const date = new Date();
  return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
};

const logWithPrefix = (prefix: keyof typeof colors, message: string) => {
  console.log(`${colors[prefix]}[${prefix}]${colors.RESET} - ${getDateTime()} # ${message}`);
};

const logger = {
  info: (message: string) => logWithPrefix('INFO', message),
  success: (message: string) => logWithPrefix('SUCCESS', message),
  error: (message: string) => logWithPrefix('ERROR', message),
};

export default logger;
