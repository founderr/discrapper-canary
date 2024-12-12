var i = r(995769),
    a = Object.prototype.hasOwnProperty,
    s = Array.isArray,
    o = {
        allowDots: !1,
        allowEmptyArrays: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decodeDotInKeys: !0,
        decoder: i.decode,
        delimiter: '&',
        depth: 5,
        duplicates: 'combine',
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1000,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    l = function (e) {
        return e.replace(/&#(\d+);/g, function (e, n) {
            return String.fromCharCode(parseInt(n, 10));
        });
    },
    u = function (e, n) {
        return e && 'string' == typeof e && n.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    },
    c = 'utf8=%26%2310003%3B',
    d = 'utf8=%E2%9C%93',
    f = function (e, n) {
        var r = { __proto__: null },
            f = n.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            _ = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            h = f.split(n.delimiter, _),
            p = -1,
            m = n.charset;
        if (n.charsetSentinel) for (g = 0; g < h.length; ++g) 0 === h[g].indexOf('utf8=') && (h[g] === d ? (m = 'utf-8') : h[g] === c && (m = 'iso-8859-1'), (p = g), (g = h.length));
        for (g = 0; g < h.length; ++g) {
            if (g !== p) {
                var g,
                    E,
                    v,
                    I = h[g],
                    T = I.indexOf(']='),
                    b = -1 === T ? I.indexOf('=') : T + 1;
                -1 === b
                    ? ((E = n.decoder(I, o.decoder, m, 'key')), (v = n.strictNullHandling ? null : ''))
                    : ((E = n.decoder(I.slice(0, b), o.decoder, m, 'key')),
                      (v = i.maybeMap(u(I.slice(b + 1), n), function (e) {
                          return n.decoder(e, o.decoder, m, 'value');
                      }))),
                    v && n.interpretNumericEntities && 'iso-8859-1' === m && (v = l(v)),
                    I.indexOf('[]=') > -1 && (v = s(v) ? [v] : v);
                var y = a.call(r, E);
                y && 'combine' === n.duplicates ? (r[E] = i.combine(r[E], v)) : (!y || 'last' === n.duplicates) && (r[E] = v);
            }
        }
        return r;
    },
    _ = function (e, n, r, i) {
        for (var a = i ? n : u(n, r), s = e.length - 1; s >= 0; --s) {
            var o,
                l = e[s];
            if ('[]' === l && r.parseArrays) o = r.allowEmptyArrays && '' === a ? [] : [].concat(a);
            else {
                o = r.plainObjects ? Object.create(null) : {};
                var c = '[' === l.charAt(0) && ']' === l.charAt(l.length - 1) ? l.slice(1, -1) : l,
                    d = r.decodeDotInKeys ? c.replace(/%2E/g, '.') : c,
                    f = parseInt(d, 10);
                r.parseArrays || '' !== d ? (!isNaN(f) && l !== d && String(f) === d && f >= 0 && r.parseArrays && f <= r.arrayLimit ? ((o = [])[f] = a) : '__proto__' !== d && (o[d] = a)) : (o = { 0: a });
            }
            a = o;
        }
        return a;
    },
    h = function (e, n, r, i) {
        if (!!e) {
            var s = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                o = /(\[[^[\]]*])/,
                l = /(\[[^[\]]*])/g,
                u = r.depth > 0 && o.exec(s),
                c = u ? s.slice(0, u.index) : s,
                d = [];
            if (c) {
                if (!r.plainObjects && a.call(Object.prototype, c) && !r.allowPrototypes) return;
                d.push(c);
            }
            for (var f = 0; r.depth > 0 && null !== (u = l.exec(s)) && f < r.depth; ) {
                if (((f += 1), !r.plainObjects && a.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)) return;
                d.push(u[1]);
            }
            return u && d.push('[' + s.slice(u.index) + ']'), _(d, n, r, i);
        }
    },
    p = function (e) {
        if (!e) return o;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys) throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var n = void 0 === e.charset ? o.charset : e.charset,
            r = void 0 === e.duplicates ? o.duplicates : e.duplicates;
        if ('combine' !== r && 'first' !== r && 'last' !== r) throw TypeError('The duplicates option must be either combine, first, or last');
        return {
            allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || o.allowDots : !!e.allowDots,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : o.allowEmptyArrays,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
            charset: n,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : o.comma,
            decodeDotInKeys: 'boolean' == typeof e.decodeDotInKeys ? e.decodeDotInKeys : o.decodeDotInKeys,
            decoder: 'function' == typeof e.decoder ? e.decoder : o.decoder,
            delimiter: 'string' == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
            duplicates: r,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
        };
    };
e.exports = function (e, n) {
    var r = p(n);
    if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {};
    for (var a = 'string' == typeof e ? f(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(a), l = 0; l < o.length; ++l) {
        var u = o[l],
            c = h(u, a[u], r, 'string' == typeof e);
        s = i.merge(s, c, r);
    }
    return !0 === r.allowSparse ? s : i.compact(s);
};
