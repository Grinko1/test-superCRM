import { useEffect, useRef } from "react";

type ObserverCallback = () => void;

export const useObserver = (
  ref: React.RefObject<HTMLElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: ObserverCallback
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    const cb: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        console.log('callback')
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading, canLoad, ref, callback]);
};
