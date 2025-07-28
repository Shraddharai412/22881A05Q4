import axios from 'axios';

const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";

export const log = async (stack, level, pkg, message) => {
  try {
    await axios.post(LOG_API_URL, {
      stack,
      level,
      package: pkg,
      message
    });
  } catch (err) {
    console.error("Failed to send log", err); // Only for development
  }
};
