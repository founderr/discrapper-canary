var r = n(818083),
    i = n(987338);
t.Z = (0, r.B)({
    kind: 'user',
    id: '2024-11_activity_popout_window',
    label: 'Activity Popout Window Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable activity popout window',
            config: { enabled: !0 }
        }
    ]
});
