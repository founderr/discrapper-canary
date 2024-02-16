"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("70102");
var a = n("884691");

function l() {
  let e = (0, a.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: n,
        createStore: l,
        children: r
      } = t, i = (0, a.useRef)();
      return !i.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), i.current = l()), (0, a.createElement)(e.Provider, {
        value: i.current
      }, r)
    },
    useStore: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        l = (0, a.useContext)(e);
      if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return l(t, n)
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