var r,
    i = n(47120);
var a = n(315314);
var o = n(610138);
var s = n(216116);
var l = n(78328);
var u = n(815648);
var c = n(519149);
var d = n(411104);
var _ = n(512722),
    E = n.n(_),
    f = n(392711),
    h = n.n(f),
    p = n(202226),
    m = n(442837),
    I = n(570140),
    T = n(710845),
    g = n(358085),
    S = n(998502),
    A = n(228488),
    v = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = {},
    R = {},
    C = {},
    y = {},
    L = {},
    b = new Set(),
    D = 'app-mount',
    M = () => X.emitChange(),
    P = h().debounce(M, 150),
    U = !1;
function w(e, t) {
    let n = t.document,
        r = n.body;
    for (let e of (E()(null != r, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}
function x(e) {
    let t = C[e];
    null != t &&
        !t.closed &&
        (O[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!g.isPlatformEmbedded && R[e]
        });
}
function G(e) {
    let t = C[e];
    E()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', M), t.removeEventListener('blur', M), t.removeEventListener('resize', P);
    let n = y[e];
    E()(null != n, 'Window root was null while unmounting'), n.unmount(), delete C[e], delete R[e], delete L[e], delete y[e];
}
function k(e, t, r) {
    let i = e.document,
        a = new URL(t).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        s = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (a !== o && a !== s) {
        new T.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', a);
        return;
    }
    let l = i.createElement('link');
    (l.href = t), (l.rel = 'stylesheet'), (l.integrity = r), E()(null != i.head, 'Document head was null'), i.head.appendChild(l);
}
function B(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) k(t, e.href, e.integrity);
}
function F(e) {
    let t = C[e],
        n = L[e];
    if (null == t) {
        new T.Z('PopoutWindowStore').warn('Failed to open window', e);
        return;
    }
    let r = t.document;
    (0, A.uF)(r, M), t.addEventListener('focus', M), t.addEventListener('blur', M), t.addEventListener('resize', P), U ? w(e, t) : B(e, t);
    let i = (0, p.createRoot)(r.getElementById(D));
    E()(null != i, 'No render target for popout!'), (y[e] = i), i.render(n(e));
}
function Z(e) {
    let t = '';
    for (let n of Object.keys(e)) {
        let r = e[n];
        void 0 !== r && ('boolean' == typeof r && (r = r ? 'yes' : 'no'), (t += ''.concat(n, '=').concat(r, ',')));
    }
    return t;
}
function V(e) {
    let { key: t, features: n, render: r } = e;
    if (g.isPlatformEmbedded && !S.ZP.supportsFeature(v.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let i = C[t];
    if (null != i && !i.closed) return g.isPlatformEmbedded ? S.ZP.focus(t) : i.focus(), !1;
    let { defaultWidth: a, defaultHeight: o, defaultAlwaysOnTop: s = !1, ...l } = n,
        u = l,
        c = s,
        d = O[t];
    if (null != d) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = d;
        (c = null != i ? i : s),
            (u = {
                width: null != e && 0 !== e ? e : a,
                height: null != t && 0 !== t ? t : o,
                left: n,
                top: r,
                ...u
            });
    }
    let _ = window.open(v.Z5c.POPOUT_WINDOW, t, Z(u));
    (_.windowKey = t), null == _ || _.focus(), (C[t] = _), (L[t] = r), g.isPlatformEmbedded && (S.ZP.setAlwaysOnTop(t, c), (R[t] = c), S.ZP.isAlwaysOnTop(t).then((e) => (R[t] = e))), b.add(t);
}
function H(e) {
    b.has(e) && (F(e), b.delete(e), X.emitChange());
}
function Y(e) {
    let t = C[e];
    null != t && (!t.closed && x(e), t.close(), G(e), X.emitChange());
}
function j(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case v.l9w.LOADED:
                return H(n.key);
            case v.l9w.UNLOADED:
                return Y(n.key);
        }
}
function W(e) {
    let { key: t } = e,
        n = C[t];
    null != n && !n.closed && (x(t), n.close());
}
function K() {
    for (let e of Object.keys(C)) {
        let t = C[e];
        null != t && t.close();
    }
}
function z(e) {
    let { key: t, alwaysOnTop: n } = e;
    g.isPlatformEmbedded && (S.ZP.setAlwaysOnTop(t, n), (R[t] = n), S.ZP.isAlwaysOnTop(t).then((e) => (R[t] = e)));
}
function q(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(C)) null != e && !e.closed && k(e, t, n);
}
class Q extends (r = m.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', j), window.addEventListener('beforeunload', K), (O = null != e ? e : {});
    }
    getWindow(e) {
        return C[e];
    }
    getWindowState(e) {
        return O[e];
    }
    getWindowKeys() {
        return Object.keys(C);
    }
    getWindowOpen(e) {
        let t = C[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!R[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = C[e];
        return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
    }
    getWindowVisible(e) {
        var t;
        let n = C[e];
        return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return O;
    }
    unmountWindow(e) {
        return Y(e);
    }
}
N(Q, 'displayName', 'PopoutWindowStore'), N(Q, 'persistKey', 'PopoutWindowStore');
let X = new Q(I.Z, {
    POPOUT_WINDOW_OPEN: V,
    POPOUT_WINDOW_ADD_STYLESHEET: q,
    POPOUT_WINDOW_CLOSE: W,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: z,
    LOGOUT: K
});
t.Z = X;
