t.d(n, {
    C: function () {
        return function e(n) {
            return null == n
                ? n
                : Object.keys(n).reduce((t, r) => {
                      let l = (0, i.camelCase)(r);
                      return 'object' != typeof n[r] || Array.isArray(n[r]) ? (t[l] = n[r]) : (t[l] = e(n[r])), t;
                  }, {});
        };
    },
    X: function () {
        return function e(n) {
            return null == n
                ? n
                : Object.keys(n).reduce((t, r) => {
                      let l = (0, i.snakeCase)(r);
                      return 'object' != typeof n[r] || Array.isArray(n[r]) ? (t[l] = n[r]) : (t[l] = e(n[r])), (t[l] = n[r]), t;
                  }, {});
        };
    }
}),
    t(724458);
var i = t(392711);
