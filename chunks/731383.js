var i = r(728804),
    a = r(505388),
    s = r(363406),
    o = Object.prototype.hasOwnProperty,
    l = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, n) {
            return e + '[' + n + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    u = Array.isArray,
    c = Array.prototype.push,
    d = function (e, n) {
        c.apply(e, u(n) ? n : [n]);
    },
    f = Date.prototype.toISOString,
    _ = s.default,
    h = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: a.encode,
        encodeValuesOnly: !1,
        format: _,
        formatter: s.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    p = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    m = {},
    g = function e(n, r, s, o, l, c, f, _, g, E, v, I, T, b, y, S) {
        for (var A, N = n, C = S, R = 0, O = !1; void 0 !== (C = C.get(m)) && !O; ) {
            var D = C.get(n);
            if (((R += 1), void 0 !== D)) {
                if (D === R) throw RangeError('Cyclic object value');
                O = !0;
            }
            void 0 === C.get(m) && (R = 0);
        }
        if (
            ('function' == typeof _
                ? (N = _(r, N))
                : N instanceof Date
                  ? (N = v(N))
                  : 'comma' === s &&
                    u(N) &&
                    (N = a.maybeMap(N, function (e) {
                        return e instanceof Date ? v(e) : e;
                    })),
            null === N)
        ) {
            if (l) return f && !b ? f(r, h.encoder, y, 'key', I) : r;
            N = '';
        }
        if (p(N) || a.isBuffer(N)) return f ? [T(b ? r : f(r, h.encoder, y, 'key', I)) + '=' + T(f(N, h.encoder, y, 'value', I))] : [T(r) + '=' + T(String(N))];
        var L = [];
        if (void 0 === N) return L;
        if ('comma' === s && u(N)) b && f && (N = a.maybeMap(N, f)), (A = [{ value: N.length > 0 ? N.join(',') || null : void 0 }]);
        else if (u(_)) A = _;
        else {
            var x = Object.keys(N);
            A = g ? x.sort(g) : x;
        }
        for (var w = o && u(N) && 1 === N.length ? r + '[]' : r, P = 0; P < A.length; ++P) {
            var M = A[P],
                k = 'object' == typeof M && void 0 !== M.value ? M.value : N[M];
            if (!c || null !== k) {
                var U = u(N) ? ('function' == typeof s ? s(w, M) : w) : w + (E ? '.' + M : '[' + M + ']');
                S.set(n, R);
                var B = i();
                B.set(m, S), d(L, e(k, U, s, o, l, c, 'comma' === s && b && u(N) ? null : f, _, g, E, v, I, T, b, y, B));
            }
        }
        return L;
    },
    E = function (e) {
        if (!e) return h;
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var n = e.charset || h.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var r = s.default;
        if (void 0 !== e.format) {
            if (!o.call(s.formatters, e.format)) throw TypeError('Unknown format option provided.');
            r = e.format;
        }
        var i = s.formatters[r],
            a = h.filter;
        return (
            ('function' == typeof e.filter || u(e.filter)) && (a = e.filter),
            {
                addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : h.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? h.allowDots : !!e.allowDots,
                charset: n,
                charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : h.charsetSentinel,
                delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : h.encode,
                encoder: 'function' == typeof e.encoder ? e.encoder : h.encoder,
                encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : h.encodeValuesOnly,
                filter: a,
                format: r,
                formatter: i,
                serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : h.serializeDate,
                skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : h.strictNullHandling
            }
        );
    };
e.exports = function (e, n) {
    var r,
        a,
        s,
        o = e,
        c = E(n);
    'function' == typeof c.filter ? (o = (a = c.filter)('', o)) : u(c.filter) && (r = a = c.filter);
    var f = [];
    if ('object' != typeof o || null === o) return '';
    s = n && n.arrayFormat in l ? n.arrayFormat : n && 'indices' in n ? (n.indices ? 'indices' : 'repeat') : 'indices';
    var _ = l[s];
    if (n && 'commaRoundTrip' in n && 'boolean' != typeof n.commaRoundTrip) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
    var h = 'comma' === _ && n && n.commaRoundTrip;
    !r && (r = Object.keys(o)), c.sort && r.sort(c.sort);
    for (var p = i(), m = 0; m < r.length; ++m) {
        var v = r[m];
        if (!c.skipNulls || null !== o[v]) d(f, g(o[v], v, _, h, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, p));
    }
    var I = f.join(c.delimiter),
        T = !0 === c.addQueryPrefix ? '?' : '';
    return c.charsetSentinel && ('iso-8859-1' === c.charset ? (T += 'utf8=%26%2310003%3B&') : (T += 'utf8=%E2%9C%93&')), I.length > 0 ? T + I : '';
};
