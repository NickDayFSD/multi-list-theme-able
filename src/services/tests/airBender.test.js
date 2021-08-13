import { fetchAirbenderCharacters } from '../airBenderApi';

it('fetches characters from The Last Airbender API', async () => {
  const res = await fetchAirbenderCharacters();
  expect(res.length).toEqual(20);
});
