"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("481060"),
  o = s("292937"),
  u = s("692437"),
  d = s("689938"),
  c = s("560951");
t.default = n.forwardRef(function(e, t) {
  let {
    currentPageIndex: s,
    numPages: n,
    onChangePage: i,
    children: p,
    className: f,
    showPageCount: E = !0,
    ...m
  } = e, _ = s <= 0, S = s >= n - 1;
  return (0, a.jsxs)("div", {
    className: l()(c.__invalid_paginator, f),
    ref: t,
    ...m,
    children: [p, (0, a.jsxs)("div", {
      className: c.pageActions,
      children: [(0, a.jsx)(r.Clickable, {
        className: l()(c.pageButtonPrev, {
          [c.disabled]: _
        }),
        tabIndex: _ ? -1 : 0,
        onClick: _ ? void 0 : () => i(s - 1),
        children: (0, a.jsx)(o.default, {
          className: c.pageButtonIcon,
          "aria-label": d.default.Messages.PAGINATION_PREVIOUS
        })
      }), E ? (0, a.jsx)("div", {
        className: c.pageIndicator,
        children: d.default.Messages.PAGINATOR_OF_PAGES.format({
          currentPage: s + 1,
          numPages: n
        })
      }) : (0, a.jsx)("div", {
        className: c.pageIndicator,
        children: d.default.Messages.PAGINATOR_CURRENT_PAGE.format({
          currentPage: s + 1
        })
      }), (0, a.jsx)(r.Clickable, {
        className: l()(c.pageButtonNext, {
          [c.disabled]: S
        }),
        tabIndex: S ? -1 : 0,
        onClick: S ? void 0 : () => i(s + 1),
        children: (0, a.jsx)(u.default, {
          className: c.pageButtonIcon,
          "aria-label": d.default.Messages.PAGINATION_NEXT
        })
      })]
    })]
  })
})