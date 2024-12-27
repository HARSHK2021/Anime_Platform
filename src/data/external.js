import animeapi from '@justalk/anime-api';

export const getAnimeDownload = async (title, episode) => {

  const download = await animeapi.download('naruto shippuden', 387);
  return download;
};

