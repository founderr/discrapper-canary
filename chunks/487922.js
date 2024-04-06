"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("789020");
var a = s("735250");
s("470079");
var l = s("442837"),
  i = s("954295"),
  n = s("621853"),
  o = s("521170");

function r(e) {
  var t;
  let {
    user: s
  } = e, r = null === (t = (0, l.useStateFromStores)([n.default], () => n.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
  return (0, a.jsx)(i.default, {
    flags: null == r ? void 0 : r.flags,
    listScrollerStyle: o.listScroller
  })
}