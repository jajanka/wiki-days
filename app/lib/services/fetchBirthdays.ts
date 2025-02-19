export const fetchBirthdays = async () => {
  const response = await fetch(
    'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/02/17'
  );
  return await response.json();
};
