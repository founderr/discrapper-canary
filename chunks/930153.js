n.d(t, {
    $U: function () {
        return i;
    },
    Bs: function () {
        return a;
    },
    Lk: function () {
        return s;
    },
    T3: function () {
        return o;
    }
});
var r = n(388032);
function i(e) {
    if (e < 1000000) return r.intl.formatToPlainString(r.t.OiHat7, { value: e });
    let t = (e / 1000000).toFixed(1);
    return r.intl.formatToPlainString(r.t.Iku48P, { value: t });
}
function a(e, t) {
    if (e < 1000) return r.intl.formatToPlainString(r.t.OiHat7, { value: Math.floor(e) });
    if (e < 1000000) return r.intl.formatToPlainString(r.t['84R4TU'], { value: Math.floor(e / 1000) });
    let n = Math.floor((10 * e) / 1000000) / 10,
        i = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.intl.formatToPlainString(r.t.Iku48P, { value: i });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0,
        ...n
    }).format(t);
}
