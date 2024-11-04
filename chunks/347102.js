n.d(t, {
    e: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(693789),
    r = n(493683),
    s = n(596739),
    a = n(699516),
    o = n(626135),
    c = n(280006),
    u = n(799352),
    d = n(110223),
    h = n(981631),
    m = n(388032);
function p(e) {
    let { channel: t } = e;
    if (!(0, c.f)({ location: 'blocked_user_banner' }) || null == t || !t.isGroupDM() || t.blockedUserWarningDismissed) return null;
    let n = t.recipients.filter((e) => a.Z.isBlocked(e));
    if (0 === n.length) return null;
    let p = n.length > 1 ? m.intl.string(m.t.RswDbW) : m.intl.string(m.t.k19YPz),
        f = [
            {
                text: m.intl.string(m.t.I4q1kJ),
                color: l.zx.Colors.BRAND,
                onclick: () => {
                    (0, u.O)(t.id),
                        r.Z.closePrivateChannel(t.id, !0, !0),
                        o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                            action: d.q.CLICK_TO_LEAVE,
                            channel_id: t.id,
                            warning_medium: d.WR.BANNER,
                            blocked_user_ids: n
                        });
                },
                size: l.zx.Sizes.MEDIUM
            },
            {
                text: m.intl.string(m.t.DRJhmZ),
                color: l.zx.Colors.PRIMARY,
                onclick: () => {
                    (0, u.O)(t.id),
                        o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                            action: d.q.CLICK_TO_STAY,
                            channel_id: t.id,
                            warning_medium: d.WR.BANNER,
                            blocked_user_ids: n
                        });
                },
                size: l.zx.Sizes.MEDIUM
            }
        ];
    return (0, i.jsx)(s.W, {
        header: p,
        description: m.intl.string(m.t.BadOYm),
        buttons: f,
        dismissible: !1
    });
}
