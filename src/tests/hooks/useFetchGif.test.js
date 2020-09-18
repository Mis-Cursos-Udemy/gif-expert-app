const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGif } = require("../../hooks/useFetchGif");

describe('Pruebas en el Hook useFetchGif', () => {

    test('Debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('One Punch'));
        const { images, loading } = result.current;
        // console.log(images, loading);
        await waitForNextUpdate();
        
        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('One Punch'));
        await waitForNextUpdate();
        const { images, loading } = result.current;
        expect(images.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});