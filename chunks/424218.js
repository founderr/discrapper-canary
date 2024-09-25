n.d(t, {
    BU: function () {
        return l;
    },
    IC: function () {
        return u;
    },
    XD: function () {
        return i;
    }
});
var r = n(689938);
let i = 1024,
    a = 1024,
    o = 1024,
    s = {
        useKibibytes: !1,
        showDecimalForGB: !0,
        useSpace: !0
    };
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? a : 1000,
        i = t.useKibibytes ? o : 1000,
        l = Math.ceil(e / n);
    if (l < i) return t.useSpace ? r.Z.Messages.FILE_SIZE_MB.format({ size: l }) : r.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: l });
    let u = l / i;
    return (u = t.showDecimalForGB ? Math.round(10 * u) / 10 : Math.round(u)), t.useSpace ? r.Z.Messages.FILE_SIZE_GB.format({ size: u }) : r.Z.Messages.FILE_SIZE_GB_NO_SPACE.format({ size: u });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? i : 1000,
        o = t.useKibibytes ? a : 1000,
        u = e / n;
    return u / o >= 1 ? l(u, t) : t.useSpace ? r.Z.Messages.FILE_SIZE_KB.format({ size: Math.ceil(u) }) : r.Z.Messages.FILE_SIZE_KB_NO_SPACE.format({ size: Math.ceil(u) });
}
