n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(718922),
    l = n(70956),
    u = n(660199);
let c = [
        [2 * l.Z.Seconds.MINUTE, l.Z.Seconds.SECOND],
        [5 * l.Z.Seconds.MINUTE, l.Z.Seconds.MINUTE],
        [45 * l.Z.Seconds.MINUTE, 2 * l.Z.Seconds.MINUTE],
        [21 * l.Z.Seconds.HOUR, 5 * l.Z.Seconds.MINUTE]
    ],
    d = 2 * l.Z.Seconds.HOUR;
function _(e) {
    let t = (0, s.Z)();
    return (i.useEffect(() => {
        if ('R' !== e.format) return;
        let n = 1000 * d,
            r = Math.abs(e.parsed.diff(o()()));
        for (let [e, t] of c)
            if (r < 1000 * e) {
                n = 1000 * t;
                break;
            }
        let i = setInterval(() => {
            t();
        }, n);
        return () => clearInterval(i);
    }, [t, e.format, e.parsed]),
    'R' === e.format)
        ? u.Qh.R(e.parsed)
        : e.formatted;
}
