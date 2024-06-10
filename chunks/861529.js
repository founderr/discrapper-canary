"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("120356"),
  i = n.n(u),
  s = n("454585"),
  o = n("937889"),
  r = n("970184"),
  d = n("870456"),
  c = n("918943"),
  p = n("946278");

function m(e) {
  let {
    content: t,
    className: n
  } = e, u = function(e) {
    let t = (0, r.useComponentStateContext)();
    return (0, a.useMemo)(() => {
      let n;
      return null === t ? null : (n = null != t.message ? (0, o.getInitialParserStateFromMessage)(t.message, d.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS) : (0, o.getInitialParserState)({
        channelId: t.channelId,
        renderOptions: d.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS
      }), s.default.parse(e, !0, n))
    }, [e, t])
  }(t);
  return (0, l.jsx)("div", {
    className: i()([n, p.markup, c.markdownContainer]),
    children: u
  })
}