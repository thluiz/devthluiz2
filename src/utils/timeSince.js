export const yearsSince = (timestamp) => {
    let localTimestamp = timestamp;
    if (typeof localTimestamp === "string") {
      localTimestamp = new Date(localTimestamp);
    }
  
    return Math.floor(Math.abs(new Date().getTime() - localTimestamp.getTime()) / (365 * 1000 * 3600 * 24));
};