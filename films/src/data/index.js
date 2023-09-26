const axios=require("axios");

const axios=require("axios");


module.exports={

    list: async () => {//trae todos los character
       const film=await axios.get("http://database:8004/Film")
       return film.data 

      },


      filmID: async (id) => {//trae por id character
        const filmId = await axios.get(`http://database:8004/Film/${id}`);
        return filmId.data;
      },

      createFilm: async (film) => {
        
        const createNewFilm = await axios.post("http://database:8004/Film",film);
        return createNewFilm.data;
      },
}