n.d(t, {
    e: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(693789),
    a = n(493683),
    r = n(596739),
    s = n(699516),
    o = n(626135),
    c = n(280006),
    d = n(799352),
    u = n(110223),
    h = n(981631),
    p = n(388032);
function m(e) {
    let { channel: t } = e;
    if (!(0, c.f)({ location: 'blocked_user_banner' }) || null == t || !t.isGroupDM() || t.blockedUserWarningDismissed) return null;
    let n = t.recipients.filter((e) => s.Z.isBlocked(e));
    if (0 === n.length) return null;
    let m = n.length > 1 ? p.intl.string(p.t.RswDbW) : p.intl.string(p.t.k19YPz),
        f = [
            {
                text: p.intl.string(p.t.I4q1kJ),
                color: l.zx.Colors.BRAND,
                onclick: () => {
                    (0, d.O)(t.id),
                        a.Z.closePrivateChannel(t.id, !0, !0),
                        o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                            action: u.q.CLICK_TO_LEAVE,
                            channel_id: t.id,
                            warning_medium: u.WR.BANNER,
                            blocked_user_ids: n
                        });
                },
                size: l.zx.Sizes.MEDIUM
            },
            {
                text: p.intl.string(p.t.DRJhmZ),
                color: l.zx.Colors.PRIMARY,
                onclick: () => {
                    (0, d.O)(t.id),
                        o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                            action: u.q.CLICK_TO_STAY,
                            channel_id: t.id,
                            warning_medium: u.WR.BANNER,
                            blocked_user_ids: n
                        });
                },
                size: l.zx.Sizes.MEDIUM
            }
        ];
    return (0, i.jsx)(r.W, {
        header: m,
        description: p.intl.string(p.t.BadOYm),
        buttons: f,
        dismissible: !1
    });
}
