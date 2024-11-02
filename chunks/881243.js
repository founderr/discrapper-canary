r.d(t, {
    I1: function () {
        return i;
    },
    YJ: function () {
        return o;
    }
});
var n = r(370336);
let a = '_sentryScope',
    _ = '_sentryIsolationScope';
function o(e, t, r) {
    e && ((0, n.xp)(e, _, r), (0, n.xp)(e, a, t));
}
function i(e) {
    return {
        scope: e[a],
        isolationScope: e[_]
    };
}
