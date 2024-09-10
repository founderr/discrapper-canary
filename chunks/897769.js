t.d(n, {
    S: function () {
        return o;
    }
});
var i = t(442837),
    r = t(359119);
function o(e, n) {
    return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === n)
        .find((e) => null == e.dismiss_timestamp);
}
