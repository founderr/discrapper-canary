"use strict";
r.r(l);
var n, t, s, a, o, i = r("735250"),
  d = r("470079"),
  c = r("120356"),
  u = r.n(c),
  p = r("285952"),
  m = r("35338");

function E(e, l, r) {
  return l in e ? Object.defineProperty(e, l, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = r, e
}(n = s || (s = {})).PRIMARY = "primary", n.SECONDARY = "secondary", n.WARNING = "warning", n.ERROR = "error", (t = a || (a = {})).SMALL = "small", t.LARGE = "large", t.NONE = "none";
let f = {
    primary: m.colorPrimary,
    secondary: m.colorSecondary,
    warning: m.colorWarning,
    error: m.colorError
  },
  S = {
    small: m.small,
    large: m.large,
    none: null
  };
class N extends(o = d.PureComponent) {
  render() {
    let {
      icon: e,
      color: l,
      children: r,
      iconSize: n,
      className: t,
      iconClassName: s
    } = this.props;
    return (0, i.jsxs)(p.default, {
      className: u()(m.note, f[l], t),
      align: p.default.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: u()(m.icon, S[n], s)
      }), (0, i.jsx)("div", {
        children: r
      })]
    })
  }
}
E(N, "Colors", s), E(N, "Sizes", a), l.default = N