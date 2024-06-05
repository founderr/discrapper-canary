"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("470079");

function l() {
  let e = (0, i.createContext)(void 0);
  return {
    Provider: ({
      initialStore: t,
      createStore: n,
      children: l
    }) => {
      let a = (0, i.useRef)();
      return !a.current && (t && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !n && (n = () => t)), a.current = n()), (0, i.createElement)(e.Provider, {
        value: a.current
      }, l)
    },
    useStore: (t, n = Object.is) => {
      let l = (0, i.useContext)(e);
      if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return l(t, n)
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