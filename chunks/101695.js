n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(601173);

function a(e) {
  let {
    changePage: t,
    offset: n,
    totalResults: a,
    pageLength: r
  } = e, o = Math.floor(n / r) + 1;
  return (0, l.jsx)("div", {
    className: s.container,
    children: (0, l.jsx)(i.Paginator, {
      currentPage: o,
      totalCount: a,
      pageSize: r,
      onPageChange: t,
      maxVisiblePages: 5
    })
  })
}