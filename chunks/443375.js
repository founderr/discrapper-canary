n.d(t, {
    Z: function () {
        return j;
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
    O = n(510659),
    v = n(287954),
    C = n(660579),
    L = n(502762),
    D = n(652853),
    y = n(979038),
    b = n(448980),
    M = n(194811),
    P = n(373826),
    U = n(315324),
    w = n(582123),
    x = n(262210),
    G = n(103479),
    k = n(290274),
    B = n(553375),
    F = n(228168),
    V = n(981631),
    H = n(701488),
    Z = n(689938),
    Y = n(676411);
function j(e) {
    var t;
    let { user: n, currentUser: i, activity: j, application: W, guild: K, channel: z, className: q, onClose: Q, profileGuildId: X } = e,
        { analyticsLocations: $ } = (0, E.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: J } = (0, D.z)(),
        ee = { [Y.fullSize]: J === F.y0.FULL_SIZE },
        { interactionSource: et, interactionSourceId: en } = (0, O.Xo)(),
        er = (0, p.Bq)({
            activity: j,
            user: n
        }),
        ei = (0, m.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, B.nK)({
                user: n,
                activity: j,
                entry: er
            })
        }),
        ea = (0, g.Z)({
            display: 'live',
            user: n,
            activity: j,
            entry: er,
            analyticsLocations: $
        }),
        es = (0, A.Z)({
            userId: n.id,
            onAction: ea
        }),
        eo = (0, N.Z)(j),
        { largeImage: el, smallImage: eu } = (0, f.FO)(j, W),
        ec = (0, s.EQ)(j)
            .when(c.Z, () => ei)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, G.s)({
                            activity: j,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ed = () => {
            let e = (0, l.Z)(j) ? 'crunchyroll' : 'default';
            return null == ec
                ? (0, r.jsx)(h.E, {
                      image: el,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: el,
                      smallImage: eu,
                      size: h.J.SIZE_60,
                      aspectRatio: e,
                      onClick: () => {
                          ea({ action: 'PRESS_IMAGE' }), ec();
                      }
                  });
        },
        e_ = () => {
            var e;
            return j.type === V.IIU.HANG_STATUS
                ? (0, r.jsx)(P.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, T.O8)(j)
                  })
                : (0, d.Z)(j) && null != z
                  ? (0, r.jsxs)('div', {
                        className: Y.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: Y.voiceIcon
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: 'heading-sm/semibold',
                                text: z.name
                            })
                        ]
                    })
                  : (0, c.Z)(j)
                    ? (0, r.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: j.name
                      })
                    : (0, r.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = j.details) && void 0 !== e ? e : j.name
                      });
        },
        eE = () =>
            j.type === V.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(j) && null != K
                  ? (0, r.jsx)(P.Z, {
                        variant: 'text-xs/normal',
                        text: Z.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: K.name }),
                        onClick: () => {
                            (0, S.X)(K.id), ea({ action: 'OPEN_VOICE_GUILD' }), null == Q || Q();
                        }
                    })
                  : (0, c.Z)(j)
                    ? (0, r.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: j.details
                      })
                    : (0, r.jsx)(P.Z, {
                          text: j.state,
                          variant: 'text-xs/normal'
                      }),
        ef = () => {
            var e;
            return j.type === V.IIU.WATCHING
                ? null
                : (0, c.Z)(j)
                  ? eh()
                  : (0, r.jsx)(P.Z, {
                        text: null === (e = j.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eh = () => {
            var e, t, n, i;
            return (null === (e = j.party) || void 0 === e ? void 0 : e.size) == null && j.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: Y.gameState,
                      children: [
                          (0, r.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: j.state
                          }),
                          (0, r.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (i = null == W ? void 0 : W.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(j) && (null === (t = j.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = j.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: Y.gameState,
                        children: [
                            (0, r.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: j.state
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: j.party.size[0],
                                    max: j.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == j.party
                    ? (0, r.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: j.state
                      })
                    : null;
        },
        ep = () => {
            if (!(0, R.Z)(j)) return null;
            let { start: e, end: t } = j.timestamps;
            return (0, r.jsx)(x.Z, {
                start: e,
                end: t
            });
        },
        eI = () =>
            null == ec
                ? (0, r.jsxs)('div', {
                      children: [e_(), eE(), ef()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: Y.clickable,
                      onClick: () => {
                          ea({ action: 'PRESS_TEXT' }), ec();
                      },
                      children: [e_(), eE(), ef()]
                  }),
        em = () =>
            null == K || null == z
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: Y.voiceChannelDivider }),
                          (0, r.jsx)(U.Z, {
                              user: n,
                              guild: K,
                              channel: z,
                              onAction: ea,
                              onClose: Q
                          })
                      ]
                  }),
        eT = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(Y.actions, ee),
                      children: (0, r.jsx)(y.Z, {
                          activity: j,
                          user: n,
                          currentUser: i,
                          onAction: ea,
                          onClose: Q
                      })
                  });
    if (null === J || J === F.y0.CARD) return null;
    let eS = null !== (t = j.application_id) && void 0 !== t ? t : j.name,
        eg = et === F.n_.ACTIVITY && en === eS;
    return (0, r.jsx)(E.Gt, {
        value: $,
        children: (0, r.jsx)(w.Z, {
            user: n,
            onClose: Q,
            children: (e) => {
                let { onAutoDismiss: t } = e;
                return (0, r.jsx)(v.Z, {
                    user: n,
                    guildId: X,
                    profileType: J,
                    sourceId: eS,
                    sourceType: F.n_.ACTIVITY,
                    children: () =>
                        (0, r.jsx)(L.Z.Overlay, {
                            className: a()(Y.card, q, { [Y.hoisted]: eg }),
                            ref: es,
                            children: (0, r.jsxs)(C.Z, {
                                user: n,
                                className: Y.body,
                                interactionSourceId: eS,
                                sourceType: F.n_.ACTIVITY,
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        text: eo.text,
                                        icon: eo.icon,
                                        contextMenu: (0, r.jsx)(k.Z, {
                                            display: 'live',
                                            user: n,
                                            activity: j,
                                            entry: er,
                                            onClose: Q,
                                            onRequestOpen: t
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: Y.body,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: a()(Y.content, ee),
                                                children: [
                                                    !n.bot && ed(),
                                                    (0, r.jsxs)('div', {
                                                        className: Y.details,
                                                        children: [
                                                            eI(),
                                                            !n.bot &&
                                                                (0, r.jsx)(b.Z, {
                                                                    user: n,
                                                                    activity: j,
                                                                    className: Y.badges
                                                                }),
                                                            ep()
                                                        ]
                                                    }),
                                                    J === F.y0.FULL_SIZE && eT()
                                                ]
                                            }),
                                            em()
                                        ]
                                    }),
                                    J !== F.y0.FULL_SIZE && eT()
                                ]
                            })
                        })
                });
            }
        })
    });
}
