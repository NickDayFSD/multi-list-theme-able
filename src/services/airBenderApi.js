export const fetchAirBenderCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const json = await res.json();

  return json.map(({ name, photoUrl }) => ({
    name,
    image: photoUrl,
  }));
};
