"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("222007");
var n = l("37983"),
  s = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("77078"),
  u = l("321443"),
  o = l("770420"),
  d = l("348004");

function c(e) {
  let {
    title: t,
    scrollerClassName: l,
    scrollerInnerClassName: a,
    children: c
  } = e, f = s.useRef(null), [m, S] = s.useState(!1), [h, C] = s.useState(!1), E = s.useCallback(() => {
    let {
      current: e
    } = f;
    null != e && (S(!e.isScrolledToTop()), C(!e.isScrolledToBottom()))
  }, []);
  return s.useLayoutEffect(() => E(), []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: r(d.title, d.scrollWrapper),
      children: [(0, n.jsx)(i.FormTitle, {
        className: o.formItemTitle,
        children: t
      }), (0, n.jsx)(u.default, {
        separator: m
      })]
    }), (0, n.jsx)("div", {
      className: l,
      children: (0, n.jsx)(i.AdvancedScroller, {
        ref: f,
        className: r(d.scrollerInner, a, {
          [d.bottomSeparator]: h
        }),
        onScroll: E,
        children: c
      })
    })]
  })
}