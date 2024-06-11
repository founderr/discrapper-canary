"use strict";
n.r(t), n.d(t, {
  NavItem: function() {
    return E
  }
}), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("613828"),
  l = n("481060"),
  u = n("624138"),
  d = n("282360");
let _ = [18, 18, 16, 16, 14, 12, 10];

function c(e, t) {
  return a()({
    [d.childWrapper]: !0,
    [d.childWrapperNoHoverBg]: "always" === e,
    [d.childWrapperHoverScale]: "on-hover" === e && t
  })
}
let E = e => {
  let t, n, {
      backgroundStyle: s = "always",
      children: E,
      icon: I,
      name: T,
      ariaLabel: f,
      className: S,
      style: h,
      to: A,
      onClick: m,
      selected: N = !1,
      ...p
    } = e,
    O = (0, o.useHistory)();
  if (null == I && null != T) {
    var C;
    n = null !== (C = _[(t = (0, u.getAcronym)(T)).length - 1]) && void 0 !== C ? C : _[_.length - 1]
  }
  let R = r.useCallback(e => {
    if (null == A);
    else if ("string" == typeof A) O.push(A);
    else {
      let {
        pathname: e = "",
        state: t
      } = A;
      O.push(e, t)
    }
    null != m && m(e)
  }, [O, A, m]);
  return (0, i.jsxs)(l.Clickable, {
    ...p,
    onClick: R,
    className: a()(S, d.wrapper, {
      [d.selected]: N
    }),
    "aria-label": null != f && "" !== f ? f : null != T ? T : "",
    style: {
      ...h,
      fontSize: n
    },
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, i.jsx)("div", {
      className: a()(c(s, !1), d.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != I ? (0, i.jsx)("img", {
      className: d.icon,
      src: I,
      alt: " ",
      width: 48,
      height: 48,
      "aria-hidden": !0
    }) : null, null != E ? (0, i.jsx)("div", {
      className: c(s, !0),
      children: E
    }) : null]
  })
}