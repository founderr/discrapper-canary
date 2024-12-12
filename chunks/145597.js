let i, a;
r.d(n, {
    FW: function () {
        return p;
    },
    Gr: function () {
        return h;
    },
    Ht: function () {
        return T;
    },
    Js: function () {
        return g;
    },
    QF: function () {
        return v;
    },
    Te: function () {
        return b;
    },
    Tq: function () {
        return _;
    },
    VS: function () {
        return S;
    },
    W2: function () {
        return A;
    },
    qU: function () {
        return m;
    },
    tB: function () {
        return I;
    },
    vR: function () {
        return y;
    }
});
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
r(490029);
var d = r(32300),
    f = r(358085);
r(981631);
let _ = 2,
    h = {
        width: 3840,
        height: 2160
    },
    p = {
        width: 768,
        height: 432
    },
    m = 'overlay_default',
    g = -2,
    E = !1;
function v() {
    var e;
    if (void 0 !== i) return i;
    let n = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(n) && (n = -1), (i = n);
}
function I(e) {
    A() && (i = e);
}
function T() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function b(e) {
    return !f.isPlatformEmbedded || (e.width >= p.width && e.height >= p.height);
}
function y(e) {
    E = e;
}
function S() {
    return E;
}
function A() {
    if (void 0 !== a) return a;
    if ((0, d.R)()) a = !0;
    else {
        var e;
        a = (null !== (e = new URLSearchParams(window.location.search).get('oop')) && void 0 !== e ? e : '') === 'true';
    }
    return a;
}
