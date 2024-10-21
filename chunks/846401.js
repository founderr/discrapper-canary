n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var l = n(192379),
    s = n(913527),
    i = n.n(s),
    r = n(848246),
    a = n(442837),
    o = n(846519),
    c = n(114064),
    d = n(689938);
function u(e) {
    return e.toString().padStart(2, '0');
}
function f(e) {
    let t = i().duration(e.diff(i()()));
    return ''.concat(u(t.hours()), ':').concat(u(t.minutes()), ':').concat(u(t.seconds()));
}
function h() {
    let [e, t] = l.useState(f(i()(c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)))),
        n = (0, a.e7)([c.Z], () => c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)),
        s = l.useMemo(() => i()(n), [n]),
        u = l.useRef(new o.Xp()),
        h = l.useCallback(() => {
            t(f(s));
        }, [s]);
    return (
        l.useEffect(() => {
            let e = i().duration(s.diff(i()()));
            1 > e.seconds() ? (t('00:00:00'), u.current.stop()) : 1 > e.days() ? (h(), u.current.start(1000, h)) : (t(d.Z.Messages.HUMANIZE_DURATION_DAYS.format({ time: Math.floor(e.asDays()) })), u.current.stop());
        }, [s, h]),
        e
    );
}
