"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("70102");
var i = n("884691");

function r() {
  let e = (0, i.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: n,
        createStore: r,
        children: a
      } = t, s = (0, i.useRef)();
      return !s.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => n)), s.current = r()), (0, i.createElement)(e.Provider, {
        value: s.current
      }, a)
    },
    useStore: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        r = (0, i.useContext)(e);
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