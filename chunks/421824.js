i.d(t, {
    f: function () {
        return p;
    },
    y: function () {
        return f;
    }
});
var n = i(200651);
i(192379);
var l = i(481060),
    o = i(522474),
    s = i(556296),
    r = i(13140),
    a = i(44359),
    u = i(620954),
    d = i(987650),
    c = i(981631),
    h = i(388032);
function f() {
    if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: e, trackClick: t } = (0, u.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        i = s.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == i) return null;
    let f = r.BB(i.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) => (0, n.jsx)(a.Z, { keybind: f.split('+') }, t)
        }),
        icon: (0, n.jsx)(l.ClipsIcon, {
            size: 'lg',
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
    let { trackView: t, trackClick: i } = (0, u.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, n.jsx)(l.ClipsIcon, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            i('dismiss');
        }
    };
}
