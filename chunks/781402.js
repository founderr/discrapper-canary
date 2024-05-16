"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
});
var a = l("470079");

function n() {
  let e = (0, a.createContext)(void 0);
  return {
    Provider: ({
      initialStore: t,
      createStore: l,
      children: n
    }) => {
      let i = (0, a.useRef)();
      return !i.current && (t && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => t)), i.current = l()), (0, a.createElement)(e.Provider, {
        value: i.current
      }, n)
    },
    useStore: (t, l = Object.is) => {
      let n = (0, a.useContext)(e);
      if (!n) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return n(t, l)
    },
    useStoreApi: () => {
      let t = (0, a.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, a.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}