
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*
  {
    favorites: {
      '1': { id: 1, name: 'bulbasaur' }, // se arma como llamaria a los pokemon por llaves 
      '2': { id: 2, name: 'bulbasaur' },
    }
  }
*/

interface PokemonsState { 
  favorites: { [key: string]: SimplePokemon },
}

// const getInitialState = (): PokemonsState => {
  
//   // if ( typeof localStorage === 'undefined' ) return {};
//   const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}'  );
//   return favorites;
// }


const initialState: PokemonsState = {
   favorites: {}, // inicio {} vacio asi lo q se genere del lado servidor mas lo que se genenra del lado del cliente sea igual 
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'Charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    }, 

    toggleFavorite( state, action: PayloadAction<SimplePokemon> ) { // actions de tipo PayloadAction y el tipo de informacion SimplePokemon

      const pokemon = action.payload; // leo el pokemon q viene en la accion 
      const { id } = pokemon;

      if ( !!state.favorites[id] ) { // si existe 
        delete state.favorites[id]; //delete 
        // return;
      } else {
        state.favorites[id] = pokemon; // le paso el pokemon q recibo en la accion
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ) );  //almacena en el localstorage

    }

  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

// rxslice --> atajo para crear slice 