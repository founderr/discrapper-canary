let n, a, _, o, i;
r.d(t, {
    $A: function () {
        return L;
    },
    PR: function () {
        return f;
    },
    YF: function () {
        return h;
    },
    _4: function () {
        return p;
    },
    _j: function () {
        return S;
    },
    cN: function () {
        return b;
    },
    to: function () {
        return O;
    }
});
var E = r(622916),
    c = r(688838),
    s = r(665909),
    l = r(795927),
    u = r(661129),
    I = r(231550),
    R = r(428983),
    A = r(622574),
    N = r(288570);
let T = {},
    d = {};
function f(e, t = !1) {
    return G('cls', e, C, n, t);
}
function L(e, t = !1) {
    return G('lcp', e, U, _, t);
}
function O(e) {
    return G('fid', e, g, a);
}
function p(e) {
    return G('ttfb', e, P, o);
}
function h(e) {
    return G('inp', e, M, i);
}
function S(e, t) {
    return (
        m(e, t),
        !d[e] &&
            ((function (e) {
                let t = {};
                'event' === e && (t.durationThreshold = 0),
                    (0, A.N)(
                        e,
                        (t) => {
                            D(e, { entries: t });
                        },
                        t
                    );
            })(e),
            (d[e] = !0)),
        y(e, t)
    );
}
function D(e, t) {
    let r = T[e];
    if (!!r && !!r.length)
        for (let n of r)
            try {
                n(t);
            } catch (t) {
                s.X &&
                    E.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, c.$P)(n)}
Error:`,
                        t
                    );
            }
}
function C() {
    return (0, l.m)(
        (e) => {
            D('cls', { metric: e }), (n = e);
        },
        { reportAllChanges: !0 }
    );
}
function g() {
    return (0, u.F)((e) => {
        D('fid', { metric: e }), (a = e);
    });
}
function U() {
    return (0, R.N)(
        (e) => {
            D('lcp', { metric: e }), (_ = e);
        },
        { reportAllChanges: !0 }
    );
}
function P() {
    return (0, N.m)((e) => {
        D('ttfb', { metric: e }), (o = e);
    });
}
function M() {
    return (0, I.Y)((e) => {
        D('inp', { metric: e }), (i = e);
    });
}
function G(e, t, r, n, a = !1) {
    let _;
    return m(e, t), !d[e] && ((_ = r()), (d[e] = !0)), n && t({ metric: n }), y(e, t, a ? _ : void 0);
}
function m(e, t) {
    (T[e] = T[e] || []), T[e].push(t);
}
function y(e, t, r) {
    return () => {
        r && r();
        let n = T[e];
        if (!n) return;
        let a = n.indexOf(t);
        -1 !== a && n.splice(a, 1);
    };
}
function b(e) {
    return 'duration' in e;
}
