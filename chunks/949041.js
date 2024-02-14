"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("70102");
var r = s("884691");

function n() {
  let e = (0, r.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: s,
        createStore: n,
        children: i
      } = t, l = (0, r.useRef)();
      return !l.current && (s && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !n && (n = () => s)), l.current = n()), (0, r.createElement)(e.Provider, {
        value: l.current
      }, i)
    },
    useStore: function(t) {
      let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        n = (0, r.useContext)(e);
      if (!n) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return n(t, s)
    },
    useStoreApi: () => {
      let t = (0, r.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, r.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}