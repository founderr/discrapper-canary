r.d(t, {
    a: function () {
        return s;
    }
});
var n = r(140955),
    a = r(202937),
    _ = r(416987),
    o = r(596308),
    E = r(622574),
    i = r(662355);
let c = [1800, 3000],
    s = (e, t = {}) => {
        (0, i.A)(() => {
            let r;
            let i = (0, _.Y)(),
                s = (0, o.I)('FCP'),
                l = (0, E.N)('paint', (e) => {
                    e.forEach((e) => {
                        'first-contentful-paint' === e.name && (l.disconnect(), e.startTime < i.firstHiddenTime && ((s.value = Math.max(e.startTime - (0, a.A)(), 0)), s.entries.push(e), r(!0)));
                    });
                });
            l && (r = (0, n._)(e, s, c, t.reportAllChanges));
        });
    };
