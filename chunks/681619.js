"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
});
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("481060"),
  c = t("151011"),
  s = t("779869");

function d(e) {
  let {
    columns: r,
    rowComponent: t,
    headerClassName: l,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...m
  } = e, p = i.useMemo(() => r.map(e => ({
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [r]);
  return (0, a.jsx)(c.default, {
    ...m,
    columns: p,
    rowComponent: null != t ? t : e => {
      let {
        item: r,
        children: t
      } = e, i = n()(s.tableRow, {
        [s.selectedTableRow]: r.key === h
      });
      return null != u ? (0, a.jsx)(o.Clickable, {
        className: i,
        onClick: () => u(r.key),
        children: t
      }) : (0, a.jsx)("div", {
        className: i,
        children: t
      })
    },
    headerClassName: n()(s.tableHeader, l),
    stickyHeader: null == d || d
  })
}