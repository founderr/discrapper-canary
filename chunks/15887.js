var n, i = t(735250),
  a = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(285952),
  c = t(32767);

function E(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class d extends(n = a.PureComponent) {
  render() {
    let {
      children: e,
      className: s,
      onMouseEnter: t,
      onMouseLeave: n
    } = this.props;
    return (0, i.jsx)("div", {
      className: r()(c.card, s),
      onMouseEnter: t,
      onMouseLeave: n,
      children: e
    })
  }
}
E(d, "Header", e => {
  let {
    children: s,
    className: t,
    splashArtURL: n
  } = e;
  return (0, i.jsxs)(o.Z, {
    className: r()(c.header, t),
    align: o.Z.Align.CENTER,
    children: [(0, i.jsx)("div", {
      className: c.splashArt,
      style: null != n ? {
        backgroundImage: "url(".concat(n, ")")
      } : void 0
    }), s]
  })
}), E(d, "Body", e => {
  let {
    children: s,
    className: t
  } = e;
  return (0, i.jsx)("div", {
    className: r()(c.body, t),
    children: s
  })
}), s.Z = d