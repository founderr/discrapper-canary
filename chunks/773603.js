var i = r(147018),
    a = r(992051),
    s = r(955903),
    o = r(936940),
    l = r(545576),
    u = r(354848),
    c = r(344135),
    d = r(457110),
    f = r(859209),
    _ = s && s.prototype;
if (
    (i(
        {
            target: 'Promise',
            proto: !0,
            real: !0,
            forced:
                !!s &&
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
                var n = c(this, l('Promise')),
                    r = u(e);
                return this.then(
                    r
                        ? function (r) {
                              return d(n, e()).then(function () {
                                  return r;
                              });
                          }
                        : e,
                    r
                        ? function (r) {
                              return d(n, e()).then(function () {
                                  throw r;
                              });
                          }
                        : e
                );
            }
        }
    ),
    !a && u(s))
) {
    var h = l('Promise').prototype.finally;
    _.finally !== h && f(_, 'finally', h, { unsafe: !0 });
}
