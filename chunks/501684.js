let a, n, _, o, E;
r.d(t, {
    $A: function () {
        return O;
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
        return D;
    },
    cN: function () {
        return b;
    },
    to: function () {
        return L;
    }
});
var i = r(622916),
    c = r(688838),
    s = r(665909),
    l = r(795927),
    I = r(661129),
    u = r(231550),
    R = r(428983),
    A = r(622574),
    T = r(288570);
let N = {},
    d = {};
function f(e, t = !1) {
    return G('cls', e, C, a, t);
}
function O(e, t = !1) {
    return G('lcp', e, g, _, t);
}
function L(e) {
    return G('fid', e, P, n);
}
function p(e) {
    return G('ttfb', e, U, o);
}
function h(e) {
    return G('inp', e, M, E);
}
function D(e, t) {
    return (
        m(e, t),
        !d[e] &&
            ((function (e) {
                let t = {};
                'event' === e && (t.durationThreshold = 0),
                    (0, A.N)(
                        e,
                        (t) => {
                            S(e, { entries: t });
                        },
                        t
                    );
            })(e),
            (d[e] = !0)),
        y(e, t)
    );
}
function S(e, t) {
    let r = N[e];
    if (!!r && !!r.length)
        for (let a of r)
            try {
                a(t);
            } catch (t) {
                s.X &&
                    i.kg.error(
                        `Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, c.$P)(a)}
Error:`,
                        t
                    );
            }
}
function C() {
    return (0, l.m)(
        (e) => {
            S('cls', { metric: e }), (a = e);
        },
        { reportAllChanges: !0 }
    );
}
function P() {
    return (0, I.F)((e) => {
        S('fid', { metric: e }), (n = e);
    });
}
function g() {
    return (0, R.N)(
        (e) => {
            S('lcp', { metric: e }), (_ = e);
        },
        { reportAllChanges: !0 }
    );
}
function U() {
    return (0, T.m)((e) => {
        S('ttfb', { metric: e }), (o = e);
    });
}
function M() {
    return (0, u.Y)((e) => {
        S('inp', { metric: e }), (E = e);
    });
}
function G(e, t, r, a, n = !1) {
    let _;
    return m(e, t), !d[e] && ((_ = r()), (d[e] = !0)), a && t({ metric: a }), y(e, t, n ? _ : void 0);
}
function m(e, t) {
    (N[e] = N[e] || []), N[e].push(t);
}
function y(e, t, r) {
    return () => {
        r && r();
        let a = N[e];
        if (!a) return;
        let n = a.indexOf(t);
        -1 !== n && a.splice(n, 1);
    };
}
function b(e) {
    return 'duration' in e;
}
