"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("768581"),
  l = n("689938"),
  u = n("377197");

function d(e) {
  let {
    application: t,
    src: n,
    className: s,
    size: d,
    botIconFirst: _,
    fallbackAvatar: c
  } = e, E = r.useMemo(() => null != t ? o.default.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: d,
    botIconFirst: _,
    fallbackAvatar: c
  }) : n, [t, n, d, _, c]);
  return null == E ? null : (0, i.jsx)("img", {
    className: a()(u.icon, s),
    alt: l.default.Messages.IMAGE,
    src: E
  })
}