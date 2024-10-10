r.d(t, {
    F: function () {
        return I;
    }
});
var n = r(140955),
    a = r(416987),
    _ = r(596308),
    o = r(622574),
    i = r(433691),
    E = r(118182),
    c = r(662355);
let s = [100, 300],
    I = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            let c = (0, a.Y)(),
                I = (0, _.I)('FID'),
                u = (e) => {
                    e.startTime < c.firstHiddenTime && ((I.value = e.processingStart - e.startTime), I.entries.push(e), r(!0));
                },
                l = (e) => {
                    e.forEach(u);
                },
                R = (0, o.N)('first-input', l);
            (r = (0, n._)(e, I, s, t.reportAllChanges)),
                R &&
                    (0, i.u)(
                        (0, E.R)(() => {
                            l(R.takeRecords()), R.disconnect();
                        })
                    );
        });
    };
