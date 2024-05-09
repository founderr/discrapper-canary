"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("481060"),
  u = l("958707"),
  o = l("555066"),
  d = l("716976");

function c(e) {
  let {
    title: t,
    scrollerClassName: l,
    scrollerInnerClassName: s,
    children: c
  } = e, f = n.useRef(null), [m, S] = n.useState(!1), [E, _] = n.useState(!1), C = n.useCallback(() => {
    let {
      current: e
    } = f;
    null != e && (S(!e.isScrolledToTop()), _(!e.isScrolledToBottom()))
  }, []);
  return n.useLayoutEffect(() => C(), []), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(d.title, d.scrollWrapper),
      children: [(0, a.jsx)(r.FormTitle, {
        className: o.formItemTitle,
        children: t
      }), (0, a.jsx)(u.default, {
        separator: m
      })]
    }), (0, a.jsx)("div", {
      className: l,
      children: (0, a.jsx)(r.AdvancedScroller, {
        ref: f,
        className: i()(d.scrollerInner, s, {
          [d.bottomSeparator]: E
        }),
        onScroll: C,
        children: c
      })
    })]
  })
}