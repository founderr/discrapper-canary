t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
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
    p = t(228168),
    x = t(689938),
    Z = t(11633);
function h(e) {
    var n;
    let { user: t, currentUser: h, displayProfile: S, subsection: v, onClose: T } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        N = (0, s.e7)([c.Z], () => ((null == S ? void 0 : S.guildId) != null ? c.Z.getGuild(S.guildId) : null)),
        A = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        b = (0, s.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, i.jsx)(I.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            (null == A ? void 0 : A.popularApplicationCommandIds) != null &&
                null != b &&
                (0, i.jsx)(_.Z, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: b,
                    guildId: null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n ? n : void 0,
                    onClick: T
                }),
            null != N &&
                (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: h,
                    guild: N,
                    scrollIntoView: v === p.Tb.ROLES
                }),
            (0, i.jsx)(f.Z, {
                heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, i.jsx)(E.Z, {
                    userId: t.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: p.vB
                })
            }),
            (0, i.jsx)(f.Z, {
                heading: x.Z.Messages.NOTE,
                scrollIntoView: v === p.Tb.NOTE,
                children: (0, i.jsx)(l.Z, {
                    userId: t.id,
                    className: Z.note,
                    autoFocus: v === p.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
