var i,
    a = r(47120);
var s = r(315314);
var o = r(610138);
var l = r(216116);
var u = r(78328);
var c = r(815648);
var d = r(519149);
var f = r(411104);
var _ = r(512722),
    h = r.n(_),
    p = r(392711),
    m = r.n(p),
    g = r(616254),
    E = r(442837),
    v = r(570140),
    I = r(710845),
    T = r(358085),
    b = r(998502),
    y = r(228488),
    S = r(248977),
    A = r(981631);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = {},
    R = {},
    O = {},
    D = {},
    L = {},
    x = new Set(),
    w = 'app-mount',
    P = () => J.emitChange(),
    M = m().debounce(P, 150),
    k = !1;
function U(e, n) {
    let r = n.document,
        i = r.body;
    for (let e of (h()(null != i, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let n = r.importNode(e, !0);
        i.appendChild(n);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let n = r.importNode(e, !0);
        i.appendChild(n);
    }
}
function B(e) {
    let n = O[e];
    null != n &&
        !n.closed &&
        (C[e] = {
            x: n.screenX,
            y: n.screenY,
            width: n.innerWidth,
            height: n.innerHeight,
            alwaysOnTop: !!T.isPlatformEmbedded && R[e]
        });
}
function G(e) {
    let n = O[e];
    h()(null != n, 'Popout window was null during unmount'), n.removeEventListener('focus', P), n.removeEventListener('blur', P), n.removeEventListener('resize', M);
    let r = D[e];
    h()(null != r, 'Window root was null while unmounting'), r.unmount(), delete O[e], delete R[e], delete L[e], delete D[e];
}
function Z(e, n, i) {
    let a = e.document,
        s = new URL(n).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(r.p) ? new URL(r.p).origin : '';
    if (s !== o && s !== l) {
        new I.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = a.createElement('link');
    (u.href = n), (u.rel = 'stylesheet'), (u.integrity = i), h()(null != a.head, 'Document head was null'), a.head.appendChild(u);
}
function F(e, n) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) Z(n, e.href, e.integrity);
}
function V(e) {
    let n = O[e],
        r = L[e];
    if (null == n) {
        new I.Z('PopoutWindowStore').warn('Failed to open window', e);
        return;
    }
    let i = n.document;
    (0, y.uF)(i, P), n.addEventListener('focus', P), n.addEventListener('blur', P), n.addEventListener('resize', M), k ? U(e, n) : F(e, n);
    let a = (0, g.createRoot)(i.getElementById(w));
    h()(null != a, 'No render target for popout!'), (D[e] = a), a.render(r(e));
}
function j(e) {
    let { key: n, features: r, render: i } = e;
    if (T.isPlatformEmbedded && !b.ZP.supportsFeature(A.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let a = O[n];
    if (null != a && !a.closed) return T.isPlatformEmbedded ? b.ZP.focus(n) : a.focus(), !1;
    let { defaultWidth: s, defaultHeight: o, defaultAlwaysOnTop: l = !1, ...u } = r,
        c = u,
        d = l,
        f = C[n];
    if (null != f) {
        let { width: e, height: n, x: r, y: i, alwaysOnTop: a } = f;
        (d = null != a ? a : l),
            (c = {
                width: null != e && 0 !== e ? e : s,
                height: null != n && 0 !== n ? n : o,
                left: r,
                top: i,
                ...c
            });
    }
    let _ = window.open(A.Z5c.POPOUT_WINDOW, n, (0, S.Z)(c));
    (_.windowKey = n), null == _ || _.focus(), (O[n] = _), (L[n] = i), T.isPlatformEmbedded && (b.ZP.setAlwaysOnTop(n, d), (R[n] = d), b.ZP.isAlwaysOnTop(n).then((e) => (R[n] = e))), x.add(n);
}
function H(e) {
    x.has(e) && (V(e), x.delete(e), J.emitChange());
}
function Y(e) {
    let n = O[e];
    null != n && (!n.closed && B(e), setTimeout(() => n.close(), 100), G(e), J.emitChange());
}
function W(e) {
    let { data: n } = e;
    if (!(n instanceof Object && n.discordPopoutEvent instanceof Object)) return;
    let r = n.discordPopoutEvent;
    if (null != r.key)
        switch (r.type) {
            case A.l9w.LOADED:
                return H(r.key);
            case A.l9w.UNLOADED:
                return Y(r.key);
        }
}
function K(e) {
    let { key: n } = e,
        r = O[n];
    null != r && !r.closed && (B(n), r.close());
}
function z() {
    for (let e of Object.keys(O)) {
        let n = O[e];
        null != n && n.close();
    }
}
function q(e) {
    let { key: n, alwaysOnTop: r } = e;
    T.isPlatformEmbedded && (b.ZP.setAlwaysOnTop(n, r), (R[n] = r), b.ZP.isAlwaysOnTop(n).then((e) => (R[n] = e)));
}
function Q(e) {
    let { url: n, integrity: r } = e;
    for (let e of Object.values(O)) null != e && !e.closed && Z(e, n, r);
}
class X extends (i = E.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', W), window.addEventListener('beforeunload', z), (C = null != e ? e : {});
    }
    getWindow(e) {
        return O[e];
    }
    getWindowState(e) {
        return C[e];
    }
    getWindowKeys() {
        return Object.keys(O);
    }
    getWindowOpen(e) {
        let n = O[e];
        return null != n && !n.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!R[e];
    }
    getWindowFocused(e) {
        var n, r;
        let i = O[e];
        return null !== (r = null == i ? void 0 : null === (n = i.document) || void 0 === n ? void 0 : n.hasFocus()) && void 0 !== r && r;
    }
    getWindowVisible(e) {
        var n;
        let r = O[e];
        return (null == r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.visibilityState) === 'visible';
    }
    getState() {
        return C;
    }
    unmountWindow(e) {
        return Y(e);
    }
}
N(X, 'displayName', 'PopoutWindowStore'), N(X, 'persistKey', 'PopoutWindowStore');
let J = new X(v.Z, {
    POPOUT_WINDOW_OPEN: j,
    POPOUT_WINDOW_ADD_STYLESHEET: Q,
    POPOUT_WINDOW_CLOSE: K,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: q,
    LOGOUT: z
});
n.Z = J;
