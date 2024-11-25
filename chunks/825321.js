r.d(t, {
    a: function () {
        return s;
    }
});
var n = r(140955),
    a = r(202937),
    _ = r(416987),
    o = r(596308),
    i = r(622574),
    E = r(873712);
let c = [1800, 3000],
    s = (e, t = {}) => {
        (0, E.A)(() => {
            let r;
            let E = (0, _.Y)(),
                s = (0, o.I)('FCP'),
                l = (0, i.N)('paint', (e) => {
                    e.forEach((e) => {
                        'first-contentful-paint' === e.name && (l.disconnect(), e.startTime < E.firstHiddenTime && ((s.value = Math.max(e.startTime - (0, a.A)(), 0)), s.entries.push(e), r(!0)));
                    });
                });
            l && (r = (0, n._)(e, s, c, t.reportAllChanges));
        });
    };
