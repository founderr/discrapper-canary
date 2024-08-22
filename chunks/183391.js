n(47120);
var s = n(735250),
    t = n(470079),
    r = n(120356),
    o = n.n(r),
    i = n(643872),
    l = n(481060),
    c = n(570140),
    _ = n(652898),
    E = n(93093),
    u = n(768581),
    d = n(810568),
    I = n(981631),
    A = n(689938),
    m = n(707443);
let T = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
    N = (e) => {
        let { invite: a, trackClick: n } = e,
            { approximate_member_count: t, guild: r } = a;
        if (null == r) return null;
        let i = E.Z.isMember(r.id);
        if (!(null == r ? void 0 : r.features.includes('VERIFIED')) && !(null == r ? void 0 : r.features.includes('PARTNER'))) return null;
        let _ = u.ZP.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 32
        });
        return (0, s.jsxs)('div', {
            className: o()(m.column),
            children: [
                (0, s.jsx)(l.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, s.jsxs)('div', {
                    className: o()(m.row, m.gapMd),
                    children: [
                        (0, s.jsx)('img', {
                            className: m.icon,
                            src: _,
                            alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: r.name })
                        }),
                        (0, s.jsxs)('div', {
                            className: o()(m.gapNone),
                            children: [
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: r.name
                                }),
                                null != t &&
                                    (0, s.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t })
                                    })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(l.Button, {
                    color: l.ButtonColors.PRIMARY,
                    onClick: () => {
                        n(d.as.JoinOfficialServer),
                            c.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: a,
                                code: a.code,
                                context: I.IlC.APP
                            });
                    },
                    children: i ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
                })
            ]
        });
    };
a.Z = (e) => {
    let { websites: a, trackClick: n } = e,
        r =
            null == a
                ? void 0
                : a.find((e) => {
                      let { category: a } = e;
                      return a === i.p.DISCORD;
                  }),
        [c, E] = t.useState();
    if (
        (t.useEffect(() => {
            let e = async (e) => {
                let a = e.split('/').pop();
                if (null != a) {
                    let e = await (0, _.Z)(a);
                    !0 !== e.banned && E(e.invite);
                }
            };
            null != r && e(r.url);
        }, [r]),
        null == a || 0 === a.length)
    )
        return null;
    let u = a
        .filter((e) => {
            let { category: a } = e;
            return T.includes(a);
        })
        .sort((e, a) => e.category - a.category);
    return (0, s.jsxs)('div', {
        className: o()(m.column),
        children: [
            null != c &&
                (0, s.jsx)(N, {
                    invite: c,
                    trackClick: n
                }),
            (0, s.jsxs)('div', {
                className: o()(m.column, m.gapSm),
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: A.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, s.jsx)('div', {
                        className: m.row,
                        children: u.map((e) => {
                            let a,
                                t,
                                { category: r, url: o } = e,
                                c = null;
                            switch (r) {
                                case i.p.OFFICIAL:
                                    (c = (0, s.jsx)(l.GlobeEarthIcon, { colorClass: m.linkIcon })), (t = d.as.WebsiteLink), (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case i.p.TWITTER:
                                    (c = (0, s.jsx)(l.XNeutralIcon, { colorClass: m.linkIcon })), (t = d.as.XLink), (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case i.p.YOUTUBE:
                                    (t = d.as.YouTubeLink), (c = (0, s.jsx)(l.YoutubeNeutralIcon, { colorClass: m.linkIcon })), (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != c
                                ? (0, s.jsx)(
                                      l.Anchor,
                                      {
                                          className: m.linkAnchor,
                                          title: a,
                                          href: o,
                                          onClick: () => {
                                              n(t);
                                          },
                                          target: '_blank',
                                          children: c
                                      },
                                      o
                                  )
                                : null;
                        })
                    })
                ]
            })
        ]
    });
};
