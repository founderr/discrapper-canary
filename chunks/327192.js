var r = n(273511),
    i = n(735471),
    a = n(726433),
    o = n(360518)('toStringTag'),
    s = Object,
    l =
        'Arguments' ===
        a(
            (function () {
                return arguments;
            })()
        ),
    u = function (e, t) {
        try {
            return e[t];
        } catch (e) {}
    };
e.exports = r
    ? a
    : function (e) {
          var t, n, r;
          return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (n = u((t = s(e)), o)) ? n : l ? a(t) : 'Object' === (r = a(t)) && i(t.callee) ? 'Arguments' : r;
      };
