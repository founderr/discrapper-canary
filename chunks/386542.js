r.d(n, {
    k: function () {
        return o;
    }
});
var i = r(442837),
    a = r(114064),
    s = r(485731);
function o(e) {
    let { available: n, activated: r } = (0, i.cj)([a.Z], () => ({
            available: a.Z.isAvailable(e),
            activated: a.Z.hasActiveDemo(e)
        })),
        o = (0, i.cj)([s.Z], () => s.Z.getState());
    return {
        available: n,
        activated: r,
        hqStreamingState: o,
        shouldShowOptInPopout: (0, i.e7)([s.Z], () => s.Z.shouldShowOptInPopout())
    };
}
