import Joke from "../joke";

interface ChuckJokeProps {
  chuckJokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({chuckJokes}) => { 
        return <> {chuckJokes.map(cJoke => <p key={cJoke.id}>{cJoke.joke}</p>)}</>
}

export default ChuckJoke;