var n = r(354848),
    a = r(174124),
    o = a.all;
e.exports = a.IS_HTMLDDA
    ? function (e) {
          return 'object' == typeof e ? null !== e : n(e) || e === o;
      }
    : function (e) {
          return 'object' == typeof e ? null !== e : n(e);
      };
