n.d(t, {
    M: function () {
        return i;
    },
    i: function () {
        return o;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_rtc_voice_state_sync_experiment',
    label: 'RTC and Voice State Desync Fixes',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Desync fixes enabled',
            config: { enabled: !0 }
        }]
});
function o() {
    let {enabled: e} = r.getCurrentConfig({ location: 'isRTCVoiceStateDesyncExperimentEnabled' });
    return e;
}
function i() {
    let {enabled: e} = r.useExperiment({ location: 'useIsRTCVoiceStateDesyncExperimentEnabled' });
    return e;
}
