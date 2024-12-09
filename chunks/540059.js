n.d(t, {
    Q3: function () {
        return i;
    },
    TH: function () {
        return a;
    },
    i5: function () {
        return r;
    }
});
let r = (0, n(818083).B)({
    id: '2024-05_desktop_visual_refresh',
    label: 'Desktop Visual Refresh',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        enableCollapsibleSidebar: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                enabled: !1,
                enableCollapsibleSidebar: !1
            }
        },
        {
            id: 1,
            label: 'Refresh Enabled',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1
            }
        },
        {
            id: 2,
            label: 'Refresh with Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0
            }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
}
