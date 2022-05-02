import { createStore } from 'vuex'

import listings from '../json/listings.json'

export default createStore({
  state: {
    favoriteSortBy: 'address',
    adList: listings.ads,
    favorites: [],
  },
  mutations: {
    SET_FAVORITES(state) {
      if(localStorage.favorites) {
        state.favorites = JSON.parse(localStorage.favorites);
      }
    },
    UPDATE_FAVORITES(state, id) {
      if(! this.getters.isFavorite(id)) {
        state.favorites.push({
          id: id,
          date_added: Date.now()
        });
      } else {
        state.favorites = state.favorites.filter(favorite => favorite.id != id);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    UPDATE_SORT_BY(state, sortBy) {
      state.favoriteSortBy = sortBy;
    }
  },
  actions: {
    setFavorites(state) {
      state.commit('SET_FAVORITES');
    },
    updateFavorites(state, payload) {
      state.commit('UPDATE_FAVORITES', payload);
    },
  },
  getters: {
    isFavorite: (state) => (id) => {
      const selectedFavorite = state.favorites.find(favorite => favorite.id == id);

      return (typeof selectedFavorite == 'undefined') ? false : true;
    },
    favoriteList: (state) => {
      let favorites = [];

      state.adList.filter(function(ad) {
        const favoriteIds = state.favorites.filter(favorite => favorite.id == ad.adId);

        if(favoriteIds.length) {
          ad.favorite_date = favoriteIds.pop().date_added;
          favorites.push(ad);
        }
      });

      return favorites;
    },
    favoriteListSorted: (state, getters) => {
      return getters.favoriteList.sort(function(ad1, ad2) {
        if(state.favoriteSortBy == 'address') {
          return ad1[state.favoriteSortBy].localeCompare(ad2[state.favoriteSortBy]);
        } else {
          return ad1[state.favoriteSortBy] > ad2[state.favoriteSortBy] ? -1 : 1;
        }
      });
    },
    formatDate: () => (date, format) => {
      if(format == 'hu') {
        return new Date(date).toLocaleDateString('hu-HU', {
          year:   'numeric',
          month:  '2-digit',
          day:    '2-digit',
          hour:   '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      } else {
        return new Date(date).toISOString();
      }
    }
  }
})
