var r = n(728804),
    i = n(505388),
    a = n(363406),
    o = Object.prototype.hasOwnProperty,
    s = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, t) {
            return e + '[' + t + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    l = Array.isArray,
    u = Array.prototype.push,
    c = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    _ = a.default,
    E = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: _,
        formatter: a.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    f = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    h = {},
    p = function e(t, n, a, o, s, u, d, _, p, m, I, T, g, S, A, v) {
        for (var N, O = t, R = v, C = 0, y = !1; void 0 !== (R = R.get(h)) && !y; ) {
            var L = R.get(t);
            if (((C += 1), void 0 !== L)) {
                if (L === C) throw RangeError('Cyclic object value');
                y = !0;
            }
            void 0 === R.get(h) && (C = 0);
        }
        if (
            ('function' == typeof _
                ? (O = _(n, O))
                : O instanceof Date
                  ? (O = I(O))
                  : 'comma' === a &&
                    l(O) &&
                    (O = i.maybeMap(O, function (e) {
                        return e instanceof Date ? I(e) : e;
                    })),
            null === O)
        ) {
            if (s) return d && !S ? d(n, E.encoder, A, 'key', T) : n;
            O = '';
        }
        if (f(O) || i.isBuffer(O)) return d ? [g(S ? n : d(n, E.encoder, A, 'key', T)) + '=' + g(d(O, E.encoder, A, 'value', T))] : [g(n) + '=' + g(String(O))];
        var b = [];
        if (void 0 === O) return b;
        if ('comma' === a && l(O)) S && d && (O = i.maybeMap(O, d)), (N = [{ value: O.length > 0 ? O.join(',') || null : void 0 }]);
        else if (l(_)) N = _;
        else {
            var D = Object.keys(O);
            N = p ? D.sort(p) : D;
        }
        for (var M = o && l(O) && 1 === O.length ? n + '[]' : n, P = 0; P < N.length; ++P) {
            var U = N[P],
                w = 'object' == typeof U && void 0 !== U.value ? U.value : O[U];
            if (!u || null !== w) {
                var x = l(O) ? ('function' == typeof a ? a(M, U) : M) : M + (m ? '.' + U : '[' + U + ']');
                v.set(t, C);
                var G = r();
                G.set(h, v), c(b, e(w, x, a, o, s, u, 'comma' === a && S && l(O) ? null : d, _, p, m, I, T, g, S, A, G));
            }
        }
        return b;
    },
    m = function (e) {
        if (!e) return E;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t = e.charset || E.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = a.default;
        if (void 0 !== e.format) {
            if (!o.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
            n = e.format;
        }
        var r = a.formatters[n],
            i = E.filter;
        return (
            ('function' == typeof e.filter || l(e.filter)) && (i = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : E.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? E.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : E.charsetSentinel,
                delimiter: void 0 === e.delimiter ? E.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : E.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : E.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : E.encodeValuesOnly,
                filter: i,
                format: n,
                formatter: r,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : E.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : E.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : E.strictNullHandling
            }
        );
    };
e.exports = function (e, t) {
    var n,
        i,
        a,
        o = e,
        u = m(t);
    'function' == typeof u.filter ? (o = (i = u.filter)('', o)) : l(u.filter) && (n = i = u.filter);
    var d = [];
    if ('object' != typeof o || null === o) return '';
    a = t && t.arrayFormat in s ? t.arrayFormat : t && 'indices' in t ? (t.indices ? 'indices' : 'repeat') : 'indices';
    var _ = s[a];
    if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var E = 'comma' === _ && t && t.commaRoundTrip;
    !n && (n = Object.keys(o)), u.sort && n.sort(u.sort);
    for (var f = r(), h = 0; h < n.length; ++h) {
        var I = n[h];
        if (!u.skipNulls || null !== o[I]) c(d, p(o[I], I, _, E, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, f));
    }
    var T = d.join(u.delimiter),
        g = !0 === u.addQueryPrefix ? '?' : '';
    return u.charsetSentinel && ('iso-8859-1' === u.charset ? (g += 'utf8=%26%2310003%3B&') : (g += 'utf8=%E2%9C%93&')), T.length > 0 ? g + T : '';
};
