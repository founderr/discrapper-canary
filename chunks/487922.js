"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("789020");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("954295"),
  r = s("621853"),
  n = s("521170");

function o(e) {
  var t;
  let {
    user: s
  } = e, o = null === (t = (0, a.useStateFromStores)([r.default], () => r.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
  return (0, l.jsx)(i.default, {
    flags: null == o ? void 0 : o.flags,
    listScrollerStyle: n.listScroller
  })
}