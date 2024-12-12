r.d(n, {
    o: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        kind: 'user',
        id: '2024-12_user_profile_react_reply_awareness',
        label: 'User Profile React Reply Awareness',
        defaultConfig: { fadeInAndOutEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Fade In & Out Enabled',
                config: { fadeInAndOutEnabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: r });
    };
