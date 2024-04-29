"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  o = n.n(s),
  u = n("911969"),
  r = n("454585"),
  i = n("937889"),
  d = n("970184"),
  c = n("870456"),
  m = n("787076"),
  p = n("990291");

function f(e) {
  let {
    item: t
  } = e, {
    content: n,
    style: s
  } = t, f = function(e) {
    let t = (0, d.useComponentStateContext)();
    return (0, a.useMemo)(() => {
      let n;
      return null === t ? null : (n = null != t.message ? (0, i.getInitialParserStateFromMessage)(t.message, c.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS) : (0, i.getInitialParserState)({
        channelId: t.channelId,
        renderOptions: c.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS
      }), r.default.parse(e, !0, n))
    }, [e, t])
  }(n);
  return (0, l.jsx)("div", {
    className: o()([p.markup, m.markdownContainer, {
      [m.contextText]: s === u.TextDisplayContentStyle.CONTEXT
    }]),
    children: f
  })
}

function C(e) {
  let {
    items: t,
    className: n
  } = e;
  return (0, l.jsx)("div", {
    className: n,
    children: t.map((e, t) => (0, l.jsx)(f, {
      item: e
    }, t))
  })
}