n(47120);
var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(643872),
    l = n(481060),
    c = n(570140),
    u = n(652898),
    d = n(93093),
    _ = n(768581),
    E = n(810568),
    I = n(981631),
    A = n(689938),
    m = n(707443);
let T = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
    N = (e) => {
        let { invite: a, trackClick: n } = e,
            { approximate_member_count: r, guild: s } = a;
        if (null == s) return null;
        let i = d.Z.isMember(s.id);
        if (!(null == s ? void 0 : s.features.includes('VERIFIED')) && !(null == s ? void 0 : s.features.includes('PARTNER'))) return null;
        let u = _.ZP.getGuildIconURL({
            id: s.id,
            icon: s.icon,
            size: 32
        });
        return (0, t.jsxs)('div', {
            className: o()(m.column),
            children: [
                (0, t.jsx)(l.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, t.jsxs)('div', {
                    className: o()(m.row, m.gapMd),
                    children: [
                        (0, t.jsx)('img', {
                            className: m.icon,
                            src: u,
                            alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: s.name })
                        }),
                        (0, t.jsxs)('div', {
                            className: o()(m.gapNone),
                            children: [
                                (0, t.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: s.name
                                }),
                                null != r &&
                                    (0, t.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: r })
                                    })
                            ]
                        })
                    ]
                }),
                (0, t.jsx)(l.Button, {
                    color: l.ButtonColors.PRIMARY,
                    onClick: () => {
                        n(E.as.JoinOfficialServer),
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
        s =
            null == a
                ? void 0
                : a.find((e) => {
                      let { category: a } = e;
                      return a === i.p.DISCORD;
                  }),
        [c, d] = r.useState();
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let a = e.split('/').pop();
                if (null != a) {
                    let e = await (0, u.Z)(a);
                    !0 !== e.banned && d(e.invite);
                }
            };
            null != s && e(s.url);
        }, [s]),
        null == a || 0 === a.length)
    )
        return null;
    let _ = a
        .filter((e) => {
            let { category: a } = e;
            return T.includes(a);
        })
        .sort((e, a) => e.category - a.category);
    return (0, t.jsxs)('div', {
        className: o()(m.column),
        children: [
            null != c &&
                (0, t.jsx)(N, {
                    invite: c,
                    trackClick: n
                }),
            (0, t.jsxs)('div', {
                className: o()(m.column, m.gapSm),
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: A.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, t.jsx)('div', {
                        className: m.row,
                        children: _.map((e) => {
                            let a,
                                r,
                                { category: s, url: o } = e,
                                c = null;
                            switch (s) {
                                case i.p.OFFICIAL:
                                    (c = (0, t.jsx)(l.GlobeEarthIcon, { colorClass: m.linkIcon })), (r = E.as.WebsiteLink), (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case i.p.TWITTER:
                                    (c = (0, t.jsx)(l.XNeutralIcon, { colorClass: m.linkIcon })), (r = E.as.XLink), (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case i.p.YOUTUBE:
                                    (r = E.as.YouTubeLink), (c = (0, t.jsx)(l.YoutubeNeutralIcon, { colorClass: m.linkIcon })), (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != c
                                ? (0, t.jsx)(
                                      l.Anchor,
                                      {
                                          className: m.linkAnchor,
                                          title: a,
                                          href: o,
                                          onClick: () => {
                                              n(r);
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
