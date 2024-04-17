"use strict";
n.r(t), n.d(t, {
  MessageAccessoriesComponentContextProvider: function() {
    return u
  },
  useMessageAccessoriesComponentContext: function() {
    return o
  }
}), n("411104");
var l = n("735250"),
  a = n("470079");
let s = a.createContext(null);

function o() {
  let e = a.useContext(s);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function u(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, l.jsx)(s.Provider, {
    value: n,
    children: t
  })
}