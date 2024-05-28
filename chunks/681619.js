"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("481060"),
  c = r("151011"),
  s = r("277513");

function d(e) {
  let {
    columns: t,
    rowComponent: r,
    headerClassName: n,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...p
  } = e, g = i.useMemo(() => t.map(e => ({
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [t]);
  return (0, a.jsx)(c.default, {
    ...p,
    columns: g,
    rowComponent: null != r ? r : e => {
      let {
        item: t,
        children: r
      } = e, i = l()(s.tableRow, {
        [s.selectedTableRow]: t.key === h
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
    headerClassName: l()(s.tableHeader, n),
    stickyHeader: null == d || d
  })
}