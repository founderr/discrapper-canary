var i = r(378364);
function a() {
    return o() && i.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function s() {
    let { enabled: e } = i.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return o() && e;
}
function o() {
    let e = Date.now();
    return e >= i.Z.startTimeMs && e <= i.Z.endTimeMs;
}
function l() {
    var e;
    return o() ? (null === (e = i.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(i.Z)) : null;
}
function u() {
    return o() ? i.Z.appSpinnerSources : null;
}
function c(e) {
    return i.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
}
function d() {
    return a() && i.Z.soundpack ? i.Z.soundpack : null;
}
function f() {
    return s() && i.Z.soundpack && null != i.Z.soundpackLabel
        ? {
              soundpack: i.Z.soundpack,
              soundpackLabel: i.Z.soundpackLabel
          }
        : null;
}
n.Z = {
    subscribe: c,
    isEligible: a,
    useHolidaySoundpack: f,
    useIsEligible: s,
    getAppSpinnerSources: u,
    getLoadingTips: l,
    getHolidaySoundpack: d
};
