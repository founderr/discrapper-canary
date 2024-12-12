var n = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
function a(e) {
    if (null == e) throw TypeError('Object.assign cannot be called with null or undefined');
    return Object(e);
}
function s() {
    try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var n = {}, r = 0; r < 10; r++) n['_' + String.fromCharCode(r)] = r;
        var i = Object.getOwnPropertyNames(n).map(function (e) {
            return n[e];
        });
        if ('0123456789' !== i.join('')) return !1;
        var a = {};
        if (
            ('abcdefghijklmnopqrst'.split('').forEach(function (e) {
                a[e] = e;
            }),
            'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, a)).join(''))
        )
            return !1;
        return !0;
    } catch (e) {
        return !1;
    }
}
e.exports = s()
    ? Object.assign
    : function (e, s) {
          for (var o, l, u = a(e), c = 1; c < arguments.length; c++) {
              for (var d in ((o = Object(arguments[c])), o)) r.call(o, d) && (u[d] = o[d]);
              if (n) {
                  l = n(o);
                  for (var f = 0; f < l.length; f++) i.call(o, l[f]) && (u[l[f]] = o[l[f]]);
              }
          }
          return u;
      };
