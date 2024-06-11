"use strict";
n.r(t), n.d(t, {
  EmptyState: function() {
    return S
  },
  EmptyStateImage: function() {
    return T
  },
  EmptyStateText: function() {
    return f
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("780384"),
  l = n("481060"),
  u = n("285952"),
  d = n("981631"),
  _ = n("85391"),
  c = n("611273");
let {
  Provider: E,
  Consumer: I
} = r.createContext(d.ThemeTypes.DARK);
class T extends r.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: r,
      offsetX: s,
      offsetY: l,
      style: d
    } = this.props;
    return (0, i.jsx)(I, {
      children: E => (0, i.jsx)(u.default.Child, {
        grow: 0,
        className: a()(_.image, c.marginBottom40),
        style: {
          ...d,
          width: n,
          height: r,
          marginLeft: s,
          marginTop: l,
          backgroundImage: "url(".concat((0, o.isThemeDark)(E) ? t : e, ")")
        }
      })
    })
  }
}
let f = e => {
  let {
    children: t,
    className: n,
    noteClassName: r,
    note: s,
    style: o
  } = e;
  return (0, i.jsxs)(u.default.Child, {
    grow: 0,
    direction: u.default.Direction.VERTICAL,
    style: o,
    children: [null != t && (0, i.jsx)(l.H, {
      className: a()(n, _.title),
      children: t
    }), null != s ? (0, i.jsx)("div", {
      className: a()(r, _.text, c.marginTop8),
      children: s
    }) : null]
  })
};
class S extends r.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: r
    } = this.props;
    return (0, i.jsx)(E, {
      value: t,
      children: (0, i.jsx)(u.default, {
        direction: u.default.Direction.VERTICAL,
        align: u.default.Align.CENTER,
        justify: u.default.Justify.CENTER,
        className: a()(_.wrapper, n),
        style: r,
        children: e
      })
    })
  }
}