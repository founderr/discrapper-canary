t.d(r, {
  Z: function() {
    return d
  }
});
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(481060),
  c = t(151011),
  s = t(719556);

function d(e) {
  let {
    columns: r,
    rowComponent: t,
    headerClassName: n,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...m
  } = e, g = i.useMemo(() => r.map(e => ({
    renderHeader: () => (0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [r]);
  return (0, a.jsx)(c.Z, {
    ...m,
    columns: g,
    rowComponent: null != t ? t : e => {
      let {
        item: r,
        children: t
      } = e, i = o()(s.tableRow, {
        [s.selectedTableRow]: r.key === h
      });
      return null != u ? (0, a.jsx)(l.Clickable, {
        className: i,
        onClick: () => u(r.key),
        children: t
      }) : (0, a.jsx)("div", {
        className: i,
        children: t
      })
    },
    headerClassName: o()(s.tableHeader, n),
    stickyHeader: null == d || d
  })
}