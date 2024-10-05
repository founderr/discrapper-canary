n.d(t, {
    C: function () {
        return function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let o = (0, r.camelCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[o] = t[i]) : (n[o] = e(t[i])), n;
                  }, {});
        };
    },
    X: function () {
        return function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let o = (0, r.snakeCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[o] = t[i]) : (n[o] = e(t[i])), (n[o] = t[i]), n;
                  }, {});
        };
    }
}),
    n(724458);
var r = n(392711);
