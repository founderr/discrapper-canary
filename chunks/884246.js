var s = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(481060),
  l = n(689938),
  c = n(308252);
t.Z = a.forwardRef(function(e, t) {
  let {
    currentPageIndex: n,
    numPages: a,
    onChangePage: i,
    children: d,
    className: u,
    showPageCount: _ = !0,
    ...p
  } = e, m = n <= 0, f = n >= a - 1;
  return (0, s.jsxs)("div", {
    className: o()(c.__invalid_paginator, u),
    ref: t,
    ...p,
    children: [d, (0, s.jsxs)("div", {
      className: c.pageActions,
      children: [(0, s.jsx)(r.Clickable, {
        className: o()(c.pageButtonPrev, {
          [c.disabled]: m
        }),
        tabIndex: m ? -1 : 0,
        onClick: m ? void 0 : () => i(n - 1),
        children: (0, s.jsx)(r.ChevronSmallLeftIcon, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": l.Z.Messages.PAGINATION_PREVIOUS
        })
      }), _ ? (0, s.jsx)("div", {
        className: c.pageIndicator,
        children: l.Z.Messages.PAGINATOR_OF_PAGES.format({
          currentPage: n + 1,
          numPages: a
        })
      }) : (0, s.jsx)("div", {
        className: c.pageIndicator,
        children: l.Z.Messages.PAGINATOR_CURRENT_PAGE.format({
          currentPage: n + 1
        })
      }), (0, s.jsx)(r.Clickable, {
        className: o()(c.pageButtonNext, {
          [c.disabled]: f
        }),
        tabIndex: f ? -1 : 0,
        onClick: f ? void 0 : () => i(n + 1),
        children: (0, s.jsx)(r.ChevronSmallRightIcon, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": l.Z.Messages.PAGINATION_NEXT
        })
      })]
    })]
  })
})