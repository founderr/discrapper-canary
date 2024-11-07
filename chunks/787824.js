e.d(t, {
    C: function () {
        return function n(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((e, i) => {
                      let u = (0, r.camelCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (e[u] = t[i]) : (e[u] = n(t[i])), e;
                  }, {});
        };
    },
    X: function () {
        return function n(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((e, i) => {
                      let u = (0, r.snakeCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (e[u] = t[i]) : (e[u] = n(t[i])), (e[u] = t[i]), e;
                  }, {});
        };
    }
}),
    e(724458);
var r = e(392711);
