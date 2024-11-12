let r, i, a;
var s,
    o,
    l,
    u,
    c = n(772848),
    d = n(442837),
    f = n(433517),
    _ = n(846519),
    p = n(570140),
    h = n(899742),
    m = n(598077),
    g = n(12647),
    E = n(358085),
    v = n(374023);
let I = 'BrowserHandoffStore',
    b = !1,
    S = new _.V7();
function T() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), g.Z.focus(null, !0));
}
function y() {
    (i = null), S.stop(), (b = !1), f.K.set(I, b);
}
function A() {
    y();
}
class N extends (u = d.ZP.Store) {
    initialize() {
        !1 !== f.K.get(I) && (b = E.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !v.s.isDisallowPopupsSet() && b;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
(l = 'BrowserHandoffStore'),
    (o = 'displayName') in (s = N)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new N(p.Z, {
        RPC_SERVER_READY: function (e) {
            (r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), T();
        },
        BROWSER_HANDOFF_BEGIN: function (e) {
            if (null != i) return !1;
            (i = (0, c.Z)()), S.start(e.timeout, () => (0, h.lx)()), T();
        },
        BROWSER_HANDOFF_FROM_APP: function (e) {
            let { handoffKey: t, handoffToken: n, timeout: r } = e;
            if (null == t || null == n) return !1;
            (b = !0), S.start(r, () => (0, h.lx)());
        },
        BROWSER_HANDOFF_UNAVAILABLE: y,
        BROWSER_HANDOFF_SET_USER: function (e) {
            a = new m.Z(e.user);
        },
        LOGIN: A,
        LOGIN_SUCCESS: A,
        LOGOUT: A,
        REGISTER: A
    }));
