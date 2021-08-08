/* eslint import/prefer-default-export: 0 */

export const yearsSince = (timestamp: Date | string): number => {
  let localTimestamp = timestamp;
  if (typeof localTimestamp === "string") {
    localTimestamp = new Date(localTimestamp);
  }

  return Math.floor(Math.abs(new Date().getTime() - localTimestamp.getTime()) / (365 * 1000 * 3600 * 24));
};
