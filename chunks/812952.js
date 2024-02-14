"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var r, i, a, u, l = n("37983"),
  o = n("884691"),
  s = n("414456"),
  c = n.n(s),
  d = n("145131"),
  E = n("138592");
(r = a || (a = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = u || (u = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
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
      iconClassName: a
    } = this.props;
    return (0, l.jsxs)(d.default, {
      className: c(E.note, _[t], i),
      align: d.default.Align.CENTER,
      children: [(0, l.jsx)(e, {
        className: c(E.icon, f[r], a)
      }), (0, l.jsx)("div", {
        children: n
      })]
    })
  }
}
T.Colors = a, T.Sizes = u;
var A = T