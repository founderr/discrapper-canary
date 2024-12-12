let i, a, s;
var o,
    l = r(772848),
    u = r(442837),
    c = r(433517),
    d = r(846519),
    f = r(570140),
    _ = r(899742),
    h = r(598077),
    p = r(12647),
    m = r(358085),
    g = r(374023);
function E(e, n, r) {
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
let v = 'BrowserHandoffStore',
    I = !1,
    T = new d.V7();
function b() {
    null != i && null != a && (window.open(''.concat(i, '&key=').concat(a)), p.Z.focus(null, !0));
}
function y() {
    (a = null), T.stop(), (I = !1), c.K.set(v, I);
}
function S(e) {
    (i = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), b();
}
function A(e) {
    if (null != a) return !1;
    (a = (0, l.Z)()), T.start(e.timeout, () => (0, _.lx)()), b();
}
function N(e) {
    let { handoffKey: n, handoffToken: r, timeout: i } = e;
    if (null == n || null == r) return !1;
    (I = !0), T.start(i, () => (0, _.lx)());
}
function C(e) {
    s = new h.Z(e.user);
}
function R() {
    y();
}
class O extends (o = u.ZP.Store) {
    initialize() {
        !1 !== c.K.get(v) && (I = m.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !g.s.isDisallowPopupsSet() && I;
    }
    get user() {
        return s;
    }
    get key() {
        return a;
    }
}
E(O, 'displayName', 'BrowserHandoffStore'),
    (n.Z = new O(f.Z, {
        RPC_SERVER_READY: S,
        BROWSER_HANDOFF_BEGIN: A,
        BROWSER_HANDOFF_FROM_APP: N,
        BROWSER_HANDOFF_UNAVAILABLE: y,
        BROWSER_HANDOFF_SET_USER: C,
        LOGIN: R,
        LOGIN_SUCCESS: R,
        LOGOUT: R,
        REGISTER: R
    }));
