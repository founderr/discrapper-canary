r.d(t, {
    I1: function () {
        return E;
    },
    YJ: function () {
        return o;
    }
});
var a = r(370336);
let n = '_sentryScope',
    _ = '_sentryIsolationScope';
function o(e, t, r) {
    e && ((0, a.xp)(e, _, r), (0, a.xp)(e, n, t));
}
function E(e) {
    return {
        scope: e[n],
        isolationScope: e[_]
    };
}
