n.d(t, {
    S: function () {
        return a;
    }
});
var i = n(442837),
    l = n(359119);
function a(e, t) {
    return (0, i.e7)([l.ZP], () => l.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp);
}
