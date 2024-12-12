var i = r(970661),
    a = r(854160),
    s = r(896933),
    o = r(983584);
function l(e, n, r) {
    var i = 'string' == typeof e ? l.__parse(e) : e;
    if (!(i && 'messageFormatPattern' === i.type)) throw TypeError('A message must be provided as a String or AST.');
    (r = this._mergeFormats(l.formats, r)), a.defineProperty(this, '_locale', { value: this._resolveLocale(n) });
    var s = this._findPluralRuleFunction(this._locale),
        o = this._compilePattern(i, n, r, s),
        u = this;
    this.format = function (e) {
        return u._format(o, e);
    };
}
(n.default = l),
    a.defineProperty(l, 'formats', {
        enumerable: !0,
        value: {
            number: {
                currency: { style: 'currency' },
                percent: { style: 'percent' }
            },
            date: {
                short: {
                    month: 'numeric',
                    day: 'numeric',
                    year: '2-digit'
                },
                medium: {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                },
                long: {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                },
                full: {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            },
            time: {
                short: {
                    hour: 'numeric',
                    minute: 'numeric'
                },
                medium: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                },
                long: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                },
                full: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                }
            }
        }
    }),
    a.defineProperty(l, '__localeData__', { value: a.objCreate(null) }),
    a.defineProperty(l, '__addLocaleData', {
        value: function (e) {
            if (!(e && e.locale)) throw Error('Locale data provided to IntlMessageFormat is missing a `locale` property');
            l.__localeData__[e.locale.toLowerCase()] = e;
        }
    }),
    a.defineProperty(l, '__parse', { value: o.default.parse }),
    a.defineProperty(l, 'defaultLocale', {
        enumerable: !0,
        writable: !0,
        value: void 0
    }),
    (l.prototype.resolvedOptions = function () {
        return { locale: this._locale };
    }),
    (l.prototype._compilePattern = function (e, n, r, i) {
        return new s.default(n, r, i).compile(e);
    }),
    (l.prototype._findPluralRuleFunction = function (e) {
        for (var n = l.__localeData__, r = n[e.toLowerCase()]; r; ) {
            if (r.pluralRuleFunction) return r.pluralRuleFunction;
            r = r.parentLocale && n[r.parentLocale.toLowerCase()];
        }
        throw Error('Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :' + e);
    }),
    (l.prototype._format = function (e, n) {
        var r,
            a,
            s,
            o,
            l,
            u = '';
        for (r = 0, a = e.length; r < a; r += 1) {
            if ('string' == typeof (s = e[r])) {
                u += s;
                continue;
            }
            if (((o = s.id), !(n && i.hop.call(n, o)))) throw Error('A value must be provided for: ' + o);
            (l = n[o]), s.options ? (u += this._format(s.getOption(l), n)) : (u += s.format(l));
        }
        return u;
    }),
    (l.prototype._mergeFormats = function (e, n) {
        var r,
            s,
            o = {};
        for (r in e) {
            if (!!i.hop.call(e, r)) (o[r] = s = a.objCreate(e[r])), n && i.hop.call(n, r) && i.extend(s, n[r]);
        }
        return o;
    }),
    (l.prototype._resolveLocale = function (e) {
        'string' == typeof e && (e = [e]), (e = (e || []).concat(l.defaultLocale));
        var n,
            r,
            i,
            a,
            s = l.__localeData__;
        for (n = 0, r = e.length; n < r; n += 1)
            for (i = e[n].toLowerCase().split('-'); i.length; ) {
                if ((a = s[i.join('-')])) return a.locale;
                i.pop();
            }
        var o = e.pop();
        throw Error('No locale data has been added to IntlMessageFormat for: ' + e.join(', ') + ', or the default locale: ' + o);
    });
