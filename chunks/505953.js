n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(79712),
    u = n(276952),
    c = n(91159),
    d = n(496675),
    f = n(306680),
    _ = n(446183),
    h = n(677281),
    p = n(709054),
    m = n(765104),
    g = n(477291),
    E = n(478758),
    v = n(789707),
    I = n(981631),
    S = n(531578),
    T = n(857911);
function b(e) {
    let { summary: t, channel: f, members: v, guildId: b, unread: y, onClick: A } = e,
        [N, C] = i.useState(!1),
        R = (0, c.Ye)(p.default.extractTimestamp(t.startId)),
        O = (0, a.e7)([m.Z], () => m.Z.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(),
                (0, g.Z)({
                    summary: t,
                    channel: f,
                    rating: n
                });
        },
        L = d.Z.can(I.Plq.MANAGE_MESSAGES, f);
    return (0, r.jsxs)(s.Clickable, {
        className: T.container,
        onClick: A,
        onContextMenu: (e) => {
            L &&
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
                hovered: N,
                unread: y,
                className: T.unreadPill
            }),
            (0, r.jsx)('div', {
                className: T.rowHeader,
                children: (0, r.jsxs)('div', {
                    className: T.rowHeaderLeft,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: T.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: R
                        }),
                        (0, r.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: T.dot
                        }),
                        (0, r.jsx)(s.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: T.icon
                        }),
                        (0, r.jsx)(s.Text, {
                            className: T.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        v.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: T.dot
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        partySize: {
                                            knownSize: v.length,
                                            totalSize: v.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: v,
                                        guildId: b
                                    })
                                ]
                            })
                    ]
                })
            }),
            N &&
                !O &&
                (0, r.jsxs)('div', {
                    className: T.feedbackContainer,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            onClick: (e) => D(e, S.aZ.GOOD),
                            children: (0, r.jsx)(h.Z, {
                                className: T.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: (e) => D(e, S.aZ.BAD),
                            children: (0, r.jsx)(_.Z, {
                                className: T.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, r.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: T.title,
                children: t.topic
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: T.subtitle,
                children: t.summShort
            })
        ]
    });
}
function y(e) {
    let { summaries: t, summariesMembers: n, channel: s, selectTopic: o, setOpen: l } = e,
        u = (0, a.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(s.id)),
        c = i.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l]
        );
    return t.length < 1
        ? (0, r.jsx)(v.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  var i;
                  let a = null !== (i = n[t]) && void 0 !== i ? i : [];
                  return (0, r.jsx)(
                      b,
                      {
                          summary: e,
                          channel: s,
                          members: a,
                          guildId: s.guild_id,
                          unread: null != u && p.default.compare(e.endId, u) > 0,
                          onClick: () => c(t)
                      },
                      t
                  );
              })
          });
}
