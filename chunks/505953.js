n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    u = n(79712),
    c = n(276952),
    d = n(91159),
    _ = n(496675),
    E = n(306680),
    f = n(446183),
    h = n(677281),
    p = n(709054),
    m = n(765104),
    I = n(477291),
    T = n(478758),
    g = n(789707),
    S = n(981631),
    A = n(531578),
    v = n(857911);
function N(e) {
    let { summary: t, channel: r, members: E, guildId: g, unread: N, onClick: O } = e,
        [R, C] = a.useState(!1),
        y = (0, d.Ye)(p.default.extractTimestamp(t.startId)),
        b = (0, o.e7)([m.Z], () => m.Z.summaryFeedback(t)),
        L = (e, n) => {
            e.stopPropagation(),
                (0, I.Z)({
                    summary: t,
                    channel: r,
                    rating: n
                });
        },
        D = _.Z.can(S.Plq.MANAGE_MESSAGES, r),
        M = (e) => {
            D &&
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e('12891').then(n.bind(n, 519620));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            summary: t
                        });
                });
        };
    return (0, i.jsxs)(s.Clickable, {
        className: v.container,
        onClick: O,
        onContextMenu: M,
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        children: [
            (0, i.jsx)(c.Z, {
                hovered: R,
                unread: N,
                className: v.unreadPill
            }),
            (0, i.jsx)('div', {
                className: v.rowHeader,
                children: (0, i.jsxs)('div', {
                    className: v.rowHeaderLeft,
                    children: [
                        (0, i.jsx)(s.Text, {
                            className: v.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: y
                        }),
                        (0, i.jsx)(u.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: v.dot
                        }),
                        (0, i.jsx)(s.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: v.icon
                        }),
                        (0, i.jsx)(s.Text, {
                            className: v.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        E.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: v.dot
                                    }),
                                    (0, i.jsx)(T.Z, {
                                        partySize: {
                                            knownSize: E.length,
                                            totalSize: E.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: E,
                                        guildId: g
                                    })
                                ]
                            })
                    ]
                })
            }),
            R &&
                !b &&
                (0, i.jsxs)('div', {
                    className: v.feedbackContainer,
                    children: [
                        (0, i.jsx)(s.Clickable, {
                            onClick: (e) => L(e, A.aZ.GOOD),
                            children: (0, i.jsx)(h.Z, {
                                className: v.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, i.jsx)(s.Clickable, {
                            onClick: (e) => L(e, A.aZ.BAD),
                            children: (0, i.jsx)(f.Z, {
                                className: v.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, i.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: v.title,
                children: t.topic
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: v.subtitle,
                children: t.summShort
            })
        ]
    });
}
function O(e) {
    let { summaries: t, summariesMembers: n, channel: r, selectTopic: s, setOpen: l } = e,
        u = (0, o.e7)([E.ZP], () => E.ZP.getOldestUnreadMessageId(r.id)),
        c = a.useCallback(
            (e) => {
                s(e), l(!1);
            },
            [s, l]
        );
    return t.length < 1
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  var a;
                  let o = null !== (a = n[t]) && void 0 !== a ? a : [];
                  return (0, i.jsx)(
                      N,
                      {
                          summary: e,
                          channel: r,
                          members: o,
                          guildId: r.guild_id,
                          unread: null != u && p.default.compare(e.endId, u) > 0,
                          onClick: () => c(t)
                      },
                      t
                  );
              })
          });
}
