var r = n(447631),
    i = n(10012),
    a = n(228129),
    o = n(28886),
    s = n(591794),
    l = TypeError,
    u = Object.defineProperty,
    c = Object.getOwnPropertyDescriptor,
    d = 'enumerable',
    _ = 'configurable',
    E = 'writable';
t.f = r
    ? a
        ? function (e, t, n) {
              if ((o(e), (t = s(t)), o(n), 'function' == typeof e && 'prototype' === t && 'value' in n && E in n && !n[E])) {
                  var r = c(e, t);
                  r &&
                      r[E] &&
                      ((e[t] = n.value),
                      (n = {
                          configurable: _ in n ? n[_] : r[_],
                          enumerable: d in n ? n[d] : r[d],
                          writable: !1
                      }));
              }
              return u(e, t, n);
          }
        : u
    : function (e, t, n) {
          if ((o(e), (t = s(t)), o(n), i))
              try {
                  return u(e, t, n);
              } catch (e) {}
          if ('get' in n || 'set' in n) throw new l('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
      };
