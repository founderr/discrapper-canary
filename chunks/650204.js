var r,
    i,
    a,
    o,
    s,
    l,
    u,
    c = n(610138);
var d = n(216116);
var _ = n(78328);
var E = n(815648);
var f = n(47120);
var h = n(177593);
var p = n(735250);
n(92138), n(470079);
var m = n(202226),
    I = n(512722),
    T = n.n(I),
    g = n(832037),
    S = n(752137),
    A = n(464253),
    v = n(485359),
    N = n(395727),
    O = n(471638),
    R = n(585275),
    C = n(960048),
    y = n(63063),
    b = n(240849),
    L = n(998502),
    D = n(513566),
    M = n(534713),
    P = n(358085),
    U = n(703656),
    w = n(284737),
    x = n(473159),
    G = n(846519),
    k = n(579806),
    B = n(896361),
    F = n(892254);
n(776200);
var Z = n(857192),
    V = n(203088),
    H = n(44163),
    Y = n(710845),
    j = n(70956);
Z.default.cssDebuggingEnabled && n.e('55776').then(n.bind(n, 233999));
let W = 5 * j.Z.Millis.MINUTE,
    K = document.getElementById('app-mount');
T()(null != K, 'Could not find app-mount'), (K.className = __OVERLAY__ ? '' : V.appMount);
let z = (0, m.createRoot)(K),
    q = { '/oauth2/authorize': M.Z };
function Q(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    if (null === (r = q[t]) || void 0 === r ? !void 0 : !r.call(q, i)) (0, U.uL)(t);
}
let X = (e) => z.render((0, p.jsx)(F.Z, { children: (0, p.jsx)(B.Z, { children: (0, p.jsx)(e, {}) }) }));
if (null != k.Z) {
    null === (r = k.Z.setUncaughtExceptionHandler) ||
        void 0 === r ||
        r.call(k.Z, (e, t) => {
            setImmediate(() => {
                throw (C.Z.captureCrash(e), e);
            });
        });
    let e = null === (i = (a = k.Z.remoteApp).getVersion) || void 0 === i ? void 0 : i.call(a),
        t = null === (o = (s = k.Z.remoteApp).getBuildNumber) || void 0 === o ? void 0 : o.call(s),
        n = {};
    null != k.Z.remoteApp.getModuleVersions && (n = k.Z.remoteApp.getModuleVersions()),
        C.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        C.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let c = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new Y.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(c, ', build: ').concat(t));
    let d = null === (l = (u = k.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(u);
    ('canary' === d || 'development' === d) && L.ZP.pauseFrameEvictor(), L.ZP.initializeExitHook();
}
if (((0, x.O)(window), __OVERLAY__)) X(g.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) X(g.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), P.isPlatformEmbedded)) {
        (window.onbeforeunload = () => L.ZP.beforeUnload()), L.ZP.on('HELP_OPEN', () => window.open(y.Z.getCommunityURL()));
        let e = new G.sW(W, () => L.ZP.purgeMemory());
        L.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), L.ZP.setFocused(!1), (0, w.T_)(window, !1);
        }),
            L.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), L.ZP.setFocused(!0), (0, w.T_)(window, !0);
            }),
            L.ZP.on('MAIN_WINDOW_PATH', Q),
            L.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, w.al)(window);
            });
    }
    N.Z.initialize(), S.Z.initialize(), A.Z.init(), R.Z.init(), H.Z.init(), v.Z.initialize(), b.Z.initialize(), D.Z.initialize(), O.j(), X(g.Z.App);
}
