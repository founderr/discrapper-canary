r.d(n, {
    E: function () {
        return i;
    },
    f: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-07_gdm_blocked_user_warning',
    label: 'GDM Blocked User Warning',
    defaultConfig: {
        enabled: !1,
        showAsModal: !1,
        showAsBanner: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Show blocked user warning in GDMs as a modal',
            config: {
                enabled: !0,
                showAsModal: !0,
                showAsBanner: !1
            }
        },
        {
            id: 2,
            label: 'Show blocked user warning in GDMs as a banner',
            config: {
                enabled: !0,
                showAsBanner: !0,
                showAsModal: !1
            }
        }
    ]
});
function a(e) {
    let { location: n } = e,
        r = i.getCurrentConfig({ location: n }, { autoTrackExposure: !1 });
    return r.enabled && r.showAsBanner;
}
