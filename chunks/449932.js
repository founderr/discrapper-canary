var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    s = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(952164),
    h = n(237583),
    p = n(131704),
    m = n(314897),
    f = n(594174),
    g = n(768581),
    C = n(51144),
    _ = n(754231),
    v = n(787308);
function x(e) {
    let { guildId: t, member: n, className: l } = e,
        o = null != n.member ? (0, g.CA)(n.member) : null;
    return (0, i.jsx)(a.Tooltip, {
        text: n.nick,
        position: 'bottom',
        children: (e) => {
            var s;
            return (0, i.jsx)(a.Avatar, {
                src: null != o ? o : n.user.getAvatarURL(t, 16),
                size: a.AvatarSizes.SIZE_16,
                className: r()(l, v.partyAvatar),
                'aria-label': null !== (s = n.nick) && void 0 !== s ? s : C.ZP.getName(n.user),
                ...e
            });
        }
    });
}
function I(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(h.Z, {
        className: v.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, i.jsx)(
                x,
                {
                    guildId: n,
                    member: e,
                    className: t
                },
                l
            ),
        renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
                'div',
                {
                    className: r()(v.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
t.Z = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: r, onAction: a } = e,
        h = null != r,
        g = h ? Array.from(r.embeddedActivity.userIds) : [],
        C = (0, o.e7)([f.default, m.default], () => {
            if (h) return f.default.getUser(g[0]);
            if (null != l) {
                var e, t;
                return l.length <= 0 ? null : null !== (t = null === (e = l.find((e) => e.user.id !== m.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : l[0].user;
            }
        });
    if (null == C) return null;
    let x = h || (0, c.Z)(n),
        b = (0, p.vd)(t.type);
    return (0, i.jsxs)('div', {
        className: v.activity,
        children: [
            (0, i.jsx)('div', {
                className: v.channelActivityContainer,
                children: x
                    ? (0, i.jsx)(_.Z, {
                          activity: n,
                          embeddedApp: r,
                          user: C,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: b ? d.aG : void 0,
                          onOpenSpotifyArtist: b ? d.d$ : void 0,
                          onOpenSpotifyAlbum: b ? d.Z5 : void 0
                      })
                    : (0, i.jsx)(s.Z, {
                          type: s.P.VOICE_CHANNEL,
                          activity: n,
                          user: C,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != l
                                  ? () =>
                                        (0, i.jsx)(I, {
                                            guildId: t.guild_id,
                                            members: l
                                        })
                                  : void 0,
                          isEmbedded: h
                      })
            }),
            (0, i.jsx)('div', {
                className: v.activityActionsContainer,
                children: (0, i.jsx)(u.Z, {
                    type: s.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                    user: C,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: v.button,
                    onAction: a,
                    isEmbedded: h
                })
            })
        ]
    });
};
