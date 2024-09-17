t = r.nmd(t);
var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function a(t) {
                    try {
                        u(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(t) {
                    try {
                        u(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function u(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value) instanceof r
                              ? e
                              : new r(function (t) {
                                    t(e);
                                })
                          ).then(a, s);
                }
                u((n = n.apply(t, e || [])).next());
            });
        },
    i =
        (this && this.__generator) ||
        function (t, e) {
            var r,
                n,
                i,
                o,
                a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }),
                'function' == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                        return this;
                    }),
                o
            );
            function s(s) {
                return function (u) {
                    return (function (s) {
                        if (r) throw TypeError('Generator is already executing.');
                        for (; o && ((o = 0), s[0] && (a = 0)), a; )
                            try {
                                if (((r = 1), n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done)) return i;
                                switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return (
                                            a.label++,
                                            {
                                                value: s[1],
                                                done: !1
                                            }
                                        );
                                    case 5:
                                        a.label++, (n = s[1]), (s = [0]);
                                        continue;
                                    case 7:
                                        (s = a.ops.pop()), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                            a.label = s[1];
                                            break;
                                        }
                                        if (6 === s[0] && a.label < i[1]) {
                                            (a.label = i[1]), (i = s);
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            (a.label = i[2]), a.ops.push(s);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                s = e.call(t, a);
                            } catch (t) {
                                (s = [6, t]), (n = 0);
                            } finally {
                                r = i = 0;
                            }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        };
                    })([s, u]);
                };
            }
        },
    o =
        (this && this.__values) ||
        function (t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && 'number' == typeof t.length)
                return {
                    next: function () {
                        return (
                            t && n >= t.length && (t = void 0),
                            {
                                value: t && t[n++],
                                done: !t
                            }
                        );
                    }
                };
            throw TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        },
    a =
        (this && this.__read) ||
        function (t, e) {
            var r = 'function' == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
            } catch (t) {
                i = { error: t };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return a;
        };
Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.MessageLoader = void 0),
    (e.loadAllMessagesInLocale = function (t) {
        return n(this, void 0, void 0, function () {
            return i(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [
                            4,
                            Promise.all(
                                c.map(function (e) {
                                    return e._loadLocale(t);
                                })
                            )
                        ];
                    case 1:
                        return e.sent(), [2];
                }
            });
        });
    }),
    (e.waitForAllDefaultIntlMessagesLoaded = function () {
        return n(this, void 0, void 0, function () {
            return i(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [
                            4,
                            Promise.all(
                                c.map(function (t) {
                                    return t.waitForDefaultLocale();
                                })
                            )
                        ];
                    case 1:
                        return t.sent(), [2];
                }
            });
        });
    }),
    (e.createLoader = function (t, e, r) {
        var n = new u(t, e, r);
        return c.push(n), n;
    });
