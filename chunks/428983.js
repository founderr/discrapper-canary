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
    s = r(135813),
    l = r(662355);
let u = [2500, 4000],
    I = {},
    R = (e, t = {}) => {
        (0, l.A)(() => {
            let r;
            let l = (0, o.Y)(),
                R = (0, i.I)('LCP'),
                N = (e) => {
                    let t = e[e.length - 1];
                    t && t.startTime < l.firstHiddenTime && ((R.value = Math.max(t.startTime - (0, _.A)(), 0)), (R.entries = [t]), r());
                },
                A = (0, E.N)('largest-contentful-paint', N);
            if (A) {
                r = (0, a._)(e, R, u, t.reportAllChanges);
                let _ = (0, s.R)(() => {
                    !I[R.id] && (N(A.takeRecords()), A.disconnect(), (I[R.id] = !0), r(!0));
                });
                ['keydown', 'click'].forEach((e) => {
                    n.m.document && addEventListener(e, () => setTimeout(_, 0), !0);
                }),
                    (0, c.u)(_);
            }
        });
    };
