let i;
r.d(n, {
    FW: function () {
        return _;
    },
    Gr: function () {
        return f;
    },
    Ht: function () {
        return I;
    },
    Js: function () {
        return p;
    },
    QF: function () {
        return E;
    },
    R2: function () {
        return m;
    },
    Te: function () {
        return T;
    },
    Tq: function () {
        return d;
    },
    VS: function () {
        return y;
    },
    qU: function () {
        return h;
    },
    tB: function () {
        return v;
    },
    vR: function () {
        return b;
    }
});
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
r(490029);
var c = r(358085);
r(981631);
let d = 2,
    f = {
        width: 3840,
        height: 2160
    },
    _ = {
        width: 768,
        height: 432
    },
    h = 'overlay_default',
    p = -2,
    m = -1,
    g = !1;
function E() {
    var e;
    if (void 0 !== i && i !== m) return i;
    let n = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(n) && (n = m), (i = n);
}
function v(e) {
    i = e;
}
function I() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function T(e) {
    return !c.isPlatformEmbedded || (e.width >= _.width && e.height >= _.height);
}
function b(e) {
    g = e;
}
function y() {
    return g;
}
