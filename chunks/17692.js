"use strict";
t.r(A), t.d(A, {
  default: function() {
    return u
  }
});
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  r = t.n(n),
  s = t("77078"),
  o = t("931164"),
  i = t("289162"),
  d = t("632215");

function u(e) {
  let {
    color: A,
    className: t,
    variant: n,
    text: u,
    lineClamp: c
  } = e, f = (0, s.usePrivateHeadingLevel)(), C = l.useMemo(() => null == u ? null : (0, o.default)(u, !0, {
    allowHeading: null == c,
    allowList: null == c,
    initialHeaderLevel: f
  }), [u, c, f]);
  return (0, a.jsx)(s.Text, {
    className: r(t, d.markup, {
      [i.lineClamp2Plus]: null != c && c > 1,
      [i.lineClamp1]: 1 === c
    }),
    color: A,
    variant: n,
    lineClamp: c,
    children: C
  })
}