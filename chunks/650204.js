n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c = n(200651);
n(92138), n(192379);
var d = n(616254),
    f = n(512722),
    _ = n.n(f),
    p = n(832037),
    h = n(752137),
    m = n(464253),
    g = n(485359),
    E = n(395727),
    v = n(471638),
    b = n(585275),
    I = n(960048),
    S = n(63063),
    T = n(240849),
    y = n(998502),
    A = n(513566),
    N = n(534713),
    C = n(358085),
    R = n(703656),
    O = n(284737),
    D = n(473159),
    L = n(846519),
    x = n(579806),
    w = n(896361),
    M = n(892254);
n(776200);
var P = n(857192),
    k = n(203088),
    U = n(44163),
    B = n(710845),
    G = n(70956);
P.default.cssDebuggingEnabled && n.e('55776').then(n.bind(n, 233999));
let Z = 5 * G.Z.Millis.MINUTE,
    F = document.getElementById('app-mount');
_()(null != F, 'Could not find app-mount'), (F.className = __OVERLAY__ ? '' : k.appMount);
let V = (0, d.createRoot)(F),
    j = { '/oauth2/authorize': N.Z },
    H = (e) => V.render((0, c.jsx)(M.Z, { children: (0, c.jsx)(w.Z, { children: (0, c.jsx)(e, {}) }) }));
if (null != x.Z) {
    null === (r = x.Z.setUncaughtExceptionHandler) ||
        void 0 === r ||
        r.call(x.Z, (e, t) => {
            setImmediate(() => {
                throw (I.Z.captureCrash(e), e);
            });
        });
    let e = null === (i = (a = x.Z.remoteApp).getVersion) || void 0 === i ? void 0 : i.call(a),
        t = null === (s = (o = x.Z.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(o),
        n = {};
    null != x.Z.remoteApp.getModuleVersions && (n = x.Z.remoteApp.getModuleVersions()),
        I.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        I.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let c = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new B.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(c, ', build: ').concat(t));
    let d = null === (l = (u = x.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(u);
    ('canary' === d || 'development' === d) && y.ZP.pauseFrameEvictor(), y.ZP.initializeExitHook(), y.ZP.initializeWERHandler();
}
if (((0, D.O)(window), __OVERLAY__)) H(p.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) H(p.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), C.isPlatformEmbedded)) {
        (window.onbeforeunload = () => y.ZP.beforeUnload()), y.ZP.on('HELP_OPEN', () => window.open(S.Z.getCommunityURL()));
        let e = new L.sW(Z, () => y.ZP.purgeMemory());
        y.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), y.ZP.setFocused(!1), (0, O.T_)(window, !1);
        }),
            y.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), y.ZP.setFocused(!0), (0, O.T_)(window, !0);
            }),
            y.ZP.on('MAIN_WINDOW_PATH', function (e, t, n) {
                var r;
                let i = null != n ? new URLSearchParams(n) : null;
                if (null === (r = j[t]) || void 0 === r ? !void 0 : !r.call(j, i)) (0, R.uL)(t);
            }),
            y.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, O.al)(window);
            });
    }
    E.Z.initialize(), h.Z.initialize(), m.Z.init(), b.Z.init(), U.Z.init(), g.Z.initialize(), T.Z.initialize(), A.Z.initialize(), v.j(), H(p.Z.App);
}
