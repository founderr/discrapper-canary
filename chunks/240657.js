"use strict";
t.r(A), t.d(A, {
  default: function() {
    return u
  }
});
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("481060"),
  i = t("741914"),
  o = t("96442"),
  d = t("946278");

function u(e) {
  let {
    color: A,
    className: t,
    variant: s,
    text: u,
    lineClamp: c
  } = e, g = (0, n.usePrivateHeadingLevel)(), f = l.useMemo(() => null == u ? null : (0, i.default)(u, !0, {
    allowHeading: null == c,
    allowList: null == c,
    initialHeaderLevel: g
  }), [u, c, g]);
  return (0, a.jsx)(n.Text, {
    className: r()(t, d.markup, {
      [o.lineClamp2Plus]: null != c && c > 1,
      [o.lineClamp1]: 1 === c
    }),
    color: A,
    variant: s,
    lineClamp: c,
    children: f
  })
}