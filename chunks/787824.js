t.d(e, {
    C: function () {
        return function n(e) {
            return null == e
                ? e
                : Object.keys(e).reduce((t, u) => {
                      let i = (0, r.camelCase)(u);
                      return 'object' != typeof e[u] || Array.isArray(e[u]) ? (t[i] = e[u]) : (t[i] = n(e[u])), t;
                  }, {});
        };
    },
    X: function () {
        return function n(e) {
            return null == e
                ? e
                : Object.keys(e).reduce((t, u) => {
                      let i = (0, r.snakeCase)(u);
                      return 'object' != typeof e[u] || Array.isArray(e[u]) ? (t[i] = e[u]) : (t[i] = n(e[u])), (t[i] = e[u]), t;
                  }, {});
        };
    }
}),
    t(724458);
var r = t(392711);
