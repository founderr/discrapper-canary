t.d(n, {
    Z: function () {
        return N;
    }
});
var l = t(735250),
    i = t(470079),
    r = t(120356),
    a = t.n(r),
    o = t(442837),
    s = t(481060),
    c = t(239091),
    u = t(318374),
    d = t(751688),
    m = t(184301),
    f = t(103575),
    _ = t(210887),
    p = t(5192),
    h = t(192918),
    C = t(256139),
    v = t(981631),
    x = t(689938),
    E = t(182408);
function I(e) {
    let { participants: n, channel: i } = e;
    return (0, l.jsx)(s.Scroller, {
        className: E.participantsPopout,
        children: n.map((e) =>
            (0, l.jsx)(
                d.Z,
                {
                    guildId: i.guild_id,
                    user: e,
                    nick: p.ZP.getNickname(i.guild_id, i.id, e),
                    onContextMenu: (n) => {
                        (0, c.jW)(n, async () => {
                            let { default: n } = await Promise.all([t.e('79695'), t.e('69220'), t.e('46611')]).then(t.bind(t, 881351));
                            return (t) =>
                                (0, l.jsx)(n, {
                                    ...t,
                                    user: e
                                });
                        });
                    }
                },
                e.id
            )
        )
    });
}
function T(e) {
    let { children: n, participants: t, channel: r } = e,
        a = (0, o.e7)([_.Z], () => _.Z.theme),
        c = 0 === t.length ? t[0] : null,
        u = (0, i.useCallback)(
            (e) =>
                null != c
                    ? (0, l.jsx)(f.Z, {
                          ...e,
                          location: 'Content Inventory Embed',
                          userId: c.id,
                          guildId: r.guild_id,
                          channelId: r.id,
                          analyticsParams: {
                              location: {
                                  page: v.ZY5.GUILD_CHANNEL,
                                  section: v.jXE.CONTENT_INVENTORY_EMBED
                              }
                          }
                      })
                    : (0, l.jsx)(I, {
                          participants: t,
                          channel: r
                      }),
            [r, t, c]
        );
    return (0, l.jsx)(s.ThemeContextProvider, {
        theme: a,
        children: (0, l.jsx)(s.Popout, {
            renderPopout: u,
            preload: () =>
                null != c
                    ? (0, m.Z)(c, {
                          guildId: r.guild_id,
                          channelId: r.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
function g(e) {
    let { user: n, text: t, channel: i } = e;
    return (0, l.jsx)(T, {
        participants: [n],
        channel: i,
        children: (e) =>
            (0, l.jsx)(C.Z, {
                ...e,
                tag: 'span',
                children: (0, l.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: t
                })
            })
    });
}
function N(e) {
    let { entry: n, channel: t, className: i } = e,
        { displayParticipants: r, participant1: o, participant2: c, numOtherParticipants: d, orderedParticipants: m } = (0, h.Z)(n),
        f = [o, c];
    return (0, l.jsxs)('div', {
        className: a()(E.container, i),
        children: [
            r.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(T, {
                              participants: m,
                              channel: t,
                              children: (e) =>
                                  (0, l.jsx)(s.Clickable, {
                                      className: E.clickable,
                                      ...e,
                                      children: (0, l.jsx)(u.Z, {
                                          maxUsers: 3,
                                          users: r,
                                          size: s.AvatarSizes.SIZE_20,
                                          avatarClassName: E.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, l.jsx)(s.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, l.jsx)(s.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: a()(E.truncatedText, E.usersHeader),
                scaleFontToUserSetting: !0,
                children: x.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
                    user0: p.ZP.getName(t.guild_id, t.id, f[0]),
                    user1: p.ZP.getName(t.guild_id, t.id, f[1]),
                    countOthers: d,
                    name0Hook: (e, n) =>
                        (0, l.jsx)(
                            g,
                            {
                                text: e,
                                user: f[0],
                                channel: t
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, l.jsx)(
                            g,
                            {
                                text: e,
                                user: f[1],
                                channel: t
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, l.jsx)(
                            T,
                            {
                                participants: m,
                                channel: t,
                                children: (n) =>
                                    (0, l.jsx)(C.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, l.jsx)(s.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-primary',
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e
                                        })
                                    })
                            },
                            n
                        )
                })
            })
        ]
    });
}
