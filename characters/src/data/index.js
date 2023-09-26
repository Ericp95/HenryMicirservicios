const axios=require("axios");


module.exports={

    list: async () => {//trae todos los character
       const character=await axios.get("http://database:8004/Character")
       return character.data 

      },


      characterID: async (id) => {//trae por id character
        const characterId = await axios.get(`http://database:8004/Character/${id}`);
        return characterId.data;
      },

      createCharacter: async (character) => {
        
        const createNewCharacter = await axios.post("http://database:8004/Character",character);
        return createNewCharacter.data;
      },
}