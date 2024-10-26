n.d(t, {
    Z: function () {
        return H;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(481060),
    l = n(394821),
    u = n(841784),
    c = n(833664),
    d = n(420660),
    _ = n(100527),
    E = n(906732),
    f = n(379357),
    h = n(358696),
    p = n(180335),
    I = n(810568),
    m = n(168524),
    T = n(833858),
    S = n(769654),
    g = n(960870),
    A = n(139793),
    N = n(994746),
    R = n(232174),
    O = n(502762),
    v = n(652853),
    C = n(979038),
    L = n(448980),
    D = n(194811),
    y = n(373826),
    b = n(315324),
    M = n(582123),
    P = n(262210),
    U = n(103479),
    w = n(290274),
    x = n(553375),
    G = n(228168),
    k = n(981631),
    B = n(701488),
    F = n(689938),
    V = n(676411);
function H(e) {
    let { user: t, currentUser: n, activity: i, application: H, guild: Z, channel: Y, className: j, onClose: W } = e,
        { analyticsLocations: K } = (0, E.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: z } = (0, v.z)(),
        q = { [V.fullSize]: z === G.y0.FULL_SIZE },
        Q = (0, p.Bq)({
            activity: i,
            user: t
        }),
        X = (0, m.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, x.nK)({
                user: t,
                activity: i,
                entry: Q
            })
        }),
        $ = (0, g.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: Q,
            analyticsLocations: K
        }),
        J = (0, A.Z)({
            userId: t.id,
            onAction: $
        }),
        ee = (0, N.Z)(i),
        { largeImage: et, smallImage: en } = (0, f.FO)(i, H),
        er = (0, s.EQ)(i)
            .when(c.Z, () => X)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, U.s)({
                            activity: i,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ei = () => {
            let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
            return null == er
                ? (0, r.jsx)(h.E, {
                      image: et,
                      smallImage: en,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: et,
                      smallImage: en,
                      size: h.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          $({ action: 'PRESS_IMAGE' }), er(e);
                      }
                  });
        },
        ea = () => {
            var e;
            return i.type === k.IIU.HANG_STATUS
                ? (0, r.jsx)(y.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, T.O8)(i)
                  })
                : (0, d.Z)(i) && null != Y
                  ? (0, r.jsxs)('div', {
                        className: V.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: V.voiceIcon
                            }),
                            (0, r.jsx)(y.Z, {
                                variant: 'heading-sm/semibold',
                                text: Y.name
                            })
                        ]
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(y.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(y.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        es = () =>
            i.type === k.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(i) && null != Z
                  ? (0, r.jsx)(y.Z, {
                        variant: 'text-xs/normal',
                        text: F.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: Z.name }),
                        onClick: () => {
                            (0, S.X)(Z.id), $({ action: 'OPEN_VOICE_GUILD' }), null == W || W();
                        }
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(y.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(y.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        eo = () => {
            var e;
            return i.type === k.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? el()
                  : (0, r.jsx)(y.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        el = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === B.Zc
                ? (0, r.jsxs)('div', {
                      className: V.gameState,
                      children: [
                          (0, r.jsx)(y.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(y.Z, {
                              variant: 'text-xs/normal',
                              text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: V.gameState,
                        children: [
                            (0, r.jsx)(y.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(y.Z, {
                                variant: 'text-xs/normal',
                                text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(y.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        eu = () => {
            if (!(0, R.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(P.Z, {
                start: e,
                end: t
            });
        },
        ec = () =>
            null == er
                ? (0, r.jsxs)('div', {
                      children: [ea(), es(), eo()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: V.clickable,
                      onClick: (e) => {
                          $({ action: 'PRESS_TEXT' }), er(e);
                      },
                      children: [ea(), es(), eo()]
                  }),
        ed = () =>
            null == Z || null == Y
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: V.voiceChannelDivider }),
                          (0, r.jsx)(b.Z, {
                              user: t,
                              guild: Z,
                              channel: Y,
                              onAction: $,
                              onClose: W
                          })
                      ]
                  }),
        e_ = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(V.actions, q),
                      children: (0, r.jsx)(C.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: $,
                          onClose: W
                      })
                  });
    return (0, r.jsx)(E.Gt, {
        value: K,
        children: (0, r.jsx)(M.Z, {
            user: t,
            onClose: W,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(O.Z.Overlay, {
                    className: a()(V.card, j),
                    ref: J,
                    children: [
                        (0, r.jsx)(D.Z, {
                            ...ee,
                            contextMenu: (0, r.jsx)(w.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: Q,
                                onClose: W,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: V.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(V.content, q),
                                    children: [
                                        !t.bot && ei(),
                                        (0, r.jsxs)('div', {
                                            className: V.details,
                                            children: [
                                                ec(),
                                                !t.bot &&
                                                    (0, r.jsx)(L.Z, {
                                                        user: t,
                                                        activity: i,
                                                        className: V.badges
                                                    }),
                                                eu()
                                            ]
                                        }),
                                        z === G.y0.FULL_SIZE && e_()
                                    ]
                                }),
                                ed()
                            ]
                        }),
                        z !== G.y0.FULL_SIZE && e_()
                    ]
                });
            }
        })
    });
}
