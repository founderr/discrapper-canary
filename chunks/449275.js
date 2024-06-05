"use strict";
s.r(t);
var a = s("735250"),
  r = s("470079"),
  i = s("378720"),
  n = s("689938"),
  l = s("164870");
class o extends r.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(i.default, {
        children: n.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: l.content,
        children: t.legalNotice
      })]
    })
  }
}
t.default = o