let n;
r.d(t, {
    Z1: function () {
        return _;
    },
    ph: function () {
        return i;
    },
    yW: function () {
        return o;
    }
});
var a = r(899517);
function o() {
    return Date.now() / 1000;
}
let i = (function () {
        let { performance: e } = a.n;
        if (!e || !e.now) return o;
        let t = Date.now() - e.now(),
            r = void 0 == e.timeOrigin ? t : e.timeOrigin;
        return () => (r + e.now()) / 1000;
    })(),
    _ = (() => {
        let { performance: e } = a.n;
        if (!e || !e.now) return;
        let t = e.now(),
            r = Date.now(),
            n = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 3600000,
            o = e.timing && e.timing.navigationStart,
            i = 'number' == typeof o ? Math.abs(o + t - r) : 3600000;
        if (n < 3600000 || i < 3600000) return n <= i ? e.timeOrigin : o;
        return r;
    })();
