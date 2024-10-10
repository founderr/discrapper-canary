n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(79712),
    u = n(276952),
    c = n(91159),
    d = n(496675),
    _ = n(306680),
    E = n(446183),
    f = n(677281),
    h = n(709054),
    p = n(765104),
    I = n(477291),
    m = n(478758),
    T = n(789707),
    S = n(981631),
    g = n(531578),
    A = n(857911);
function N(e) {
    let { summary: t, channel: _, members: T, guildId: N, unread: R, onClick: O } = e,
        [v, C] = i.useState(!1),
        L = (0, c.Ye)(h.default.extractTimestamp(t.startId)),
        y = (0, a.e7)([p.Z], () => p.Z.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(),
                (0, I.Z)({
                    summary: t,
                    channel: _,
                    rating: n
                });
        },
        b = d.Z.can(S.Plq.MANAGE_MESSAGES, _);
    return (0, r.jsxs)(s.Clickable, {
        className: A.container,
        onClick: O,
        onContextMenu: (e) => {
            b &&
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('12891').then(n.bind(n, 519620));
                    return (n) =>
                        (0, r.jsx)(e, {
                            ...n,
                            summary: t
                        });
                });
        },
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        children: [
            (0, r.jsx)(u.Z, {
                hovered: v,
                unread: R,
                className: A.unreadPill
            }),
            (0, r.jsx)('div', {
                className: A.rowHeader,
                children: (0, r.jsxs)('div', {
                    className: A.rowHeaderLeft,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: A.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: L
                        }),
                        (0, r.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: A.dot
                        }),
                        (0, r.jsx)(s.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: A.icon
                        }),
                        (0, r.jsx)(s.Text, {
                            className: A.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        T.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: A.dot
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        partySize: {
                                            knownSize: T.length,
                                            totalSize: T.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: T,
                                        guildId: N
                                    })
                                ]
                            })
                    ]
                })
            }),
            v &&
                !y &&
                (0, r.jsxs)('div', {
                    className: A.feedbackContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: (e) => D(e, g.aZ.GOOD),
                            children: (0, r.jsx)(f.Z, {
                                className: A.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: (e) => D(e, g.aZ.BAD),
                            children: (0, r.jsx)(E.Z, {
                                className: A.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, r.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: A.title,
                children: t.topic
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: A.subtitle,
                children: t.summShort
            })
        ]
    });
}
function R(e) {
    let { summaries: t, summariesMembers: n, channel: s, selectTopic: o, setOpen: l } = e,
        u = (0, a.e7)([_.ZP], () => _.ZP.getOldestUnreadMessageId(s.id)),
        c = i.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l]
        );
    return t.length < 1
        ? (0, r.jsx)(T.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  var i;
                  let a = null !== (i = n[t]) && void 0 !== i ? i : [];
                  return (0, r.jsx)(
                      N,
                      {
                          summary: e,
                          channel: s,
                          members: a,
                          guildId: s.guild_id,
                          unread: null != u && h.default.compare(e.endId, u) > 0,
                          onClick: () => c(t)
                      },
                      t
                  );
              })
          });
}
