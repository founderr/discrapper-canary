var r = n(47120);
var i = n(442837),
    a = n(348326),
    o = n(570140),
    s = n(710845),
    l = n(314897),
    u = n(115522);
function c(e, t, n) {
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
let d = new s.Z('DatabaseManager'),
    _ = !1;
class E extends i.ZP.Store {
    initialize() {
        this.waitFor(l.default), this.carefullySpeculativelyOpen(u.n()), this.handleAuthenticationStoreChanged(), l.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return h(e);
    }
    database(e) {
        if (null != e) {
            var t;
            return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null;
        }
        return null;
    }
    carefullyOpenDatabase(e) {
        if (this.preventWritingCachesAgainThisSession) return d.verbose('Not opening database because caches have been manually cleared.'), null;
        if (null != e && !this.databases.has(e)) {
            let t = p(e);
            d.verbose('added database ('.concat(e, ' \u2192 ').concat(t, ')')), this.databases.set(e, t), this.emitChange();
        }
        return this.database(e);
    }
    replaceDisableAllDatabases(e) {
        for (let t of (d.info('disabling and nulling all databases (reason: '.concat(e, ')')), this.databases.keys())) {
            let n = this.databases.get(t);
            null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        d.log('removing database (user: '.concat(e, ', database: ').concat(t, ')')), null == t || t.close(), this.databases.delete(e), this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases('DatabaseManager ('.concat(e.reason, ')'));
    }
    handleConnectionOpen() {
        let e = l.default.getId(),
            t = this.databases.get(e),
            n = null == t ? void 0 : t.state();
        null == t && n !== a.hi.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = l.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            d.verbose('active user changed (now: '.concat(e, ', was: ').concat(t, ', was: ').concat(n, ')')), null == n || n.close(), u.I(e), (this.activeUserId = e), this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession) {
            d.verbose('Not opening database because caches have been manually cleared.');
            return;
        }
        if (null != e) {
            let t = await m(e);
            null == t || this.databases.has(e) ? (d.verbose('discarding speculative database ('.concat(e, ' \u2192 ').concat(t, ')')), null == t || t.close()) : (d.verbose('added speculative database ('.concat(e, ' \u2192 ').concat(t, ')')), this.databases.set(e, t), this.emitChange());
        }
    }
    constructor() {
        super(
            o.Z,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged()
            },
            o.c.Early
        ),
            c(this, 'databases', new Map()),
            c(this, 'activeUserId', null),
            c(this, 'preventWritingCachesAgainThisSession', !1);
    }
}
function f(e, t) {
    for (let n = 0; n < e; n++)
        try {
            return t();
        } catch (e) {
            d.error('tryUntil '.concat(n), e);
        }
    return null;
}
function h(e) {
    return '@account.'.concat(e);
}
function p(e) {
    if (_) {
        let t = 50,
            n = h(e);
        return d.verbose('synchronously opening '.concat(n)), f(t, () => a.vo.openSyncUnsafe(n, { invalidateDisabledHandles: !0 }));
    }
    return null;
}
async function m(e) {
    if (_) {
        let t = h(e);
        d.verbose('speculatively opening '.concat(t));
        try {
            return await a.vo.open(t);
        } catch (e) {
            d.warn("couldn't speculatively open database.", e);
        }
    }
    return null;
}
t.Z = new E();
