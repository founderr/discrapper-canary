t.d(n, {
    Z: function () {
        return m;
    }
});
var o = t(735250);
t(470079);
var i = t(442837),
    s = t(481060),
    l = t(666520),
    c = t(592125),
    r = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    _ = t(172351),
    I = t(280885),
    E = t(900927),
    f = t(678738),
    p = t(179828),
    Z = t(228168),
    h = t(689938),
    x = t(11633);
function m(e) {
    var n;
    let { user: t, currentUser: m, displayProfile: S, subsection: T, onClose: v } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        A = (0, i.e7)([r.Z], () => ((null == S ? void 0 : S.guildId) != null ? r.Z.getGuild(S.guildId) : null)),
        O = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        L = (0, i.e7)([c.Z, a.Z], () => c.Z.getChannel(a.Z.getChannelId()));
    return (0, o.jsxs)(s.ScrollerThin, {
        fade: !0,
        className: x.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, o.jsx)(I.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != L &&
                (0, o.jsx)(_.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: L,
                    guildId: null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n ? n : void 0,
                    onClick: v
                }),
            null != A &&
                (0, o.jsx)(p.Z, {
                    user: t,
                    currentUser: m,
                    guild: A,
                    scrollIntoView: T === Z.Tb.ROLES
                }),
            (0, o.jsx)(f.Z, {
                heading: h.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, o.jsx)(E.Z, {
                    userId: t.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            (0, o.jsx)(f.Z, {
                heading: h.Z.Messages.NOTE,
                scrollIntoView: T === Z.Tb.NOTE,
                children: (0, o.jsx)(l.Z, {
                    userId: t.id,
                    className: x.note,
                    autoFocus: T === Z.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
