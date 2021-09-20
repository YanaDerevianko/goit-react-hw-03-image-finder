import axios from "axios";

export const fetchImages = async (imageName, page) => {
  const API_key = "18194330-67860245f678ffa703ae3a938&";
  const response = await axios.get(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "18194330-67860245f678ffa703ae3a938";

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: "photo",
//   image_type: "photo",
//   orientation: "horizontal"
// };
// export const fetchImages = async ({ page, imageName }) => {
//   return await axios.get("", {
//     params: { page, g: imageName},
//   })
// };
