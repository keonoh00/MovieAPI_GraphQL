import { getMovies, getDescription, getSuggestion } from "./db";


const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        description: (_, {id}) => getDescription(id),
        suggestion: (_, {id}) => getSuggestion(id)
    }
};

export default resolvers;