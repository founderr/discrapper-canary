"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
}), l("789020");
var s = l("735250");
l("470079");
var i = l("442837"),
  a = l("954295"),
  n = l("621853"),
  o = l("305944");

function r(e) {
  var t;
  let {
    user: l
  } = e, r = null === (t = (0, i.useStateFromStores)([n.default], () => n.default.getUserProfile(l.id))) || void 0 === t ? void 0 : t.application;
  return (0, s.jsx)(a.default, {
    flags: null == r ? void 0 : r.flags,
    listScrollerStyle: o.listScroller
  })
}