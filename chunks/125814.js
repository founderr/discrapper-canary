"use strict";
n.r(t), n.d(t, {
  Paginator: function() {
    return m
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("271841"),
  l = n("227645"),
  u = n("605451"),
  c = n("240353"),
  d = n("980428"),
  p = n("772280"),
  h = n("21872"),
  f = n("782340"),
  E = n("546933");

function _(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: s,
    onPageChange: o
  } = e, [d, p] = r.useState(!1), [h, f] = r.useState(null), _ = null != h && h >= 1 && h <= n;
  return s ? (0, i.jsx)(u.Heading, {
    className: E.gap,
    "aria-hidden": !0,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : d ? (0, i.jsx)(c.TextInput, {
    autoFocus: !0,
    className: E.jumpToPageInlineInput,
    size: c.TextInput.Sizes.MINI,
    value: null == h ? "" : "".concat(h),
    onChange: e => {
      let t = parseInt(e);
      if ("" === e || isNaN(t)) {
        f(null);
        return
      }
      f(t)
    },
    onBlur: () => {
      p(!1), f(null)
    },
    onKeyPress: e => {
      "Enter" === e.key && null != h && _ && (o(h), p(!1), f(null))
    },
    disabled: s
  }, t.key) : (0, i.jsx)(l.Clickable, {
    onClick: () => p(!0),
    children: (0, i.jsx)(u.Heading, {
      className: a(E.roundButton, E.gap),
      "aria-hidden": !0,
      variant: "heading-sm/semibold",
      children: "…"
    })
  }, t.key)
}

function m(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: r,
    maxVisiblePages: s,
    disablePaginationGap: u,
    onPageChange: c,
    hideMaxPage: m = !1,
    className: S
  } = e, g = Math.ceil(n / r);
  return (0, i.jsx)(h.PaginationController, {
    totalPageCount: g,
    selectedPage: t,
    maxVisiblePages: s,
    hideMaxPage: m,
    onPageChange: function(e) {
      null != c && c(e)
    },
    children: function(e) {
      let {
        pages: t,
        hasMultiplePages: n
      } = e;
      return n ? (0, i.jsx)("div", {
        className: a(E.pageControlContainer, S),
        children: (0, i.jsx)("nav", {
          className: E.pageControl,
          children: t.map(e => {
            var t, n;
            switch (e.type) {
              case h.PaginationTypes.BACK:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(o.Button, {
                    className: E.endButton,
                    innerClassName: E.endButtonInner,
                    look: o.Button.Looks.BLANK,
                    color: o.Button.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "prev",
                    children: [(0, i.jsx)(d.default, {
                      className: E.iconCaret,
                      "aria-hidden": !0
                    }), (0, i.jsx)("span", {
                      children: f.default.Messages.BACK
                    })]
                  }, t)
                }(e);
              case h.PaginationTypes.PAGE:
                ;
                return t = e, (0, i.jsx)(l.Clickable, {
                  className: a(E.roundButton, {
                    [E.activeButton]: t.selected
                  }),
                  onClick: t.selected ? void 0 : t.navigateToPage,
                  "aria-label": f.default.Messages.PAGINATION_PAGE_LABEL.format({
                    pageNumber: t.targetPage
                  }),
                  "aria-current": t.selected ? "page" : void 0,
                  children: (0, i.jsx)("span", {
                    children: t.targetPage
                  })
                }, t.key);
              case h.PaginationTypes.GAP:
                ;
                return n = e, (0, i.jsx)(_, {
                  page: n,
                  totalPageCount: g,
                  disabled: !!u,
                  onPageChange: c
                }, n.key);
              case h.PaginationTypes.NEXT:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(o.Button, {
                    className: E.endButton,
                    innerClassName: E.endButtonInner,
                    look: o.Button.Looks.BLANK,
                    color: o.Button.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "next",
                    children: [(0, i.jsx)("span", {
                      children: f.default.Messages.NEXT
                    }), (0, i.jsx)(p.default, {
                      className: E.iconCaret,
                      "aria-hidden": !0
                    })]
                  }, t)
                }(e);
              default:
                return null
            }
          })
        })
      }) : null
    }
  })
}