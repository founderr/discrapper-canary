"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  s = r.n(i),
  l = r("692547"),
  o = r("481060"),
  d = r("285952"),
  u = r("4912"),
  c = r("746057");
let m = ["firCount", "nackCount"];
class f extends n.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(e) ? (0, a.jsx)(u.default, {
      color: l.default.unsafe_rawColors.YELLOW_300.css,
      className: c.valueIcon
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: r,
      section: n,
      label: i,
      renderGraph: l
    } = this.props;
    return (0, a.jsxs)(d.default, {
      className: s()(c.item, t),
      direction: d.default.Direction.VERTICAL,
      basis: "50%",
      children: [(0, a.jsxs)(d.default, {
        className: c.kvContainer,
        align: d.default.Align.START,
        children: [(0, a.jsx)(d.default.Child, {
          children: (0, a.jsx)(o.H, {
            className: c.title,
            children: e
          })
        }), Array.isArray(r) ? (0, a.jsx)(d.default.Child, {
          grow: 1,
          children: r
        }) : (0, a.jsxs)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, a.jsx)("span", {
            className: c.itemValue,
            title: r,
            children: r
          })]
        })]
      }), null !== l && (0, a.jsx)(d.default.Child, {
        className: c.graph,
        children: (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: l
        })
      }, null != n ? "".concat(n, "-").concat(i) : i), (0, a.jsx)(o.FormDivider, {
        className: c.divider
      })]
    })
  }
}