n.d(t, {
    z7: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_whats_new_cards_v2_experiment',
    label: 'Whats new bento boxes',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'Users see current whats new cards',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'users see bento box whats new design ',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { enabled: t } = i.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
