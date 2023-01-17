import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGIFs } from "../../hooks/useFetchGIFs";

describe('Custom hook testing', () => { 
    test('Should return initial state', () => { 
        const { result } = renderHook(() => useFetchGIFs('ECW'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        console.log(result)
    });

    test('Should return array of images', async () => { 
        const { result } = renderHook(() => useFetchGIFs('ECW'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
 });