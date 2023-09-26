const axios=require("axios");


module.exports={

    list: async () => {//trae todos los cplanet
       const planet=await axios.get("http://database:8004/Planet")
       return planet.data 

      },


      planetID: async (id) => {//trae por id planet
        const planetId = await axios.get(`http://database:8004/Planet/${id}`);
        return planetId.data;
      },

      createPlanet: async (planet) => {//crea nuevo planeta
        
        const createNewPlanet = await axios.post("http://database:8004/Planet",planet);
        return createNewPlanet.data;
      },
}