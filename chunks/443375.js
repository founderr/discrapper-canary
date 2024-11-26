n.d(t, {
    Z: function () {
        return z;
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
    f = n(100527),
    _ = n(906732),
    p = n(379357),
    h = n(358696),
    m = n(180335),
    g = n(810568),
    E = n(168524),
    v = n(833858),
    I = n(769654),
    T = n(960870),
    b = n(139793),
    S = n(994746),
    y = n(273284),
    A = n(232174),
    N = n(510659),
    C = n(287954),
    R = n(660579),
    O = n(502762),
    D = n(652853),
    L = n(64621),
    x = n(979038),
    w = n(448980),
    P = n(194811),
    M = n(373826),
    k = n(315324),
    U = n(582123),
    B = n(262210),
    G = n(103479),
    Z = n(290274),
    F = n(553375),
    V = n(228168),
    j = n(981631),
    H = n(701488),
    Y = n(388032),
    W = n(518919),
    K = n(249942);
function z(e) {
    var t;
    let { user: n, currentUser: i, activity: z, application: q, guild: Q, channel: X, className: J, onClose: $, profileGuildId: ee } = e,
        { analyticsLocations: et } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: en } = (0, D.z)(),
        er = { [K.fullSize]: en === V.y0.FULL_SIZE },
        { interactionSource: ei, interactionSourceId: ea } = (0, N.Xo)(),
        es = (0, m.Bq)({
            activity: z,
            user: n
        }),
        eo = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, F.nK)({
                user: n,
                activity: z,
                entry: es
            })
        }),
        el = (0, T.Z)({
            display: 'live',
            user: n,
            activity: z,
            entry: es,
            analyticsLocations: et
        }),
        eu = (0, b.Z)({
            userId: n.id,
            onAction: el
        }),
        ec = (0, S.Z)(z),
        { largeImage: ed, smallImage: ef } = (0, p.FO)(z, q),
        e_ = (0, s.EQ)(z)
            .when(c.Z, () => eo)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, G.s)({
                            activity: z,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ep = () => {
            let e = (0, l.Z)(z) ? 'crunchyroll' : 'default';
            return null == e_
                ? (0, r.jsx)(h.E, {
                      image: ed,
                      smallImage: ef,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: ed,
                      smallImage: ef,
                      size: h.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          el({ action: 'PRESS_IMAGE' }), e_(e);
                      }
                  });
        },
        eh = () => {
            var e;
            return z.type === j.IIU.HANG_STATUS
                ? (0, r.jsx)(M.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, v.O8)(z)
                  })
                : (0, d.Z)(z) && null != X
                  ? (0, r.jsxs)('div', {
                        className: K.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: K.voiceIcon
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'heading-sm/semibold',
                                text: X.name
                            })
                        ]
                    })
                  : (0, c.Z)(z)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: z.name
                      })
                    : (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = z.details) && void 0 !== e ? e : z.name
                      });
        },
        em = () =>
            z.type === j.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(z) && null != Q
                  ? (0, r.jsx)(M.Z, {
                        variant: 'text-xs/normal',
                        text: Y.intl.formatToPlainString(Y.t['hq/Qzc'], { guildName: Q.name }),
                        onClick: () => {
                            (0, I.X)(Q.id), el({ action: 'OPEN_VOICE_GUILD' }), null == $ || $();
                        }
                    })
                  : (0, c.Z)(z)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: z.details
                      })
                    : (0, r.jsx)(M.Z, {
                          text: z.state,
                          variant: 'text-xs/normal'
                      }),
        eg = () => {
            var e;
            return z.type === j.IIU.WATCHING
                ? null
                : (0, c.Z)(z)
                  ? eE()
                  : (0, r.jsx)(M.Z, {
                        text: null === (e = z.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eE = () => {
            var e, t, n, i;
            return (null === (e = z.party) || void 0 === e ? void 0 : e.size) == null && z.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: K.gameState,
                      children: [
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: z.state
                          }),
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (i = null == q ? void 0 : q.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(z) && (null === (t = z.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = z.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: K.gameState,
                        children: [
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: z.state
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: Y.intl.formatToPlainString(Y.t['u//9Bw'], {
                                    count: z.party.size[0],
                                    max: z.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == z.party
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: z.state
                      })
                    : null;
        },
        ev = () => {
            if (!(0, A.Z)(z)) return null;
            let { start: e, end: t } = z.timestamps;
            return (0, r.jsx)(B.Z, {
                start: e,
                end: t
            });
        },
        eI = () =>
            null == e_
                ? (0, r.jsxs)('div', {
                      children: [eh(), em(), eg()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: K.clickable,
                      onClick: (e) => {
                          el({ action: 'PRESS_TEXT' }), e_(e);
                      },
                      children: [eh(), em(), eg()]
                  }),
        eT = () =>
            null == Q || null == X
                ? null
                : (0, r.jsx)(k.Z, {
                      user: n,
                      guild: Q,
                      channel: X,
                      onAction: el,
                      onClose: $
                  }),
        eb = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(K.actions, er),
                      children: (0, r.jsx)(x.Z, {
                          activity: z,
                          user: n,
                          currentUser: i,
                          onAction: el,
                          onClose: $
                      })
                  });
    if (null === en) return null;
    let eS = null !== (t = z.application_id) && void 0 !== t ? t : z.name,
        ey = ei === V.n_.ACTIVITY && ea === eS;
    return (0, r.jsx)(_.Gt, {
        value: et,
        children: (0, r.jsx)(L.Z, {
            sourceType: V.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(U.Z, {
                user: n,
                onClose: $,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(C.Z, {
                        user: n,
                        guildId: ee,
                        profileType: en,
                        sourceId: eS,
                        sourceDetails: null == es ? (0, y.Z)(z) : null,
                        entry: es,
                        sourceType: V.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(R.Z, {
                                user: n,
                                className: K.toolbarContainer,
                                interactionSourceId: eS,
                                sourceType: V.n_.ACTIVITY,
                                moreButton: (0, r.jsx)(Z.Z, {
                                    display: 'live',
                                    user: n,
                                    activity: z,
                                    entry: es,
                                    onClose: $,
                                    onRequestOpen: t,
                                    className: W.button
                                }),
                                onShowToolbar: () => el({ action: 'HOVER_ACTIVITY_CARD' }),
                                children: (0, r.jsxs)(O.Z.Overlay, {
                                    className: a()(K.card, J, { [K.hoisted]: ey }),
                                    ref: eu,
                                    children: [
                                        (0, r.jsx)(P.Z, { ...ec }),
                                        (0, r.jsxs)('div', {
                                            className: K.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: a()(K.content, er),
                                                    children: [
                                                        !n.bot && ep(),
                                                        (0, r.jsxs)('div', {
                                                            className: K.details,
                                                            children: [
                                                                eI(),
                                                                !n.bot &&
                                                                    (0, r.jsx)(w.Z, {
                                                                        user: n,
                                                                        activity: z,
                                                                        className: K.badges
                                                                    }),
                                                                ev()
                                                            ]
                                                        }),
                                                        en === V.y0.FULL_SIZE && eb()
                                                    ]
                                                }),
                                                eT()
                                            ]
                                        }),
                                        en !== V.y0.FULL_SIZE && eb()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
