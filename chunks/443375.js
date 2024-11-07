n.d(t, {
    Z: function () {
        return W;
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
    T = n(139793),
    b = n(994746),
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
    Y = n(676411);
function W(e) {
    var t;
    let { user: n, currentUser: i, activity: W, application: K, guild: z, channel: q, className: Q, onClose: X, profileGuildId: J } = e,
        { analyticsLocations: $ } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: ee } = (0, O.z)(),
        et = { [Y.fullSize]: ee === F.y0.FULL_SIZE },
        { interactionSource: en, interactionSourceId: er } = (0, A.Xo)(),
        ei = (0, m.Bq)({
            activity: W,
            user: n
        }),
        ea = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, Z.nK)({
                user: n,
                activity: W,
                entry: ei
            })
        }),
        es = (0, S.Z)({
            display: 'live',
            user: n,
            activity: W,
            entry: ei,
            analyticsLocations: $
        }),
        eo = (0, T.Z)({
            userId: n.id,
            onAction: es
        }),
        el = (0, b.Z)(W),
        { largeImage: eu, smallImage: ec } = (0, h.FO)(W, K),
        ed = (0, s.EQ)(W)
            .when(c.Z, () => ea)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, G.s)({
                            activity: W,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ef = () => {
            let e = (0, l.Z)(W) ? 'crunchyroll' : 'default';
            return null == ed
                ? (0, r.jsx)(p.E, {
                      image: eu,
                      smallImage: ec,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: eu,
                      smallImage: ec,
                      size: p.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          es({ action: 'PRESS_IMAGE' }), ed(e);
                      }
                  });
        },
        e_ = () => {
            var e;
            return W.type === V.IIU.HANG_STATUS
                ? (0, r.jsx)(M.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, v.O8)(W)
                  })
                : (0, d.Z)(W) && null != q
                  ? (0, r.jsxs)('div', {
                        className: Y.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: Y.voiceIcon
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'heading-sm/semibold',
                                text: q.name
                            })
                        ]
                    })
                  : (0, c.Z)(W)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: W.name
                      })
                    : (0, r.jsx)(M.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = W.details) && void 0 !== e ? e : W.name
                      });
        },
        eh = () =>
            W.type === V.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(W) && null != z
                  ? (0, r.jsx)(M.Z, {
                        variant: 'text-xs/normal',
                        text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: z.name }),
                        onClick: () => {
                            (0, I.X)(z.id), es({ action: 'OPEN_VOICE_GUILD' }), null == X || X();
                        }
                    })
                  : (0, c.Z)(W)
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: W.details
                      })
                    : (0, r.jsx)(M.Z, {
                          text: W.state,
                          variant: 'text-xs/normal'
                      }),
        ep = () => {
            var e;
            return W.type === V.IIU.WATCHING
                ? null
                : (0, c.Z)(W)
                  ? em()
                  : (0, r.jsx)(M.Z, {
                        text: null === (e = W.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        em = () => {
            var e, t, n, i;
            return (null === (e = W.party) || void 0 === e ? void 0 : e.size) == null && W.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: Y.gameState,
                      children: [
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: W.state
                          }),
                          (0, r.jsx)(M.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (i = null == K ? void 0 : K.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(W) && (null === (t = W.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = W.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: Y.gameState,
                        children: [
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: W.state
                            }),
                            (0, r.jsx)(M.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                    count: W.party.size[0],
                                    max: W.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == W.party
                    ? (0, r.jsx)(M.Z, {
                          variant: 'text-xs/normal',
                          text: W.state
                      })
                    : null;
        },
        eg = () => {
            if (!(0, y.Z)(W)) return null;
            let { start: e, end: t } = W.timestamps;
            return (0, r.jsx)(U.Z, {
                start: e,
                end: t
            });
        },
        eE = () =>
            null == ed
                ? (0, r.jsxs)('div', {
                      children: [e_(), eh(), ep()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: Y.clickable,
                      onClick: (e) => {
                          es({ action: 'PRESS_TEXT' }), ed(e);
                      },
                      children: [e_(), eh(), ep()]
                  }),
        ev = () =>
            null == z || null == q
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: Y.voiceChannelDivider }),
                          (0, r.jsx)(P.Z, {
                              user: n,
                              guild: z,
                              channel: q,
                              onAction: es,
                              onClose: X
                          })
                      ]
                  }),
        eI = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(Y.actions, et),
                      children: (0, r.jsx)(L.Z, {
                          activity: W,
                          user: n,
                          currentUser: i,
                          onAction: es,
                          onClose: X
                      })
                  });
    if (null === ee) return null;
    let eS = null !== (t = W.application_id) && void 0 !== t ? t : W.name,
        eT = en === F.n_.ACTIVITY && er === eS;
    return (0, r.jsx)(_.Gt, {
        value: $,
        children: (0, r.jsx)(D.Z, {
            sourceType: F.n_.ACTIVITY,
            user: n,
            children: (0, r.jsx)(k.Z, {
                user: n,
                onClose: X,
                children: (e) => {
                    let { onAutoDismiss: t } = e;
                    return (0, r.jsx)(N.Z, {
                        user: n,
                        guildId: J,
                        profileType: ee,
                        sourceId: eS,
                        sourceType: F.n_.ACTIVITY,
                        children: () =>
                            (0, r.jsx)(R.Z.Overlay, {
                                className: a()(Y.card, Q, { [Y.hoisted]: eT }),
                                ref: eo,
                                children: (0, r.jsxs)(C.Z, {
                                    user: n,
                                    className: Y.body,
                                    interactionSourceId: eS,
                                    sourceType: F.n_.ACTIVITY,
                                    children: [
                                        (0, r.jsx)(w.Z, {
                                            ...el,
                                            contextMenu: (0, r.jsx)(B.Z, {
                                                display: 'live',
                                                user: n,
                                                activity: W,
                                                entry: ei,
                                                onClose: X,
                                                onRequestOpen: t
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: Y.body,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: a()(Y.content, et),
                                                    children: [
                                                        !n.bot && ef(),
                                                        (0, r.jsxs)('div', {
                                                            className: Y.details,
                                                            children: [
                                                                eE(),
                                                                !n.bot &&
                                                                    (0, r.jsx)(x.Z, {
                                                                        user: n,
                                                                        activity: W,
                                                                        className: Y.badges
                                                                    }),
                                                                eg()
                                                            ]
                                                        }),
                                                        ee === F.y0.FULL_SIZE && eI()
                                                    ]
                                                }),
                                                ev()
                                            ]
                                        }),
                                        ee !== F.y0.FULL_SIZE && eI()
                                    ]
                                })
                            })
                    });
                }
            })
        })
    });
}
