r.d(t, {
    m: function () {
        return s;
    }
});
var n = r(140955),
    a = r(596308),
    _ = r(622574),
    o = r(433691),
    E = r(118182),
    i = r(825321);
let c = [0.1, 0.25],
    s = (e, t = {}) => {
        (0, i.a)(
            (0, E.R)(() => {
                let r;
                let E = (0, a.I)('CLS', 0),
                    i = 0,
                    s = [],
                    l = (e) => {
                        e.forEach((e) => {
                            if (!e.hadRecentInput) {
                                let t = s[0],
                                    r = s[s.length - 1];
                                i && t && r && e.startTime - r.startTime < 1000 && e.startTime - t.startTime < 5000 ? ((i += e.value), s.push(e)) : ((i = e.value), (s = [e]));
                            }
                        }),
                            i > E.value && ((E.value = i), (E.entries = s), r());
                    },
                    u = (0, _.N)('layout-shift', l);
                u &&
                    ((r = (0, n._)(e, E, c, t.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), r(!0);
                    }),
                    setTimeout(r, 0));
            })
        );
    };
