n.d(t, {
    Z: function () {
        return x;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(841784),
    l = n(833664),
    u = n(420660),
    c = n(100527),
    d = n(906732),
    _ = n(379357),
    E = n(358696),
    f = n(180335),
    h = n(810568),
    p = n(168524),
    I = n(833858),
    m = n(769654),
    T = n(994746),
    S = n(502762),
    g = n(652853),
    A = n(979038),
    N = n(448980),
    O = n(194811),
    R = n(373826),
    v = n(315324),
    C = n(582123),
    y = n(290274),
    D = n(553375),
    L = n(318134),
    b = n(228168),
    M = n(981631),
    P = n(701488),
    U = n(689938),
    w = n(139665);
function x(e) {
    let { user: t, currentUser: n, activity: i, application: x, guild: G, channel: k, className: B, onClose: F } = e,
        { analyticsLocations: V } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: H } = (0, g.z)(),
        Z = { [w.fullSize]: H === b.y0.FULL_SIZE },
        Y = (0, f.Bq)({
            activity: i,
            user: t
        }),
        j = (0, p.Z)({
            location: 'UserProfileActivityCard',
            source: h.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, D.n)({
                user: t,
                activity: i,
                entry: Y
            })
        }),
        { onAction: W, trackViewRef: K } = (0, L.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: Y,
            analyticsLocations: V
        }),
        z = (0, T.Z)(i),
        { largeImage: q, smallImage: Q } = (0, _.FO)(i, x),
        X =
            null == j
                ? void 0
                : () => {
                      W({ action: 'PRESS_GAME_IMAGE' }), j();
                  },
        $ = () => {
            var e;
            return i.type === M.IIU.HANG_STATUS
                ? (0, r.jsx)(R.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, I.O8)(i)
                  })
                : (0, u.Z)(i) && null != k
                  ? (0, r.jsxs)('div', {
                        className: w.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.VoiceNormalIcon, {
                                size: 'xxs',
                                color: s.tokens.colors.TEXT_NORMAL,
                                className: w.voiceIcon
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: 'heading-sm/semibold',
                                text: k.name
                            })
                        ]
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(R.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(R.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        J = () =>
            i.type === M.IIU.HANG_STATUS
                ? null
                : (0, u.Z)(i) && null != G
                  ? (0, r.jsx)(R.Z, {
                        variant: 'text-xs/normal',
                        text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: G.name }),
                        onClick: () => {
                            (0, m.X)(G.id), W({ action: 'OPEN_VOICE_GUILD' }), null == F || F();
                        }
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(R.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(R.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        ee = () => {
            var e;
            return i.type === M.IIU.WATCHING
                ? null
                : (0, l.Z)(i)
                  ? et()
                  : (0, r.jsx)(R.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        et = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === P.Zc
                ? (0, r.jsxs)('div', {
                      className: w.gameState,
                      children: [
                          (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(R.Z, {
                              variant: 'text-xs/normal',
                              text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == x ? void 0 : x.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, o.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: w.gameState,
                        children: [
                            (0, r.jsx)(R.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(R.Z, {
                                variant: 'text-xs/normal',
                                text: U.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
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
        en = () =>
            null == j
                ? (0, r.jsxs)('div', {
                      className: w.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [$(), J(), ee()]
                          }),
                          (0, r.jsx)(N.Z, {
                              user: t,
                              activity: i,
                              className: w.badges
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: w.details,
                      children: [
                          (0, r.jsxs)(s.Clickable, {
                              className: w.clickable,
                              onClick: () => {
                                  W({ action: 'OPEN_GAME_PROFILE' }), j(), null == F || F();
                              },
                              children: [$(), J(), ee()]
                          }),
                          (0, r.jsx)(N.Z, {
                              user: t,
                              activity: i,
                              className: w.badges
                          })
                      ]
                  }),
        er = () =>
            null == G || null == k
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: w.voiceChannelDivider }),
                          (0, r.jsx)(v.Z, {
                              user: t,
                              guild: G,
                              channel: k,
                              onAction: W,
                              onClose: F
                          })
                      ]
                  }),
        ei = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(w.actions, Z),
                      children: (0, r.jsx)(A.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: W,
                          onClose: F
                      })
                  });
    return (0, r.jsx)(d.Gt, {
        value: V,
        children: (0, r.jsx)(C.Z, {
            user: t,
            onClose: F,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(S.Z.Overlay, {
                    className: a()(w.card, B),
                    ref: K,
                    children: [
                        (0, r.jsx)(O.Z, {
                            text: z.text,
                            icon: z.icon,
                            tags: (0, r.jsx)(y.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: Y,
                                onClose: F,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: w.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(w.content, Z),
                                    children: [
                                        (0, r.jsx)(E.E, {
                                            image: q,
                                            smallImage: Q,
                                            onClick: X,
                                            size: E.J.SIZE_60
                                        }),
                                        en(),
                                        H === b.y0.FULL_SIZE && ei()
                                    ]
                                }),
                                er()
                            ]
                        }),
                        H !== b.y0.FULL_SIZE && ei()
                    ]
                });
            }
        })
    });
}
