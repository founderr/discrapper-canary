"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("411104");
var r = n("735250"),
  u = n("470079");

function i() {
  let e = u.createContext(void 0);

  function t() {
    let t = u.useContext(e);
    if (null == t) throw Error("Context was used outside of defined provider.");
    return t
  }
  return [e, t, function() {
    let n = t();
    return function(t) {
      let {
        children: u
      } = t;
      return (0, r.jsx)(e.Provider, {
        value: n,
        children: u
      })
    }
  }]
}