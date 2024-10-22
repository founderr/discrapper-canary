var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(717881),
    c = n(503438),
    u = n(850827),
    d = n(952164),
    h = n(237583),
    p = n(131704),
    f = n(314897),
    _ = n(594174),
    m = n(768581),
    g = n(51144),
    C = n(754231),
    I = n(51299);
function E(e) {
    let { guildId: t, member: n, className: l } = e,
        r = null != n.member ? (0, m.CA)(n.member) : null;
    return (0, i.jsx)(s.Tooltip, {
        text: n.nick,
        position: 'bottom',
        children: (e) => {
            var o;
            return (0, i.jsx)(s.Avatar, {
                src: null != r ? r : n.user.getAvatarURL(t, 16),
                size: s.AvatarSizes.SIZE_16,
                className: a()(l, I.partyAvatar),
                'aria-label': null !== (o = n.nick) && void 0 !== o ? o : g.ZP.getName(n.user),
                ...e
            });
        }
    });
}
function N(e) {
    let { members: t, guildId: n } = e;
    return (0, i.jsx)(h.Z, {
        className: I.partyMembers,
        guildId: n,
        users: t,
        max: 6,
        renderUser: (e, t, l) =>
            (0, i.jsx)(
                E,
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
                    className: a()(I.morePartyMembers, t),
                    children: e
                },
                n
            )
    });
}
t.Z = (e) => {
    let { channel: t, presenceActivity: n, members: l, embeddedApp: a, onAction: s } = e,
        h = null != a,
        m = h ? Array.from(a.embeddedActivity.userIds) : [],
        g = (0, r.e7)([_.default, f.default], () => {
            if (h) return _.default.getUser(m[0]);
            if (null != l) {
                var e, t;
                return l.length <= 0 ? null : null !== (t = null === (e = l.find((e) => e.user.id !== f.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : l[0].user;
            }
        });
    if (null == g) return null;
    let E = h || (0, c.Z)(n),
        x = (0, p.vd)(t.type);
    return (0, i.jsxs)('div', {
        className: I.activity,
        children: [
            (0, i.jsx)('div', {
                className: I.channelActivityContainer,
                children: E
                    ? (0, i.jsx)(C.Z, {
                          activity: n,
                          embeddedApp: a,
                          user: g,
                          channel: t,
                          sortedVoiceStates: l,
                          onOpenSpotifyTrack: x ? d.aG : void 0,
                          onOpenSpotifyArtist: x ? d.d$ : void 0,
                          onOpenSpotifyAlbum: x ? d.Z5 : void 0
                      })
                    : (0, i.jsx)(o.Z, {
                          type: o.P.VOICE_CHANNEL,
                          activity: n,
                          user: g,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          renderHeaderAccessory:
                              null != l
                                  ? () =>
                                        (0, i.jsx)(N, {
                                            guildId: t.guild_id,
                                            members: l
                                        })
                                  : void 0,
                          isEmbedded: h
                      })
            }),
            (0, i.jsx)('div', {
                className: I.activityActionsContainer,
                children: (0, i.jsx)(u.Z, {
                    type: o.P.VOICE_CHANNEL,
                    activity: n,
                    embeddedActivity: null == a ? void 0 : a.embeddedActivity,
                    user: g,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    color: I.button,
                    onAction: s,
                    isEmbedded: h
                })
            })
        ]
    });
};
