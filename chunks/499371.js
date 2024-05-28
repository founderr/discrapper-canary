"use strict";
n.r(t);
var r = n("735250"),
  i = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("481060"),
  u = n("285952"),
  o = n("659511"),
  c = n("611273");
class d extends i.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: i,
      onAgree: s,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, r.jsxs)(u.default, {
      className: o.gatedContent,
      justify: u.default.Justify.CENTER,
      align: u.default.Align.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, r.jsx)("div", {
        className: a()(o.image, f)
      }), (0, r.jsx)("div", {
        className: a()(o.title, c.marginBottom8),
        children: e
      }), (0, r.jsx)("div", {
        className: a()(o.description, c.marginBottom20),
        children: t
      }), (0, r.jsxs)(u.default, {
        justify: u.default.Justify.CENTER,
        align: u.default.Align.CENTER,
        grow: 0,
        children: [null != i ? (0, r.jsx)(l.Button, {
          className: o.action,
          size: l.ButtonSizes.LARGE,
          color: l.ButtonColors.PRIMARY,
          onClick: d,
          children: i
        }) : null, null != n ? (0, r.jsx)(l.Button, {
          className: o.action,
          color: l.Button.Colors.RED,
          size: l.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null]
      })]
    })
  }
}
t.default = d