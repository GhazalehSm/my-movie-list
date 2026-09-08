import { useEffect } from "react";

export function useKeyEvent(key, action) {
  useEffect(
    function () {
      function callBack(event) {
        if (event.code.tolowerCase() === key.tolowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key],
  );
}
