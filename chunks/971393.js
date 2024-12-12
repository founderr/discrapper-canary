r.d(n, {
    sS: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-08_user_profile_blocker_skeleton',
    label: 'User Profile Blocker Skeleton',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable User Profile Blocker Skeleton',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n, autoTrackExposure: r = !0 } = e,
        { enabled: a } = i.useExperiment({ location: n }, { autoTrackExposure: r });
    return a;
}
