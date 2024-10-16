r.d(t, {
    F: function () {
        return l;
    }
});
var n = r(140955),
    a = r(416987),
    _ = r(596308),
    o = r(622574),
    E = r(433691),
    i = r(118182),
    c = r(662355);
let s = [100, 300],
    l = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            let c = (0, a.Y)(),
                l = (0, _.I)('FID'),
                u = (e) => {
                    e.startTime < c.firstHiddenTime && ((l.value = e.processingStart - e.startTime), l.entries.push(e), r(!0));
                },
                I = (e) => {
                    e.forEach(u);
                },
                R = (0, o.N)('first-input', I);
            (r = (0, n._)(e, l, s, t.reportAllChanges)),
                R &&
                    (0, E.u)(
                        (0, i.R)(() => {
                            I(R.takeRecords()), R.disconnect();
                        })
                    );
        });
    };
