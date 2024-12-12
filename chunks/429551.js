r.d(n, {
    Z: function () {
        return c;
    },
    m: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(846519),
    o = r(70956);
let l = (e) => String(e).padStart(2, '0'),
    u = (e) => {
        let n = Math.floor(e) % o.Z.Seconds.MINUTE,
            r = Math.floor(e / o.Z.Seconds.MINUTE) % o.Z.Seconds.MINUTE,
            i = Math.floor(e / o.Z.Seconds.HOUR);
        return 0 === i ? ''.concat(l(r), ':').concat(l(n)) : ''.concat(l(i), ':').concat(l(r), ':').concat(l(n));
    };
function c(e) {
    let { start: n, end: r } = e,
        [i] = (0, a.useState)(new s.Xp()),
        [l, u] = (0, a.useState)(Date.now());
    (0, a.useEffect)(() => (i.start(o.Z.Millis.HALF_SECOND, () => u(Date.now())), () => i.stop()), [i]);
    let c = (r - n) / o.Z.Millis.SECOND,
        d = Math.max(Math.min((l - n) / o.Z.Millis.SECOND, c), 0);
    return {
        elapsed: d,
        duration: c,
        percentage: Math.max(Math.min(d / c, 1), 0)
    };
}
