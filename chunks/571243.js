t.d(n, {
    a: function () {
        return l;
    }
});
let a = (0, t(818083).B)({
        id: '2024-04_memberlist_one_click_reply',
        kind: 'user',
        label: 'Memberlist One Click Reply',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'One click reply enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    l = (e) => {
        let { location: n, autoTrackExposure: t = !0 } = e,
            { enabled: l } = a.useExperiment({ location: n }, { autoTrackExposure: t });
        return l;
    };
