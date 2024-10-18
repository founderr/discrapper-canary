t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(735250);
t(470079);
var s = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(592125),
    c = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    _ = t(172351),
    I = t(280885),
    E = t(900927),
    f = t(678738),
    m = t(179828),
    x = t(228168),
    p = t(689938),
    Z = t(11633);
function h(e) {
    var n;
    let { user: t, currentUser: h, displayProfile: v, subsection: S, onClose: T } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        A = (0, s.e7)([c.Z], () => ((null == v ? void 0 : v.guildId) != null ? c.Z.getGuild(v.guildId) : null)),
        N = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        j = (0, s.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, i.jsx)(I.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != j &&
                (0, i.jsx)(_.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: j,
                    guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
                    onClick: T
                }),
            null != A &&
                (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: h,
                    guild: A,
                    scrollIntoView: S === x.Tb.ROLES
                }),
            (0, i.jsx)(f.Z, {
                heading: p.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, i.jsx)(E.Z, {
                    userId: t.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: x.vB
                })
            }),
            (0, i.jsx)(f.Z, {
                heading: p.Z.Messages.NOTE,
                scrollIntoView: S === x.Tb.NOTE,
                children: (0, i.jsx)(l.Z, {
                    userId: t.id,
                    className: Z.note,
                    autoFocus: S === x.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
