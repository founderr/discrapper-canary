a.d(n, {
    Z: function () {
        return f;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(643872),
    l = a(442837),
    c = a(481060),
    d = a(570140),
    u = a(652898),
    _ = a(93093),
    E = a(768581),
    m = a(810568),
    I = a(981631),
    A = a(689938),
    p = a(51527),
    g = a(479537);
function f(e) {
    let { detectedGame: n, trackClick: a, onInviteResolved: s } = e,
        [f, T] = r.useState(),
        O = (0, l.e7)([_.Z], () => {
            var e, n;
            return (null == f ? void 0 : null === (e = f.guild) || void 0 === e ? void 0 : e.id) != null && _.Z.isMember(null == f ? void 0 : null === (n = f.guild) || void 0 === n ? void 0 : n.id);
        }),
        R = r.useMemo(() => {
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
                    !0 !== e.banned && (T(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != R && e(R.url);
        }, [R, s]),
        null == f || null == f.guild || (!f.guild.features.includes('VERIFIED') && !f.guild.features.includes('PARTNER')))
    )
        return null;
    let N = E.ZP.getGuildIconURL({
        id: f.guild.id,
        icon: f.guild.icon,
        size: 32
    });
    return (0, t.jsxs)('div', {
        className: p.column,
        children: [
            (0, t.jsx)(c.Heading, {
                className: p.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
            }),
            (0, t.jsxs)('div', {
                className: i()(p.row, p.gapMd),
                children: [
                    (0, t.jsx)('img', {
                        className: g.guildIcon,
                        src: N,
                        alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: f.guild.name })
                    }),
                    (0, t.jsxs)('div', {
                        className: g.inviteInfo,
                        children: [
                            (0, t.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: f.guild.name
                            }),
                            null != f.approximate_member_count &&
                                (0, t.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: f.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    a(m.as.JoinOfficialServer),
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
