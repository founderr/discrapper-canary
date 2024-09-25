var t,
    n,
    r = Function.prototype.toString,
    i = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
if ('function' == typeof i && 'function' == typeof Object.defineProperty)
    try {
        (t = Object.defineProperty({}, 'length', {
            get: function () {
                throw n;
            }
        })),
            (n = {}),
            i(
                function () {
                    throw 42;
                },
                null,
                t
            );
    } catch (e) {
        e !== n && (i = null);
    }
else i = null;
var a = /^\s*class\b/,
    o = function (e) {
        try {
            var t = r.call(e);
            return a.test(t);
        } catch (e) {
            return !1;
        }
    },
    s = function (e) {
        try {
            if (o(e)) return !1;
            return r.call(e), !0;
        } catch (e) {
            return !1;
        }
    },
    l = Object.prototype.toString,
    u = '[object Object]',
    c = '[object Function]',
    d = '[object GeneratorFunction]',
    _ = '[object HTMLAllCollection]',
    E = '[object HTML document.all class]',
    f = '[object HTMLCollection]',
    h = 'function' == typeof Symbol && !!Symbol.toStringTag,
    p = !(0 in [,]),
    m = function () {
        return !1;
    };
if ('object' == typeof document) {
    var I = document.all;
    l.call(I) === l.call(document.all) &&
        (m = function (e) {
            if ((p || !e) && (void 0 === e || 'object' == typeof e))
                try {
                    var t = l.call(e);
                    return (t === _ || t === E || t === f || t === u) && null == e('');
                } catch (e) {}
            return !1;
        });
}
e.exports = i
    ? function (e) {
          if (m(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          try {
              i(e, null, t);
          } catch (e) {
              if (e !== n) return !1;
          }
          return !o(e) && s(e);
      }
    : function (e) {
          if (m(e)) return !0;
          if (!e || ('function' != typeof e && 'object' != typeof e)) return !1;
          if (h) return s(e);
          if (o(e)) return !1;
          var t = l.call(e);
          return !!(t === c || t === d || /^\[object HTML/.test(t)) && s(e);
      };
