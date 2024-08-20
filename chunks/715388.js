t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(735250);
t(470079);
var s = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(592125),
    a = t(430824),
    c = t(944486),
    d = t(785717),
    u = t(621853),
    I = t(588822),
    _ = t(940730),
    f = t(900927),
    E = t(678738),
    m = t(351707),
    p = t(228168),
    x = t(689938),
    v = t(408277);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, displayProfile: h, subsection: S, onClose: T } = e,
        { trackUserProfileAction: A } = (0, d.KZ)(),
        g = (0, s.e7)([a.Z], () => ((null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null)),
        N = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        b = (0, s.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null &&
                (null == h ? void 0 : h.bio) !== '' &&
                (0, i.jsx)(I.Z, {
                    userBio: h.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != b &&
                (0, i.jsx)(_.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: b,
                    guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                    onClick: T
                }),
            null != g &&
                (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: Z,
                    guild: g,
                    scrollIntoView: S === p.Tb.ROLES
                }),
            (0, i.jsx)(E.Z, {
                heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, i.jsx)(f.Z, {
                    userId: t.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: p.vB
                })
            }),
            (0, i.jsx)(E.Z, {
                heading: x.Z.Messages.NOTE,
                scrollIntoView: S === p.Tb.NOTE,
                children: (0, i.jsx)(l.Z, {
                    userId: t.id,
                    className: v.note,
                    autoFocus: S === p.Tb.NOTE,
                    onUpdate: () => A({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
