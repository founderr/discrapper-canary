"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("481060"),
  s = r("151011"),
  c = r("893048");

function d(e) {
  let {
    columns: t,
    rowComponent: r,
    headerClassName: l,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...m
  } = e, p = i.useMemo(() => t.map(e => ({
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [t]);
  return (0, a.jsx)(s.default, {
    ...m,
    columns: p,
    rowComponent: null != r ? r : e => {
      let {
        item: t,
        children: r
      } = e, i = n()(c.tableRow, {
        [c.selectedTableRow]: t.key === h
      });
      return null != u ? (0, a.jsx)(o.Clickable, {
        className: i,
        onClick: () => u(t.key),
        children: r
      }) : (0, a.jsx)("div", {
        className: i,
        children: r
      })
    },
    headerClassName: n()(c.tableHeader, l),
    stickyHeader: null == d || d
  })
}