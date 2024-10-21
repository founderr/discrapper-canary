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
var s = n(481060),
    r = n(312839),
    a = n(593481),
    o = n(556296),
    l = n(13140),
    c = n(981631),
    d = n(987650),
    u = n(689938);
function h() {
    let { trackView: e, trackClick: t } = (0, r.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        n = o.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == n) return null;
    let h = l.BB(n.shortcut, !0);
    return {
        colorScheme: a.IC.PRIMARY,
        title: u.Z.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
            keybind: h,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(s.KeyCombo, { shortcut: h })
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
function p(e) {
    let { trackView: t, trackClick: n } = (0, r.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        colorScheme: a.IC.PRIMARY,
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
