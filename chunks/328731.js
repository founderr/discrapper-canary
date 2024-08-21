t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(120356),
    r = t.n(a),
    o = t(442837),
    s = t(481060),
    c = t(239091),
    u = t(318374),
    d = t(751688),
    m = t(184301),
    f = t(103575),
    _ = t(210887),
    p = t(5192),
    C = t(192918),
    h = t(256139),
    E = t(981631),
    I = t(689938),
    T = t(182408);
function x(e) {
    let { participants: n, channel: i } = e;
    return (0, l.jsx)(s.Scroller, {
        className: T.participantsPopout,
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
function N(e) {
    let { children: n, participants: t, channel: a } = e,
        r = (0, o.e7)([_.Z], () => _.Z.theme),
        c = 1 === t.length ? t[0] : null,
        u = (0, i.useCallback)(
            (e) =>
                null != c
                    ? (0, l.jsx)(f.Z, {
                          ...e,
                          location: 'Content Inventory Embed',
                          userId: c.id,
                          guildId: a.guild_id,
                          channelId: a.id,
                          analyticsParams: {
                              location: {
                                  page: E.ZY5.GUILD_CHANNEL,
                                  section: E.jXE.CONTENT_INVENTORY_EMBED
                              }
                          }
                      })
                    : (0, l.jsx)(x, {
                          participants: t,
                          channel: a
                      }),
            [a, t, c]
        );
    return (0, l.jsx)(s.ThemeContextProvider, {
        theme: r,
        children: (0, l.jsx)(s.Popout, {
            renderPopout: u,
            preload: () =>
                null != c
                    ? (0, m.Z)(c, {
                          guildId: a.guild_id,
                          channelId: a.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
function v(e) {
    let { user: n, text: t, channel: i } = e;
    return (0, l.jsx)(N, {
        participants: [n],
        channel: i,
        children: (e) =>
            (0, l.jsx)(h.Z, {
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
function g(e) {
    let { entry: n, channel: t, className: i } = e,
        { displayParticipants: a, participant1: o, participant2: c, numOtherParticipants: d, orderedParticipants: m } = (0, C.Z)(n),
        f = [o, c];
    return (0, l.jsxs)('div', {
        className: r()(T.container, i),
        children: [
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(N, {
                              participants: m,
                              channel: t,
                              children: (e) =>
                                  (0, l.jsx)(s.Clickable, {
                                      className: T.clickable,
                                      ...e,
                                      children: (0, l.jsx)(u.Z, {
                                          maxUsers: 3,
                                          users: a,
                                          size: s.AvatarSizes.SIZE_20,
                                          avatarClassName: T.stackedAvatar,
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
                className: r()(T.truncatedText, T.usersHeader),
                scaleFontToUserSetting: !0,
                children: I.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                    user0: p.ZP.getName(t.guild_id, t.id, f[0]),
                    user1: p.ZP.getName(t.guild_id, t.id, f[1]),
                    countOthers: d,
                    name0Hook: (e, n) =>
                        (0, l.jsx)(
                            v,
                            {
                                text: e,
                                user: f[0],
                                channel: t
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, l.jsx)(
                            v,
                            {
                                text: e,
                                user: f[1],
                                channel: t
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, l.jsx)(
                            N,
                            {
                                participants: m,
                                channel: t,
                                children: (n) =>
                                    (0, l.jsx)(h.Z, {
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
