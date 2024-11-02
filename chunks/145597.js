let r, i;
n.d(t, {
    FW: function () {
        return l;
    },
    Gr: function () {
        return o;
    },
    Ht: function () {
        return h;
    },
    Js: function () {
        return c;
    },
    QF: function () {
        return f;
    },
    Te: function () {
        return p;
    },
    Tq: function () {
        return s;
    },
    VS: function () {
        return g;
    },
    W2: function () {
        return E;
    },
    qU: function () {
        return u;
    },
    tB: function () {
        return _;
    },
    vR: function () {
        return m;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(490029);
var a = n(358085);
n(981631);
let s = 2,
    o = {
        width: 3840,
        height: 2160
    },
    l = {
        width: 768,
        height: 432
    },
    u = 'overlay_default',
    c = -2,
    d = !1;
function f() {
    var e;
    if (void 0 !== r) return r;
    let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(t) && (t = -1), (r = t);
}
function _(e) {
    E() && (r = e);
}
function h() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function p(e) {
    return !a.isPlatformEmbedded || (e.width >= l.width && e.height >= l.height);
}
function m(e) {
    d = e;
}
function g() {
    return d;
}
function E() {
    var e;
    return void 0 !== i ? i : (i = (null !== (e = new URLSearchParams(window.location.search).get('oop')) && void 0 !== e ? e : '') === 'true');
}
