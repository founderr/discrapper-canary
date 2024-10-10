r.d(t, {
    N: function () {
        return R;
    }
});
var n = r(395848),
    a = r(140955),
    _ = r(202937),
    o = r(416987),
    i = r(596308),
    E = r(622574),
    c = r(433691),
    s = r(118182),
    I = r(662355);
let u = [2500, 4000],
    l = {},
    R = (e, t = {}) => {
        (0, I.A)(() => {
            let r;
            let I = (0, o.Y)(),
                R = (0, i.I)('LCP'),
                A = (e) => {
                    let t = e[e.length - 1];
                    t && t.startTime < I.firstHiddenTime && ((R.value = Math.max(t.startTime - (0, _.A)(), 0)), (R.entries = [t]), r());
                },
                T = (0, E.N)('largest-contentful-paint', A);
            if (T) {
                r = (0, a._)(e, R, u, t.reportAllChanges);
                let _ = (0, s.R)(() => {
                    !l[R.id] && (A(T.takeRecords()), T.disconnect(), (l[R.id] = !0), r(!0));
                });
                ['keydown', 'click'].forEach((e) => {
                    n.m.document && addEventListener(e, () => setTimeout(_, 0), !0);
                }),
                    (0, c.u)(_);
            }
        });
    };
