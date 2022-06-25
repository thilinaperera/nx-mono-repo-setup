/**
 * Normalize a port into a number.
 */
export const normalizePort = (val: string | number): number => {
  const port = parseInt(String(val), 10);
  if (isNaN(port)) return 3000;
  if (port >= 0) return port;
  return 3000;
};

export const isProduction = process.env.NODE_ENV === "production";
