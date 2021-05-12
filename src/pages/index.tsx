import dynamic from 'next/dynamic';
import usePokeApi from '../api/usePokeApi';

const PixiComponent = dynamic(() => import('../component/pixi'), {
    ssr: false,
});

function Home() {
    const { data } = usePokeApi('/pokemon/pikachu');

    console.log(data);

    return <PixiComponent />;
}

export default Home;
