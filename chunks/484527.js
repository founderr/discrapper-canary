n.d(a, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    p = n(768581),
    g = n(810568),
    f = n(981631),
    _ = n(689938),
    x = n(51527),
    v = n(479537);
function h(e) {
    let { detectedGame: a, trackClick: n, onInviteResolved: o } = e,
        [h, I] = i.useState(),
        E = (0, s.e7)([m.Z], () => {
            var e, a;
            return (null == h ? void 0 : null === (e = h.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == h ? void 0 : null === (a = h.guild) || void 0 === a ? void 0 : a.id);
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
                    !0 !== e.banned && (I(e.invite), null != e.invite && (null == o || o(e.invite)));
                }
            };
            null != A && e(A.url);
        }, [A, o]),
        null == h || null == h.guild || (!h.guild.features.includes('VERIFIED') && !h.guild.features.includes('PARTNER')))
    )
        return null;
    let j = p.ZP.getGuildIconURL({
        id: h.guild.id,
        icon: h.guild.icon,
        size: 32
    });
    return (0, t.jsxs)('div', {
        className: x.column,
        children: [
            (0, t.jsx)(c.Heading, {
                className: x.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: _.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, t.jsxs)('div', {
                className: r()(x.row, x.gapMd),
                children: [
                    (0, t.jsx)('img', {
                        className: v.guildIcon,
                        src: j,
                        alt: _.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: h.guild.name })
                    }),
                    (0, t.jsxs)('div', {
                        className: v.inviteInfo,
                        children: [
                            (0, t.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: h.guild.name
                            }),
                            null != h.approximate_member_count &&
                                (0, t.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: h.approximate_member_count })
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
                            invite: h,
                            code: h.code,
                            context: f.IlC.APP
                        });
                },
                children: E ? _.Z.Messages.JOINED_GUILD : _.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
