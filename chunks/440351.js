"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var r = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  a = s("77078"),
  u = s("145131"),
  o = s("750457"),
  c = s("890957");
class d extends n.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: s,
      disagreement: n,
      onAgree: i,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, r.jsxs)(u.default, {
      className: o.gatedContent,
      justify: u.default.Justify.CENTER,
      align: u.default.Align.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, r.jsx)("div", {
        className: l(o.image, f)
      }), (0, r.jsx)("div", {
        className: l(o.title, c.marginBottom8),
        children: e
      }), (0, r.jsx)("div", {
        className: l(o.description, c.marginBottom20),
        children: t
      }), (0, r.jsxs)(u.default, {
        justify: u.default.Justify.CENTER,
        align: u.default.Align.CENTER,
        grow: 0,
        children: [null != n ? (0, r.jsx)(a.Button, {
          className: o.action,
          size: a.ButtonSizes.LARGE,
          color: a.ButtonColors.PRIMARY,
          onClick: d,
          children: n
        }) : null, null != s ? (0, r.jsx)(a.Button, {
          className: o.action,
          color: a.Button.Colors.RED,
          size: a.ButtonSizes.LARGE,
          onClick: i,
          children: s
        }) : null]
      })]
    })
  }
}
var f = d