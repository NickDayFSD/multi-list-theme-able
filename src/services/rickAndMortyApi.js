export const fetchRickAndMortyCharacters = async () => {
  const res = await fetch(
    'https://rickandmortyapi.com/api/character'
  );
  const json = await res.json();

  console.log(json);

  return json.results.map(({ name, image }) => ({
    name,
    image
  }));
};
