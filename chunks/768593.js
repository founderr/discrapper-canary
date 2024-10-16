e = n.nmd(e);
var r =
    (this && this.__awaiter) ||
    function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
            function s(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    a(e);
                }
            }
            function o(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    a(e);
                }
            }
            function l(e) {
                var t;
                e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                                e(t);
                            })
                      ).then(s, o);
            }
            l((r = r.apply(e, t || [])).next());
        });
    };
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.MessageLoader = void 0),
    (t.loadAllMessagesInLocale = function (e) {
        return r(this, void 0, void 0, function* () {
            yield Promise.all(s.map((t) => t._loadLocale(e)));
        });
    }),
    (t.waitForAllDefaultIntlMessagesLoaded = function () {
        return r(this, void 0, void 0, function* () {
            yield Promise.all(s.map((e) => e.waitForDefaultLocale()));
        });
    }),
    (t.createLoader = function (e, t, n) {
        let r = new a(e, t, n);
        return s.push(r), r;
    });
let i = n(354076);
class a {
    constructor(t, n, a) {
        if (((this.messageKeys = t), (this.messages = {}), (this.localeImportMap = n), (this.supportedLocales = Object.keys(n)), (this.defaultLocale = a), (this._localeLoadingPromises = {}), (this._parseCache = new Map()), (this._subscribers = new Set()), this._loadLocale(this.defaultLocale), (this.fallbackMessage = new i.InternalIntlMessage([], this.defaultLocale)), e.hot))
            for (let [t, i] of Object.entries(n))
                e.hot.accept(i, () =>
                    r(this, void 0, void 0, function* () {
                        yield this._loadLocale(t), this._parseCache.clear();
                    })
                );
    }
    withDebugValues(e, t) {
        (this._debugKeyMap = e), (this._localeFileMap = t);
    }
    get(e, t) {
        var n;
        let r = null !== (n = this.getMessageValue(e, t)) && void 0 !== n ? n : this.getMessageValue(e, this.defaultLocale);
        if (null != r) return r;
        let i = null != this._debugKeyMap ? `"${this._debugKeyMap[e]}" (${e})` : void 0,
            a = null != this._localeFileMap ? `${t} (${this._localeFileMap[t]})` : t,
            s = null != this._localeFileMap ? `${this.defaultLocale} (${this._localeFileMap[this.defaultLocale]})` : this.defaultLocale;
        return console.warn(`Requested message ${i} does not have a value in the requested locale ${a} nor the default locale ${s}`), this.fallbackMessage;
    }
    getMessageValue(e, t) {
        let n = e + '@' + t,
            r = this._parseCache.get(n);
        if (null != r) return r;
        if (null == this.messages[t]) {
            this.supportedLocales.includes(t) && this._loadLocale(t);
            return;
        }
        if (e in this.messages[t]) {
            let r = this.messages[t][e],
                a = new i.InternalIntlMessage(r, t);
            return this._parseCache.set(n, a), a;
        }
    }
    getBinds() {
        let e = this.onChange.bind(this);
        return Object.keys(this.messageKeys).reduce((t, n) => {
            let r = this.get.bind(this, n);
            return (r.onChange = e), (t[n] = r), t;
        }, {});
    }
    _loadLocale(e) {
        return r(this, void 0, void 0, function* () {
            var t;
            if ((null === (t = this._localeLoadingPromises[e]) || void 0 === t ? void 0 : t.current) != null) return;
            if (null == this.localeImportMap[e]) {
                if (!this.supportedLocales.includes(e)) return;
                throw Error(`Requested to load locale ${e}, which should be supported, but no source for translation data was provided.`);
            }
            if (null != this.messages[e]) return;
            let n = this.localeImportMap[e]();
            (this._localeLoadingPromises[e] = {
                initialized: !1,
                current: n
            }),
                (this.messages[e] = (yield n).default),
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
    isLocaleLoaded(e, t = !1) {
        let n = this._localeLoadingPromises[e];
        return null != n && !1 != n.initialized && (!t || null == n.current);
    }
    waitForLocaleLoaded(e) {
        return r(this, arguments, void 0, function* (e, t = !1) {
            let n = this._localeLoadingPromises[e];
            if (null == n) return this._loadLocale(e);
            (!n.initialized || t) && (yield n.current);
        });
    }
    waitForDefaultLocale() {
        return r(this, arguments, void 0, function* (e = !1) {
            return this.waitForLocaleLoaded(this.defaultLocale, e);
        });
    }
}
t.MessageLoader = a;
let s = [];
