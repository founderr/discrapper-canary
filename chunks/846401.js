t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var l = t(192379),
    i = t(913527),
    s = t.n(i),
    r = t(848246),
    a = t(442837),
    o = t(846519),
    u = t(114064),
    c = t(388032);
function d(e) {
    return e.toString().padStart(2, '0');
}
function m(e) {
    let n = s().duration(e.diff(s()()));
    return ''.concat(d(n.hours()), ':').concat(d(n.minutes()), ':').concat(d(n.seconds()));
}
function g() {
    let [e, n] = l.useState(m(s()(u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)))),
        t = (0, a.e7)([u.Z], () => u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)),
        i = l.useMemo(() => s()(t), [t]),
        d = l.useRef(new o.Xp()),
        g = l.useCallback(() => {
            n(m(i));
        }, [i]);
    return (
        l.useEffect(() => {
            let e = s().duration(i.diff(s()()));
            1 > e.seconds() ? (n('00:00:00'), d.current.stop()) : 1 > e.days() ? (g(), d.current.start(1000, g)) : (n(c.intl.formatToPlainString(c.t['x+Dvys'], { time: Math.floor(e.asDays()) })), d.current.stop());
        }, [i, g]),
        e
    );
}
