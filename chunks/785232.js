"use strict";
a.r(t);
var i = a("735250");
a("470079");
var s = a("442837"),
  n = a("481060"),
  l = a("594174"),
  r = a("429239");
t.default = function(e) {
  let {
    recipients: t,
    size: a,
    status: d,
    isTyping: u,
    className: o,
    ...c
  } = e, I = n.AvatarSizeSpecs[a], A = (0, s.useStateFromStoresArray)([l.default], () => t.slice(0, 2).map(e => {
    let t = l.default.getUser(e);
    if (null != t) return t.getAvatarURL(void 0, I.size, !1)
  }), [t, I.size]);
  return (0, i.jsx)(r.default, {
    "aria-label": c["aria-label"],
    "aria-hidden": c["aria-hidden"],
    backSrc: A[0],
    frontSrc: A[1],
    size: a,
    status: d,
    isTyping: null != u && u,
    className: o
  })
}