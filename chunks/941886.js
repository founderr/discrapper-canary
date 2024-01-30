"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return v
  },
  EmptyStateText: function() {
    return m
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
  h = n("926622");
let {
  Provider: p,
  Consumer: _
} = s.createContext(f.ThemeTypes.DARK);
class v extends s.PureComponent {
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
    return (0, r.jsx)(_, {
      children: c => (0, r.jsx)(d.default.Child, {
        grow: 0,
        className: u(E.image, h.marginBottom40),
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
let m = e => {
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
      className: u(l, E.text, h.marginTop8),
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
    return (0, r.jsx)(p, {
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
}).Text = m, l.Image = v, i = l