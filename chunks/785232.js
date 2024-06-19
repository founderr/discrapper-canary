var a = i(735250);
i(470079);
var n = i(442837),
  l = i(481060),
  s = i(594174),
  r = i(429239);
t.Z = function(e) {
  let {
    recipients: t,
    size: i,
    status: d,
    isTyping: u,
    className: c,
    ...o
  } = e, A = l.AvatarSizeSpecs[i], I = (0, n.Wu)([s.default], () => t.slice(0, 2).map(e => {
    let t = s.default.getUser(e);
    if (null != t) return t.getAvatarURL(void 0, A.size, !1)
  }), [t, A.size]);
  return (0, a.jsx)(r.Z, {
    "aria-label": o["aria-label"],
    "aria-hidden": o["aria-hidden"],
    backSrc: I[0],
    frontSrc: I[1],
    size: i,
    status: d,
    isTyping: null != u && u,
    className: c
  })
}