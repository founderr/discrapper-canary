i.d(t, {
  Z: function() {
    return r
  }
});
var n = i(470079);

function r() {
  let e = (0, n.createContext)(void 0);
  return {
    Provider: ({
      initialStore: t,
      createStore: i,
      children: r
    }) => {
      let s = (0, n.useRef)();
      return !s.current && (t && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => t)), s.current = i()), (0, n.createElement)(e.Provider, {
        value: s.current
      }, r)
    },
    useStore: (t, i = Object.is) => {
      let r = (0, n.useContext)(e);
      if (!r) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return r(t, i)
    },
    useStoreApi: () => {
      let t = (0, n.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, n.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}