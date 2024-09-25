var t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable;
function i(e) {
    if (null == e) throw TypeError('Object.assign cannot be called with null or undefined');
    return Object(e);
}
function a() {
    try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
        });
        if ('0123456789' !== r.join('')) return !1;
        var i = {};
        if (
            ('abcdefghijklmnopqrst'.split('').forEach(function (e) {
                i[e] = e;
            }),
            'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, i)).join(''))
        )
            return !1;
        return !0;
    } catch (e) {
        return !1;
    }
}
e.exports = a()
    ? Object.assign
    : function (e, a) {
          for (var o, s, l = i(e), u = 1; u < arguments.length; u++) {
              for (var c in ((o = Object(arguments[u])), o)) n.call(o, c) && (l[c] = o[c]);
              if (t) {
                  s = t(o);
                  for (var d = 0; d < s.length; d++) r.call(o, s[d]) && (l[s[d]] = o[s[d]]);
              }
          }
          return l;
      };
