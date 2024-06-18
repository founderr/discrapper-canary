"use strict";
n.d(t, {
  D: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(693789),
  l = n(1561),
  u = n(260034),
  _ = n(463208),
  c = n(481060),
  d = n(889963),
  E = n(689938),
  I = n(708822);

function T(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: s,
    onPageChange: a
  } = e, [c, d] = r.useState(!1), [E, T] = r.useState(null), h = null != E && E >= 1 && E <= n;
  return s ? (0, i.jsx)(u.X, {
    className: I.gap,
    "aria-hidden": !0,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : c ? (0, i.jsx)(_.o, {
    autoFocus: !0,
    className: I.jumpToPageInlineInput,
    size: _.o.Sizes.MINI,
    value: null == E ? "" : "".concat(E),
    onChange: e => {
      let t = parseInt(e);
      if ("" === e || isNaN(t)) {
        T(null);
        return
      }
      T(t)
    },
    onBlur: () => {
      d(!1), T(null)
    },
    onKeyPress: e => {
      "Enter" === e.key && null != E && h && (a(E), d(!1), T(null))
    },
    disabled: s
  }, t.key) : (0, i.jsx)(l.P, {
    onClick: () => d(!0),
    children: (0, i.jsx)(u.X, {
      className: o()(I.roundButton, I.gap),
      "aria-hidden": !0,
      variant: "heading-sm/semibold",
      children: "…"
    })
  }, t.key)
}

function h(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: r,
    maxVisiblePages: s,
    disablePaginationGap: u,
    onPageChange: _,
    hideMaxPage: h = !1,
    className: S
  } = e, f = Math.ceil(n / r);
  return (0, i.jsx)(d.W, {
    totalPageCount: f,
    selectedPage: t,
    maxVisiblePages: s,
    hideMaxPage: h,
    onPageChange: function(e) {
      null != _ && _(e)
    },
    children: function(e) {
      let {
        pages: t,
        hasMultiplePages: n
      } = e;
      return n ? (0, i.jsx)("div", {
        className: o()(I.pageControlContainer, S),
        children: (0, i.jsx)("nav", {
          className: I.pageControl,
          children: t.map(e => {
            var t, n;
            switch (e.type) {
              case d.s.BACK:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(a.zx, {
                    className: I.endButton,
                    innerClassName: I.endButtonInner,
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "prev",
                    children: [(0, i.jsx)(c.ChevronSmallLeftIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.iconCaret,
                      "aria-hidden": !0
                    }), (0, i.jsx)("span", {
                      children: E.Z.Messages.BACK
                    })]
                  }, t)
                }(e);
              case d.s.PAGE:
                ;
                return t = e, (0, i.jsx)(l.P, {
                  className: o()(I.roundButton, {
                    [I.activeButton]: t.selected
                  }),
                  onClick: t.selected ? void 0 : t.navigateToPage,
                  "aria-label": E.Z.Messages.PAGINATION_PAGE_LABEL.format({
                    pageNumber: t.targetPage
                  }),
                  "aria-current": t.selected ? "page" : void 0,
                  children: (0, i.jsx)("span", {
                    children: t.targetPage
                  })
                }, t.key);
              case d.s.GAP:
                ;
                return n = e, (0, i.jsx)(T, {
                  page: n,
                  totalPageCount: f,
                  disabled: !!u,
                  onPageChange: _
                }, n.key);
              case d.s.NEXT:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(a.zx, {
                    className: I.endButton,
                    innerClassName: I.endButtonInner,
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "next",
                    children: [(0, i.jsx)("span", {
                      children: E.Z.Messages.NEXT
                    }), (0, i.jsx)(c.ChevronSmallRightIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.iconCaret,
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