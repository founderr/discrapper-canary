var i = r(492476),
    a = r(381538),
    s = r(26018);
function o(e) {
    switch (e.arrayFormat) {
        case 'index':
            return function (n, r, i) {
                return null === r ? [u(n, e), '[', i, ']'].join('') : [u(n, e), '[', u(i, e), ']=', u(r, e)].join('');
            };
        case 'bracket':
            return function (n, r) {
                return null === r ? u(n, e) : [u(n, e), '[]=', u(r, e)].join('');
            };
        default:
            return function (n, r) {
                return null === r ? u(n, e) : [u(n, e), '=', u(r, e)].join('');
            };
    }
}
function l(e) {
    var n;
    switch (e.arrayFormat) {
        case 'index':
            return function (e, r, i) {
                if (((n = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, '')), !n)) {
                    i[e] = r;
                    return;
                }
                void 0 === i[e] && (i[e] = {}), (i[e][n[1]] = r);
            };
        case 'bracket':
            return function (e, r, i) {
                if (((n = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, '')), n)) {
                    if (void 0 === i[e]) {
                        i[e] = [r];
                        return;
                    }
                } else {
                    i[e] = r;
                    return;
                }
                i[e] = [].concat(i[e], r);
            };
        default:
            return function (e, n, r) {
                if (void 0 === r[e]) {
                    r[e] = n;
                    return;
                }
                r[e] = [].concat(r[e], n);
            };
    }
}
function u(e, n) {
    return n.encode ? (n.strict ? i(e) : encodeURIComponent(e)) : e;
}
function c(e) {
    return Array.isArray(e)
        ? e.sort()
        : 'object' == typeof e
          ? c(Object.keys(e))
                .sort(function (e, n) {
                    return Number(e) - Number(n);
                })
                .map(function (n) {
                    return e[n];
                })
          : e;
}
(n.extract = function (e) {
    return e.split('?')[1] || '';
}),
    (n.parse = function (e, n) {
        var r = l((n = a({ arrayFormat: 'none' }, n))),
            i = Object.create(null);
        return 'string' == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function (e) {
                  var n = e.replace(/\+/g, ' ').split('='),
                      a = n.shift(),
                      o = n.length > 0 ? n.join('=') : void 0;
                  (o = void 0 === o ? null : s(o)), r(s(a), o, i);
              }),
              Object.keys(i)
                  .sort()
                  .reduce(function (e, n) {
                      var r = i[n];
                      return r && 'object' == typeof r && !Array.isArray(r) ? (e[n] = c(r)) : (e[n] = r), e;
                  }, Object.create(null)))
            : i;
    }),
    (n.stringify = function (e, n) {
        var r = o(
            (n = a(
                {
                    encode: !0,
                    strict: !0,
                    arrayFormat: 'none'
                },
                n
            ))
        );
        return e
            ? Object.keys(e)
                  .sort()
                  .map(function (i) {
                      var a = e[i];
                      if (void 0 === a) return '';
                      if (null === a) return u(i, n);
                      if (Array.isArray(a)) {
                          var s = [];
                          return (
                              a.slice().forEach(function (e) {
                                  if (void 0 !== e) s.push(r(i, e, s.length));
                              }),
                              s.join('&')
                          );
                      }
                      return u(i, n) + '=' + u(a, n);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join('&')
            : '';
    });
