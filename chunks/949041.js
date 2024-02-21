"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
}), r("70102");
var s = r("884691");

function n() {
  let e = (0, s.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: r,
        createStore: n,
        children: i
      } = t, l = (0, s.useRef)();
      return !l.current && (r && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !n && (n = () => r)), l.current = n()), (0, s.createElement)(e.Provider, {
        value: l.current
      }, i)
    },
    useStore: function(t) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        n = (0, s.useContext)(e);
      if (!n) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return n(t, r)
    },
    useStoreApi: () => {
      let t = (0, s.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, s.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}