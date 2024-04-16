"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("789020");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("954295"),
  o = s("621853"),
  n = s("521170");

function r(e) {
  var t;
  let {
    user: s
  } = e, r = null === (t = (0, a.useStateFromStores)([o.default], () => o.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
  return (0, l.jsx)(i.default, {
    flags: null == r ? void 0 : r.flags,
    listScrollerStyle: n.listScroller
  })
}