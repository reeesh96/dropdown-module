import { useEffect } from "react";

export function useClickAway(ref: any, callback: () => void) {
    useEffect(() => {
        function clickedOutsideRef(event: Event) {
          if (ref.current && !ref.current.contains(event.target)) {
            callback()
          }
        }

        document.addEventListener("click", clickedOutsideRef);

        return () => {
          document.removeEventListener("click", clickedOutsideRef);
        };
      }, [ref, callback]);
}