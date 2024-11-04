r.d(t, {
    m: function () {
        return s;
    }
});
var n = r(140955),
    a = r(596308),
    _ = r(622574),
    o = r(433691),
    i = r(135813),
    E = r(825321);
let c = [0.1, 0.25],
    s = (e, t = {}) => {
        (0, E.a)(
            (0, i.R)(() => {
                let r;
                let i = (0, a.I)('CLS', 0),
                    E = 0,
                    s = [],
                    l = (e) => {
                        e.forEach((e) => {
                            if (!e.hadRecentInput) {
                                let t = s[0],
                                    r = s[s.length - 1];
                                E && t && r && e.startTime - r.startTime < 1000 && e.startTime - t.startTime < 5000 ? ((E += e.value), s.push(e)) : ((E = e.value), (s = [e]));
                            }
                        }),
                            E > i.value && ((i.value = E), (i.entries = s), r());
                    },
                    u = (0, _.N)('layout-shift', l);
                u &&
                    ((r = (0, n._)(e, i, c, t.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), r(!0);
                    }),
                    setTimeout(r, 0));
            })
        );
    };
