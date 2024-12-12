r.d(n, {
    Kc: function () {
        return o;
    },
    Yu: function () {
        return s;
    },
    dP: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: {
        improvedDesktopMediaViewerEnabled: !1,
        mediaViewerAffordanceEnabled: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
function o(e) {
    let { improvedDesktopMediaViewerEnabled: n } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return n;
}
function l(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
