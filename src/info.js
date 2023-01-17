export const getMessage = (name) => `Hola ${name}`;

export const getImage = async() => {
    try{
        const apiKey = 'PhOn0GnCoWXNmuh21AW0HnuJwEstlP1O';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    }
    catch(err){
        console.log(err);
        return 'Not found';
    }
}