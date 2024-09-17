var n =
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
    i =
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
Object.defineProperty(e, '__esModule', { value: !0 }), (e.IntlManager = e.DEFAULT_LOCALE = void 0);
var o = r(88528),
    a = r(766989),
    s = r(439185);
e.DEFAULT_LOCALE = 'en-US';
var u = (function () {
    function t(t) {
        void 0 === t && (t = e.DEFAULT_LOCALE);
        var r = this;
        (this.onLocaleChange = function (t) {
            return (
                r._localeSubscriptions.add(t),
                function () {
                    return r._localeSubscriptions.delete(t);
                }
            );
        }),
            (this.defaultLocale = t),
            (this.currentLocale = t),
            (this.intl = (0, o.createIntl)({
                formats: a.IntlMessageFormat.formats,
                defaultLocale: t,
                locale: t
            })),
            (this._localeSubscriptions = new Set());
    }
    return (
        (t.prototype.withFormatters = function (t) {
            var e, r;
            try {
                for (var o = n(Object.entries(t)), a = o.next(); !a.done; a = o.next()) {
                    var s = i(a.value, 2),
                        u = s[0],
                        c = s[1];
                    this[u] = this.makeFormatFunction(c);
                }
            } catch (t) {
                e = { error: t };
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o);
                } finally {
                    if (e) throw e.error;
                }
            }
            return this;
        }),
        (t.prototype.makeFormatFunction = function (t) {
            var e = this,
                r = t.format,
                n = t.builder,
                i = r.bind(this);
            return function (t, r) {
                return i(t(e.currentLocale), r, n);
            };
        }),
        (t.prototype.setLocale = function (t) {
            (this.currentLocale = t),
                (this.intl = (0, o.createIntl)({
                    defaultLocale: this.defaultLocale,
                    locale: t
                })),
                this.emitLocaleChange(t);
        }),
        (t.prototype.emitLocaleChange = function (t) {
            var e, r;
            try {
                for (var i = n(this._localeSubscriptions), o = i.next(); !o.done; o = i.next()) (0, o.value)(t);
            } catch (t) {
                e = { error: t };
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
        }),
        (t.prototype.string = function (t) {
            return t(this.currentLocale).ast[0].value;
        }),
        (t.prototype.bindFormatValues = function (t, e, r) {
            return (0, s.bindFormatValues)(t, e.ast, [this.currentLocale, this.defaultLocale], this.intl.formatters, this.intl.formats, r);
        }),
        t
    );
})();
e.IntlManager = u;
