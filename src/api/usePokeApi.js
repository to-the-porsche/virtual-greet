import useSWR from 'swr';

const prefix = process.env.NEXT_PUBLIC_POKE_API_PATH;

const usePokeApi = (url) => {
    const { data, error } = useSWR(`${prefix}${url}`);
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default usePokeApi;
