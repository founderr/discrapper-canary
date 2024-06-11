"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("735250"),
  r = n("768581"),
  s = n("689938");

function a(e) {
  let {
    application: t,
    className: n,
    width: a,
    height: o
  } = e, l = r.default.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: a
  });
  return null == l ? null : (0, i.jsx)("img", {
    className: n,
    alt: s.default.Messages.IMAGE,
    src: l,
    width: a,
    height: o
  })
}