n.d(t, {
    Z: function () {
        return Y;
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
    p = n(499254),
    h = n(827498),
    m = n(541716),
    g = n(379357),
    E = n(358696),
    v = n(649700),
    I = n(810568),
    T = n(168524),
    b = n(833858),
    S = n(769654),
    y = n(960870),
    A = n(139793),
    N = n(994746),
    C = n(232174),
    R = n(652853),
    O = n(979038),
    D = n(448980),
    L = n(336383),
    x = n(194811),
    w = n(373826),
    P = n(315324),
    M = n(582123),
    k = n(262210),
    U = n(103479),
    B = n(670451),
    G = n(553375),
    Z = n(228168),
    F = n(981631),
    V = n(701488),
    j = n(388032),
    H = n(249942);
function Y(e) {
    let { user: t, currentUser: n, activity: i, application: Y, guild: W, channel: K, className: z, onClose: q } = e,
        { analyticsLocations: Q } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: X } = (0, R.z)(),
        J = { [H.fullSize]: X === Z.y0.FULL_SIZE },
        $ = (0, v.Z)({
            activity: i,
            user: t
        }),
        ee = (0, T.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, G.nK)({
                user: t,
                activity: i,
                entry: $
            })
        }),
        et = (0, y.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: $,
            analyticsLocations: Q
        }),
        en = (0, A.Z)({
            userId: t.id,
            onAction: et
        }),
        er = () => {
            null != Y && (null == q || q(), p.__(h._b.TEXT, m.I.NORMAL, { applicationId: Y.id }));
        },
        ei = (0, N.Z)(i),
        { largeImage: ea, smallImage: es } = (0, g.FO)(i, Y),
        eo = (0, s.EQ)(i)
            .when(u.Z, () => (null != Y ? er : void 0))
            .when(c.Z, () => ee)
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
        el = () => {
            let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
            return null == eo
                ? (0, r.jsx)(E.E, {
                      image: ea,
                      smallImage: es,
                      size: E.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(E.E, {
                      image: ea,
                      smallImage: es,
                      size: E.J.SIZE_60,
                      className: H.clickableImage,
                      aspectRatio: e,
                      onClick: (e) => {
                          et({ action: 'PRESS_IMAGE' }), eo(e);
                      }
                  });
        },
        eu = () => {
            var e;
            return i.type === F.IIU.HANG_STATUS
                ? (0, r.jsx)(w.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, b.O8)(i)
                  })
                : (0, d.Z)(i) && null != K
                  ? (0, r.jsxs)('div', {
                        className: H.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: H.voiceIcon
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'heading-sm/semibold',
                                text: K.name
                            })
                        ]
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(w.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(w.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        ec = () =>
            i.type === F.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(i) && null != W
                  ? (0, r.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: W.name }),
                        onClick: () => {
                            (0, S.X)(W.id), et({ action: 'OPEN_VOICE_GUILD' }), null == q || q();
                        }
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(w.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        ed = () => {
            var e;
            return i.type === F.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? ef()
                  : (0, r.jsx)(w.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ef = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === V.Zc
                ? (0, r.jsxs)('div', {
                      className: H.gameState,
                      children: [
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (a = null == Y ? void 0 : Y.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: H.gameState,
                        children: [
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        e_ = () => {
            if (!(0, C.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t
            });
        },
        ep = () =>
            null == eo
                ? (0, r.jsxs)('div', {
                      children: [eu(), ec(), ed()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: H.clickableText,
                      onClick: (e) => {
                          et({ action: 'PRESS_TEXT' }), eo(e);
                      },
                      children: [eu(), ec(), ed()]
                  }),
        eh = () =>
            null == W || null == K
                ? null
                : (0, r.jsx)(P.Z, {
                      user: t,
                      guild: W,
                      channel: K,
                      onAction: et,
                      onClose: q
                  }),
        em = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(H.actions, J),
                      children: (0, r.jsx)(O.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: et,
                          onClose: q
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: Q,
        children: (0, r.jsx)(M.Z, {
            user: t,
            onClose: q,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(L.Z, {
                    ref: en,
                    className: a()(H.card, z),
                    onAction: et,
                    onClose: q,
                    children: [
                        (0, r.jsx)(x.Z, {
                            ...ei,
                            contextMenu: (0, r.jsx)(B.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: $,
                                onClose: q,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: H.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(H.content, J),
                                    children: [
                                        !t.bot && el(),
                                        (0, r.jsxs)('div', {
                                            className: H.details,
                                            children: [
                                                ep(),
                                                !t.bot &&
                                                    (0, r.jsx)(D.Z, {
                                                        user: t,
                                                        activity: i,
                                                        className: H.badges
                                                    }),
                                                e_()
                                            ]
                                        }),
                                        X === Z.y0.FULL_SIZE && em()
                                    ]
                                }),
                                eh()
                            ]
                        }),
                        X !== Z.y0.FULL_SIZE && em()
                    ]
                });
            }
        })
    });
}
