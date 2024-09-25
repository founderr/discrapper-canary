var r = n(67867),
    i = n(414629),
    a = n(197859),
    o = n(821819),
    s = n(294377),
    l = n(735471),
    u = n(992416),
    c = n(607672),
    d = n(691244),
    _ = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!a &&
                o(function () {
                    _.finally.call(
                        {
                            then: function () {}
                        },
                        function () {}
                    );
                })
        },
        {
            finally: function (e) {
                var t = u(this, s('Promise')),
                    n = l(e);
                return this.then(
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return c(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !i && l(a))
) {
    var E = s('Promise').prototype.finally;
    _.finally !== E && d(_, 'finally', E, { unsafe: !0 });
}
