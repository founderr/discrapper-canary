n.d(t, {
  Z: function() {
return i;
  }
});
var r = n(470079);

function i() {
  let e = (0, r.createContext)(void 0);
  return {
Provider: ({
  initialStore: t,
  createStore: n,
  children: i
}) => {
  let o = (0, r.useRef)();
  return !o.current && (t && (console.warn('Provider initialStore is deprecated and will be removed in the next version.'), !n && (n = () => t)), o.current = n()), (0, r.createElement)(e.Provider, {
    value: o.current
  }, i);
},
useStore: (t, n = Object.is) => {
  let i = (0, r.useContext)(e);
  if (!i)
    throw Error('Seems like you have not used zustand provider as an ancestor.');
  return i(t, n);
},
useStoreApi: () => {
  let t = (0, r.useContext)(e);
  if (!t)
    throw Error('Seems like you have not used zustand provider as an ancestor.');
  return (0, r.useMemo)(() => ({
    getState: t.getState,
    setState: t.setState,
    subscribe: t.subscribe,
    destroy: t.destroy
  }), [t]);
}
  };
}