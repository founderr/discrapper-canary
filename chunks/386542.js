n.d(t, {
    k: function () {
        return o;
    }
});
var r = n(442837),
    i = n(114064),
    a = n(485731);
function o(e) {
    let { available: t, activated: n } = (0, r.cj)([i.Z], () => ({
            available: i.Z.isAvailable(e),
            activated: i.Z.hasActiveDemo(e)
        })),
        o = (0, r.cj)([a.Z], () => a.Z.getState());
    return {
        available: t,
        activated: n,
        hqStreamingState: o,
        shouldShowOptInPopout: (0, r.e7)([a.Z], () => a.Z.shouldShowOptInPopout())
    };
}
