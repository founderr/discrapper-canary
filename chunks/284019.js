"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(603368),
  u = n(617886);

function _(e) {
  let {
    themeColor: t,
    color: n,
    className: s,
    ..._
  } = e, c = (0, a.useToken)(a.tokens.colors.BG_SURFACE_OVERLAY), d = r.useMemo(() => (0, l.j1)(t, c.hex()), [t]);
  return (0, i.jsx)(a.Button, {
    ..._,
    style: d,
    className: o()(s, {
      [u.customButton]: null != d
    }),
    color: null != d ? a.Button.Colors.CUSTOM : n
  })
}