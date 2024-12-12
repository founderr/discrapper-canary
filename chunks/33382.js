var i = r(660566);
(e.exports = v), (e.exports.parse = s), (e.exports.compile = o), (e.exports.tokensToFunction = c), (e.exports.tokensToRegExp = E);
var a = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function s(e, n) {
    for (var r, i = [], s = 0, o = 0, l = '', u = (n && n.delimiter) || '/'; null != (r = a.exec(e)); ) {
        var c = r[0],
            _ = r[1],
            h = r.index;
        if (((l += e.slice(o, h)), (o = h + c.length), _)) {
            l += _[1];
            continue;
        }
        var p = e[o],
            m = r[2],
            g = r[3],
            E = r[4],
            v = r[5],
            I = r[6],
            T = r[7];
        l && (i.push(l), (l = ''));
        var b = null != m && null != p && p !== m,
            y = '+' === I || '*' === I,
            S = '?' === I || '*' === I,
            A = r[2] || u,
            N = E || v;
        i.push({
            name: g || s++,
            prefix: m || '',
            delimiter: A,
            optional: S,
            repeat: y,
            partial: b,
            asterisk: !!T,
            pattern: N ? f(N) : T ? '.*' : '[^' + d(A) + ']+?'
        });
    }
    return o < e.length && (l += e.substr(o)), l && i.push(l), i;
}
function o(e, n) {
    return c(s(e, n));
}
function l(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function u(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function c(e) {
    for (var n = Array(e.length), r = 0; r < e.length; r++) 'object' == typeof e[r] && (n[r] = RegExp('^(?:' + e[r].pattern + ')$'));
    return function (r, a) {
        for (var s = '', o = r || {}, c = (a || {}).pretty ? l : encodeURIComponent, d = 0; d < e.length; d++) {
            var f,
                _ = e[d];
            if ('string' == typeof _) {
                s += _;
                continue;
            }
            var h = o[_.name];
            if (null == h) {
                if (_.optional) {
                    _.partial && (s += _.prefix);
                    continue;
                }
                throw TypeError('Expected "' + _.name + '" to be defined');
            }
            if (i(h)) {
                if (!_.repeat) throw TypeError('Expected "' + _.name + '" to not repeat, but received `' + JSON.stringify(h) + '`');
                if (0 === h.length) {
                    if (_.optional) continue;
                    throw TypeError('Expected "' + _.name + '" to not be empty');
                }
                for (var p = 0; p < h.length; p++) {
                    if (((f = c(h[p])), !n[d].test(f))) throw TypeError('Expected all "' + _.name + '" to match "' + _.pattern + '", but received `' + JSON.stringify(f) + '`');
                    s += (0 === p ? _.prefix : _.delimiter) + f;
                }
                continue;
            }
            if (((f = _.asterisk ? u(h) : c(h)), !n[d].test(f))) throw TypeError('Expected "' + _.name + '" to match "' + _.pattern + '", but received "' + f + '"');
            s += _.prefix + f;
        }
        return s;
    };
}
function d(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function f(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function _(e, n) {
    return (e.keys = n), e;
}
function h(e) {
    return e.sensitive ? '' : 'i';
}
function p(e, n) {
    var r = e.source.match(/\((?!\?)/g);
    if (r)
        for (var i = 0; i < r.length; i++)
            n.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
    return _(e, n);
}
function m(e, n, r) {
    for (var i = [], a = 0; a < e.length; a++) i.push(v(e[a], n, r).source);
    return _(RegExp('(?:' + i.join('|') + ')', h(r)), n);
}
function g(e, n, r) {
    return E(s(e, r), n, r);
}
function E(e, n, r) {
    !i(n) && ((r = n || r), (n = []));
    for (var a = (r = r || {}).strict, s = !1 !== r.end, o = '', l = 0; l < e.length; l++) {
        var u = e[l];
        if ('string' == typeof u) o += d(u);
        else {
            var c = d(u.prefix),
                f = '(?:' + u.pattern + ')';
            n.push(u), u.repeat && (f += '(?:' + c + f + ')*'), (o += f = u.optional ? (u.partial ? c + '(' + f + ')?' : '(?:' + c + '(' + f + '))?') : c + '(' + f + ')');
        }
    }
    var p = d(r.delimiter || '/'),
        m = o.slice(-p.length) === p;
    return !a && (o = (m ? o.slice(0, -p.length) : o) + '(?:' + p + '(?=$))?'), s ? (o += '$') : (o += a && m ? '' : '(?=' + p + '|$)'), _(RegExp('^' + o, h(r)), n);
}
function v(e, n, r) {
    return (!i(n) && ((r = n || r), (n = [])), (r = r || {}), e instanceof RegExp) ? p(e, n) : i(e) ? m(e, n, r) : g(e, n, r);
}
