var n = r(325008),
    a = r(34924),
    o = r(733669),
    i = r(24033),
    _ = r(966606),
    E = TypeError,
    s = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    I = 'enumerable',
    u = 'configurable',
    l = 'writable';
t.f = n
    ? o
        ? function (e, t, r) {
              if ((i(e), (t = _(t)), i(r), 'function' == typeof e && 'prototype' === t && 'value' in r && l in r && !r[l])) {
                  var n = c(e, t);
                  n &&
                      n[l] &&
                      ((e[t] = r.value),
                      (r = {
                          configurable: u in r ? r[u] : n[u],
                          enumerable: I in r ? r[I] : n[I],
                          writable: !1
                      }));
              }
              return s(e, t, r);
          }
        : s
    : function (e, t, r) {
          if ((i(e), (t = _(t)), i(r), a))
              try {
                  return s(e, t, r);
              } catch (e) {}
          if ('get' in r || 'set' in r) throw E('Accessors not supported');
          return 'value' in r && (e[t] = r.value), e;
      };
