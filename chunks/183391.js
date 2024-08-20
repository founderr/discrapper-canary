n(47120);
var t = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(643872),
    l = n(481060),
    c = n(570140),
    u = n(652898),
    _ = n(93093),
    E = n(768581),
    d = n(810568),
    I = n(981631),
    A = n(689938),
    T = n(707443);
let m = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
    O = (e) => {
        let { invite: a, trackClick: n } = e,
            { approximate_member_count: r, guild: s } = a;
        if (null == s) return null;
        let i = _.Z.isMember(s.id);
        if (!(null == s ? void 0 : s.features.includes('VERIFIED')) && !(null == s ? void 0 : s.features.includes('PARTNER'))) return null;
        let u = E.ZP.getGuildIconURL({
            id: s.id,
            icon: s.icon,
            size: 32
        });
        return (0, t.jsxs)('div', {
            className: o()(T.column),
            children: [
                (0, t.jsx)(l.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, t.jsxs)('div', {
                    className: o()(T.row, T.gapMd),
                    children: [
                        (0, t.jsx)('img', {
                            className: T.icon,
                            src: u,
                            alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: s.name })
                        }),
                        (0, t.jsxs)('div', {
                            className: o()(T.gapNone),
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
        s =
            null == a
                ? void 0
                : a.find((e) => {
                      let { category: a } = e;
                      return a === i.p.DISCORD;
                  }),
        [c, _] = r.useState();
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let a = e.split('/').pop();
                if (null != a) {
                    let e = await (0, u.Z)(a);
                    !0 !== e.banned && _(e.invite);
                }
            };
            null != s && e(s.url);
        }, [s]),
        null == a || 0 === a.length)
    )
        return null;
    let E = a
        .filter((e) => {
            let { category: a } = e;
            return m.includes(a);
        })
        .sort((e, a) => e.category - a.category);
    return (0, t.jsxs)('div', {
        className: o()(T.column),
        children: [
            null != c &&
                (0, t.jsx)(O, {
                    invite: c,
                    trackClick: n
                }),
            (0, t.jsxs)('div', {
                className: o()(T.column, T.gapSm),
                children: [
                    (0, t.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: A.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, t.jsx)('div', {
                        className: T.row,
                        children: E.map((e) => {
                            let a,
                                r,
                                { category: s, url: o } = e,
                                c = null;
                            switch (s) {
                                case i.p.OFFICIAL:
                                    (c = (0, t.jsx)(l.GlobeEarthIcon, { colorClass: T.linkIcon })), (r = d.as.WebsiteLink), (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case i.p.TWITTER:
                                    (c = (0, t.jsx)(l.XNeutralIcon, { colorClass: T.linkIcon })), (r = d.as.XLink), (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case i.p.YOUTUBE:
                                    (r = d.as.YouTubeLink), (c = (0, t.jsx)(l.YoutubeNeutralIcon, { colorClass: T.linkIcon })), (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != c
                                ? (0, t.jsx)(
                                      l.Anchor,
                                      {
                                          className: T.linkAnchor,
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
