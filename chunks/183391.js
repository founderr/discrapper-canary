n(47120);
var t = n(735250),
    o = n(470079),
    i = n(120356),
    l = n.n(i),
    r = n(643872),
    s = n(481060),
    c = n(570140),
    d = n(652898),
    u = n(93093),
    m = n(768581),
    p = n(810568),
    _ = n(981631),
    g = n(689938),
    x = n(51527);
let h = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE],
    f = (e) => {
        let { invite: a, trackClick: n } = e,
            { approximate_member_count: o, guild: i } = a;
        if (null == i) return null;
        let r = u.Z.isMember(i.id);
        if (!(null == i ? void 0 : i.features.includes('VERIFIED')) && !(null == i ? void 0 : i.features.includes('PARTNER'))) return null;
        let d = m.ZP.getGuildIconURL({
            id: i.id,
            icon: i.icon,
            size: 32
        });
        return (0, t.jsxs)('div', {
            className: l()(x.column),
            children: [
                (0, t.jsx)(s.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: g.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, t.jsxs)('div', {
                    className: l()(x.row, x.gapMd),
                    children: [
                        (0, t.jsx)('img', {
                            className: x.icon,
                            src: d,
                            alt: g.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: i.name })
                        }),
                        (0, t.jsxs)('div', {
                            className: l()(x.gapNone),
                            children: [
                                (0, t.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: i.name
                                }),
                                null != o &&
                                    (0, t.jsx)(s.Text, {
                                        variant: 'text-xxs/normal',
                                        children: g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: o })
                                    })
                            ]
                        })
                    ]
                }),
                (0, t.jsx)(s.Button, {
                    color: s.ButtonColors.PRIMARY,
                    onClick: () => {
                        n(p.as.JoinOfficialServer),
                            c.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: a,
                                code: a.code,
                                context: _.IlC.APP
                            });
                    },
                    children: r ? g.Z.Messages.JOINED_GUILD : g.Z.Messages.JOIN_GUILD
                })
            ]
        });
    };
a.Z = (e) => {
    let { websites: a, trackClick: n, onInviteResolved: i } = e,
        c =
            null == a
                ? void 0
                : a.find((e) => {
                      let { category: a } = e;
                      return a === r.p.DISCORD;
                  }),
        [u, m] = o.useState();
    if (
        (o.useEffect(() => {
            let e = async (e) => {
                let a = e.split('/').pop();
                if (null != a) {
                    let e = await (0, d.Z)(a);
                    !0 !== e.banned && (m(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != c && e(c.url);
        }, [c, i]),
        null == a || 0 === a.length)
    )
        return null;
    let _ = a
        .filter((e) => {
            let { category: a } = e;
            return h.includes(a);
        })
        .sort((e, a) => e.category - a.category);
    return (0, t.jsxs)('div', {
        className: l()(x.column),
        children: [
            null != u &&
                (0, t.jsx)(f, {
                    invite: u,
                    trackClick: n
                }),
            (0, t.jsxs)('div', {
                className: l()(x.column, x.gapSm),
                children: [
                    (0, t.jsx)(s.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: g.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, t.jsx)('div', {
                        className: x.row,
                        children: _.map((e) => {
                            let a,
                                o,
                                { category: i, url: l } = e,
                                c = null;
                            switch (i) {
                                case r.p.OFFICIAL:
                                    (c = (0, t.jsx)(s.GlobeEarthIcon, { colorClass: x.linkIcon })), (o = p.as.WebsiteLink), (a = g.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case r.p.TWITTER:
                                    (c = (0, t.jsx)(s.XNeutralIcon, { colorClass: x.linkIcon })), (o = p.as.XLink), (a = g.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case r.p.YOUTUBE:
                                    (o = p.as.YouTubeLink), (c = (0, t.jsx)(s.YoutubeNeutralIcon, { colorClass: x.linkIcon })), (a = g.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != c
                                ? (0, t.jsx)(
                                      s.Anchor,
                                      {
                                          className: x.linkAnchor,
                                          title: a,
                                          href: l,
                                          onClick: () => {
                                              n(o);
                                          },
                                          target: '_blank',
                                          children: c
                                      },
                                      l
                                  )
                                : null;
                        })
                    })
                ]
            })
        ]
    });
};
