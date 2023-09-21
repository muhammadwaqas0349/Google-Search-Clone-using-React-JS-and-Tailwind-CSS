import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"; 

const params = {
  key: "AIzaSyDUix5SG3xep2vZb-AOv63rbfOcAJmCAIA", 
  cx : "03423ac4f49f74044"
};

export const fetchDataFromApi = async (payLoad) => {
        const { data } = await axios.get(BASE_URL, {params: { ...params, ...payLoad }, 
        }); 

        return data;
};
