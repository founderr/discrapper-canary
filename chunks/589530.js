r.d(n, {
    FC: function () {
        return s;
    },
    Zj: function () {
        return u;
    },
    jA: function () {
        return o;
    },
    rs: function () {
        return l;
    }
});
var i = r(433517);
let a = 'MediaPlayerVolume';
function s() {
    var e;
    let { volume: n } = null !== (e = i.K.get(a)) && void 0 !== e ? e : {};
    return 'number' != typeof n && (n = 1), (n = Math.min(1, Math.max(0, n)));
}
function o(e) {
    i.K.set(a, {
        volume: e,
        muted: l()
    });
}
function l() {
    var e;
    let { muted: n } = null !== (e = i.K.get(a)) && void 0 !== e ? e : {};
    return 'boolean' != typeof n && (n = !1), n;
}
function u(e) {
    i.K.set(a, {
        volume: s(),
        muted: e
    });
}
