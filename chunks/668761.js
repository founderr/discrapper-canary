n.d(t, {
    f: function () {
        return h;
    },
    y: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(312839),
    a = n(556296),
    o = n(13140),
    l = n(981631),
    d = n(987650),
    c = n(388032);
function u() {
    let { trackView: e, trackClick: t } = (0, r.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        n = a.Z.getKeybindForAction(l.kg4.SAVE_CLIP);
    if (null == n) return null;
    let u = o.BB(n.shortcut, !0);
    return {
        title: c.intl.format(c.t.S5uhCA, {
            keybind: u,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(s.KeyCombo, { shortcut: u })
                })
        }),
        icon: (0, i.jsx)(s.ClipsIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t('dismiss');
        }
    };
}
function h(e) {
    let { trackView: t, trackClick: n } = (0, r.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(s.ClipsIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n('dismiss');
        }
    };
}
