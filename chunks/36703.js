r.d(n, {
    A: function () {
        return s;
    },
    P: function () {
        return o;
    }
});
let i = 50,
    a = 6;
function s(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    return 0 === e ? 0 : ((n = e > r ? ((e - r) / r) * a : (e / r) * i - i), r * Math.pow(10, n / 20));
}
function o(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let s = 20 * Math.log10(e / r);
    return r * (n = s > 0 ? s / a + 1 : (i + s) / i);
}
