s.d(t, {
    N: function () {
        return r;
    }
});
var n = s(520540);
function r(e) {
    let { enabled: t, eligibleToFetch: s } = n.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return {
        enabled: t,
        eligibleToFetch: s
    };
}
