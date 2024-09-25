n.d(t, {
    $U: function () {
        return o;
    },
    Bs: function () {
        return s;
    },
    Lk: function () {
        return l;
    },
    T3: function () {
        return u;
    }
});
var r = n(689938);
let i = 1000000,
    a = 1000;
function o(e) {
    if (e < i) return r.Z.Messages.NUMBER_ABBREVIATION_FULL.format({ value: e });
    let t = (e / i).toFixed(1);
    return r.Z.Messages.NUMBER_ABBREVIATION_MILLIONS.format({ value: t });
}
function s(e, t) {
    if (e < a) return r.Z.Messages.NUMBER_ABBREVIATION_FULL.format({ value: Math.floor(e) });
    if (e < i) return r.Z.Messages.NUMBER_ABBREVIATION_THOUSANDS.format({ value: Math.floor(e / a) });
    let n = Math.floor((10 * e) / i) / 10,
        o = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.Z.Messages.NUMBER_ABBREVIATION_MILLIONS.format({ value: o });
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0,
        ...n
    }).format(t);
}
