n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
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
    A = n(689938),
    p = n(51527),
    g = n(479537);
function f(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: s } = e,
        [f, T] = r.useState(),
        O = (0, l.e7)([_.Z], () => {
            var e, t;
            return (null == f ? void 0 : null === (e = f.guild) || void 0 === e ? void 0 : e.id) != null && _.Z.isMember(null == f ? void 0 : null === (t = f.guild) || void 0 === t ? void 0 : t.id);
        }),
        N = r.useMemo(() => {
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
                    !0 !== e.banned && (T(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != N && e(N.url);
        }, [N, s]),
        null == f || null == f.guild || (!f.guild.features.includes('VERIFIED') && !f.guild.features.includes('PARTNER')))
    )
        return null;
    let R = E.ZP.getGuildIconURL({
        id: f.guild.id,
        icon: f.guild.icon,
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
                        alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: f.guild.name })
                    }),
                    (0, a.jsxs)('div', {
                        className: g.inviteInfo,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: f.guild.name
                            }),
                            null != f.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: f.approximate_member_count })
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
                            invite: f,
                            code: f.code,
                            context: I.IlC.APP
                        });
                },
                children: O ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
