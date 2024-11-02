n.d(t, {
    O: function () {
        return a;
    }
});
var o = n(818083),
    r = n(977156);
let s = (0, o.B)({
        id: '2024-03_quest_bar_progress_cta',
        kind: 'user',
        label: 'Quest Bar Progress CTA',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quest Bar Progress CTA enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            o = (0, r.Zy)({ location: t }),
            { enabled: a } = s.useExperiment({ location: t }, { autoTrackExposure: n });
        return o && a;
    };
