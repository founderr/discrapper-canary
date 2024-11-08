n.d(t, {
    Z: function () {
        return K;
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
    h = n(379357),
    p = n(358696),
    m = n(180335),
    g = n(810568),
    E = n(168524),
    v = n(833858),
    I = n(769654),
    S = n(960870),
    b = n(139793),
    T = n(994746),
    y = n(232174),
    A = n(510659),
    N = n(287954),
    C = n(660579),
    R = n(502762),
    O = n(652853),
    D = n(64621),
    L = n(979038),
    x = n(448980),
    w = n(194811),
    M = n(373826),
    P = n(315324),
    k = n(582123),
    U = n(262210),
    G = n(103479),
    B = n(290274),
    Z = n(553375),
    F = n(228168),
    V = n(981631),
    H = n(701488),
    j = n(388032),
    Y = n(617114),
    W = n(69035);
function K(e) {
    var t;
    let { user: n, currentUser: i, activity: K, application: z, guild: q, channel: Q, className: X, onClose: J, profileGuildId: $ } = e,
        { analyticsLocations: ee } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: et } = (0, O.z)(),
        en = { [W.fullSize]: et === F.y0.FULL_SIZE },
        { interactionSource: er, interactionSourceId: ei } = (0, A.Xo)(),
        ea = (0, m.Bq)({
            activity: K,
            user: n
        }),
        es = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, Z.nK)({
                user: n,
                activity: K,
                entry: ea
            })
        }),
        eo = (0, S.Z)({
            display: 'live',
            user: n,
            activity: K,
            entry: ea,
            analyticsLocations: ee
        }),
        el = (0, b.Z)({
            userId: n.id,
            onAction: eo
        }),
        eu = (0, T.Z)(K),
        { largeImage: ec, smallImage: ed } = (0, h.FO)(K, z),
        ef = (0, s.EQ)(K)
            .when(c.Z, () => es)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, G.s)({
                            activity: K,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        e_ = () => {
            let e = (0, l.Z)(K) ? 'crunchyroll' : 'default';
            return null == ef
                ? (0, r.jsx)(p.E, {
                      image: ec,
                      smallImage: ed,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: ec,
                      smallImage: ed,
                      size: p.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          eo({ action: 'PRESS_IMAGE' }), ef(e);
                      }
                  });
        },
        eh = () => {
            var e;
            return K.type === V.IIU.HANG_STATUS
                ? (0, r.jsx)(M.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, v.O8)(K)
                  })
                : (0, d.Z)(K) && null != Q
                  ? (0, r.jsxs)('div', {
                        className: W.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: W.voiceIcon
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'heading-sm/semibold',
                                text: Q.name
                            })
                        ]
                    })
                  : (0, c.Z)(K)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: K.name
                      })
                    : (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = K.details) && void 0 !== e ? e : K.name
                      });
        },
        ep = () =>
            K.type === V.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(K) && null != q
                  ? (0, r.jsx)(M.Z, {
                        variant: 'text-xs/normal',
                        text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: q.name }),
                        onClick: () => {
                            (0, I.X)(q.id), eo({ action: 'OPEN_VOICE_GUILD' }), null == J || J();
                        }
                    })
                  : (0, c.Z)(K)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: K.details
                      })
                    : (0, r.jsx)(M.Z, {
                          text: K.state,
                          variant: 'text-xs/normal'
                      }),
        em = () => {
            var e;
            return K.type === V.IIU.WATCHING
                ? null
                : (0, c.Z)(K)
                  ? eg()
                  : (0, r.jsx)(M.Z, {
                        text: null === (e = K.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eg = () => {
            var e, t, n, i;
            return (null === (e = K.party) || void 0 === e ? void 0 : e.size) == null && K.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: W.gameState,
                      children: [
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: K.state
                          }),
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (i = null == z ? void 0 : z.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(K) && (null === (t = K.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = K.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: W.gameState,
                        children: [
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: K.state
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                    count: K.party.size[0],
                                    max: K.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == K.party
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: K.state
                      })
                    : null;
        },
        eE = () => {
            if (!(0, y.Z)(K)) return null;
            let { start: e, end: t } = K.timestamps;
            return (0, r.jsx)(U.Z, {
                start: e,
                end: t
            });
        },
        ev = () =>
            null == ef
                ? (0, r.jsxs)('div', {
                      children: [eh(), ep(), em()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: W.clickable,
                      onClick: (e) => {
                          eo({ action: 'PRESS_TEXT' }), ef(e);
                      },
                      children: [eh(), ep(), em()]
                  }),
        eI = () =>
            null == q || null == Q
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: W.voiceChannelDivider }),
                          (0, r.jsx)(P.Z, {
                              user: n,
                              guild: q,
                              channel: Q,
                              onAction: eo,
                              onClose: J
                          })
                      ]
                  }),
        eS = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(W.actions, en),
                      children: (0, r.jsx)(L.Z, {
                          activity: K,
                          user: n,
                          currentUser: i,
                          onAction: eo,
                          onClose: J
                      })
                  });
    if (null === et) return null;
    let eb = null !== (t = K.application_id) && void 0 !== t ? t : K.name,
        eT = er === F.n_.ACTIVITY && ei === eb;
    return (0, r.jsx)(_.Gt, {
        value: ee,
        children: (0, r.jsx)(D.Z, {
            sourceType: F.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(k.Z, {
                user: n,
                onClose: J,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(N.Z, {
                        user: n,
                        guildId: $,
                        profileType: et,
                        sourceId: eb,
                        sourceType: F.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(R.Z.Overlay, {
                                className: a()(W.card, X, { [W.hoisted]: eT }),
                                ref: el,
                                children: (0, r.jsxs)(C.Z, {
                                    user: n,
                                    className: W.body,
                                    interactionSourceId: eb,
                                    sourceType: F.n_.ACTIVITY,
                                    moreButton: (0, r.jsx)(B.Z, {
                                        display: 'live',
                                        user: n,
                                        activity: K,
                                        entry: ea,
                                        onClose: J,
                                        onRequestOpen: t,
                                        className: Y.button
                                    }),
                                    children: [
                                        (0, r.jsx)(w.Z, { ...eu }),
                                        (0, r.jsxs)('div', {
                                            className: W.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: a()(W.content, en),
                                                    children: [
                                                        !n.bot && e_(),
                                                        (0, r.jsxs)('div', {
                                                            className: W.details,
                                                            children: [
                                                                ev(),
                                                                !n.bot &&
                                                                    (0, r.jsx)(x.Z, {
                                                                        user: n,
                                                                        activity: K,
                                                                        className: W.badges
                                                                    }),
                                                                eE()
                                                            ]
                                                        }),
                                                        et === F.y0.FULL_SIZE && eS()
                                                    ]
                                                }),
                                                eI()
                                            ]
                                        }),
                                        et !== F.y0.FULL_SIZE && eS()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
