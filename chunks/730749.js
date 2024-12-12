r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(626135);
function o(e) {
    var n;
    let r = a.forwardRef((n, r) =>
        (0, i.jsx)(s.AnalyticsContext.Consumer, {
            children: (a) =>
                (0, i.jsx)(e, {
                    ...n,
                    ref: r,
                    analyticsContext: a
                })
        })
    );
    return (r.displayName = 'withAnalyticsContext('.concat(null !== (n = e.displayName) && void 0 !== n ? n : e.name, ')')), r;
}
