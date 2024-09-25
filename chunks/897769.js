n.d(t, {
    S: function () {
        return o;
    }
});
var i = n(442837),
    r = n(359119);
function o(e, t) {
    return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp);
}
