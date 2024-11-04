n.d(t, {
    f: function () {
        return p;
    },
    y: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(312839),
    l = n(593481),
    a = n(556296),
    o = n(13140),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h() {
    let { trackView: e, trackClick: t } = (0, s.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        n = a.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == n) return null;
    let h = o.BB(n.shortcut, !0);
    return {
        colorScheme: l.IC.PRIMARY,
        title: u.intl.format(u.t.S5uhCA, {
            keybind: h,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(r.KeyCombo, { shortcut: h })
                })
        }),
        icon: (0, i.jsx)(r.ClipsIcon, {
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
function p(e) {
    let { trackView: t, trackClick: n } = (0, s.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        colorScheme: l.IC.PRIMARY,
        title: e,
        icon: (0, i.jsx)(r.ClipsIcon, {
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
