"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("594174"),
  i = n("429239");
t.default = function(e) {
  let {
    recipients: t,
    size: n,
    status: r,
    isTyping: o,
    ...u
  } = e, d = (0, a.useStateFromStoresArray)([s.default], () => t.slice(0, 2).map(e => {
    let t = s.default.getUser(e);
    if (null != t) return t.getAvatarURL(void 0, n, !1)
  }), [t, n]);
  return (0, l.jsx)(i.default, {
    "aria-label": u["aria-label"],
    "aria-hidden": u["aria-hidden"],
    backSrc: d[0],
    frontSrc: d[1],
    size: n,
    status: r,
    isTyping: null != o && o
  })
}