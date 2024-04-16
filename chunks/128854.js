"use strict";
t.r(n), t.d(n, {
  MessageAccessoriesComponentContextProvider: function() {
    return o
  },
  useMessageAccessoriesComponentContext: function() {
    return u
  }
}), t("411104");
var l = t("735250"),
  a = t("470079");
let s = a.createContext(null);

function u() {
  let e = a.useContext(s);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function o(e) {
  let {
    children: n,
    ...t
  } = e;
  return (0, l.jsx)(s.Provider, {
    value: t,
    children: n
  })
}