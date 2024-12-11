n.d(t, {
    o: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
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
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
