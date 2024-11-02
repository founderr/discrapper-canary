n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var l = n(192379),
    i = n(913527),
    r = n.n(i),
    s = n(848246),
    a = n(442837),
    o = n(846519),
    c = n(114064),
    d = n(388032);
function u(e) {
    return e.toString().padStart(2, '0');
}
function f(e) {
    let t = r().duration(e.diff(r()()));
    return ''.concat(u(t.hours()), ':').concat(u(t.minutes()), ':').concat(u(t.seconds()));
}
function h() {
    let [e, t] = l.useState(f(r()(c.Z.activatedEndTime(s.q.STREAM_HIGH_QUALITY)))),
        n = (0, a.e7)([c.Z], () => c.Z.activatedEndTime(s.q.STREAM_HIGH_QUALITY)),
        i = l.useMemo(() => r()(n), [n]),
        u = l.useRef(new o.Xp()),
        h = l.useCallback(() => {
            t(f(i));
        }, [i]);
    return (
        l.useEffect(() => {
            let e = r().duration(i.diff(r()()));
            1 > e.seconds() ? (t('00:00:00'), u.current.stop()) : 1 > e.days() ? (h(), u.current.start(1000, h)) : (t(d.intl.formatToPlainString(d.t['x+Dvys'], { time: Math.floor(e.asDays()) })), u.current.stop());
        }, [i, h]),
        e
    );
}
