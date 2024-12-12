var i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
    a = r(434586),
    s = r(320387),
    o = r(198811),
    l = r(170058),
    u = function (e, n) {
        if (null == e) throw TypeError('Cannot call method on ' + e);
        if ('string' != typeof n || ('number' !== n && 'string' !== n)) throw TypeError('hint must be "string" or "number"');
        var r,
            i,
            o,
            l = 'string' === n ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
        for (o = 0; o < l.length; ++o) if (s((r = e[l[o]])) && a((i = r.call(e)))) return i;
        throw TypeError('No default value');
    },
    c = function (e, n) {
        var r = e[n];
        if (null != r) {
            if (!s(r)) throw TypeError(r + ' returned for property ' + n + ' of object ' + e + ' is not a function');
            return r;
        }
    };
e.exports = function (e) {
    if (a(e)) return e;
    var n,
        r = 'default';
    if ((arguments.length > 1 && (arguments[1] === String ? (r = 'string') : arguments[1] === Number && (r = 'number')), i && (Symbol.toPrimitive ? (n = c(e, Symbol.toPrimitive)) : l(e) && (n = Symbol.prototype.valueOf)), void 0 !== n)) {
        var s = n.call(e, r);
        if (a(s)) return s;
        throw TypeError('unable to convert exotic object to primitive');
    }
    return 'default' === r && (o(e) || l(e)) && (r = 'string'), u(e, 'default' === r ? 'number' : r);
};
