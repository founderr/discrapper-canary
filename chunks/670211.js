function r(e, t) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (a = i(e)) || (t && e && 'number' == typeof e.length)) {
            a && (e = a);
            var n = 0,
                r = function () {};
            return {
                s: r,
                n: function () {
                    return n >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[n++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: r
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var a,
        o,
        s = !0,
        l = !1;
    return {
        s: function () {
            a = e[Symbol.iterator]();
        },
        n: function () {
            var e = a.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (o = e);
        },
        f: function () {
            try {
                !s && null != a.return && a.return();
            } finally {
                if (l) throw o;
            }
        }
    };
}
function i(e, t) {
    if (e) {
        if ('string' == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
    }
}
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
n(470079);
var o = function (e, t, n, r) {
    var i = n.getBackend();
    n.receiveBackend(r);
    var a = t(e);
    return n.receiveBackend(i), a;
};
