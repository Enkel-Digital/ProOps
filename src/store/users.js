// Mock server data
import users from "./mock_data/users";

function getUsername(email) {
  return users[email].name;
}

export default {
  getUsername
};
