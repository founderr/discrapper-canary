s.d(n, {
    Z: function () {
        return h;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    l = s(481060),
    o = s(666520),
    r = s(592125),
    c = s(430824),
    a = s(944486),
    d = s(785717),
    u = s(621853),
    I = s(172351),
    _ = s(280885),
    E = s(900927),
    f = s(678738),
    m = s(179828),
    x = s(228168),
    Z = s(689938),
    p = s(11633);
function h(e) {
    var n;
    let { user: s, currentUser: h, displayProfile: v, subsection: S, onClose: T } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        A = (0, i.e7)([c.Z], () => ((null == v ? void 0 : v.guildId) != null ? c.Z.getGuild(v.guildId) : null)),
        N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
        }),
        j = (0, i.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, t.jsxs)(l.ScrollerThin, {
        fade: !0,
        className: p.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, t.jsx)(_.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != j &&
                (0, t.jsx)(I.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: j,
                    guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
                    onClick: T
                }),
            null != A &&
                (0, t.jsx)(m.Z, {
                    user: s,
                    currentUser: h,
                    guild: A,
                    scrollIntoView: S === x.Tb.ROLES
                }),
            (0, t.jsx)(f.Z, {
                heading: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
                children: (0, t.jsx)(E.Z, {
                    userId: s.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: x.vB
                })
            }),
            (0, t.jsx)(f.Z, {
                heading: Z.Z.Messages.NOTE,
                scrollIntoView: S === x.Tb.NOTE,
                children: (0, t.jsx)(o.Z, {
                    userId: s.id,
                    className: p.note,
                    autoFocus: S === x.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
