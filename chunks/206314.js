r.d(t, {
  Z: function() {
    return p
  }
});
var n = r(735250),
  a = r(470079),
  i = r(120356),
  s = r.n(i),
  o = r(692547),
  l = r(481060),
  c = r(285952),
  d = r(4912),
  u = r(16281);
let m = ["firCount", "nackCount"];
class p extends a.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(e) ? (0, n.jsx)(d.Z, {
      color: o.Z.unsafe_rawColors.YELLOW_300.css,
      className: u.valueIcon
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: r,
      section: a,
      label: i,
      renderGraph: o
    } = this.props;
    return (0, n.jsxs)(c.Z, {
      className: s()(u.item, t),
      direction: c.Z.Direction.VERTICAL,
      basis: "50%",
      children: [(0, n.jsxs)(c.Z, {
        className: u.kvContainer,
        align: c.Z.Align.START,
        children: [(0, n.jsx)(c.Z.Child, {
          children: (0, n.jsx)(l.H, {
            className: u.title,
            children: e
          })
        }), Array.isArray(r) ? (0, n.jsx)(c.Z.Child, {
          grow: 1,
          children: r
        }) : (0, n.jsxs)(c.Z.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, n.jsx)("span", {
            className: u.itemValue,
            title: r,
            children: r
          })]
        })]
      }), null !== o && (0, n.jsx)(c.Z.Child, {
        className: u.graph,
        children: (0, n.jsx)(l.FormText, {
          type: l.FormTextTypes.DESCRIPTION,
          children: o
        })
      }, null != a ? "".concat(a, "-").concat(i) : i), (0, n.jsx)(l.FormDivider, {
        className: u.divider
      })]
    })
  }
}