n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(913527),
    r = n.n(i),
    s = n(626135),
    l = n(981631);
function a(e, t) {
    s.default.track(l.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > r()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
