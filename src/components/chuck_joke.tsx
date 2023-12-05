import Joke from "../joke";

interface ChuckJokeProps {
  chuckJokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({chuckJokes}) => { 
        const newJokes = [...chuckJokes].map(cJoke => <p key={cJoke.id}>{cJoke.joke}</p>)
        return <>{newJokes}</>
}

export default ChuckJoke;