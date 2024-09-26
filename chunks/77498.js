let r;
var i,
    a,
    o = n(47120);
var s = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(642047),
    d = n(695346),
    _ = n(973616),
    E = n(358085);
function f(e, t, n) {
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
let h = 'GameStoreReportedGames',
    p = 2147483648,
    m = new c.Z(),
    I = {},
    T = {},
    g = null !== (i = l.K.get(h)) && void 0 !== i ? i : {},
    S = '';
let A = null;
function v(e) {
    var t, n, r, i, a, o;
    return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(_.B),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (r = e.overlay_warn) && void 0 !== r && r,
        overlayCompatibilityHook: null !== (i = e.overlay_compatibility_hook) && void 0 !== i && i,
        hook: null === (a = e.hook) || void 0 === a || a,
        aliases: null !== (o = e.aliases) && void 0 !== o ? o : [],
        supportsOutOfProcessOverlay: _.Z.supportsOutOfProcessOverlay(e.overlay_methods)
    };
}
function N(e) {
    return {
        id: e.id,
        name: e.name,
        executables: e.executables,
        overlayWarn: e.overlayWarn,
        overlayCompatibilityHook: e.overlayCompatibilityHook,
        overlay: e.overlay,
        hook: e.hook,
        aliases: e.aliases,
        supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    };
}
function O(e) {
    let t = e instanceof _.Z ? N(e) : e;
    for (let n of (m.set(e.id, t), (I[e.name.toLowerCase()] = t), e.aliases)) I[n.toLowerCase()] = t;
    if ((0, E.isDesktop)()) for (let n of e.executables) T[n.name] = t;
}
function R(e) {
    let { detectableApplications: t } = e;
    for (let e of t) O(e);
}
function C() {
    r = !0;
}
function y() {
    r = !1;
}
function L(e) {
    let { games: t, etag: n } = e;
    for (let e of (null != n && S !== n && (S = n), t)) O(v(e));
    (r = void 0), (A = Date.now());
}
class b extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        null != e && (null != e.detectableGamesEtag && (S = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach((e) => O(e)));
    }
    getState() {
        return (0, E.isDesktop)()
            ? {
                  detectableGamesEtag: S,
                  detectableGames: m.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return m.values();
    }
    getDetectableGame(e) {
        return m.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(I, t) ? I[t] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & p) == 0);
    }
    get fetching() {
        return !0 === r;
    }
    get detectableGamesEtag() {
        return S;
    }
    get lastFetched() {
        return A;
    }
    getGameByExecutable(e) {
        return T[e];
    }
    getGameByGameData(e) {
        var t, n;
        let r;
        if (null == e.exePath) return null;
        let i = e.exePath.split('/').pop(),
            a = e.exePath.split('/').slice(-2).join('/');
        if (null != e.name) {
            if (null != (r = this.getGameByName(e.name)) && null != r.executables) {
                let e = r.executables.map((e) => e.name);
                if (e.includes(i) || e.includes(a)) return r;
            } else if (null != r) return null;
        }
        return null !== (n = null !== (t = this.getGameByExecutable(i)) && void 0 !== t ? t : this.getGameByExecutable(a)) && void 0 !== n ? n : r;
    }
    shouldReport(e) {
        let t = null != this.getGameByName(e),
            n = null != g[e];
        return d.G6.getSetting() && !r && !(t || n);
    }
    markGameReported(e) {
        (g[e] = !0), l.K.set(h, g);
    }
}
f(b, 'displayName', 'GameStore'),
    f(b, 'persistKey', 'GameStore'),
    f(b, 'migrations', [
        (e) => {
            var t, n;
            if (null == e)
                return {
                    detectableGamesEtag: '',
                    detectableGames: []
                };
            return {
                detectableGamesEtag: e.detectableGamesEtag,
                detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map((e) => N(new _.Z(e)))) && void 0 !== n ? n : []
            };
        },
        (e) =>
            (0, E.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]),
    (t.Z = new b(u.Z, {
        OVERLAY_INITIALIZE: R,
        GAMES_DATABASE_FETCH: C,
        GAMES_DATABASE_FETCH_FAIL: y,
        GAMES_DATABASE_UPDATE: L
    }));
