var r = n(735471),
    i = n(941332),
    a = i.all;
e.exports = i.IS_HTMLDDA
    ? function (e) {
          return 'object' == typeof e ? null !== e : r(e) || e === a;
      }
    : function (e) {
          return 'object' == typeof e ? null !== e : r(e);
      };
