export const getGIFs = async (category) => {
    const APIKey = 'PhOn0GnCoWXNmuh21AW0HnuJwEstlP1O';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json()
    const GIFs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return GIFs;
  }; 