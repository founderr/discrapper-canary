n.d(t, {
    l: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
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
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
