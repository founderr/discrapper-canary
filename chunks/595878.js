n.d(t, {
    AK: function () {
        return o;
    },
    cG: function () {
        return i;
    },
    dR: function () {
        return a;
    },
    mK: function () {
        return s;
    }
});
var r = n(290031);
function i(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.OW.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.OW.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = r.sg.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = r.fR.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
