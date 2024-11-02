n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(519149), n(411104);
var r,
    i = n(512722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(616254),
    u = n(442837),
    c = n(570140),
    d = n(710845),
    f = n(358085),
    _ = n(998502),
    h = n(228488),
    p = n(981631);
function m(e, t, n) {
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
let g = {},
    E = {},
    v = {},
    I = {},
    S = {},
    T = new Set(),
    b = () => L.emitChange(),
    y = o().debounce(b, 150);
function A(e) {
    let t = v[e];
    null != t &&
        !t.closed &&
        (g[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!f.isPlatformEmbedded && E[e]
        });
}
function N(e, t, r) {
    let i = e.document,
        s = new URL(t).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (s !== o && s !== l) {
        new d.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = i.createElement('link');
    (u.href = t), (u.rel = 'stylesheet'), (u.integrity = r), a()(null != i.head, 'Document head was null'), i.head.appendChild(u);
}
function C(e) {
    let t = v[e];
    null != t &&
        (!t.closed && A(e),
        t.close(),
        !(function (e) {
            let t = v[e];
            a()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', b), t.removeEventListener('blur', b), t.removeEventListener('resize', y);
            let n = I[e];
            a()(null != n, 'Window root was null while unmounting'), n.unmount(), delete v[e], delete E[e], delete S[e], delete I[e];
        })(e),
        L.emitChange());
}
function R(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case p.l9w.LOADED:
                var r;
                return (
                    (r = n.key),
                    void (
                        T.has(r) &&
                        (!(function (e) {
                            let t = v[e],
                                n = S[e];
                            if (null == t) {
                                new d.Z('PopoutWindowStore').warn('Failed to open window', e);
                                return;
                            }
                            let r = t.document;
                            (0, h.uF)(r, b),
                                t.addEventListener('focus', b),
                                t.addEventListener('blur', b),
                                t.addEventListener('resize', y),
                                !(function (e, t) {
                                    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) N(t, e.href, e.integrity);
                                })(0, t);
                            let i = (0, l.createRoot)(r.getElementById('app-mount'));
                            a()(null != i, 'No render target for popout!'), (I[e] = i), i.render(n(e));
                        })(r),
                        T.delete(r),
                        L.emitChange())
                    )
                );
            case p.l9w.UNLOADED:
                return C(n.key);
        }
}
function O() {
    for (let e of Object.keys(v)) {
        let t = v[e];
        null != t && t.close();
    }
}
class D extends (r = u.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', R), window.addEventListener('beforeunload', O), (g = null != e ? e : {});
    }
    getWindow(e) {
        return v[e];
    }
    getWindowState(e) {
        return g[e];
    }
    getWindowKeys() {
        return Object.keys(v);
    }
    getWindowOpen(e) {
        let t = v[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!E[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = v[e];
        return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
    }
    getWindowVisible(e) {
        var t;
        let n = v[e];
        return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return g;
    }
    unmountWindow(e) {
        return C(e);
    }
}
m(D, 'displayName', 'PopoutWindowStore'), m(D, 'persistKey', 'PopoutWindowStore');
let L = new D(c.Z, {
    POPOUT_WINDOW_OPEN: function (e) {
        let { key: t, features: n, render: r } = e;
        if (f.isPlatformEmbedded && !_.ZP.supportsFeature(p.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
        let i = v[t];
        if (null != i && !i.closed) return f.isPlatformEmbedded ? _.ZP.focus(t) : i.focus(), !1;
        let { defaultWidth: a, defaultHeight: s, defaultAlwaysOnTop: o = !1, ...l } = n,
            u = l,
            c = o,
            d = g[t];
        if (null != d) {
            let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = d;
            (c = null != i ? i : o),
                (u = {
                    width: null != e && 0 !== e ? e : a,
                    height: null != t && 0 !== t ? t : s,
                    left: n,
                    top: r,
                    ...u
                });
        }
        let h = window.open(
            p.Z5c.POPOUT_WINDOW,
            t,
            (function (e) {
                let t = '';
                for (let n of Object.keys(e)) {
                    let r = e[n];
                    void 0 !== r && ('boolean' == typeof r && (r = r ? 'yes' : 'no'), (t += ''.concat(n, '=').concat(r, ',')));
                }
                return t;
            })(u)
        );
        (h.windowKey = t), null == h || h.focus(), (v[t] = h), (S[t] = r), f.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, c), (E[t] = c), _.ZP.isAlwaysOnTop(t).then((e) => (E[t] = e))), T.add(t);
    },
    POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
        let { url: t, integrity: n } = e;
        for (let e of Object.values(v)) null != e && !e.closed && N(e, t, n);
    },
    POPOUT_WINDOW_CLOSE: function (e) {
        let { key: t } = e,
            n = v[t];
        null != n && !n.closed && (A(t), n.close());
    },
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
        let { key: t, alwaysOnTop: n } = e;
        f.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, n), (E[t] = n), _.ZP.isAlwaysOnTop(t).then((e) => (E[t] = e)));
    },
    LOGOUT: O
});
t.Z = L;
