let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-10_golive_simulcast',
    label: 'GoLive Simulcast',
    defaultConfig: {
        simulcastEnabled: !1,
        lqStreamBitrate: 0
    },
    treatments: [
        {
            id: 1,
            label: 'Simulcast @ 1.5Mbps',
            config: {
                simulcastEnabled: !0,
                lqStreamBitrate: 1500000
            }
        }
    ]
});
n.Z = {
    getConfig: () => i.getCurrentConfig({ location: 'getConfig' }, { autoTrackExposure: !1 }),
    simulcastEnabled: () => i.getCurrentConfig({ location: 'simulcastEnabled' }, { autoTrackExposure: !0 }).simulcastEnabled
};
