var i,
    a,
    s,
    o,
    l = r(192853),
    u = r(703825)();
if (u) {
    (i = l('Object.prototype.hasOwnProperty')), (a = l('RegExp.prototype.exec')), (s = {});
    var c = function () {
        throw s;
    };
    (o = {
        toString: c,
        valueOf: c
    }),
        'symbol' == typeof Symbol.toPrimitive && (o[Symbol.toPrimitive] = c);
}
var d = l('Object.prototype.toString'),
    f = Object.getOwnPropertyDescriptor,
    _ = '[object RegExp]';
e.exports = u
    ? function (e) {
          if (!e || 'object' != typeof e) return !1;
          var n = f(e, 'lastIndex');
          if (!(n && i(n, 'value'))) return !1;
          try {
              a(e, o);
          } catch (e) {
              return e === s;
          }
      }
    : function (e) {
          return !!e && ('object' == typeof e || 'function' == typeof e) && d(e) === _;
      };
