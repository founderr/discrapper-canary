n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(481060),
    l = n(841784),
    u = n(833664),
    c = n(420660),
    d = n(100527),
    _ = n(906732),
    E = n(314091),
    f = n(379357),
    h = n(358696),
    p = n(180335),
    I = n(810568),
    m = n(168524),
    T = n(833858),
    g = n(769654),
    S = n(502762),
    A = n(652853),
    N = n(979038),
    O = n(448980),
    v = n(194811),
    R = n(373826),
    C = n(315324),
    y = n(582123),
    D = n(290274),
    L = n(553375),
    b = n(318134),
    M = n(228168),
    P = n(981631),
    U = n(701488),
    w = n(689938),
    x = n(139665);
function G(e) {
    let { user: t, currentUser: n, activity: i, application: G, guild: k, channel: B, className: F, onClose: V } = e,
        { analyticsLocations: H } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: Z } = (0, A.z)(),
        Y = { [x.fullSize]: Z === M.y0.FULL_SIZE },
        j = (0, p.Bq)({
            activity: i,
            user: t
        }),
        W = (0, m.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, L.n)({
                user: t,
                activity: i,
                entry: j
            })
        }),
        { onAction: K, trackViewRef: z } = (0, b.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: j,
            analyticsLocations: H
        }),
        { largeImage: q, smallImage: Q } = (0, f.FO)(i, G),
        X = (0, s.EQ)(i.type)
            .with(P.IIU.PLAYING, () => w.Z.Messages.USER_ACTIVITY_PLAYING)
            .with(P.IIU.STREAMING, () => w.Z.Messages.USER_ACTIVITY_STREAMING)
            .with(P.IIU.LISTENING, () => w.Z.Messages.USER_ACTIVITY_LISTENING_TO)
            .with(P.IIU.WATCHING, () => w.Z.Messages.USER_ACTIVITY_WATCHING)
            .with(P.IIU.HANG_STATUS, () => w.Z.Messages.USER_ACTIVITY_CURRENTLY)
            .with(P.IIU.COMPETING, () => w.Z.Messages.USER_ACTIVITY_PLAYING)
            .otherwise(() => null),
        $ =
            null == W
                ? void 0
                : () => {
                      K({ action: 'PRESS_GAME_IMAGE' }), W();
                  },
        J = () => {
            var e;
            return i.type === P.IIU.HANG_STATUS
                ? (0, r.jsx)(R.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, T.O8)(i)
                  })
                : (0, c.Z)(i) && null != B
                  ? (0, r.jsxs)('div', {
                        className: x.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: x.voiceIcon
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: 'heading-sm/semibold',
                                text: B.name
                            })
                        ]
                    })
                  : (0, u.Z)(i)
                    ? (0, r.jsx)(R.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(R.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        ee = () =>
            i.type === P.IIU.HANG_STATUS
                ? null
                : (0, c.Z)(i) && null != k
                  ? (0, r.jsx)(R.Z, {
                        variant: 'text-xs/normal',
                        text: w.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: k.name }),
                        onClick: () => {
                            (0, g.X)(k.id), K({ action: 'OPEN_VOICE_GUILD' }), null == V || V();
                        }
                    })
                  : (0, u.Z)(i)
                    ? (0, r.jsx)(R.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(R.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        et = () => {
            var e;
            return i.type === P.IIU.WATCHING
                ? null
                : (0, u.Z)(i)
                  ? en()
                  : (0, r.jsx)(R.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        en = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === U.Zc
                ? (0, r.jsxs)('div', {
                      className: x.gameState,
                      children: [
                          (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == G ? void 0 : G.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, l.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: x.gameState,
                        children: [
                            (0, r.jsx)(R.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: 'text-xs/normal',
                                text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(R.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        er = () =>
            null == W
                ? (0, r.jsxs)('div', {
                      className: x.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [J(), ee(), et()]
                          }),
                          (0, r.jsx)(O.Z, {
                              user: t,
                              activity: i,
                              className: x.badges
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: x.details,
                      children: [
                          (0, r.jsxs)(o.Clickable, {
                              className: x.clickable,
                              onClick: () => {
                                  K({ action: 'OPEN_GAME_PROFILE' }), W(), null == V || V();
                              },
                              children: [J(), ee(), et()]
                          }),
                          (0, r.jsx)(O.Z, {
                              user: t,
                              activity: i,
                              className: x.badges
                          })
                      ]
                  }),
        ei = () =>
            null == k || null == B
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: x.voiceChannelDivider }),
                          (0, r.jsx)(C.Z, {
                              user: t,
                              guild: k,
                              channel: B,
                              onAction: K,
                              onClose: V
                          })
                      ]
                  }),
        ea = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(x.actions, Y),
                      children: (0, r.jsx)(N.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: K,
                          onClose: V
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: H,
        children: (0, r.jsx)(y.Z, {
            user: t,
            onClose: V,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(S.Z.Overlay, {
                    className: a()(x.card, F),
                    ref: z,
                    children: [
                        (0, r.jsx)(v.Z, {
                            text: X,
                            platform: (0, E.ZH)(i),
                            tags: (0, r.jsx)(D.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: j,
                                onClose: V,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: x.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(x.content, Y),
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            image: q,
                                            smallImage: Q,
                                            onClick: $,
                                            size: h.J.SIZE_60
                                        }),
                                        er(),
                                        Z === M.y0.FULL_SIZE && ea()
                                    ]
                                }),
                                ei()
                            ]
                        }),
                        Z !== M.y0.FULL_SIZE && ea()
                    ]
                });
            }
        })
    });
}
