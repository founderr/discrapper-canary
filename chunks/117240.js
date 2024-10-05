let r, i, a;
var s,
    o,
    l,
    u,
    c = n(772848),
    d = n(442837),
    _ = n(433517),
    E = n(846519),
    f = n(570140),
    h = n(899742),
    p = n(598077),
    I = n(12647),
    m = n(358085),
    T = n(374023);
let S = 'BrowserHandoffStore',
    g = !1,
    A = new E.V7();
function N() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), I.Z.focus(null, !0));
}
function O() {
    (i = null), A.stop(), (g = !1), _.K.set(S, g);
}
function R() {
    O();
}
class v extends (u = d.ZP.Store) {
    initialize() {
        !1 !== _.K.get(S) && (g = m.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !T.s.isDisallowPopupsSet() && g;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
(l = 'BrowserHandoffStore'),
    (o = 'displayName') in (s = v)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new v(f.Z, {
        RPC_SERVER_READY: function (e) {
            (r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), N();
        },
        BROWSER_HANDOFF_BEGIN: function (e) {
            if (null != i) return !1;
            (i = (0, c.Z)()), A.start(e.timeout, () => (0, h.lx)()), N();
        },
        BROWSER_HANDOFF_FROM_APP: function (e) {
            let { handoffKey: t, handoffToken: n, timeout: r } = e;
            if (null == t || null == n) return !1;
            (g = !0), A.start(r, () => (0, h.lx)());
        },
        BROWSER_HANDOFF_UNAVAILABLE: O,
        BROWSER_HANDOFF_SET_USER: function (e) {
            a = new p.Z(e.user);
        },
        LOGIN: R,
        LOGIN_SUCCESS: R,
        LOGOUT: R,
        REGISTER: R
    }));
