"use strict";
n.r(t), n.d(t, {
  MessageAccessoriesComponentContextProvider: function() {
    return u
  },
  useMessageAccessoriesComponentContext: function() {
    return s
  }
}), n("411104");
var l = n("735250"),
  a = n("470079");
let r = a.createContext(null);

function s() {
  let e = a.useContext(r);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function u(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, l.jsx)(r.Provider, {
    value: n,
    children: t
  })
}