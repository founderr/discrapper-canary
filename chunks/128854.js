"use strict";
n.r(t), n.d(t, {
  MessageAccessoriesComponentContextProvider: function() {
    return l
  }
}), n("411104");
var s = n("735250");
let a = n("470079").createContext(null);

function l(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, s.jsx)(a.Provider, {
    value: n,
    children: t
  })
}