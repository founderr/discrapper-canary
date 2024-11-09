n.d(t, {
    Z: function () {
        return u;
    }
});
var l = n(913527),
    a = n.n(l),
    r = n(626135),
    i = n(981631);
function u(e, t) {
    r.default.track(i.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > a()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
