var r = n(660566);
(e.exports = f),
    (e.exports.parse = a),
    (e.exports.compile = function (e, t) {
        return o(a(e, t));
    }),
    (e.exports.tokensToFunction = o),
    (e.exports.tokensToRegExp = d);
var i = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function a(e, t) {
    for (var n, r = [], a = 0, s = 0, o = '', u = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
        var c = n[0],
            d = n[1],
            f = n.index;
        if (((o += e.slice(s, f)), (s = f + c.length), d)) {
            o += d[1];
            continue;
        }
        var _ = e[s],
            p = n[2],
            h = n[3],
            m = n[4],
            g = n[5],
            E = n[6],
            v = n[7];
        o && (r.push(o), (o = ''));
        var I = null != p && null != _ && _ !== p,
            b = '+' === E || '*' === E,
            S = '?' === E || '*' === E,
            T = n[2] || u,
            y = m || g;
        r.push({
            name: h || a++,
            prefix: p || '',
            delimiter: T,
            optional: S,
            repeat: b,
            partial: I,
            asterisk: !!v,
            pattern: y
                ? (function (e) {
                      return e.replace(/([=!:$\/()])/g, '\\$1');
                  })(y)
                : v
                  ? '.*'
                  : '[^' + l(T) + ']+?'
        });
    }
    return s < e.length && (o += e.substr(s)), o && r.push(o), r;
}
function s(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function o(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++) 'object' == typeof e[n] && (t[n] = RegExp('^(?:' + e[n].pattern + ')$'));
    return function (n, i) {
        for (var a = '', o = n || {}, l = (i || {}).pretty ? s : encodeURIComponent, u = 0; u < e.length; u++) {
            var c,
                d = e[u];
            if ('string' == typeof d) {
                a += d;
                continue;
            }
            var f = o[d.name];
            if (null == f) {
                if (d.optional) {
                    d.partial && (a += d.prefix);
                    continue;
                }
                throw TypeError('Expected "' + d.name + '" to be defined');
            }
            if (r(f)) {
                if (!d.repeat) throw TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(f) + '`');
                if (0 === f.length) {
                    if (d.optional) continue;
                    throw TypeError('Expected "' + d.name + '" to not be empty');
                }
                for (var _ = 0; _ < f.length; _++) {
                    if (((c = l(f[_])), !t[u].test(c))) throw TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(c) + '`');
                    a += (0 === _ ? d.prefix : d.delimiter) + c;
                }
                continue;
            }
            if (
                ((c = d.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(f)),
                !t[u].test(c))
            )
                throw TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + c + '"');
            a += d.prefix + c;
        }
        return a;
    };
}
function l(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function u(e, t) {
    return (e.keys = t), e;
}
function c(e) {
    return e.sensitive ? '' : 'i';
}
function d(e, t, n) {
    !r(t) && ((n = t || n), (t = []));
    for (var i, a, s = (n = n || {}).strict, o = !1 !== n.end, u = '', d = 0; d < e.length; d++) {
        var f = e[d];
        if ('string' == typeof f) u += l(f);
        else {
            var _ = l(f.prefix),
                p = '(?:' + f.pattern + ')';
            t.push(f), f.repeat && (p += '(?:' + _ + p + ')*'), (u += p = f.optional ? (f.partial ? _ + '(' + p + ')?' : '(?:' + _ + '(' + p + '))?') : _ + '(' + p + ')');
        }
    }
    var h = l(n.delimiter || '/'),
        m = u.slice(-h.length) === h;
    return !s && (u = (m ? u.slice(0, -h.length) : u) + '(?:' + h + '(?=$))?'), o ? (u += '$') : (u += s && m ? '' : '(?=' + h + '|$)'), (i = RegExp('^' + u, c(n))), (a = t), (i.keys = a), i;
}
function f(e, t, n) {
    var i, s, o;
    if ((!r(t) && ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp))
        return (function (e, t) {
            var n,
                r,
                i = e.source.match(/\((?!\?)/g);
            if (i)
                for (var a = 0; a < i.length; a++)
                    t.push({
                        name: a,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null
                    });
            return (n = e), (r = t), (n.keys = r), n;
        })(e, t);
    if (r(e))
        return (function (e, t, n) {
            for (var r, i, a = [], s = 0; s < e.length; s++) a.push(f(e[s], t, n).source);
            return (r = RegExp('(?:' + a.join('|') + ')', c(n))), (i = t), (r.keys = i), r;
        })(e, t, n);
    return (i = e), (s = t), d(a(i, (o = n)), s, o);
}
