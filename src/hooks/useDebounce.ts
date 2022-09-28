import { useRef, useEffect, useCallback } from 'react';

export function useDebounce(fn:(...args:any[]) => void, delay = 250, dep = []) {
  const { current } = useRef<{
    fn:(...args:any[]) => void;
    timer:any;
      }>({
        fn,
        timer: null,
      });

  useEffect(function() {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
}
