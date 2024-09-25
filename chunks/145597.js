let r, i;
n.d(t, {
    FW: function () {
        return E;
    },
    Gr: function () {
        return _;
    },
    Ht: function () {
        return T;
    },
    Js: function () {
        return h;
    },
    QF: function () {
        return m;
    },
    Te: function () {
        return g;
    },
    Tq: function () {
        return d;
    },
    VS: function () {
        return A;
    },
    W2: function () {
        return v;
    },
    qU: function () {
        return f;
    },
    tB: function () {
        return I;
    },
    vR: function () {
        return S;
    }
});
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
n(490029);
var c = n(358085);
n(981631);
let d = 2,
    _ = {
        width: 3840,
        height: 2160
    },
    E = {
        width: 768,
        height: 432
    },
    f = 'overlay_default',
    h = -2,
    p = !1;
function m() {
    var e;
    if (void 0 !== r) return r;
    let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(t) && (t = -1), (r = t);
}
function I(e) {
    v() && (r = e);
}
function T() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function g(e) {
    return !c.isPlatformEmbedded || (e.width >= E.width && e.height >= E.height);
}
function S(e) {
    p = e;
}
function A() {
    return p;
}
function v() {
    var e;
    return void 0 !== i ? i : (i = (null !== (e = new URLSearchParams(window.location.search).get('oop')) && void 0 !== e ? e : '') === 'true');
}
