import axios from "axios";

export const fetchImages = async (imageName, page) => {
  const API_key = "18194330-67860245f678ffa703ae3a938&";
  const response = await axios.get(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

// const URL = "https://pixabay.com/api/";
// const API_KEY = "18194330-67860245f678ffa703ae3a938";

// axios.defaults.baseURL = URL;
// axios.defaults.params = {
//   key: API_KEY,
//   per_page: 12,
//   image_type: "photo",
//   orientation: "horizontal",
// };
// export const fetchImages = async (state) => {
//   const { imageName, page } = state;
//   return await axios("", {
//     params: { g: imageName, page },
//   });
// };
