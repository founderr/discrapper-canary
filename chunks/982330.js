n.d(t, {
    Kc: function () {
        return i;
    },
    cS: function () {
        return a;
    },
    dP: function () {
        return s;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: {
        improvedDesktopMediaViewerEnabled: !1,
        mediaViewerAffordanceEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable Improved Desktop Media Viewer',
            config: {
                improvedDesktopMediaViewerEnabled: !0,
                mediaViewerAffordanceEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Enable Improved Desktop Media Viewer with affordances',
            config: {
                improvedDesktopMediaViewerEnabled: !0,
                mediaViewerAffordanceEnabled: !0
            }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { improvedDesktopMediaViewerEnabled: n } = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { mediaViewerAffordanceEnabled: n } = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return r.useExperiment({ location: e }, { autoTrackExposure: t });
}
