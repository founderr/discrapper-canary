t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    o = t.n(s),
    i = t(643872),
    l = t(481060),
    c = t(570140),
    d = t(652898),
    u = t(93093),
    _ = t(768581),
    E = t(810568),
    I = t(981631),
    A = t(689938),
    p = t(51527);
let m = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
    T = (e) => {
        let { invite: n, trackClick: t } = e,
            { approximate_member_count: r, guild: s } = n;
        if (null == s) return null;
        let i = u.Z.isMember(s.id);
        if (!(null == s ? void 0 : s.features.includes('VERIFIED')) && !(null == s ? void 0 : s.features.includes('PARTNER'))) return null;
        let d = _.ZP.getGuildIconURL({
            id: s.id,
            icon: s.icon,
            size: 32
        });
        return (0, a.jsxs)('div', {
            className: o()(p.column),
            children: [
                (0, a.jsx)(l.Heading, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD
                }),
                (0, a.jsxs)('div', {
                    className: o()(p.row, p.gapMd),
                    children: [
                        (0, a.jsx)('img', {
                            className: p.icon,
                            src: d,
                            alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({ guildName: s.name })
                        }),
                        (0, a.jsxs)('div', {
                            className: o()(p.gapNone),
                            children: [
                                (0, a.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: s.name
                                }),
                                null != r &&
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: r })
                                    })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)(l.Button, {
                    color: l.ButtonColors.PRIMARY,
                    onClick: () => {
                        t(E.as.JoinOfficialServer),
                            c.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: n,
                                code: n.code,
                                context: I.IlC.APP
                            });
                    },
                    children: i ? A.Z.Messages.JOINED_GUILD : A.Z.Messages.JOIN_GUILD
                })
            ]
        });
    };
n.Z = (e) => {
    let { websites: n, trackClick: t, onInviteResolved: s } = e,
        c =
            null == n
                ? void 0
                : n.find((e) => {
                      let { category: n } = e;
                      return n === i.p.DISCORD;
                  }),
        [u, _] = r.useState();
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let n = e.split('/').pop();
                if (null != n) {
                    let e = await (0, d.Z)(n);
                    !0 !== e.banned && (_(e.invite), null != e.invite && (null == s || s(e.invite)));
                }
            };
            null != c && e(c.url);
        }, [c, s]),
        null == n || 0 === n.length)
    )
        return null;
    let I = n
        .filter((e) => {
            let { category: n } = e;
            return m.includes(n);
        })
        .sort((e, n) => e.category - n.category);
    return (0, a.jsxs)('div', {
        className: o()(p.column),
        children: [
            null != u &&
                (0, a.jsx)(T, {
                    invite: u,
                    trackClick: t
                }),
            (0, a.jsxs)('div', {
                className: o()(p.column, p.gapSm),
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: A.Z.Messages.GAME_PROFILE_LINKS
                    }),
                    (0, a.jsx)('div', {
                        className: p.row,
                        children: I.map((e) => {
                            let n,
                                r,
                                { category: s, url: o } = e,
                                c = null;
                            switch (s) {
                                case i.p.OFFICIAL:
                                    (c = (0, a.jsx)(l.GlobeEarthIcon, { colorClass: p.linkIcon })), (r = E.as.WebsiteLink), (n = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                                    break;
                                case i.p.TWITTER:
                                    (c = (0, a.jsx)(l.XNeutralIcon, { colorClass: p.linkIcon })), (r = E.as.XLink), (n = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                                    break;
                                case i.p.YOUTUBE:
                                    (r = E.as.YouTubeLink), (c = (0, a.jsx)(l.YoutubeNeutralIcon, { colorClass: p.linkIcon })), (n = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                            }
                            return null != c
                                ? (0, a.jsx)(
                                      l.Anchor,
                                      {
                                          className: p.linkAnchor,
                                          title: n,
                                          href: o,
                                          onClick: () => {
                                              t(r);
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
