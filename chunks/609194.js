var r, s, t, o, a, i = l(735250),
  c = l(470079),
  d = l(120356),
  u = l.n(d),
  m = l(285952),
  E = l(927422);

function N(e, n, l) {
  return n in e ? Object.defineProperty(e, n, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = l, e
}(r = t || (t = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (s = o || (o = {})).SMALL = "small", s.LARGE = "large", s.NONE = "none";
let p = {
    primary: E.colorPrimary,
    secondary: E.colorSecondary,
    warning: E.colorWarning,
    error: E.colorError
  },
  h = {
    small: E.small,
    large: E.large,
    none: null
  };
class x extends(a = c.PureComponent) {
  render() {
    let {
      icon: e,
      color: n,
      children: l,
      iconSize: r,
      className: s,
      iconClassName: t
    } = this.props;
    return (0, i.jsxs)(m.Z, {
      className: u()(E.note, p[n], s),
      align: m.Z.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: u()(E.icon, h[r], t),
        color: "currentColor"
      }), (0, i.jsx)("div", {
        children: l
      })]
    })
  }
}
N(x, "Colors", t), N(x, "Sizes", o), n.Z = x