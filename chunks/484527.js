t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(643872),
    l = t(442837),
    c = t(481060),
    d = t(570140),
    u = t(652898),
    _ = t(93093),
    E = t(768581),
    I = t(810568),
    m = t(981631),
    A = t(689938),
    p = t(51527),
    g = t(479537);
function T(e) {
    let { detectedGame: n, trackClick: t, onInviteResolved: s } = e,
        [T, f] = r.useState(),
        O = (0, l.e7)([_.Z], () => {
            var e, n;
            return (null == T ? void 0 : null === (e = T.guild) || void 0 === e ? void 0 : e.id) != null && _.Z.isMember(null == T ? void 0 : null === (n = T.guild) || void 0 === n ? void 0 : n.id);
        }),
        N = r.useMemo(() => {
            var e;
            return null === (e = n.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: n } = e;
                      return n === o.p.DISCORD;
                  });
        }, [n.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let n = e.split('/').pop();
                if (null != n) {
                    let e = await (0, u.Z)(n);
                    !0 !== e.banned && (f(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != N && e(N.url);
        }, [N, s]),
        null == T || null == T.guild || (!T.guild.features.includes('VERIFIED') && !T.guild.features.includes('PARTNER')))
    )
        return null;
    let R = E.ZP.getGuildIconURL({
        id: T.guild.id,
        icon: T.guild.icon,
        size: 32
    });
    return (0, a.jsxs)('div', {
        className: p.column,
        children: [
            (0, a.jsx)(c.Heading, {
                className: p.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, a.jsxs)('div', {
                className: i()(p.row, p.gapMd),
                children: [
                    (0, a.jsx)('img', {
                        className: g.guildIcon,
                        src: R,
                        alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: T.guild.name })
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
                                    children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: T.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    t(I.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: T,
                            code: T.code,
                            context: m.IlC.APP
                        });
                },
                children: O ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
