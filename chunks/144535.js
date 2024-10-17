o.d(t, {
    I: function () {
        return s;
    }
});
var n = o(196095),
    a = o(424395);
let s = a.vJ
    ? function (e) {
          let { intl: t, t: a } = o(388032),
              s = a[(0, n.runtimeHashMessageKey)(e)],
              l = t.currentLocale;
          t.currentLocale = 'en-US';
          let i = t.string(s);
          return (t.currentLocale = l), i;
      }
    : function (e) {
          return o(375964)[e];
      };
