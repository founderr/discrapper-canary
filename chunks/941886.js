"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return m
  },
  EmptyStateText: function() {
    return S
  },
  default: function() {
    return i
  }
});
var l, i, r = n("37983"),
  s = n("884691"),
  o = n("414456"),
  u = n.n(o),
  a = n("819855"),
  c = n("77078"),
  d = n("145131"),
  f = n("49111"),
  E = n("430098"),
  _ = n("926622");
let {
  Provider: h,
  Consumer: p
} = s.createContext(f.ThemeTypes.DARK);
class m extends s.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: l,
      offsetX: i,
      offsetY: s,
      style: o
    } = this.props;
    return (0, r.jsx)(p, {
      children: c => (0, r.jsx)(d.default.Child, {
        grow: 0,
        className: u(E.image, _.marginBottom40),
        style: {
          ...o,
          width: n,
          height: l,
          marginLeft: i,
          marginTop: s,
          backgroundImage: "url(".concat((0, a.isThemeDark)(c) ? t : e, ")")
        }
      })
    })
  }
}
let S = e => {
  let {
    children: t,
    className: n,
    noteClassName: l,
    note: i,
    style: s
  } = e;
  return (0, r.jsxs)(d.default.Child, {
    grow: 0,
    direction: d.default.Direction.VERTICAL,
    style: s,
    children: [null != t && (0, r.jsx)(c.H, {
      className: u(n, E.title),
      children: t
    }), null != i ? (0, r.jsx)("div", {
      className: u(l, E.text, _.marginTop8),
      children: i
    }) : null]
  })
};
(l = class extends s.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: l
    } = this.props;
    return (0, r.jsx)(h, {
      value: t,
      children: (0, r.jsx)(d.default, {
        direction: d.default.Direction.VERTICAL,
        align: d.default.Align.CENTER,
        justify: d.default.Justify.CENTER,
        className: u(E.wrapper, n),
        style: l,
        children: e
      })
    })
  }
}).Text = S, l.Image = m, i = l