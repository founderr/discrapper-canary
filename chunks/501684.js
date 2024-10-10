let n, a, _, o, i;
r.d(t, {
    $A: function () {
        return p;
    },
    PR: function () {
        return O;
    },
    YF: function () {
        return S;
    },
    _4: function () {
        return L;
    },
    _j: function () {
        return D;
    },
    cN: function () {
        return b;
    },
    to: function () {
        return f;
    }
});
var E = r(622916),
    c = r(688838),
    s = r(665909),
    I = r(795927),
    u = r(661129),
    l = r(231550),
    R = r(428983),
    A = r(622574),
    T = r(288570);
let N = {},
    d = {};
function O(e, t = !1) {
    return m('cls', e, C, n, t);
}
function p(e, t = !1) {
    return m('lcp', e, M, _, t);
}
function f(e) {
    return m('fid', e, g, a);
}
function L(e) {
    return m('ttfb', e, P, o);
}
function S(e) {
    return m('inp', e, U, i);
}
function D(e, t) {
    return (
        G(e, t),
        !d[e] &&
            ((function (e) {
                let t = {};
                'event' === e && (t.durationThreshold = 0),
                    (0, A.N)(
                        e,
                        (t) => {
                            h(e, { entries: t });
                        },
                        t
                    );
            })(e),
            (d[e] = !0)),
        y(e, t)
    );
}
function h(e, t) {
    let r = N[e];
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
    return (0, I.m)(
        (e) => {
            h('cls', { metric: e }), (n = e);
        },
        { reportAllChanges: !0 }
    );
}
function g() {
    return (0, u.F)((e) => {
        h('fid', { metric: e }), (a = e);
    });
}
function M() {
    return (0, R.N)(
        (e) => {
            h('lcp', { metric: e }), (_ = e);
        },
        { reportAllChanges: !0 }
    );
}
function P() {
    return (0, T.m)((e) => {
        h('ttfb', { metric: e }), (o = e);
    });
}
function U() {
    return (0, l.Y)((e) => {
        h('inp', { metric: e }), (i = e);
    });
}
function m(e, t, r, n, a = !1) {
    let _;
    return G(e, t), !d[e] && ((_ = r()), (d[e] = !0)), n && t({ metric: n }), y(e, t, a ? _ : void 0);
}
function G(e, t) {
    (N[e] = N[e] || []), N[e].push(t);
}
function y(e, t, r) {
    return () => {
        r && r();
        let n = N[e];
        if (!n) return;
        let a = n.indexOf(t);
        -1 !== a && n.splice(a, 1);
    };
}
function b(e) {
    return 'duration' in e;
}
