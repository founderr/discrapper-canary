n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(643872),
    l = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    _ = n(93093),
    E = n(768581),
    m = n(810568),
    I = n(981631),
    p = n(689938),
    A = n(51527),
    g = n(479537);
function T(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: s } = e,
        [T, f] = r.useState(),
        N = (0, l.e7)([_.Z], () => {
            var e, t;
            return (null == T ? void 0 : null === (e = T.guild) || void 0 === e ? void 0 : e.id) != null && _.Z.isMember(null == T ? void 0 : null === (t = T.guild) || void 0 === t ? void 0 : t.id);
        }),
        O = r.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === o.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (f(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != O && e(O.url);
        }, [O, s]),
        null == T || null == T.guild || (!T.guild.features.includes('VERIFIED') && !T.guild.features.includes('PARTNER')))
    )
        return null;
    let R = E.ZP.getGuildIconURL({
        id: T.guild.id,
        icon: T.guild.icon,
        size: 32
    });
    return (0, a.jsxs)('div', {
        className: A.column,
        children: [
            (0, a.jsx)(c.Heading, {
                className: A.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: p.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, a.jsxs)('div', {
                className: i()(A.row, A.gapMd),
                children: [
                    (0, a.jsx)('img', {
                        className: g.guildIcon,
                        src: R,
                        alt: p.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: T.guild.name })
                    }),
                    (0, a.jsxs)('div', {
                        className: g.inviteInfo,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: T.guild.name
                            }),
                            null != T.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: T.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    n(m.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: T,
                            code: T.code,
                            context: I.IlC.APP
                        });
                },
                children: N ? p.Z.Messages.JOINED_GUILD : p.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
