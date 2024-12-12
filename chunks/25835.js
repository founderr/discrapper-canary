function i(e, n) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (s = a(e)) || (n && e && 'number' == typeof e.length)) {
            s && (e = s);
            var r = 0,
                i = function () {};
            return {
                s: i,
                n: function () {
                    return r >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[r++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: i
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        o,
        l = !0,
        u = !1;
    return {
        s: function () {
            s = e[Symbol.iterator]();
        },
        n: function () {
            var e = s.next();
            return (l = e.done), e;
        },
        e: function (e) {
            (u = !0), (o = e);
        },
        f: function () {
            try {
                !l && null != s.return && s.return();
            } finally {
                if (u) throw o;
            }
        }
    };
}
function a(e, n) {
    if (e) {
        if ('string' == typeof e) return s(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, n);
    }
}
function s(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
r(192379);
var o = function (e, n, r, i) {
    var a = r.getBackend();
    r.receiveBackend(i);
    var s = n(e);
    return r.receiveBackend(a), s;
};
