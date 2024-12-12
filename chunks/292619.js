r.d(n, {
    w: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-03_web_audio_api_rollout',
    label: 'Web Audio API Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Web Audio API usage',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n } = e,
        { enabled: r } = i.getCurrentConfig({ location: n }, { autoTrackExposure: !1 });
    return r;
}
