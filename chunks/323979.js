var n = r(545576),
    a = r(354848),
    o = r(838957),
    i = r(769992),
    _ = Object;
e.exports = i
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = n('Symbol');
          return a(t) && o(t.prototype, _(e));
      };
