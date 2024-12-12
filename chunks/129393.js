e = r.nmd(e);
var i =
    (this && this.__awaiter) ||
    function (e, n, r, i) {
        function a(e) {
            return e instanceof r
                ? e
                : new r(function (n) {
                      n(e);
                  });
        }
        return new (r || (r = Promise))(function (r, s) {
            function o(e) {
                try {
                    u(i.next(e));
                } catch (e) {
                    s(e);
                }
            }
            function l(e) {
                try {
                    u(i.throw(e));
                } catch (e) {
                    s(e);
                }
            }
            function u(e) {
                e.done ? r(e.value) : a(e.value).then(o, l);
            }
            u((i = i.apply(e, n || [])).next());
        });
    };
Object.defineProperty(n, '__esModule', { value: !0 }), (n.MessageLoader = void 0), (n.loadAllMessagesInLocale = l), (n.waitForAllDefaultIntlMessagesLoaded = u), (n.createLoader = c);
let a = r(540391);
class s {
    constructor(n, r, s) {
        if (((this.messageKeys = n), (this.messages = {}), (this.localeImportMap = r), (this.supportedLocales = Object.keys(r)), (this.defaultLocale = s), (this._localeLoadingPromises = {}), (this._parseCache = {}), (this._subscribers = new Set()), (this.fallbackMessage = new a.InternalIntlMessage([], this.defaultLocale)), e.hot))
            for (let [n, a] of Object.entries(r))
                e.hot.accept(a, () =>
                    i(this, void 0, void 0, function* () {
                        yield this._loadLocale(n), (this._parseCache = {});
                    })
                );
    }
    withDebugValues(e, n) {
        (this._debugKeyMap = e), (this._localeFileMap = n);
    }
    get(e, n) {
        let r = this.getMessageValue(e, n);
        if (null != r) return r;
        if (this.isLocaleLoading(n) && !this.isLocaleLoaded(this.defaultLocale)) return this.fallbackMessage;
        let i = this.getMessageValue(e, this.defaultLocale);
        if (null != i) return i;
        let a = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : void 0,
            s = null != this._localeFileMap ? `${n} (${this._localeFileMap[n]})` : n,
            o = null != this._localeFileMap ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})` : this.defaultLocale;
        return console.warn(`Requested message ${a} does not have a value in the requested locale ${s} nor the default locale ${o}`), this.fallbackMessage;
    }
    getMessageValue(e, n) {
        var r, i, s;
        let o = null === (r = this._parseCache[n]) || void 0 === r ? void 0 : r[e];
        if (o) return o;
        if (null == this.messages[n]) {
            this.supportedLocales.includes(n) && this._loadLocale(n);
            return;
        }
        if (e in this.messages[n]) {
            let r = this.messages[n][e],
                o = new a.InternalIntlMessage(r, n);
            return ((null !== (i = (s = this._parseCache)[n]) && void 0 !== i ? i : (s[n] = {}))[e] = o), o;
        }
    }
    getBinds() {
        let e = {};
        for (let n of this.messageKeys) e[n] = this.get.bind(this, n);
        return e;
    }
    _loadLocale(e) {
        return i(this, void 0, void 0, function* () {
            var n, r, i, a;
            if (null != this.messages[e]) return;
            if ((null === (n = this._localeLoadingPromises[e]) || void 0 === n ? void 0 : n.current) != null) {
                yield null === (r = this._localeLoadingPromises[e]) || void 0 === r ? void 0 : r.current;
                return;
            }
            if (null == this.localeImportMap[e]) {
                if (!this.supportedLocales.includes(e)) return;
                throw Error(`Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`);
            }
            let s = this.localeImportMap[e](),
                o = null !== (a = null === (i = this._localeLoadingPromises[e]) || void 0 === i ? void 0 : i.initialized) && void 0 !== a && a;
            (this._localeLoadingPromises[e] = {
                initialized: o,
                current: s
            }),
                (this.messages[e] = (yield s).default),
                (this._localeLoadingPromises[e] = {
                    initialized: !0,
                    current: void 0
                }),
                this.emitChange();
        });
    }
    emitChange() {
        for (let e of this._subscribers.values()) e();
    }
    onChange(e) {
        return this._subscribers.add(e), () => this._subscribers.delete(e);
    }
    isLocaleLoading(e) {
        var n;
        return (null === (n = this._localeLoadingPromises[e]) || void 0 === n ? void 0 : n.current) != null;
    }
    isLocaleLoaded(e, n = !1) {
        let r = this._localeLoadingPromises[e];
        return null != r && !1 != r.initialized && (!n || null == r.current);
    }
    waitForLocaleLoaded(e) {
        return i(this, arguments, void 0, function* (e, n = !1) {
            let r = this._localeLoadingPromises[e];
            if (null == r) return this._loadLocale(e);
            (!r.initialized || n) && (yield r.current);
        });
    }
    waitForDefaultLocale() {
        return i(this, arguments, void 0, function* (e = !1) {
            return this.waitForLocaleLoaded(this.defaultLocale, e);
        });
    }
}
n.MessageLoader = s;
let o = [];
function l(e) {
    return i(this, void 0, void 0, function* () {
        yield Promise.all(o.map((n) => n._loadLocale(e)));
    });
}
function u() {
    return i(this, void 0, void 0, function* () {
        yield Promise.all(o.map((e) => e.waitForDefaultLocale()));
    });
}
function c(e, n, r) {
    let i = new s(e, n, r);
    return o.push(i), i;
}
