var r = n(668530),
    i = n(156741),
    a = n(735471),
    o = n(262546),
    s = n(204384),
    l = n(780524),
    u = n(274745),
    c = r.Function,
    d =
        /MSIE .\./.test(s) ||
        (o &&
            (function () {
                var e = r.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (r, o) {
              var s = u(arguments.length, 1) > n,
                  d = a(r) ? r : c(r),
                  _ = s ? l(arguments, n) : [],
                  E = s
                      ? function () {
                            i(d, this, _);
                        }
                      : d;
              return t ? e(E, o) : e(E);
          }
        : e;
};