var s = r(922077),
    u = (function () {
        function e(e, r, u) {
            var c,
                l,
                h = this;
            if (((this.messageKeys = e), (this.messages = {}), (this.localeImportMap = r), (this.supportedLocales = Object.keys(r)), (this.defaultLocale = u), (this._localeLoadingPromises = {}), (this._parseCache = new Map()), (this._subscribers = new Set()), this._loadLocale(this.defaultLocale), (this.fallbackMessage = new s.InternalIntlMessage([], this.defaultLocale)), t.hot)) {
                var f = function (e, r) {
                    t.hot.accept(r, function () {
                        return n(h, void 0, void 0, function () {
                            return i(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._loadLocale(e)];
                                    case 1:
                                        return t.sent(), this._parseCache.clear(), [2];
                                }
                            });
                        });
                    });
                };
                try {
                    for (var p = o(Object.entries(r)), d = p.next(); !d.done; d = p.next()) {
                        var m = a(d.value, 2),
                            v = m[0],
                            g = m[1];
                        f(v, g);
                    }
                } catch (t) {
                    c = { error: t };
                } finally {
                    try {
                        d && !d.done && (l = p.return) && l.call(p);
                    } finally {
                        if (c) throw c.error;
                    }
                }
            }
        }
        return (
            (e.prototype.withDebugValues = function (t, e) {
                (this._debugKeyMap = t), (this._localeFileMap = e);
            }),
            (e.prototype.get = function (t, e) {
                var r,
                    n = null !== (r = this.getMessageValue(t, e)) && void 0 !== r ? r : this.getMessageValue(t, this.defaultLocale);
                if (null != n) return n;
                var i = null != this._debugKeyMap ? '"'.concat(this._debugKeyMap[t], '" (').concat(t, ')') : void 0,
                    o = null != this._localeFileMap ? ''.concat(e, ' (').concat(this._localeFileMap[e], ')') : e,
                    a = null != this._localeFileMap ? ''.concat(this.defaultLocale, ' (').concat(this._localeFileMap[this.defaultLocale], ')') : this.defaultLocale;
                return console.warn('Requested message '.concat(i, ' does not have a value in the requested locale ').concat(o, ' nor the default locale ').concat(a)), this.fallbackMessage;
            }),
            (e.prototype.getMessageValue = function (t, e) {
                var r = t + '@' + e,
                    n = this._parseCache.get(r);
                if (null != n) return n;
                if (null == this.messages[e]) {
                    this.supportedLocales.includes(e) && this._loadLocale(e);
                    return;
                }
                if (t in this.messages[e]) {
                    var i = this.messages[e][t],
                        o = new s.InternalIntlMessage(i, e);
                    return this._parseCache.set(r, o), o;
                }
            }),
            (e.prototype.getBinds = function () {
                var t = this,
                    e = this.onChange.bind(this);
                return Object.keys(this.messageKeys).reduce(function (r, n) {
                    var i = t.get.bind(t, n);
                    return (i.onChange = e), (r[n] = i), r;
                }, {});
            }),
            (e.prototype._loadLocale = function (t) {
                return n(this, void 0, void 0, function () {
                    var e, r, n, o;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if ((null === (o = this._localeLoadingPromises[t]) || void 0 === o ? void 0 : o.current) != null) return [2];
                                if (null == this.localeImportMap[t]) throw Error('Requested to load locale '.concat(t, ', which should be supported, but no source for translation data was provided.'));
                                if (null != this.messages[t]) return [2];
                                return (
                                    (e = this.localeImportMap[t]()),
                                    (this._localeLoadingPromises[t] = {
                                        initialized: !1,
                                        current: e
                                    }),
                                    (r = this.messages),
                                    (n = t),
                                    [4, e]
                                );
                            case 1:
                                return (
                                    (r[n] = i.sent().default),
                                    (this._localeLoadingPromises[t] = {
                                        initialized: !0,
                                        current: void 0
                                    }),
                                    this.emitChange(),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.emitChange = function () {
                var t, e;
                try {
                    for (var r = o(this._subscribers.values()), n = r.next(); !n.done; n = r.next()) (0, n.value)();
                } catch (e) {
                    t = { error: e };
                } finally {
                    try {
                        n && !n.done && (e = r.return) && e.call(r);
                    } finally {
                        if (t) throw t.error;
                    }
                }
            }),
            (e.prototype.onChange = function (t) {
                var e = this;
                return (
                    this._subscribers.add(t),
                    function () {
                        return e._subscribers.delete(t);
                    }
                );
            }),
            (e.prototype.isLocaleLoaded = function (t, e) {
                void 0 === e && (e = !1);
                var r = this._localeLoadingPromises[t];
                return null != r && !1 != r.initialized && (!e || null == r.current);
            }),
            (e.prototype.waitForLocaleLoaded = function (t) {
                return n(this, arguments, void 0, function (t, e) {
                    var r;
                    return (
                        void 0 === e && (e = !1),
                        i(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    if (null == (r = this._localeLoadingPromises[t])) return [2, this._loadLocale(t)];
                                    if (r.initialized && !e) return [2];
                                    return [4, r.current];
                                case 1:
                                    return n.sent(), [2];
                            }
                        })
                    );
                });
            }),
            (e.prototype.waitForDefaultLocale = function () {
                return n(this, arguments, void 0, function (t) {
                    return (
                        void 0 === t && (t = !1),
                        i(this, function (e) {
                            return [2, this.waitForLocaleLoaded(this.defaultLocale, t)];
                        })
                    );
                });
            }),
            e
        );
    })();
e.MessageLoader = u;
var c = [];
