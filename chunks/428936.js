"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  o = l.n(n),
  i = l("399606"),
  r = l("481060"),
  d = l("823596"),
  u = l("201070"),
  C = l("893966"),
  c = l("527379"),
  m = l("689938"),
  E = l("784880");

function f(e) {
  let {
    guildId: t,
    onPageChange: l
  } = e, [n, f] = s.useTransition(), M = (0, i.useStateFromStores)([C.default], () => C.default.getEstimatedMemberSearchCountByGuildId(t), [t]), _ = (0, i.useStateFromStoresObject)([C.default], () => C.default.getPaginationStateByGuildId(t), [t]), h = (0, u.useIsMakingRequest)(t), T = s.useMemo(() => d.PAGINATION_PAGE_SIZE_OPTIONS.map(e => ({
    value: e,
    label: Number(e).toLocaleString()
  })), []), S = new Intl.NumberFormat(m.default.getLocale()).format(M), x = m.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_LABEL.format({
    count: h ? "..." : S
  }), A = M > _.pageSize || h, p = M > d.PAGINATION_PAGE_SIZE_OPTIONS["0"];
  return (0, a.jsxs)("div", {
    className: o()(E.paginationContainer),
    children: [(0, a.jsx)("div", {
      className: o()(E.pageSizeSelection),
      children: p ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: m.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_PRE_LABEL
        }), (0, a.jsx)(r.Select, {
          "aria-label": x,
          className: E.pageSizeInput,
          options: T,
          isSelected: e => e === _.pageSize,
          select: e => {
            f(() => {
              (0, c.updateMemberSafetyTablePagination)(t, {
                ..._,
                pageSize: e
              })
            })
          },
          serialize: e => "".concat(e),
          popoutPosition: "top"
        }), (0, a.jsx)(r.Tooltip, {
          text: m.default.Messages.LOADING,
          shouldShow: h,
          children: e => (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: o()(E.pageLabel),
            ...e,
            children: x
          })
        })]
      }) : (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: m.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_NO_PAGE_NUMBERS_LABEL.format({
          count: M
        })
      })
    }), (0, a.jsx)("div", {
      className: o()(E.pagination),
      children: A && (0, a.jsx)(r.Paginator, {
        className: o()(E.paginationInput),
        totalCount: M,
        pageSize: _.pageSize,
        disablePaginationGap: !0,
        hideMaxPage: !0,
        currentPage: _.currentPage,
        onPageChange: e => {
          null == l || l(e), requestIdleCallback(() => {
            f(() => {
              (0, c.updateMemberSafetyTablePagination)(t, {
                ..._,
                currentPage: e
              })
            })
          })
        },
        maxVisiblePages: d.MAX_VISIBLE_PAGES
      })
    })]
  })
}