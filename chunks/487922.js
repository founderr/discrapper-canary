"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
}), l("789020");
var s = l("735250");
l("470079");
var a = l("442837"),
  i = l("954295"),
  n = l("621853"),
  r = l("305944");

function o(e) {
  var t;
  let {
    user: l
  } = e, o = null === (t = (0, a.useStateFromStores)([n.default], () => n.default.getUserProfile(l.id))) || void 0 === t ? void 0 : t.application;
  return (0, s.jsx)(i.default, {
    flags: null == o ? void 0 : o.flags,
    listScrollerStyle: r.listScroller
  })
}