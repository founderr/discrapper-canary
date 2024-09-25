n.d(t, {
    Bx: function () {
        return I;
    },
    GV: function () {
        return h;
    },
    jl: function () {
        return f;
    },
    jx: function () {
        return p;
    },
    lq: function () {
        return m;
    }
});
var r = n(518263);
var i = n(970173);
var a = n(520712);
var o = n(268111);
var s = n(941497);
var l = n(32026);
var u = n(480839);
var c = n(744285);
var d = n(492257);
var _ = n(873817);
let E = 8;
function f(e, t) {
    if (0 === e.length) return !1;
    let n = Math.floor(t / E),
        r = t % E,
        i = e[n];
    return (i & (1 << r)) != 0;
}
function h(e, t) {
    let n = Math.floor(t / E),
        r = t % E;
    if (e.length <= n) {
        let t = new Uint8Array(n + 1);
        t.set(e, 0), (e = t);
    }
    let i = 1 << r;
    return (e[n] |= i), e;
}
function p(e, t) {
    if (f(e, t)) {
        let n = Math.floor(t / E),
            r = 1 << t % E;
        e[n] &= ~r;
    }
    return e;
}
function m(e) {
    return e instanceof Uint8Array;
}
function I(e) {
    return null != e && 'object' == typeof e && 'uint8array' === e.__tag__;
}
