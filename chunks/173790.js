"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("783097"),
  s = n("964387"),
  a = n("153189");

function o(e) {
  let {
    channel: t,
    application: n
  } = e, o = null != n && (0, r.isEmbeddedApp)({
    application: n
  }) ? s.default : a.default;
  return (0, i.jsx)(o, {
    channel: t,
    application: n
  })
}