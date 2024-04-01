"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("285952"),
  u = n("849577"),
  d = n("794711");
class c extends l.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: n,
      disagreement: l,
      onAgree: s,
      onDisagree: c,
      imageClassName: f
    } = this.props;
    return (0, a.jsxs)(o.default, {
      className: u.gatedContent,
      justify: o.default.Justify.CENTER,
      align: o.default.Align.CENTER,
      direction: o.default.Direction.VERTICAL,
      children: [(0, a.jsx)("div", {
        className: i()(u.image, f)
      }), (0, a.jsx)("div", {
        className: i()(u.title, d.marginBottom8),
        children: e
      }), (0, a.jsx)("div", {
        className: i()(u.description, d.marginBottom20),
        children: t
      }), (0, a.jsxs)(o.default, {
        justify: o.default.Justify.CENTER,
        align: o.default.Align.CENTER,
        grow: 0,
        children: [null != l ? (0, a.jsx)(r.Button, {
          className: u.action,
          size: r.ButtonSizes.LARGE,
          color: r.ButtonColors.PRIMARY,
          onClick: c,
          children: l
        }) : null, null != n ? (0, a.jsx)(r.Button, {
          className: u.action,
          color: r.Button.Colors.RED,
          size: r.ButtonSizes.LARGE,
          onClick: s,
          children: n
        }) : null]
      })]
    })
  }
}
t.default = c