"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  o = n("931164"),
  u = n("289162"),
  d = n("632215");

function c(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: c,
    lineClamp: E
  } = e, f = (0, r.usePrivateHeadingLevel)(), _ = l.useMemo(() => null == c ? null : (0, o.default)(c, !0, {
    allowHeading: null == E,
    allowList: null == E,
    initialHeaderLevel: f
  }), [c, E, f]);
  return (0, s.jsx)(r.Text, {
    className: i(n, d.markup, {
      [u.lineClamp2Plus]: null != E && E > 1,
      [u.lineClamp1]: 1 === E
    }),
    color: t,
    variant: a,
    lineClamp: E,
    children: _
  })
}