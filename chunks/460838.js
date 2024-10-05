a.d(n, {
    Q: function () {
        return c;
    },
    Z: function () {
        return R;
    }
});
var t,
    c,
    i = a(735250),
    o = a(470079),
    r = a(120356),
    d = a.n(r),
    l = a(442837),
    s = a(481060),
    u = a(447003),
    _ = a(471445),
    f = a(565138),
    p = a(357156),
    h = a(496675),
    b = a(725436),
    m = a(274311),
    v = a(854698),
    g = a(285784),
    I = a(95291),
    x = a(742593),
    C = a(810561),
    N = a(187443),
    k = a(131154),
    T = a(765305),
    w = a(981631),
    E = a(689938),
    B = a(947017);
function S(e) {
    let { channel: n, onClick: a } = e,
        { canManageAllEvents: t } = (0, p.XJ)(n),
        c = (0, l.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(w.Plq.CONNECT, n), [n]),
        r = o.useMemo(() => (0, u.Z)(n), [n]),
        f = (0, _.KS)(n);
    return (0, i.jsx)(s.Tooltip, {
        text: E.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
        shouldShow: !c && null != a,
        children: (e) =>
            (0, i.jsxs)(s.Clickable, {
                ...e,
                className: d()(B.inline, B.channelContainer, {
                    [B.channelContainerEnabled]: c && null != a,
                    [B.channelContainerDisabled]: !c && null != a
                }),
                onClick: a,
                children: [
                    (0, i.jsx)(s.Tooltip, {
                        text: E.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                        shouldShow: t && r && c && null != a,
                        children: (e) =>
                            null != f
                                ? (0, i.jsx)(f, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: B.icon
                                  })
                                : null
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: B.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function j(e) {
    let { guild: n, channel: a, onJoinClick: t, handleLocationClick: c, location: o, isExternal: r, isHub: l } = e;
    if (l)
        return null == n
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: B.inline,
                  children: [
                      (0, i.jsx)(f.Z, {
                          className: B.guildIcon,
                          size: f.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              });
    return null != a
        ? (0, i.jsx)(S, {
              channel: a,
              onClick: t
          })
        : (0, i.jsxs)(s.Clickable, {
              className: B.inline,
              onClick: c,
              children: [
                  (0, i.jsx)(s.LocationIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      height: 20,
                      width: 20,
                      className: d()(B.channelContainer, B.icon)
                  }),
                  (0, i.jsx)(s.Text, {
                      className: r ? B.externalLocation : B.channelLocation,
                      variant: 'text-sm/normal',
                      children: (0, b.m)(o, !0)
                  })
              ]
          });
}
function R(e) {
    let { className: n, guild: a, channel: t, creator: c, name: o, entityType: r, description: l, imageLocation: u = 0, imageSource: _, isActive: f, isUserLurking: p, isJoined: h = !1, isMember: b = !1, isHub: w = !1, speakers: E, speakerCount: S, rsvped: R, canInvite: U, location: Z, truncate: y, onContextMenu: L, onJoinClick: A, onJoinGuildClick: M, onGoToGuildClick: P, onRsvpClick: D, onStartClick: H, onInviteClick: G, onEndClick: O, onClick: F, isNew: V, guildEvent: z, eventPreview: W, recurrenceRule: X, recurrenceId: q } = e,
        J = (0, m.Q)(t, r),
        K = r === T.WX.EXTERNAL,
        Q = K ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != X && null != event) {
        let e = (0, v.Ho)(X);
        Y = (0, v.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, i.jsxs)(s.ClickableContainer, {
        'aria-label': o,
        onClick: () => (null == F ? void 0 : F(q)),
        onContextMenu: L,
        className: d()(
            B.card,
            {
                [B.joined]: h,
                [B.lurking]: p
            },
            n
        ),
        children: [
            (0, i.jsxs)('div', {
                className: d()(B.padding, { [B.isRecurring]: $ }),
                children: [
                    0 === u && (0, i.jsx)(I.Z, { source: _ }),
                    (0, i.jsx)(x.ZP, {
                        creator: c,
                        name: o,
                        description: l,
                        imageSource: 1 === u ? _ : null,
                        truncate: y,
                        guildId: null == a ? void 0 : a.id,
                        isHub: w,
                        isNew: V,
                        guildEvent: z,
                        eventPreview: W,
                        recurrenceId: q
                    }),
                    f &&
                        null != a &&
                        null != E &&
                        S > 0 &&
                        (0, i.jsx)(k.Z, {
                            guild: a,
                            speakers: E,
                            speakerCount: S,
                            className: B.spacing
                        }),
                    (0, i.jsx)('hr', { className: B.divider }),
                    (0, i.jsxs)('div', {
                        className: d()(B.inline, B.footer),
                        children: [
                            (0, i.jsx)(j, {
                                guild: a,
                                channel: t,
                                onJoinClick: A,
                                handleLocationClick: Q,
                                location: Z,
                                isExternal: K,
                                isHub: w
                            }),
                            w
                                ? (0, i.jsx)(N.Z, {
                                      isActive: f,
                                      isUserLurking: p,
                                      isMember: b,
                                      rsvped: R,
                                      onRsvpClick: D,
                                      onJoinGuildClick: M,
                                      onGoToGuildClick: P,
                                      guildName: null == a ? void 0 : a.name,
                                      canInvite: U,
                                      isChannelPublic: J,
                                      onInviteClick: G
                                  })
                                : (0, i.jsx)(g.ZP, {
                                      entityType: r,
                                      isJoined: h,
                                      isActive: f,
                                      isUserLurking: p,
                                      rsvped: R,
                                      canInvite: U,
                                      isChannelPublic: J,
                                      onContextMenu: L,
                                      onJoinClick: A,
                                      onRsvpClick: D,
                                      onStartClick: H,
                                      onInviteClick: G,
                                      onEndClick: O
                                  })
                        ]
                    }),
                    $ && (0, i.jsx)('hr', { className: B.divider })
                ]
            }),
            $ &&
                (0, i.jsx)(C.Z, {
                    guildId: null == a ? void 0 : a.id,
                    recurrenceRule: X,
                    guildEventId: z.id,
                    onRecurrenceClick: F
                })
        ]
    });
}
((t = c || (c = {}))[(t.BANNER = 0)] = 'BANNER'), (t[(t.THUMBNAIL = 1)] = 'THUMBNAIL');
