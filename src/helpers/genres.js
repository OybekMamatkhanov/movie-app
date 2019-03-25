export function mapGenres(genres, genresIds, pattern) {       
    return genresIds.map(function(id){
        return genres[id];
    }).join(`${pattern}`);
}

export function convertGenres(genres) {
    return genres.reduce(function(result, current){
      result[current.id] = current.name;
        return result;
    }, {});    
  }