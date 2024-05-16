"use strict";
n.r(t), n.d(t, {
  MessageAccessoriesComponentContextProvider: function() {
    return o
  },
  useMessageAccessoriesComponentContext: function() {
    return i
  }
}), n("411104");
var l = n("735250"),
  a = n("470079");
let u = a.createContext(null);

function i() {
  let e = a.useContext(u);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function o(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, l.jsx)(u.Provider, {
    value: n,
    children: t
  })
}