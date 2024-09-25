n.d(t, {
    A: function () {
        return a;
    },
    P: function () {
        return o;
    }
});
let r = 50,
    i = 6;
function a(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return 0 === e ? 0 : ((t = e > n ? ((e - n) / n) * i : (e / n) * r - r), n * Math.pow(10, t / 20));
}
function o(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let a = 20 * Math.log10(e / n);
    return n * (t = a > 0 ? a / i + 1 : (r + a) / r);
}
