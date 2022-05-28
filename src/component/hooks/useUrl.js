const useUrl = () => {
    const api = process.env.REACT_APP_IMG_API_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${api}`;
    return [url];
};
export default useUrl;
