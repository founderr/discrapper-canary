n.d(t, {
    C: function () {
        return function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, r) => {
                      let o = (0, i.camelCase)(r);
                      return 'object' != typeof t[r] || Array.isArray(t[r]) ? (n[o] = t[r]) : (n[o] = e(t[r])), n;
                  }, {});
        };
    },
    X: function () {
        return function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, r) => {
                      let o = (0, i.snakeCase)(r);
                      return 'object' != typeof t[r] || Array.isArray(t[r]) ? (n[o] = t[r]) : (n[o] = e(t[r])), (n[o] = t[r]), n;
                  }, {});
        };
    }
}),
    n(724458);
var i = n(392711);
