r.d(n, {
    Q3: function () {
        return c;
    },
    TH: function () {
        return d;
    },
    i9: function () {
        return l;
    },
    o9: function () {
        return u;
    }
});
var i = r(442837),
    a = r(818083),
    s = r(740492);
let o = (0, a.B)({
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
function l(e) {
    let n = o.getCurrentConfig({ location: e }).enabled,
        r = s.ZP.disableVisualRefresh;
    return !!n && !r;
}
function u(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function c(e) {
    let n = u(e),
        r = (0, i.e7)([s.ZP], () => s.ZP.disableVisualRefresh);
    return !!n && !r;
}
function d(e) {
    let n = c(e),
        r = o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!n && r;
}
