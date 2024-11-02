n.d(t, {
    K: function () {
        return g;
    },
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(481060),
    o = n(13245),
    a = n(312839),
    l = n(706140),
    c = n(593481),
    d = n(658785),
    u = n(987650),
    h = n(921944),
    p = n(388032),
    f = n(240209);
function g() {
    let [e, t] = (0, l.cv)([r.z.OVERLAY_KEYBIND_NOTIFICATION]),
        { showKeybindIndicators: n } = d.Z.useExperiment({ location: 'Overlay' }, { autoTrackExposure: !1 });
    return {
        showKeybindIndicators: null != e && n,
        dismissKeybindNotification: t
    };
}
function m(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, a.R)(u.n0.KeybindIndicatorsNotification, { notif_type: u.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: f.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: f.iconContainer,
                    children: (0, i.jsx)(s.MicrophoneIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: p.intl.string(p.t.EFRNtL)
                })
            ]
        }),
        colorScheme: c.IC.PRIMARY,
        onDismissClick: (e, n) => {
            r('dismiss'), t(h.L.DISMISS), o.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(h.L.AUTO_DISMISS), n();
        }
    };
}
