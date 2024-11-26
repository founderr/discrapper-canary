n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(913527),
    a = n.n(r),
    l = n(626135),
    o = n(981631);
function i(e, t) {
    l.default.track(o.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > a()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
