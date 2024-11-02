n.d(t, {
    X: function () {
        return s;
    }
});
var r = n(829105),
    i = n(150076),
    a = n(695170);
function s(e, t, n, s, o, l) {
    var u = {},
        c = e.accept;
    function d(e, t) {
        n.forEach(function (n) {
            n.between(e, t, !0).forEach(function (e) {
                u[Number(e)] = !0;
            });
        });
    }
    o.forEach(function (e) {
        u[Number(new r.M(e, l).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var t = Number(e);
            return isNaN(t) ? c.call(this, e) : !!u[t] || (d(new Date(t - 1), new Date(t + 1)), !!u[t]) || ((u[t] = !0), c.call(this, e));
        }),
        'between' === e.method &&
            (d(e.args.after, e.args.before),
            (e.accept = function (e) {
                var t = Number(e);
                return !!u[t] || ((u[t] = !0), c.call(this, e));
            }));
    for (var f = 0; f < s.length; f++) {
        var _ = new r.M(s[f], l).rezonedDate();
        if (!e.accept(new Date(_.getTime()))) break;
    }
    t.forEach(function (t) {
        (0, i.h)(e, t.options);
    });
    var h = e._result;
    switch (((0, a.DY)(h), e.method)) {
        case 'all':
        case 'between':
            return h;
        case 'before':
            return (h.length && h[h.length - 1]) || null;
        default:
            return (h.length && h[0]) || null;
    }
}
