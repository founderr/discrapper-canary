var n = r(174124),
    a = n.all;
e.exports = n.IS_HTMLDDA
    ? function (e) {
          return 'function' == typeof e || e === a;
      }
    : function (e) {
          return 'function' == typeof e;
      };
