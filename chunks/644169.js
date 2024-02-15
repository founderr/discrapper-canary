"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("77078"),
  u = l("321443"),
  o = l("961523"),
  d = l("351202");

function c(e) {
  let {
    title: t,
    scrollerClassName: l,
    scrollerInnerClassName: s,
    children: c
  } = e, f = n.useRef(null), [m, S] = n.useState(!1), [E, C] = n.useState(!1), h = n.useCallback(() => {
    let {
      current: e
    } = f;
    null != e && (S(!e.isScrolledToTop()), C(!e.isScrolledToBottom()))
  }, []);
  return n.useLayoutEffect(() => h(), []), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: r(d.title, d.scrollWrapper),
      children: [(0, a.jsx)(i.FormTitle, {
        className: o.formItemTitle,
        children: t
      }), (0, a.jsx)(u.default, {
        separator: m
      })]
    }), (0, a.jsx)("div", {
      className: l,
      children: (0, a.jsx)(i.AdvancedScroller, {
        ref: f,
        className: r(d.scrollerInner, s, {
          [d.bottomSeparator]: E
        }),
        onScroll: h,
        children: c
      })
    })]
  })
}