var r = n(660566);
(e.exports = I), (e.exports.parse = a), (e.exports.compile = o), (e.exports.tokensToFunction = u), (e.exports.tokensToRegExp = m);
var i = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function a(e, t) {
    for (var n, r = [], a = 0, o = 0, s = '', l = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
        var u = n[0],
            _ = n[1],
            E = n.index;
        if (((s += e.slice(o, E)), (o = E + u.length), _)) {
            s += _[1];
            continue;
        }
        var f = e[o],
            h = n[2],
            p = n[3],
            m = n[4],
            I = n[5],
            T = n[6],
            g = n[7];
        s && (r.push(s), (s = ''));
        var S = null != h && null != f && f !== h,
            A = '+' === T || '*' === T,
            v = '?' === T || '*' === T,
            N = n[2] || l,
            O = m || I;
        r.push({
            name: p || a++,
            prefix: h || '',
            delimiter: N,
            optional: v,
            repeat: A,
            partial: S,
            asterisk: !!g,
            pattern: O ? d(O) : g ? '.*' : '[^' + c(N) + ']+?'
        });
    }
    return o < e.length && (s += e.substr(o)), s && r.push(s), r;
}
function o(e, t) {
    return u(a(e, t));
}
function s(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function l(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function u(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++) 'object' == typeof e[n] && (t[n] = RegExp('^(?:' + e[n].pattern + ')$'));
    return function (n, i) {
        for (var a = '', o = n || {}, u = (i || {}).pretty ? s : encodeURIComponent, c = 0; c < e.length; c++) {
            var d,
                _ = e[c];
            if ('string' == typeof _) {
                a += _;
                continue;
            }
            var E = o[_.name];
            if (null == E) {
                if (_.optional) {
                    _.partial && (a += _.prefix);
                    continue;
                }
                throw TypeError('Expected "' + _.name + '" to be defined');
            }
            if (r(E)) {
                if (!_.repeat) throw TypeError('Expected "' + _.name + '" to not repeat, but received `' + JSON.stringify(E) + '`');
                if (0 === E.length) {
                    if (_.optional) continue;
                    throw TypeError('Expected "' + _.name + '" to not be empty');
                }
                for (var f = 0; f < E.length; f++) {
                    if (((d = u(E[f])), !t[c].test(d))) throw TypeError('Expected all "' + _.name + '" to match "' + _.pattern + '", but received `' + JSON.stringify(d) + '`');
                    a += (0 === f ? _.prefix : _.delimiter) + d;
                }
                continue;
            }
            if (((d = _.asterisk ? l(E) : u(E)), !t[c].test(d))) throw TypeError('Expected "' + _.name + '" to match "' + _.pattern + '", but received "' + d + '"');
            a += _.prefix + d;
        }
        return a;
    };
}
function c(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function d(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function _(e, t) {
    return (e.keys = t), e;
}
function E(e) {
    return e.sensitive ? '' : 'i';
}
function f(e, t) {
    var n = e.source.match(/\((?!\?)/g);
    if (n)
        for (var r = 0; r < n.length; r++)
            t.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
    return _(e, t);
}
function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(I(e[i], t, n).source);
    return _(RegExp('(?:' + r.join('|') + ')', E(n)), t);
}
function p(e, t, n) {
    return m(a(e, n), t, n);
}
function m(e, t, n) {
    !r(t) && ((n = t || n), (t = []));
    for (var i = (n = n || {}).strict, a = !1 !== n.end, o = '', s = 0; s < e.length; s++) {
        var l = e[s];
        if ('string' == typeof l) o += c(l);
        else {
            var u = c(l.prefix),
                d = '(?:' + l.pattern + ')';
            t.push(l), l.repeat && (d += '(?:' + u + d + ')*'), (o += d = l.optional ? (l.partial ? u + '(' + d + ')?' : '(?:' + u + '(' + d + '))?') : u + '(' + d + ')');
        }
    }
    var f = c(n.delimiter || '/'),
        h = o.slice(-f.length) === f;
    return !i && (o = (h ? o.slice(0, -f.length) : o) + '(?:' + f + '(?=$))?'), a ? (o += '$') : (o += i && h ? '' : '(?=' + f + '|$)'), _(RegExp('^' + o, E(n)), t);
}
function I(e, t, n) {
    return (!r(t) && ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp) ? f(e, t) : r(e) ? h(e, t, n) : p(e, t, n);
}
