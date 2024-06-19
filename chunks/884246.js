var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(481060),
  o = t(689938),
  c = t(308252);
s.Z = a.forwardRef(function(e, s) {
  let {
    currentPageIndex: t,
    numPages: a,
    onChangePage: i,
    children: u,
    className: d,
    showPageCount: E = !0,
    ..._
  } = e, p = t <= 0, I = t >= a - 1;
  return (0, n.jsxs)("div", {
    className: l()(c.__invalid_paginator, d),
    ref: s,
    ..._,
    children: [u, (0, n.jsxs)("div", {
      className: c.pageActions,
      children: [(0, n.jsx)(r.Clickable, {
        className: l()(c.pageButtonPrev, {
          [c.disabled]: p
        }),
        tabIndex: p ? -1 : 0,
        onClick: p ? void 0 : () => i(t - 1),
        children: (0, n.jsx)(r.ChevronSmallLeftIcon, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": o.Z.Messages.PAGINATION_PREVIOUS
        })
      }), E ? (0, n.jsx)("div", {
        className: c.pageIndicator,
        children: o.Z.Messages.PAGINATOR_OF_PAGES.format({
          currentPage: t + 1,
          numPages: a
        })
      }) : (0, n.jsx)("div", {
        className: c.pageIndicator,
        children: o.Z.Messages.PAGINATOR_CURRENT_PAGE.format({
          currentPage: t + 1
        })
      }), (0, n.jsx)(r.Clickable, {
        className: l()(c.pageButtonNext, {
          [c.disabled]: I
        }),
        tabIndex: I ? -1 : 0,
        onClick: I ? void 0 : () => i(t + 1),
        children: (0, n.jsx)(r.ChevronSmallRightIcon, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": o.Z.Messages.PAGINATION_NEXT
        })
      })]
    })]
  })
})