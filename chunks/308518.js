"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983"),
  i = s("884691"),
  n = s("895530"),
  r = s("782340"),
  l = s("641784");
class o extends i.PureComponent {
  render() {
    let {
      className: e,
      sku: t
    } = this.props;
    return null == t.legalNotice ? null : (0, a.jsxs)("div", {
      className: e,
      children: [(0, a.jsx)(n.default, {
        children: r.default.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT
      }), (0, a.jsx)("div", {
        className: l.content,
        children: t.legalNotice
      })]
    })
  }
}
var u = o