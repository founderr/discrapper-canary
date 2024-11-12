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
    f = a.default,
    _ = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: a.formatters[f],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    p = {},
    h = function e(t, n, a, s, o, u, d, f, h, m, g, E, v, I, b, S) {
        for (var T, y, A = t, N = S, C = 0, R = !1; void 0 !== (N = N.get(p)) && !R; ) {
            var O = N.get(t);
            if (((C += 1), void 0 !== O)) {
                if (O === C) throw RangeError('Cyclic object value');
                R = !0;
            }
            void 0 === N.get(p) && (C = 0);
        }
        if (
            ('function' == typeof f
                ? (A = f(n, A))
                : A instanceof Date
                  ? (A = g(A))
                  : 'comma' === a &&
                    l(A) &&
                    (A = i.maybeMap(A, function (e) {
                        return e instanceof Date ? g(e) : e;
                    })),
            null === A)
        ) {
            if (o) return d && !I ? d(n, _.encoder, b, 'key', E) : n;
            A = '';
        }
        if ('string' == typeof (T = A) || 'number' == typeof T || 'boolean' == typeof T || 'symbol' == typeof T || 'bigint' == typeof T || i.isBuffer(A)) return d ? [v(I ? n : d(n, _.encoder, b, 'key', E)) + '=' + v(d(A, _.encoder, b, 'value', E))] : [v(n) + '=' + v(String(A))];
        var D = [];
        if (void 0 === A) return D;
        if ('comma' === a && l(A)) I && d && (A = i.maybeMap(A, d)), (y = [{ value: A.length > 0 ? A.join(',') || null : void 0 }]);
        else if (l(f)) y = f;
        else {
            var L = Object.keys(A);
            y = h ? L.sort(h) : L;
        }
        for (var x = s && l(A) && 1 === A.length ? n + '[]' : n, w = 0; w < y.length; ++w) {
            var M = y[w],
                P = 'object' == typeof M && void 0 !== M.value ? M.value : A[M];
            if (!u || null !== P) {
                var k = l(A) ? ('function' == typeof a ? a(x, M) : x) : x + (m ? '.' + M : '[' + M + ']');
                S.set(t, C);
                var U = r();
                U.set(p, S), c(D, e(P, k, a, s, o, u, 'comma' === a && I && l(A) ? null : d, f, h, m, g, E, v, I, b, U));
            }
        }
        return D;
    },
    m = function (e) {
        if (!e) return _;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t = e.charset || _.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = a.default;
        if (void 0 !== e.format) {
            if (!s.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
            n = e.format;
        }
        var r = a.formatters[n],
            i = _.filter;
        return (
            ('function' == typeof e.filter || l(e.filter)) && (i = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? _.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : _.charsetSentinel,
                delimiter: void 0 === e.delimiter ? _.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : _.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : _.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : _.encodeValuesOnly,
                filter: i,
                format: n,
                formatter: r,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
            }
        );
    };
e.exports = function (e, t) {
    var n,
        i,
        a,
        s = e,
        u = m(t);
    'function' == typeof u.filter ? (s = (i = u.filter)('', s)) : l(u.filter) && (n = i = u.filter);
    var d = [];
    if ('object' != typeof s || null === s) return '';
    a = t && t.arrayFormat in o ? t.arrayFormat : t && 'indices' in t ? (t.indices ? 'indices' : 'repeat') : 'indices';
    var f = o[a];
    if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var _ = 'comma' === f && t && t.commaRoundTrip;
    !n && (n = Object.keys(s)), u.sort && n.sort(u.sort);
    for (var p = r(), g = 0; g < n.length; ++g) {
        var E = n[g];
        if (!u.skipNulls || null !== s[E]) c(d, h(s[E], E, f, _, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, p));
    }
    var v = d.join(u.delimiter),
        I = !0 === u.addQueryPrefix ? '?' : '';
    return u.charsetSentinel && ('iso-8859-1' === u.charset ? (I += 'utf8=%26%2310003%3B&') : (I += 'utf8=%E2%9C%93&')), v.length > 0 ? I + v : '';
};
