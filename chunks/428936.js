t.d(l, {
  Z: function() {
    return _
  }
}), t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(399606),
  r = t(481060),
  C = t(823596),
  c = t(201070),
  d = t(893966),
  u = t(527379),
  E = t(689938),
  m = t(388797);

function _(e) {
  let {
    guildId: l,
    onPageChange: t
  } = e, [a, _] = s.useTransition(), M = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(l), [l]), h = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(l), [l]), x = (0, c.$j)(l), T = s.useMemo(() => C.LU.map(e => ({
    value: e,
    label: Number(e).toLocaleString()
  })), []), L = new Intl.NumberFormat(E.Z.getLocale()).format(M), H = E.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_LABEL.format({
    count: x ? "..." : L
  }), g = M > h.pageSize || x, A = M > C.LU["0"];
  return (0, n.jsxs)("div", {
    className: o()(m.paginationContainer),
    children: [(0, n.jsx)("div", {
      className: o()(m.pageSizeSelection),
      children: A ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: E.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_PRE_LABEL
        }), (0, n.jsx)(r.Select, {
          "aria-label": H,
          className: m.pageSizeInput,
          options: T,
          isSelected: e => e === h.pageSize,
          select: e => {
            _(() => {
              (0, u._o)(l, {
                ...h,
                pageSize: e
              })
            })
          },
          serialize: e => "".concat(e),
          popoutPosition: "top",
          popoutWidth: 72
        }), (0, n.jsx)(r.Tooltip, {
          text: E.Z.Messages.LOADING,
          shouldShow: x,
          children: e => (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: o()(m.pageLabel),
            ...e,
            children: H
          })
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: E.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_NO_PAGE_NUMBERS_LABEL.format({
          count: M
        })
      })
    }), (0, n.jsx)("div", {
      className: o()(m.pagination),
      children: g && (0, n.jsx)(r.Paginator, {
        className: o()(m.paginationInput),
        totalCount: M,
        pageSize: h.pageSize,
        disablePaginationGap: !0,
        hideMaxPage: !0,
        currentPage: h.currentPage,
        onPageChange: e => {
          null == t || t(e), requestIdleCallback(() => {
            _(() => {
              (0, u._o)(l, {
                ...h,
                currentPage: e
              })
            })
          })
        },
        maxVisiblePages: C.hW
      })
    })]
  })
}