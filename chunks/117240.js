let r, i, a;
var o,
    s = n(772848),
    l = n(442837),
    u = n(433517),
    c = n(846519),
    d = n(570140),
    _ = n(899742),
    E = n(598077),
    f = n(12647),
    h = n(358085),
    p = n(374023);
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
let I = 'BrowserHandoffStore',
    T = !1,
    g = new c.V7();
function S() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), f.Z.focus(null, !0));
}
function A() {
    (i = null), g.stop(), (T = !1), u.K.set(I, T);
}
function v(e) {
    (r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), S();
}
function N(e) {
    if (null != i) return !1;
    (i = (0, s.Z)()), g.start(e.timeout, () => (0, _.lx)()), S();
}
function O(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    (T = !0), g.start(r, () => (0, _.lx)());
}
function R(e) {
    a = new E.Z(e.user);
}
function C() {
    A();
}
class y extends (o = l.ZP.Store) {
    initialize() {
        !1 !== u.K.get(I) && (T = h.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !p.s.isDisallowPopupsSet() && T;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
m(y, 'displayName', 'BrowserHandoffStore'),
    (t.Z = new y(d.Z, {
        RPC_SERVER_READY: v,
        BROWSER_HANDOFF_BEGIN: N,
        BROWSER_HANDOFF_FROM_APP: O,
        BROWSER_HANDOFF_UNAVAILABLE: A,
        BROWSER_HANDOFF_SET_USER: R,
        LOGIN: C,
        LOGIN_SUCCESS: C,
        LOGOUT: C,
        REGISTER: C
    }));
