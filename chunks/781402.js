"use strict";
r.r(e), r.d(e, {
  default: function() {
    return i
  }
});
var n = r("470079");

function i() {
  let t = (0, n.createContext)(void 0);
  return {
    Provider: ({
      initialStore: e,
      createStore: r,
      children: i
    }) => {
      let a = (0, n.useRef)();
      return !a.current && (e && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => e)), a.current = r()), (0, n.createElement)(t.Provider, {
        value: a.current
      }, i)
    },
    useStore: (e, r = Object.is) => {
      let i = (0, n.useContext)(t);
      if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return i(e, r)
    },
    useStoreApi: () => {
      let e = (0, n.useContext)(t);
      if (!e) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, n.useMemo)(() => ({
        getState: e.getState,
        setState: e.setState,
        subscribe: e.subscribe,
        destroy: e.destroy
      }), [e])
    }
  }
}