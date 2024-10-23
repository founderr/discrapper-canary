t.d(n, {
    p: function () {
        return r;
    }
});
let a = (0, t(818083).B)({
    kind: 'user',
    id: '2024-08_game_follow_survey',
    label: 'Game Follow Fake Door Survey',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: t } = a.useExperiment({ location: e }, { autoTrackExposure: n });
    return t;
}
