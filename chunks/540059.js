n.d(t, {
    Q3: function () {
        return u;
    },
    TH: function () {
        return c;
    },
    i9: function () {
        return o;
    },
    o9: function () {
        return l;
    }
});
var r = n(442837),
    i = n(818083),
    a = n(740492);
let s = (0, i.B)({
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
function o(e) {
    let t = s.getCurrentConfig({ location: e }).enabled,
        n = a.ZP.disableVisualRefresh;
    return !!t && !n;
}
function l(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function u(e) {
    let t = l(e),
        n = (0, r.e7)([a.ZP], () => a.ZP.disableVisualRefresh);
    return !!t && !n;
}
function c(e) {
    let t = u(e),
        n = s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!t && n;
}
