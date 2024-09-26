n.d(t, {
    Qt: function () {
        return P;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(447543),
    c = n(287734),
    d = n(372769),
    _ = n(955415),
    E = n(922482),
    f = n(601964),
    h = n(592125),
    p = n(430824),
    m = n(15274),
    I = n(924301),
    T = n(725436),
    g = n(978227),
    S = n(236373),
    A = n(854698),
    v = n(405613),
    N = n(95291),
    O = n(742593),
    R = n(217804),
    C = n(139712),
    y = n(765305),
    L = n(689938),
    b = n(639955);
let D = (e, t) => (n) => {
        n.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = h.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, E.Cq)(r), null == t || t(n));
    },
    P = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case y.WX.STAGE_INSTANCE:
                return M(e, t);
            case y.WX.VOICE:
                return D(e, t);
        }
        return () => {};
    },
    U = (e, t) => t && [y.WX.STAGE_INSTANCE, y.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    w = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: a, channel: o, isMember: c } = e,
            E = (0, s.e7)(
                [p.Z],
                () => {
                    var e;
                    return null == n ? null : null !== (e = p.Z.getGuild(n.id)) && void 0 !== e ? e : new f.ZP(n);
                },
                [n]
            ),
            h = (0, R.u)(a, o),
            m = i.useCallback(
                (e) => {
                    c && null != a && (e.stopPropagation(), (0, u.B)(a));
                },
                [c, a]
            ),
            I = i.useCallback(
                (e) => {
                    P(a)(e);
                },
                [a]
            );
        if (null == E) return null;
        let g = null == h ? void 0 : h.IconComponent,
            S = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != g &&
                        (0, r.jsx)(g, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.channelIcon
                        }),
                    (0, r.jsx)(l.Text, {
                        className: b.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, T.m)(null !== (t = null == h ? void 0 : h.locationName) && void 0 !== t ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: b.inviteDetailsContainer,
            children: [
                (0, r.jsx)(_.Z.Icon, {
                    guild: E,
                    onClick: m
                }),
                (0, r.jsxs)('div', {
                    className: b.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    guild: E,
                                    tooltipPosition: 'top',
                                    tooltipColor: l.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: b.guildBadge
                                }),
                                (0, r.jsx)(l.Clickable, {
                                    className: b.guildNameClickable,
                                    onClick: m,
                                    children: (0, r.jsx)(l.Heading, {
                                        className: c ? b.guildNameLinkable : b.guildName,
                                        variant: 'text-sm/medium',
                                        children: E.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: b.channelInfoContainer,
                            children: U(a, c)
                                ? (0, r.jsx)(l.Clickable, {
                                      className: b.channelLocationLink,
                                      onClick: I,
                                      children: S
                                  })
                                : S
                        })
                    ]
                })
            ]
        });
    }),
    x = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: a, isEnded: o, isMember: u, isExternal: c, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            E = (0, s.e7)([I.ZP], () => I.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            f = (e) => {
                e.stopPropagation(), (0, C.Z)(n, i, t);
            },
            h = (e) => {
                e.stopPropagation(), u ? a && _() : d();
            };
        return u
            ? a
                ? (0, r.jsx)(l.Button, {
                      className: b.button,
                      size: l.Button.Sizes.SMALL,
                      onClick: (e) => {
                          !c && h(e);
                      },
                      color: c ? l.Button.Colors.TRANSPARENT : l.Button.Colors.GREEN,
                      children: c ? L.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : L.Z.Messages.JOIN_GUILD
                  })
                : o
                  ? (0, r.jsx)(l.Button, {
                        className: b.button,
                        size: l.Button.Sizes.SMALL,
                        disabled: !0,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.OUTLINED,
                        children: L.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
                    })
                  : (0, r.jsxs)(l.Button, {
                        className: b.button,
                        innerClassName: b.innerButton,
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: E ? l.Button.Looks.OUTLINED : l.Button.Looks.FILLED,
                        onClick: f,
                        children: [
                            E
                                ? (0, r.jsx)(l.CheckmarkLargeIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: b.buttonIcon
                                  })
                                : (0, r.jsx)(l.BellIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: b.buttonIcon
                                  }),
                            L.Z.Messages.INDICATE_RSVP
                        ]
                    })
            : (0, r.jsx)(l.Button, {
                  className: b.button,
                  size: l.Button.Sizes.SMALL,
                  onClick: h,
                  color: l.Button.Colors.GREEN,
                  children: L.Z.Messages.JOIN_GUILD
              });
    }),
    G = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: a, channel: s, isMember: u, recurrenceId: c, onAcceptInstantInvite: d, onTransitionToInviteChannel: E } = e,
            f = null != c ? c : null != n ? (0, A.DK)(n) : null,
            h = (null == n ? void 0 : n.recurrence_rule) == null || null == f || (0, A.Rp)((0, S.KV)(null == n ? void 0 : n.recurrence_rule), f),
            p = (0, g.Z)(n),
            T = i.useCallback(() => {
                u &&
                    null != n &&
                    (0, m.bO)({
                        eventId: n.id,
                        recurrenceId: f
                    });
            }, [u, n, f]);
        if (null == n || !h) return null;
        let R = (0, I.xt)(n),
            C = (0, I.Z2)(n),
            L = n.entity_type === y.WX.EXTERNAL;
        return (0, r.jsx)(_.Z, {
            className: o()({ [b.clickable]: u }),
            children: (0, r.jsxs)(l.Clickable, {
                onClick: T,
                children: [
                    null != n.image &&
                        (0, r.jsx)(N.Z, {
                            source: (0, v.Z)(n),
                            className: b.banner
                        }),
                    (0, r.jsx)(O.ZP, {
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        descriptionClassName: b.eventDescription,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: f
                    }),
                    (0, r.jsxs)('div', {
                        className: b.footerContainer,
                        children: [
                            (0, r.jsx)(w, {
                                guild: a,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: u
                            }),
                            (0, r.jsx)(x, {
                                isActive: R,
                                isEnded: C,
                                isMember: u,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: f,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: E,
                                isExternal: L
                            })
                        ]
                    })
                ]
            })
        });
    });
t.ZP = G;
