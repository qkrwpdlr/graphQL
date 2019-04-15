const resolver = {
  Query: {
    movies: () => movies,
    /**
     * @param {Object} person default parameter from graphQL
     * @param {Object} payload
     * @param {Number} payload.id
     */
    movie: (movie, payload) => getById(payload.id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

let movies = [
  {
    id: 1,
    name: "jjj",
    score: 32
  },
  {
    id: 2,
    name: "vvvv",
    score: 53
  },
  {
    id: 3,
    name: "bbbb",
    score: 324
  }
];

const getById = id => {
  const filtereMovie = movies.filter(movies => id === movies.id);
  return filtereMovie[0];
};

const addMovie = (name, score) => {
  let newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export default resolver;
