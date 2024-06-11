"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("481060"),
  o = n("285952"),
  u = n("659511"),
  c = n("611273");
class d extends r.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: r,
      onAgree: s,
      onDisagree: d,
      imageClassName: f
    } = this.props;
    return (0, i.jsxs)(o.default, {
      className: u.gatedContent,
      justify: o.default.Justify.CENTER,
      align: o.default.Align.CENTER,
      direction: o.default.Direction.VERTICAL,
      children: [(0, i.jsx)("div", {
        className: a()(u.image, f)
      }), (0, i.jsx)("div", {
        className: a()(u.title, c.marginBottom8),
        children: e
      }), (0, i.jsx)("div", {
        className: a()(u.description, c.marginBottom20),
        children: t
      }), (0, i.jsxs)(o.default, {
        justify: o.default.Justify.CENTER,
        align: o.default.Align.CENTER,
        grow: 0,
        children: [null != r ? (0, i.jsx)(l.Button, {
          className: u.action,
          size: l.ButtonSizes.LARGE,
          color: l.ButtonColors.PRIMARY,
          onClick: d,
          children: r
        }) : null, null != n ? (0, i.jsx)(l.Button, {
          className: u.action,
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