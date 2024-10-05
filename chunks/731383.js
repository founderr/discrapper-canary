var r = n(728804),
    i = n(505388),
    a = n(363406),
    s = Object.prototype.hasOwnProperty,
    o = {
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
    f = {},
    h = function e(t, n, a, s, o, u, d, _, h, p, I, m, T, S, g, A) {
        for (var N, O, R = t, v = A, C = 0, L = !1; void 0 !== (v = v.get(f)) && !L; ) {
            var D = v.get(t);
            if (((C += 1), void 0 !== D)) {
                if (D === C) throw RangeError('Cyclic object value');
                L = !0;
            }
            void 0 === v.get(f) && (C = 0);
        }
        if (
            ('function' == typeof _
                ? (R = _(n, R))
                : R instanceof Date
                  ? (R = I(R))
                  : 'comma' === a &&
                    l(R) &&
                    (R = i.maybeMap(R, function (e) {
                        return e instanceof Date ? I(e) : e;
                    })),
            null === R)
        ) {
            if (o) return d && !S ? d(n, E.encoder, g, 'key', m) : n;
            R = '';
        }
        if ('string' == typeof (N = R) || 'number' == typeof N || 'boolean' == typeof N || 'symbol' == typeof N || 'bigint' == typeof N || i.isBuffer(R)) return d ? [T(S ? n : d(n, E.encoder, g, 'key', m)) + '=' + T(d(R, E.encoder, g, 'value', m))] : [T(n) + '=' + T(String(R))];
        var y = [];
        if (void 0 === R) return y;
        if ('comma' === a && l(R)) S && d && (R = i.maybeMap(R, d)), (O = [{ value: R.length > 0 ? R.join(',') || null : void 0 }]);
        else if (l(_)) O = _;
        else {
            var b = Object.keys(R);
            O = h ? b.sort(h) : b;
        }
        for (var M = s && l(R) && 1 === R.length ? n + '[]' : n, P = 0; P < O.length; ++P) {
            var U = O[P],
                w = 'object' == typeof U && void 0 !== U.value ? U.value : R[U];
            if (!u || null !== w) {
                var x = l(R) ? ('function' == typeof a ? a(M, U) : M) : M + (p ? '.' + U : '[' + U + ']');
                A.set(t, C);
                var G = r();
                G.set(f, A), c(y, e(w, x, a, s, o, u, 'comma' === a && S && l(R) ? null : d, _, h, p, I, m, T, S, g, G));
            }
        }
        return y;
    },
    p = function (e) {
        if (!e) return E;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t = e.charset || E.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = a.default;
        if (void 0 !== e.format) {
            if (!s.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
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
        s = e,
        u = p(t);
    'function' == typeof u.filter ? (s = (i = u.filter)('', s)) : l(u.filter) && (n = i = u.filter);
    var d = [];
    if ('object' != typeof s || null === s) return '';
    a = t && t.arrayFormat in o ? t.arrayFormat : t && 'indices' in t ? (t.indices ? 'indices' : 'repeat') : 'indices';
    var _ = o[a];
    if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var E = 'comma' === _ && t && t.commaRoundTrip;
    !n && (n = Object.keys(s)), u.sort && n.sort(u.sort);
    for (var f = r(), I = 0; I < n.length; ++I) {
        var m = n[I];
        if (!u.skipNulls || null !== s[m]) c(d, h(s[m], m, _, E, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, f));
    }
    var T = d.join(u.delimiter),
        S = !0 === u.addQueryPrefix ? '?' : '';
    return u.charsetSentinel && ('iso-8859-1' === u.charset ? (S += 'utf8=%26%2310003%3B&') : (S += 'utf8=%E2%9C%93&')), T.length > 0 ? S + T : '';
};
