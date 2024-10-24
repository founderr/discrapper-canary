n.d(t, {
    Kl: function () {
        return a;
    },
    Wv: function () {
        return l;
    },
    cT: function () {
        return s;
    },
    l1: function () {
        return o;
    },
    xg: function () {
        return u;
    }
});
var r = n(174212),
    i = n(689079);
let a = (e) => {
    let t = e.toLowerCase() === i.WO.toLowerCase(),
        n = e.toLowerCase() === i.Lu.toLowerCase();
    return t || n ? t : null;
};
function s(e, t) {
    var n;
    let r = null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    if ('string' == typeof r) return r;
}
function o(e, t) {
    var n;
    let r = null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    if ('number' == typeof r) return r;
}
function l(e, t, n) {
    return s(r.Z.getAutocompleteLastChoices(e, t), n);
}
function u(e, t, n) {
    return o(r.Z.getAutocompleteLastChoices(e, t), n);
}
