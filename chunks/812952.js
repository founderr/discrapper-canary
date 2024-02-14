"use strict";
r.r(t), r.d(t, {
  default: function() {
    return N
  }
});
var s, l, n, a, i = r("37983"),
  c = r("884691"),
  o = r("414456"),
  u = r.n(o),
  d = r("145131"),
  S = r("138592");
(s = n || (n = {})).PRIMARY = "primary", s.SECONDARY = "secondary", s.WARNING = "warning", s.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
let m = {
    primary: S.colorPrimary,
    secondary: S.colorSecondary,
    warning: S.colorWarning,
    error: S.colorError
  },
  E = {
    small: S.small,
    large: S.large,
    none: null
  };
class p extends c.PureComponent {
  render() {
    let {
      icon: e,
      color: t,
      children: r,
      iconSize: s,
      className: l,
      iconClassName: n
    } = this.props;
    return (0, i.jsxs)(d.default, {
      className: u(S.note, m[t], l),
      align: d.default.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: u(S.icon, E[s], n)
      }), (0, i.jsx)("div", {
        children: r
      })]
    })
  }
}
p.Colors = n, p.Sizes = a;
var N = p