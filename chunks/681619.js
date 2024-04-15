"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
});
var a = t("735250"),
  n = t("470079"),
  i = t("120356"),
  l = t.n(i),
  o = t("481060"),
  s = t("151011"),
  c = t("779869");

function d(e) {
  let {
    columns: r,
    rowComponent: t,
    headerClassName: i,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...p
  } = e, m = n.useMemo(() => r.map(e => ({
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [r]);
  return (0, a.jsx)(s.default, {
    ...p,
    columns: m,
    rowComponent: null != t ? t : e => {
      let {
        item: r,
        children: t
      } = e, n = l()(c.tableRow, {
        [c.selectedTableRow]: r.key === h
      });
      return null != u ? (0, a.jsx)(o.Clickable, {
        className: n,
        onClick: () => u(r.key),
        children: t
      }) : (0, a.jsx)("div", {
        className: n,
        children: t
      })
    },
    headerClassName: l()(c.tableHeader, i),
    stickyHeader: null == d || d
  })
}