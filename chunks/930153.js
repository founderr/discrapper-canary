r.d(n, {
    $U: function () {
        return o;
    },
    Bs: function () {
        return l;
    },
    Lk: function () {
        return u;
    },
    T3: function () {
        return c;
    }
});
var i = r(388032);
let a = 1000000,
    s = 1000;
function o(e) {
    if (e < a) return i.intl.formatToPlainString(i.t.OiHat7, { value: e });
    let n = (e / a).toFixed(1);
    return i.intl.formatToPlainString(i.t.Iku48P, { value: n });
}
function l(e, n) {
    if (e < s) return i.intl.formatToPlainString(i.t.OiHat7, { value: Math.floor(e) });
    if (e < a) return i.intl.formatToPlainString(i.t['84R4TU'], { value: Math.floor(e / s) });
    let r = Math.floor((10 * e) / a) / 10,
        o = new Intl.NumberFormat(n, { maximumFractionDigits: 1 }).format(r);
    return i.intl.formatToPlainString(i.t.Iku48P, { value: o });
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return n;
    let r = parseInt(e);
    return Number.isNaN(r) ? n : r;
}
function c(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0,
        ...r
    }).format(n);
}
