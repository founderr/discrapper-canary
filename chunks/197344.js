var r = n(653041);
var i = n(442837),
    a = n(292556),
    o = n(695346),
    s = n(292959),
    l = n(626135),
    u = n(378364),
    c = n(981631),
    d = n(689938);
function _(e) {
    let t = s.Z.getDisabledSounds();
    if (null == u.Z.ringtone) return;
    let n = t.filter((e) => e !== u.Z.ringtone);
    !e && n.push(u.Z.ringtone),
        a.default.setDisabledSounds(n),
        l.default.track(c.rMx.EVENT_RINGTONE_TOGGLED, {
            toggled_on: e,
            sound_name: u.Z.ringtone
        });
}
function E() {
    let e = (0, i.e7)([s.Z], () => s.Z.getDisabledSounds()),
        t = o.D3.useSetting();
    return null != u.Z.ringtone && t && !e.includes(u.Z.ringtone);
}
function f() {
    return o.D3.useSetting() ? void 0 : d.Z.Messages.ENABLE_PHONE_INTEGRATION;
}
function h() {
    return g() && u.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function p() {
    let { enabled: e } = u.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return g() && e;
}
function m() {
    return null != u.Z.ringtone && null != u.Z.getRingtoneSettingsLabel;
}
function I() {
    return p() && m();
}
function T() {
    return h() && m();
}
function g() {
    let e = Date.now();
    return e >= u.Z.startTimeMs && e <= u.Z.endTimeMs;
}
function S() {
    return (0, i.e7)([s.Z], () => null == u.Z.ringtone || s.Z.isSoundDisabled(u.Z.ringtone));
}
function A() {
    return null == u.Z.ringtone || s.Z.isSoundDisabled(u.Z.ringtone);
}
function v() {
    var e;
    return g() ? (null === (e = u.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(u.Z)) : null;
}
function N() {
    return g() ? u.Z.appSpinnerSources : null;
}
function O(e) {
    return u.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
}
t.Z = {
    subscribe: O,
    isEligible: h,
    isRingtoneDisabled: A,
    isRingtoneEligible: T,
    onRingtoneSettingValueChange: _,
    useIsEligible: p,
    useIsRingtoneDisabled: S,
    useIsRingtoneEligible: I,
    useRingtoneSettingDescription: f,
    useRingtoneSettingValue: E,
    getAppSpinnerSources: N,
    getLoadingTips: v
};
