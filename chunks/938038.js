r.d(n, {
    c: function () {
        return o;
    }
});
var i = r(433517),
    a = r(593472);
function s(e, n, r) {
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
class o {
    save() {
        let e = { games: this.games };
        i.K.set(o.storageKey, e);
    }
    static load() {
        return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
    }
    static loadInternal() {
        let e = i.K.get(o.storageKey);
        if (null != e) {
            var n;
            return new o(null !== (n = e.games) && void 0 !== n ? n : {});
        }
        let r = new o({});
        return r.save(), r;
    }
    static getGameSettings(e) {
        var n;
        return null == e ? null : null !== (n = o.load().games[e]) && void 0 !== n ? n : null;
    }
    static updateGameSettings(e, n) {
        if (null == e) return;
        let r = o.load(),
            i = r.games[e];
        if (null == i) {
            (r.games[e] = {
                screen: a.Jx.UNKNOWN,
                date: Date.now(),
                ...n
            }),
                r.save();
            return;
        }
        'boolean' == typeof n.disabled && (i.disabled = n.disabled), 'number' == typeof n.screen && (i.screen = n.screen), (i.date = Date.now()), r.save();
    }
    static isPromptingForGameDisable(e) {
        var n, r;
        return null !== (r = null === (n = o.getGameSettings(e)) || void 0 === n ? void 0 : n.disabled) && void 0 !== r && r;
    }
    static setPromptingForGameDisable(e, n) {
        o.updateGameSettings(e, { disabled: n });
    }
    static getGameDisplayMode(e) {
        var n, r;
        return null == e ? null : null !== (r = null === (n = o.getGameSettings(e)) || void 0 === n ? void 0 : n.screen) && void 0 !== r ? r : null;
    }
    static setGameDisplayMode(e, n) {
        o.updateGameSettings(e, { screen: n });
    }
    static clearOldGameSettings() {
        let e = o.load();
        if (null == e.games) return;
        let n = Date.now() - 31536000000;
        for (let r in e.games) e.games[r].date < n && delete e.games[r];
        e.save();
    }
    static reset() {
        let e = o.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
    constructor(e) {
        s(this, 'games', void 0), (this.games = e);
    }
}
s(o, '_loaded', null), s(o, 'storageKey', 'GameDisplayModeStorage'), setTimeout(() => o.clearOldGameSettings(), 60000);
