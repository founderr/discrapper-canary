"use strict";
s.r(t);
var i = s("735250"),
  n = s("470079"),
  a = s("803997"),
  l = s.n(a),
  o = s("481060"),
  r = s("285952"),
  d = s("849577"),
  u = s("794711");
class c extends n.PureComponent {
  render() {
    let {
      title: e,
      description: t,
      agreement: s,
      disagreement: n,
      onAgree: a,
      onDisagree: c,
      imageClassName: f
    } = this.props;
    return (0, i.jsxs)(r.default, {
      className: d.gatedContent,
      justify: r.default.Justify.CENTER,
      align: r.default.Align.CENTER,
      direction: r.default.Direction.VERTICAL,
      children: [(0, i.jsx)("div", {
        className: l()(d.image, f)
      }), (0, i.jsx)("div", {
        className: l()(d.title, u.marginBottom8),
        children: e
      }), (0, i.jsx)("div", {
        className: l()(d.description, u.marginBottom20),
        children: t
      }), (0, i.jsxs)(r.default, {
        justify: r.default.Justify.CENTER,
        align: r.default.Align.CENTER,
        grow: 0,
        children: [null != n ? (0, i.jsx)(o.Button, {
          className: d.action,
          size: o.ButtonSizes.LARGE,
          color: o.ButtonColors.PRIMARY,
          onClick: c,
          children: n
        }) : null, null != s ? (0, i.jsx)(o.Button, {
          className: d.action,
          color: o.Button.Colors.RED,
          size: o.ButtonSizes.LARGE,
          onClick: a,
          children: s
        }) : null]
      })]
    })
  }
}
t.default = c