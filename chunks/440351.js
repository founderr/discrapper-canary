"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var s = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  a = r("77078"),
  u = r("145131"),
  o = r("750457"),
  c = r("890957");
class d extends n.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: r,
      disagreement: n,
      onAgree: i,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, s.jsxs)(u.default, {
      className: o.gatedContent,
      justify: u.default.Justify.CENTER,
      align: u.default.Align.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, s.jsx)("div", {
        className: l(o.image, f)
      }), (0, s.jsx)("div", {
        className: l(o.title, c.marginBottom8),
        children: e
      }), (0, s.jsx)("div", {
        className: l(o.description, c.marginBottom20),
        children: t
      }), (0, s.jsxs)(u.default, {
        justify: u.default.Justify.CENTER,
        align: u.default.Align.CENTER,
        grow: 0,
        children: [null != n ? (0, s.jsx)(a.Button, {
          className: o.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: d,
          children: n
        }) : null, null != r ? (0, s.jsx)(a.Button, {
          className: o.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: i,
          children: r
        }) : null]
      })]
    })
  }
}
var f = d