t.d(n, {
    Q: function () {
        return a;
    },
    Z: function () {
        return A;
    }
});
var i,
    a,
    r = t(200651),
    c = t(192379),
    o = t(120356),
    d = t.n(o),
    l = t(442837),
    s = t(481060),
    _ = t(447003),
    u = t(471445),
    p = t(565138),
    m = t(357156),
    f = t(496675),
    I = t(725436),
    g = t(274311),
    C = t(854698),
    b = t(285784),
    v = t(95291),
    h = t(742593),
    T = t(810561),
    U = t(187443),
    E = t(131154),
    L = t(765305),
    x = t(981631),
    D = t(388032),
    y = t(727642);
function G(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, m.XJ)(n),
        a = (0, l.e7)([f.Z], () => !n.isGuildVocal() || f.Z.can(x.Plq.CONNECT, n), [n]),
        o = c.useMemo(() => (0, _.Z)(n), [n]),
        p = (0, u.KS)(n);
    return (0, r.jsx)(s.Tooltip, {
        text: D.intl.string(D.t.nHjY9P),
        shouldShow: !a && null != t,
        children: (e) =>
            (0, r.jsxs)(s.Clickable, {
                ...e,
                className: d()(y.inline, y.channelContainer, {
                    [y.channelContainerEnabled]: a && null != t,
                    [y.channelContainerDisabled]: !a && null != t
                }),
                onClick: t,
                children: [
                    (0, r.jsx)(s.Tooltip, {
                        text: D.intl.string(D.t['48WXaW']),
                        shouldShow: i && o && a && null != t,
                        children: (e) =>
                            null != p
                                ? (0, r.jsx)(p, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: y.icon
                                  })
                                : null
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: y.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function S(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: a, location: c, isExternal: o, isHub: l } = e;
    if (l)
        return null == n
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: y.inline,
                  children: [
                      (0, r.jsx)(p.Z, {
                          className: y.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              });
    return null != t
        ? (0, r.jsx)(G, {
              channel: t,
              onClick: i
          })
        : (0, r.jsxs)(s.Clickable, {
              className: y.inline,
              onClick: a,
              children: [
                  (0, r.jsx)(s.LocationIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      height: 20,
                      width: 20,
                      className: d()(y.channelContainer, y.icon)
                  }),
                  (0, r.jsx)(s.Text, {
                      className: o ? y.externalLocation : y.channelLocation,
                      variant: 'text-sm/normal',
                      children: (0, I.m)(c, !0)
                  })
              ]
          });
}
function A(e) {
    let { className: n, guild: t, channel: i, creator: a, name: c, entityType: o, description: l, imageLocation: _ = 0, imageSource: u, isActive: p, isUserLurking: m, isJoined: f = !1, isMember: I = !1, isHub: x = !1, speakers: D, speakerCount: G, rsvped: A, canInvite: N, location: z, truncate: B, onContextMenu: O, onJoinClick: H, onJoinGuildClick: R, onGoToGuildClick: k, onRsvpClick: w, onStartClick: M, onInviteClick: j, onEndClick: P, onClick: Z, isNew: X, guildEvent: V, eventPreview: Y, recurrenceRule: q, recurrenceId: F } = e,
        W = (0, g.Q)(i, o),
        K = o === L.WX.EXTERNAL,
        J = K ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != q && null != event) {
        let e = (0, C.Ho)(q);
        Q = (0, C.PJ)(4, e, new Date(V.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, r.jsxs)(s.ClickableContainer, {
        'aria-label': c,
        onClick: () => (null == Z ? void 0 : Z(F)),
        onContextMenu: O,
        className: d()(
            y.card,
            {
                [y.joined]: f,
                [y.lurking]: m
            },
            n
        ),
        children: [
            (0, r.jsxs)('div', {
                className: d()(y.padding, { [y.isRecurring]: $ }),
                children: [
                    0 === _ && (0, r.jsx)(v.Z, { source: u }),
                    (0, r.jsx)(h.ZP, {
                        creator: a,
                        name: c,
                        description: l,
                        imageSource: 1 === _ ? u : null,
                        truncate: B,
                        guildId: null == t ? void 0 : t.id,
                        isHub: x,
                        isNew: X,
                        guildEvent: V,
                        eventPreview: Y,
                        recurrenceId: F
                    }),
                    p &&
                        null != t &&
                        null != D &&
                        G > 0 &&
                        (0, r.jsx)(E.Z, {
                            guild: t,
                            speakers: D,
                            speakerCount: G,
                            className: y.spacing
                        }),
                    (0, r.jsx)('hr', { className: y.divider }),
                    (0, r.jsxs)('div', {
                        className: d()(y.inline, y.footer),
                        children: [
                            (0, r.jsx)(S, {
                                guild: t,
                                channel: i,
                                onJoinClick: H,
                                handleLocationClick: J,
                                location: z,
                                isExternal: K,
                                isHub: x
                            }),
                            x
                                ? (0, r.jsx)(U.Z, {
                                      isActive: p,
                                      isUserLurking: m,
                                      isMember: I,
                                      rsvped: A,
                                      onRsvpClick: w,
                                      onJoinGuildClick: R,
                                      onGoToGuildClick: k,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: N,
                                      isChannelPublic: W,
                                      onInviteClick: j
                                  })
                                : (0, r.jsx)(b.ZP, {
                                      entityType: o,
                                      isJoined: f,
                                      isActive: p,
                                      isUserLurking: m,
                                      rsvped: A,
                                      canInvite: N,
                                      isChannelPublic: W,
                                      onContextMenu: O,
                                      onJoinClick: H,
                                      onRsvpClick: w,
                                      onStartClick: M,
                                      onInviteClick: j,
                                      onEndClick: P
                                  })
                        ]
                    }),
                    $ && (0, r.jsx)('hr', { className: y.divider })
                ]
            }),
            $ &&
                (0, r.jsx)(T.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: Z
                })
        ]
    });
}
((i = a || (a = {}))[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL');
