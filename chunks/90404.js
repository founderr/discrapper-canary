"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("77078"),
  o = n("145131"),
  u = n("324127");
class d extends r.PureComponent {
  render() {
    let {
      note: e,
      title: t,
      action: n,
      className: r
    } = this.props;
    return (0, a.jsx)("div", {
      className: i(u.wrapper, r),
      children: (0, a.jsxs)(o.default, {
        className: u.flexWrapper,
        direction: o.default.Direction.VERTICAL,
        align: o.default.Align.CENTER,
        justify: o.default.Justify.CENTER,
        children: [(0, a.jsx)(o.default.Child, {
          grow: 0,
          className: u.image
        }), (0, a.jsxs)(o.default.Child, {
          grow: 0,
          className: u.text,
          children: [(0, a.jsx)(l.H, {
            className: u.title,
            children: t
          }), null != e ? (0, a.jsx)("div", {
            className: u.note,
            children: e
          }) : null]
        }), n]
      })
    })
  }
}
var c = d