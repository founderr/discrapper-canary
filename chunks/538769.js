var r = n(294377),
    i = n(735471),
    a = n(875604),
    o = n(756234),
    s = Object;
e.exports = o
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = r('Symbol');
          return i(t) && a(t.prototype, s(e));
      };
