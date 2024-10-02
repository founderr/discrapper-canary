a.d(n, {
    Z: function () {
        return h;
    }
}),
    a(47120);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(643872),
    s = a(442837),
    c = a(481060),
    d = a(570140),
    u = a(652898),
    m = a(93093),
    p = a(768581),
    _ = a(810568),
    g = a(981631),
    f = a(689938),
    x = a(51527),
    I = a(479537);
function h(e) {
    let { websites: n, trackClick: a, onInviteResolved: o } = e,
        [h, v] = i.useState(),
        E = (0, s.e7)([m.Z], () => {
            var e, n;
            return (null == h ? void 0 : null === (e = h.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == h ? void 0 : null === (n = h.guild) || void 0 === n ? void 0 : n.id);
        }),
        A = i.useMemo(
            () =>
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { category: n } = e;
                          return n === l.p.DISCORD;
                      }),
            [n]
        );
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let n = e.split('/').pop();
                if (null != n) {
                    let e = await (0, u.Z)(n);
                    !0 !== e.banned && (v(e.invite), null != e.invite && (null == o || o(e.invite)));
                }
            };
            null != A && e(A.url);
        }, [A, o]),
        null == h || null == h.guild || (!h.guild.features.includes('VERIFIED') && !h.guild.features.includes('PARTNER')))
    )
        return null;
    let T = p.ZP.getGuildIconURL({
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
                children: f.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, t.jsxs)('div', {
                className: r()(x.row, x.gapMd),
                children: [
                    (0, t.jsx)('img', {
                        className: I.guildIcon,
                        src: T,
                        alt: f.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: h.guild.name })
                    }),
                    (0, t.jsxs)('div', {
                        className: I.inviteInfo,
                        children: [
                            (0, t.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: h.guild.name
                            }),
                            null != h.approximate_member_count &&
                                (0, t.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: h.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    a(_.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: h,
                            code: h.code,
                            context: g.IlC.APP
                        });
                },
                children: E ? f.Z.Messages.JOINED_GUILD : f.Z.Messages.JOIN_GUILD
            })
        ]
    });
}
