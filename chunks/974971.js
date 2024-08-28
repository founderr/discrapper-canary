var n = r(525305),
    a = r(354848),
    o = r(332916),
    i = r(641236)('toStringTag'),
    _ = Object,
    E =
        'Arguments' ===
        o(
            (function () {
                return arguments;
            })()
        ),
    s = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = n
    ? o
    : function (e) {
          var t, r, n;
          return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (r = s((t = _(e)), i)) ? r : E ? o(t) : 'Object' === (n = o(t)) && a(t.callee) ? 'Arguments' : n;
      };
