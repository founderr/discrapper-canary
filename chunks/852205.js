function r(e, t = -1 / 0, n = 1 / 0) {
    return Math.min(Math.max(e, t), n);
}
function i(e, t) {
    let n = e,
        r = t.toString(),
        i = r.indexOf('.'),
        a = i >= 0 ? r.length - i : 0;
    if (a > 0) {
        let e = Math.pow(10, a);
        n = Math.round(n * e) / e;
    }
    return n;
}
function a(e, t, n, r) {
    (t = Number(t)), (n = Number(n));
    let a = (e - (isNaN(t) ? 0 : t)) % r,
        s = i(2 * Math.abs(a) >= r ? e + Math.sign(a) * (r - Math.abs(a)) : e - a, r);
    return isNaN(t) ? !isNaN(n) && s > n && (s = Math.floor(i(n / r, r)) * r) : s < t ? (s = t) : !isNaN(n) && s > n && (s = t + Math.floor(i((n - t) / r, r)) * r), (s = i(s, r));
}
n.d(t, {
    N4: function () {
        return a;
    },
    uZ: function () {
        return r;
    }
});
