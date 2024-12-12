r.d(n, {
    X: function () {
        return o;
    }
});
var i = r(829105),
    a = r(150076),
    s = r(695170);
function o(e, n, r, o, l, u) {
    var c = {},
        d = e.accept;
    function f(e, n) {
        r.forEach(function (r) {
            r.between(e, n, !0).forEach(function (e) {
                c[Number(e)] = !0;
            });
        });
    }
    l.forEach(function (e) {
        c[Number(new i.M(e, u).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var n = Number(e);
            return isNaN(n) ? d.call(this, e) : !!c[n] || (f(new Date(n - 1), new Date(n + 1)), !!c[n]) || ((c[n] = !0), d.call(this, e));
        }),
        'between' === e.method &&
            (f(e.args.after, e.args.before),
            (e.accept = function (e) {
                var n = Number(e);
                return !!c[n] || ((c[n] = !0), d.call(this, e));
            }));
    for (var _ = 0; _ < o.length; _++) {
        var h = new i.M(o[_], u).rezonedDate();
        if (!e.accept(new Date(h.getTime()))) break;
    }
    n.forEach(function (n) {
        (0, a.h)(e, n.options);
    });
    var p = e._result;
    switch (((0, s.DY)(p), e.method)) {
        case 'all':
        case 'between':
            return p;
        case 'before':
            return (p.length && p[p.length - 1]) || null;
        default:
            return (p.length && p[0]) || null;
    }
}
