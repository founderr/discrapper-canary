var i = r(161581),
    a = r(197187),
    s = r(354848),
    o = r(177448),
    l = r(626544),
    u = r(50754),
    c = r(202934),
    d = i.Function,
    f =
        /MSIE .\./.test(l) ||
        (o &&
            (function () {
                var e = i.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, n) {
    var r = n ? 2 : 1;
    return f
        ? function (i, o) {
              var l = c(arguments.length, 1) > r,
                  f = s(i) ? i : d(i),
                  _ = l ? u(arguments, r) : [],
                  h = l
                      ? function () {
                            a(f, this, _);
                        }
                      : f;
              return n ? e(h, o) : e(h);
          }
        : e;
};
