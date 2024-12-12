var i = r(320387),
    a = Object.prototype.toString,
    s = Object.prototype.hasOwnProperty,
    o = function (e, n, r) {
        for (var i = 0, a = e.length; i < a; i++) s.call(e, i) && (null == r ? n(e[i], i, e) : n.call(r, e[i], i, e));
    },
    l = function (e, n, r) {
        for (var i = 0, a = e.length; i < a; i++) null == r ? n(e.charAt(i), i, e) : n.call(r, e.charAt(i), i, e);
    },
    u = function (e, n, r) {
        for (var i in e) s.call(e, i) && (null == r ? n(e[i], i, e) : n.call(r, e[i], i, e));
    },
    c = function (e, n, r) {
        var s;
        if (!i(n)) throw TypeError('iterator must be a function');
        arguments.length >= 3 && (s = r), '[object Array]' === a.call(e) ? o(e, n, s) : 'string' == typeof e ? l(e, n, s) : u(e, n, s);
    };
e.exports = c;
