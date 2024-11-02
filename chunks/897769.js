e.d(n, {
    S: function () {
        return o;
    }
});
var i = e(442837),
    r = e(359119);
function o(t, n) {
    return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(t), [t])
        .filter((t) => t.type === n)
        .find((t) => null == t.dismiss_timestamp);
}
