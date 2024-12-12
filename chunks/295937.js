r.d(n, {
    l: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
        kind: 'user',
        id: '2024-10_simplified_custom_status_bubble',
        label: 'Simplified Custom Status Bubble',
        defaultConfig: { simplifiedCustomStatusBubbleEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Simplified Custom Status Bubble Enabled',
                config: { simplifiedCustomStatusBubbleEnabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: n, autoTrackExposure: r = !0 } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: r });
    };
