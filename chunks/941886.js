"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return _
  },
  EmptyStateText: function() {
    return p
  },
  default: function() {
    return i
  }
});
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("819855"),
  d = n("77078"),
  c = n("145131"),
  f = n("49111"),
  h = n("177914"),
  I = n("890957");
let {
  Provider: g,
  Consumer: E
} = s.createContext(f.ThemeTypes.DARK);
class _ extends s.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: l,
      offsetX: i,
      offsetY: s,
      style: r
    } = this.props;
    return (0, a.jsx)(E, {
      children: d => (0, a.jsx)(c.default.Child, {
        grow: 0,
        className: u(h.image, I.marginBottom40),
        style: {
          ...r,
          width: n,
          height: l,
          marginLeft: i,
          marginTop: s,
          backgroundImage: "url(".concat((0, o.isThemeDark)(d) ? t : e, ")")
        }
      })
    })
  }
}
let p = e => {
  let {
    children: t,
    className: n,
    noteClassName: l,
    note: i,
    style: s
  } = e;
  return (0, a.jsxs)(c.default.Child, {
    grow: 0,
    direction: c.default.Direction.VERTICAL,
    style: s,
    children: [null != t && (0, a.jsx)(d.H, {
      className: u(n, h.title),
      children: t
    }), null != i ? (0, a.jsx)("div", {
      className: u(l, h.text, I.marginTop8),
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
    return (0, a.jsx)(g, {
      value: t,
      children: (0, a.jsx)(c.default, {
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        className: u(h.wrapper, n),
        style: l,
        children: e
      })
    })
  }
}).Text = p, l.Image = _, i = l