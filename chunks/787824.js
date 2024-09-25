n.d(t, {
    C: function () {
        return a;
    },
    X: function () {
        return o;
    }
});
var r = n(724458);
var i = n(392711);
function a(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let r = (0, i.camelCase)(n);
              return 'object' != typeof e[n] || Array.isArray(e[n]) ? (t[r] = e[n]) : (t[r] = a(e[n])), t;
          }, {});
}
function o(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let r = (0, i.snakeCase)(n);
              return 'object' != typeof e[n] || Array.isArray(e[n]) ? (t[r] = e[n]) : (t[r] = o(e[n])), (t[r] = e[n]), t;
          }, {});
}
