"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("70102");
var i = n("884691");

function a() {
  let e = (0, i.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: n,
        createStore: a,
        children: l
      } = t, r = (0, i.useRef)();
      return !r.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), r.current = a()), (0, i.createElement)(e.Provider, {
        value: r.current
      }, l)
    },
    useStore: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        a = (0, i.useContext)(e);
      if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return a(t, n)
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