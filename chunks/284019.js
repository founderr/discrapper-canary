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
  o = n("481060"),
  l = n("603368"),
  u = n("843656");

function d(e) {
  let {
    themeColor: t,
    color: n,
    className: s,
    ...d
  } = e, _ = (0, o.useToken)(o.tokens.colors.BG_SURFACE_OVERLAY), c = r.useMemo(() => (0, l.getClanPrimaryButtonStyles)(t, _.hex()), [t]);
  return (0, i.jsx)(o.Button, {
    ...d,
    style: c,
    className: a()(s, {
      [u.customButton]: null != c
    }),
    color: null != c ? o.Button.Colors.CUSTOM : n
  })
}