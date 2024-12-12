let i;
var a,
    s,
    o = r(47120);
var l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(642047),
    f = r(695346),
    _ = r(973616),
    h = r(358085);
function p(e, n, r) {
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
let m = 'GameStoreReportedGames',
    g = 2147483648,
    E = new d.Z(),
    v = {},
    I = {},
    T = null !== (a = u.K.get(m)) && void 0 !== a ? a : {},
    b = '';
let y = null;
function S(e) {
    var n, r, i, a, s, o;
    return {
        id: e.id,
        name: e.name,
        executables: (null !== (n = e.executables) && void 0 !== n ? n : []).map(_.BA),
        overlay: null !== (r = e.overlay) && void 0 !== r && r,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (a = e.overlay_compatibility_hook) && void 0 !== a && a,
        hook: null === (s = e.hook) || void 0 === s || s,
        aliases: null !== (o = e.aliases) && void 0 !== o ? o : [],
        supportsOutOfProcessOverlay: _.ZP.supportsOutOfProcessOverlay(e.overlay_methods)
    };
}
function A(e) {
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
function N(e) {
    let n = e instanceof _.ZP ? A(e) : e;
    for (let r of (E.set(e.id, n), (v[e.name.toLowerCase()] = n), e.aliases)) v[r.toLowerCase()] = n;
    if ((0, h.isDesktop)()) for (let r of e.executables) I[r.name] = n;
}
function C(e) {
    let { detectableApplications: n } = e;
    for (let e of n) N(e);
}
function R() {
    i = !0;
}
function O() {
    i = !1;
}
function D(e) {
    let { games: n, etag: r } = e;
    for (let e of (null != r && b !== r && (b = r), n)) N(S(e));
    (i = void 0), (y = Date.now());
}
class L extends (s = l.ZP.PersistedStore) {
    initialize(e) {
        var n;
        null != e && (null != e.detectableGamesEtag && (b = e.detectableGamesEtag), null === (n = e.detectableGames) || void 0 === n || n.forEach((e) => N(e)));
    }
    getState() {
        return (0, h.isDesktop)()
            ? {
                  detectableGamesEtag: b,
                  detectableGames: E.values()
              }
            : {
                  detectableGamesEtag: '',
                  detectableGames: []
              };
    }
    get games() {
        return E.values();
    }
    getDetectableGame(e) {
        return E.get(e);
    }
    getGameByName(e) {
        if (null == e) return null;
        let n = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(v, n) ? v[n] : null;
    }
    isGameInDatabase(e) {
        return null != this.getGameByName(e.name) || (void 0 !== e.nativeProcessObserverId && (e.nativeProcessObserverId & g) == 0);
    }
    get fetching() {
        return !0 === i;
    }
    get detectableGamesEtag() {
        return b;
    }
    get lastFetched() {
        return y;
    }
    getGameByExecutable(e) {
        return I[e];
    }
    getGameByGameData(e) {
        var n, r;
        let i;
        if (null == e.exePath) return null;
        let a = e.exePath.split('/').pop(),
            s = e.exePath.split('/').slice(-2).join('/');
        if (null != e.name) {
            if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
                let e = i.executables.map((e) => e.name);
                if (e.includes(a) || e.includes(s)) return i;
            } else if (null != i) return null;
        }
        return null !== (r = null !== (n = this.getGameByExecutable(a)) && void 0 !== n ? n : this.getGameByExecutable(s)) && void 0 !== r ? r : i;
    }
    shouldReport(e) {
        let n = null != this.getGameByName(e),
            r = null != T[e];
        return f.G6.getSetting() && !i && !(n || r);
    }
    markGameReported(e) {
        (T[e] = !0), u.K.set(m, T);
    }
}
p(L, 'displayName', 'GameStore'),
    p(L, 'persistKey', 'GameStore'),
    p(L, 'migrations', [
        (e) => {
            var n, r;
            if (null == e)
                return {
                    detectableGamesEtag: '',
                    detectableGames: []
                };
            return {
                detectableGamesEtag: e.detectableGamesEtag,
                detectableGames: null !== (r = null === (n = e.detectableGames) || void 0 === n ? void 0 : n.map((e) => A(new _.ZP(e)))) && void 0 !== r ? r : []
            };
        },
        (e) =>
            (0, h.isDesktop)()
                ? e
                : {
                      detectableGamesEtag: '',
                      detectableGames: []
                  }
    ]),
    (n.Z = new L(c.Z, {
        OVERLAY_INITIALIZE: C,
        GAMES_DATABASE_FETCH: R,
        GAMES_DATABASE_FETCH_FAIL: O,
        GAMES_DATABASE_UPDATE: D
    }));
