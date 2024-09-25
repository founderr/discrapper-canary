var r = n(995769),
    i = Object.prototype.hasOwnProperty,
    a = Array.isArray,
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
        decoder: r.decode,
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
    s = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
        });
    },
    l = function (e, t) {
        return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    },
    u = 'utf8=%26%2310003%3B',
    c = 'utf8=%E2%9C%93',
    d = function (e, t) {
        var n = { __proto__: null },
            d = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            _ = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            E = d.split(t.delimiter, _),
            f = -1,
            h = t.charset;
        if (t.charsetSentinel) for (p = 0; p < E.length; ++p) 0 === E[p].indexOf('utf8=') && (E[p] === c ? (h = 'utf-8') : E[p] === u && (h = 'iso-8859-1'), (f = p), (p = E.length));
        for (p = 0; p < E.length; ++p) {
            if (p !== f) {
                var p,
                    m,
                    I,
                    T = E[p],
                    g = T.indexOf(']='),
                    S = -1 === g ? T.indexOf('=') : g + 1;
                -1 === S
                    ? ((m = t.decoder(T, o.decoder, h, 'key')), (I = t.strictNullHandling ? null : ''))
                    : ((m = t.decoder(T.slice(0, S), o.decoder, h, 'key')),
                      (I = r.maybeMap(l(T.slice(S + 1), t), function (e) {
                          return t.decoder(e, o.decoder, h, 'value');
                      }))),
                    I && t.interpretNumericEntities && 'iso-8859-1' === h && (I = s(I)),
                    T.indexOf('[]=') > -1 && (I = a(I) ? [I] : I);
                var A = i.call(n, m);
                A && 'combine' === t.duplicates ? (n[m] = r.combine(n[m], I)) : (!A || 'last' === t.duplicates) && (n[m] = I);
            }
        }
        return n;
    },
    _ = function (e, t, n, r) {
        for (var i = r ? t : l(t, n), a = e.length - 1; a >= 0; --a) {
            var o,
                s = e[a];
            if ('[]' === s && n.parseArrays) o = n.allowEmptyArrays && '' === i ? [] : [].concat(i);
            else {
                o = n.plainObjects ? Object.create(null) : {};
                var u = '[' === s.charAt(0) && ']' === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                    c = n.decodeDotInKeys ? u.replace(/%2E/g, '.') : u,
                    d = parseInt(c, 10);
                n.parseArrays || '' !== c ? (!isNaN(d) && s !== c && String(d) === c && d >= 0 && n.parseArrays && d <= n.arrayLimit ? ((o = [])[d] = i) : '__proto__' !== c && (o[c] = i)) : (o = { 0: i });
            }
            i = o;
        }
        return i;
    },
    E = function (e, t, n, r) {
        if (!!e) {
            var a = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                o = /(\[[^[\]]*])/,
                s = /(\[[^[\]]*])/g,
                l = n.depth > 0 && o.exec(a),
                u = l ? a.slice(0, l.index) : a,
                c = [];
            if (u) {
                if (!n.plainObjects && i.call(Object.prototype, u) && !n.allowPrototypes) return;
                c.push(u);
            }
            for (var d = 0; n.depth > 0 && null !== (l = s.exec(a)) && d < n.depth; ) {
                if (((d += 1), !n.plainObjects && i.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)) return;
                c.push(l[1]);
            }
            return l && c.push('[' + a.slice(l.index) + ']'), _(c, t, n, r);
        }
    },
    f = function (e) {
        if (!e) return o;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.decodeDotInKeys && 'boolean' != typeof e.decodeDotInKeys) throw TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder) throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var t = void 0 === e.charset ? o.charset : e.charset,
            n = void 0 === e.duplicates ? o.duplicates : e.duplicates;
        if ('combine' !== n && 'first' !== n && 'last' !== n) throw TypeError('The duplicates option must be either combine, first, or last');
        return {
            allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || o.allowDots : !!e.allowDots,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : o.allowEmptyArrays,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
            charset: t,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : o.comma,
            decodeDotInKeys: 'boolean' == typeof e.decodeDotInKeys ? e.decodeDotInKeys : o.decodeDotInKeys,
            decoder: 'function' == typeof e.decoder ? e.decoder : o.decoder,
            delimiter: 'string' == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
            duplicates: n,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n = f(t);
    if ('' === e || null == e) return n.plainObjects ? Object.create(null) : {};
    for (var i = 'string' == typeof e ? d(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, o = Object.keys(i), s = 0; s < o.length; ++s) {
        var l = o[s],
            u = E(l, i[l], n, 'string' == typeof e);
        a = r.merge(a, u, n);
    }
    return !0 === n.allowSparse ? a : r.compact(a);
};
