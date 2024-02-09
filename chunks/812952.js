"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var r, i, u, a, l = n("37983"),
  o = n("884691"),
  s = n("414456"),
  c = n.n(s),
  d = n("145131"),
  E = n("298754");
(r = u || (u = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = a || (a = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
let _ = {
    primary: E.colorPrimary,
    secondary: E.colorSecondary,
    warning: E.colorWarning,
    error: E.colorError
  },
  f = {
    small: E.small,
    large: E.large,
    none: null
  };
class T extends o.PureComponent {
  render() {
    let {
      icon: e,
      color: t,
      children: n,
      iconSize: r,
      className: i,
      iconClassName: u
    } = this.props;
    return (0, l.jsxs)(d.default, {
      className: c(E.note, _[t], i),
      align: d.default.Align.CENTER,
      children: [(0, l.jsx)(e, {
        className: c(E.icon, f[r], u)
      }), (0, l.jsx)("div", {
        children: n
      })]
    })
  }
}
T.Colors = u, T.Sizes = a;
var A = T