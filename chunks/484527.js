n.d(a, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    p = n(768581),
    g = n(810568),
    _ = n(981631),
    f = n(689938),
    x = n(51527),
    h = n(479537);
function v(e) {
    let { detectedGame: a, trackClick: n, onInviteResolved: r } = e,
        [v, I] = i.useState(),
        E = (0, s.e7)([m.Z], () => {
            var e, a;
            return (null == v ? void 0 : null === (e = v.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == v ? void 0 : null === (a = v.guild) || void 0 === a ? void 0 : a.id);
        }),
        A = i.useMemo(() => {
            var e;
            return null === (e = a.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: a } = e;
                      return a === l.p.DISCORD;
                  });
        }, [a.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let a = e.split('/').pop();
                if (null != a) {
                    let e = await (0, u.Z)(a);
                    !0 !== e.banned && (I(e.invite), null != e.invite && (null == r || r(e.invite)));
                }
            };
            null != A && e(A.url);
        }, [A, r]),
        null == v || null == v.guild || (!v.guild.features.includes('VERIFIED') && !v.guild.features.includes('PARTNER')))
    )
        return null;
    let b = p.ZP.getGuildIconURL({
        id: v.guild.id,
        icon: v.guild.icon,
        size: 32
    });
    return (0, t.jsxs)('div', {
        className: x.column,
        children: [
            (0, t.jsx)(c.Heading, {
                className: x.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: f.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, t.jsxs)('div', {
                className: o()(x.row, x.gapMd),
                children: [
                    (0, t.jsx)('img', {
                        className: h.guildIcon,
                        src: b,
                        alt: f.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: v.guild.name })
                    }),
                    (0, t.jsxs)('div', {
                        className: h.inviteInfo,
                        children: [
                            (0, t.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: v.guild.name
                            }),
                            null != v.approximate_member_count &&
                                (0, t.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: v.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    n(g.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: v,
                            code: v.code,
                            context: _.IlC.APP
                        });
                },
                children: E ? f.Z.Messages.JOINED_GUILD : f.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
