n.d(t, {
    Z: function () {
        return u;
    },
    m: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(846519),
    o = n(70956);
let s = (e) => String(e).padStart(2, '0'),
    l = (e) => {
        let t = Math.floor(e) % o.Z.Seconds.MINUTE,
            n = Math.floor(e / o.Z.Seconds.MINUTE) % o.Z.Seconds.MINUTE,
            r = Math.floor(e / o.Z.Seconds.HOUR);
        return 0 === r ? ''.concat(s(n), ':').concat(s(t)) : ''.concat(s(r), ':').concat(s(n), ':').concat(s(t));
    };
function u(e) {
    let { start: t, end: n } = e,
        [r] = (0, i.useState)(new a.Xp()),
        [s, l] = (0, i.useState)(Date.now());
    (0, i.useEffect)(() => (r.start(o.Z.Millis.HALF_SECOND, () => l(Date.now())), () => r.stop()), [r]);
    let u = (n - t) / o.Z.Millis.SECOND,
        c = Math.max(Math.min((s - t) / o.Z.Millis.SECOND, u), 0);
    return {
        elapsed: c,
        duration: u,
        percentage: Math.max(Math.min(c / u, 1), 0)
    };
}
