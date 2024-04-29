"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("470079");

function r() {
  let e = (0, i.createContext)(void 0);
  return {
    Provider: ({
      initialStore: t,
      createStore: n,
      children: r
    }) => {
      let a = (0, i.useRef)();
      return !a.current && (t && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !n && (n = () => t)), a.current = n()), (0, i.createElement)(e.Provider, {
        value: a.current
      }, r)
    },
    useStore: (t, n = Object.is) => {
      let r = (0, i.useContext)(e);
      if (!r) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return r(t, n)
    },
    useStoreApi: () => {
      let t = (0, i.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, i.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}