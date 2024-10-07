var e = r(525305),
    i = r(354848),
    o = r(332916),
    a = r(641236)('toStringTag'),
    u = Object,
    c =
        'Arguments' ===
        o(
            (function () {
                return arguments;
            })()
        ),
    s = function (t, n) {
        try {
            return t[n];
        } catch (t) {}
    };
t.exports = e
    ? o
    : function (t) {
          var n, r, e;
          return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (r = s((n = u(t)), a)) ? r : c ? o(n) : 'Object' === (e = o(n)) && i(n.callee) ? 'Arguments' : e;
      };
