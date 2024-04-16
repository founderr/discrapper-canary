"use strict";
t.r(n), t.d(n, {
  default: function() {
    return C
  }
});
var l = t("735250"),
  a = t("470079"),
  s = t("120356"),
  u = t.n(s),
  o = t("911969"),
  r = t("454585"),
  i = t("937889"),
  d = t("970184"),
  c = t("870456"),
  m = t("308059"),
  p = t("931093");

function f(e) {
  let {
    item: n
  } = e, {
    content: t,
    style: s
  } = n, f = function(e) {
    let n = (0, d.useComponentStateContext)();
    return (0, a.useMemo)(() => {
      let t;
      return null === n ? null : (t = null != n.message ? (0, i.getInitialParserStateFromMessage)(n.message, c.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS) : (0, i.getInitialParserState)({
        channelId: n.channelId,
        renderOptions: c.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS
      }), r.default.parse(e, !0, t))
    }, [e, n])
  }(t);
  return (0, l.jsx)("div", {
    className: u()([p.markup, m.markdownContainer, {
      [m.contextText]: s === o.TextDisplayContentStyle.CONTEXT
    }]),
    children: f
  })
}

function C(e) {
  let {
    items: n,
    className: t
  } = e;
  return (0, l.jsx)("div", {
    className: t,
    children: n.map((e, n) => (0, l.jsx)(f, {
      item: e
    }, n))
  })
}