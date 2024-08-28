var n = r(680500),
    a = r(24033),
    o = r(340618);
e.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var e,
                  t = !1,
                  r = {};
              try {
                  (e = n(Object.prototype, '__proto__', 'set'))(r, []), (t = r instanceof Array);
              } catch (e) {}
              return function (r, n) {
                  return a(r), o(n), t ? e(r, n) : (r.__proto__ = n), r;
              };
          })()
        : void 0);
