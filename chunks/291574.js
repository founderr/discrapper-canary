var i = r(818083),
    a = r(987338);
n.Z = (0, i.B)({
    kind: 'user',
    id: '2024-09_app_dms',
    label: 'App DMs Experiment',
    defaultConfig: {
        enabled: !1,
        quickLaunchEnabled: !1,
        activityPopoutWindowInAppDMEnabled: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable special UI for DMs with Apps',
            config: {
                enabled: !0,
                quickLaunchEnabled: !1,
                activityPopoutWindowInAppDMEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Enable special UI for DMs with Apps including quick launch',
            config: {
                enabled: !0,
                quickLaunchEnabled: !0,
                activityPopoutWindowInAppDMEnabled: !1
            }
        },
        {
            id: 3,
            label: 'Enable App DMs UI including quick launch and activity popout window in app DM',
            config: {
                enabled: !0,
                quickLaunchEnabled: !0,
                activityPopoutWindowInAppDMEnabled: !0
            }
        }
    ]
});
