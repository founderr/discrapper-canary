r.d(n, {
    Ac: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-08_user_profile_blockee_hide_mutuals',
    label: 'User Profile Blockee Hide Mutuals',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable User Profile Blockee Hide Mutuals',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.useExperiment({ location: n }, { autoTrackExposure: r });
    return a;
}
