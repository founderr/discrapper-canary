n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(378664);
function l(e) {
    let { changePage: t, offset: n, totalResults: l, pageLength: r } = e,
        o = Math.floor(n / r) + 1;
    return (0, i.jsx)('div', {
        className: a.container,
        children: (0, i.jsx)(s.Paginator, {
            currentPage: o,
            totalCount: l,
            pageSize: r,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
