"use strict";
s.r(t), s.d(t, {
  Subsetting: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("394644");
let l = e => {
  let {
    setting: t,
    children: s
  } = e, l = (0, n.useViewableSettingsFilterFromSearch)(t);
  return l.size > 0 && !l.has(t) ? null : (0, a.jsx)("div", {
    children: s
  })
}