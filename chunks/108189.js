"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("90915"),
  u = n("77078"),
  o = n("159885"),
  d = n("272551");
let c = [18, 18, 16, 16, 14, 12, 10];
var f = e => {
  let t, n, {
      children: s,
      icon: f,
      name: h,
      ariaLabel: C,
      className: p,
      style: m,
      to: E,
      onClick: g,
      selected: I = !1,
      ..._
    } = e,
    S = (0, r.useHistory)();
  if (null == f && null != h) {
    var N;
    n = null !== (N = c[(t = (0, o.getAcronym)(h)).length - 1]) && void 0 !== N ? N : c[c.length - 1]
  }
  let T = a.useCallback(e => {
    if (null == E);
    else if ("string" == typeof E) S.push(E);
    else {
      let {
        pathname: e = "",
        state: t
      } = E;
      S.push(e, t)
    }
    null != g && g(e)
  }, [S, E, g]);
  return (0, l.jsxs)(u.Clickable, {
    ..._,
    onClick: T,
    className: i(p, d.wrapper, {
      [d.selected]: I
    }),
    "aria-label": null != C && "" !== C ? C : null != h ? h : "",
    style: {
      ...m,
      fontSize: n
    },
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, l.jsx)("div", {
      className: i(d.childWrapper, d.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != f ? (0, l.jsx)("img", {
      className: d.icon,
      src: f,
      alt: " ",
      width: 48,
      height: 48,
      "aria-hidden": !0
    }) : null, null != s ? (0, l.jsx)("div", {
      className: d.childWrapper,
      children: s
    }) : null]
  })
}