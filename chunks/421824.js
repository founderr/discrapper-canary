n.d(t, {
    f: function () {
        return p;
    },
    y: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    o = n(522474),
    r = n(556296),
    s = n(13140),
    a = n(44359),
    u = n(620954),
    d = n(987650),
    c = n(981631),
    h = n(388032);
function f() {
    if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: e, trackClick: t } = (0, u.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        n = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == n) return null;
    let f = s.BB(n.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) => (0, i.jsx)(a.Z, { keybind: f.split('+') }, t)
        }),
        icon: (0, i.jsx)(l.ClipsIcon, {
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
    let { trackView: t, trackClick: n } = (0, u.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(l.ClipsIcon, {
            size: 'lg',
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
