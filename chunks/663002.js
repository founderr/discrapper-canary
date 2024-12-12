r.d(n, {
    Qe: function () {
        return o;
    },
    ap: function () {
        return a;
    },
    wj: function () {
        return s;
    }
});
var i = r(231338);
function a(e) {
    return e === i.BR.LIGHT;
}
function s(e) {
    switch (e) {
        case i.BR.DARK:
        case i.BR.MIDNIGHT:
        case i.BR.DARKER:
            return !0;
        default:
            return !1;
    }
}
function o(e) {
    if (null == e) return;
    let n = i.Al.get(e);
    return null != n ? 'theme-'.concat(n, ' theme-').concat(e, ' images-').concat(n) : 'theme-'.concat(e, ' images-').concat(e);
}
