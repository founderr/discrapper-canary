n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(378664);
function s(e) {
    let { changePage: t, offset: n, totalResults: s, pageLength: a } = e,
        o = Math.floor(n / a) + 1;
    return (0, i.jsx)('div', {
        className: r.container,
        children: (0, i.jsx)(l.Paginator, {
            currentPage: o,
            totalCount: s,
            pageSize: a,
            onPageChange: t,
            maxVisiblePages: 5
        })
    });
}
