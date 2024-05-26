// src/utils/api.js
export const fetchUsernames = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("Error fetching usernames");
    }
    const data = await response.json();
    console.log("Fetched usernames:", data); // Log the response
    return data.users || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${username}`);
    if (!response.ok) {
      throw new Error(`Error fetching data for ${username}`);
    }
    const data = await response.json();
    return data[0] || null; // Return the first user object
  } catch (error) {
    console.error(error);
    return null;
  }
};
