"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  r = s("378720"),
  l = s("689938"),
  i = s("164870");
class u extends a.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, n.jsxs)("div", {
      className: e,
      children: [(0, n.jsx)(r.default, {
        children: l.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, n.jsx)("div", {
        className: i.content,
        children: t.legalNotice
      })]
    })
  }
}
t.default = u