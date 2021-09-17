import axios from "axios";
export const fetchImages = async (imageName, page) => {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${imageName}&page=${page}&key=18194330-67860245f678ffa703ae3a938&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits
    
  }
  