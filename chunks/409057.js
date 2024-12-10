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
    M = n(262210),
    k = n(103479),
    U = n(670451),
    B = n(553375),
    G = n(228168),
    Z = n(981631),
    F = n(701488),
    V = n(388032),
    j = n(249942);
function H(e) {
    let { user: t, currentUser: n, activity: i, application: H, guild: Y, channel: W, className: K, onClose: z } = e,
        { analyticsLocations: q } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: Q } = (0, R.z)(),
        X = { [j.fullSize]: Q === G.y0.FULL_SIZE },
        J = (0, v.Z)({
            activity: i,
            user: t
        }),
        $ = (0, T.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, B.nK)({
                user: t,
                activity: i,
                entry: J
            })
        }),
        ee = (0, y.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: J,
            analyticsLocations: q
        }),
        et = (0, A.Z)({
            userId: t.id,
            onAction: ee
        }),
        en = () => {
            null != H && (null == z || z(), p.__(h._b.TEXT, m.I.NORMAL, { applicationId: H.id }));
        },
        er = (0, N.Z)(i),
        { largeImage: ei, smallImage: ea } = (0, g.FO)(i, H),
        es = (0, s.EQ)(i)
            .when(u.Z, () => (null != H ? en : void 0))
            .when(c.Z, () => $)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, k.s)({
                            activity: i,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        eo = () => {
            var e;
            return i.type === Z.IIU.HANG_STATUS
                ? (0, r.jsx)(w.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, b.O8)(i)
                  })
                : (0, d.Z)(i) && null != W
                  ? (0, r.jsxs)('div', {
                        className: j.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: j.voiceIcon
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'heading-sm/semibold',
                                text: W.name
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
        el = () =>
            i.type === Z.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(i) && null != Y
                  ? (0, r.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: V.intl.formatToPlainString(V.t['hq/Qzc'], { guildName: Y.name }),
                        onClick: () => {
                            (0, S.X)(Y.id), ee({ action: 'OPEN_VOICE_GUILD' }), null == z || z();
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
        eu = () => {
            var e;
            return i.type === Z.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? ec()
                  : (0, r.jsx)(w.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ec = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === F.Zc
                ? (0, r.jsxs)('div', {
                      className: j.gameState,
                      children: [
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: V.intl.formatToPlainString(V.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (a = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: j.gameState,
                        children: [
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: V.intl.formatToPlainString(V.t['u//9Bw'], {
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
        ed = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(j.actions, X),
                      children: (0, r.jsx)(O.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: ee,
                          onClose: z
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: q,
        children: (0, r.jsxs)(L.Z, {
            ref: et,
            className: a()(j.card, K),
            onAction: ee,
            onClose: z,
            children: [
                (0, r.jsx)(x.Z, {
                    ...er,
                    contextMenu: (0, r.jsx)(U.Z, {
                        display: 'live',
                        user: t,
                        activity: i,
                        entry: J,
                        onClose: z
                    })
                }),
                (0, r.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(j.content, X),
                            children: [
                                !t.bot &&
                                    (() => {
                                        let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
                                        return null == es
                                            ? (0, r.jsx)(E.E, {
                                                  image: ei,
                                                  smallImage: ea,
                                                  size: E.J.SIZE_60,
                                                  aspectRatio: e
                                              })
                                            : (0, r.jsx)(E.E, {
                                                  image: ei,
                                                  smallImage: ea,
                                                  size: E.J.SIZE_60,
                                                  className: j.clickableImage,
                                                  aspectRatio: e,
                                                  onClick: (e) => {
                                                      ee({ action: 'PRESS_IMAGE' }), es(e);
                                                  }
                                              });
                                    })(),
                                (0, r.jsxs)('div', {
                                    className: j.details,
                                    children: [
                                        null == es
                                            ? (0, r.jsxs)('div', {
                                                  children: [eo(), el(), eu()]
                                              })
                                            : (0, r.jsxs)(o.Clickable, {
                                                  className: j.clickableText,
                                                  onClick: (e) => {
                                                      ee({ action: 'PRESS_TEXT' }), es(e);
                                                  },
                                                  children: [eo(), el(), eu()]
                                              }),
                                        !t.bot &&
                                            (0, r.jsx)(D.Z, {
                                                user: t,
                                                activity: i,
                                                className: j.badges
                                            }),
                                        (() => {
                                            if (!(0, C.Z)(i)) return null;
                                            let { start: e, end: t } = i.timestamps;
                                            return (0, r.jsx)(M.Z, {
                                                start: e,
                                                end: t
                                            });
                                        })()
                                    ]
                                }),
                                Q === G.y0.FULL_SIZE && ed()
                            ]
                        }),
                        null == Y || null == W
                            ? null
                            : (0, r.jsx)(P.Z, {
                                  user: t,
                                  guild: Y,
                                  channel: W,
                                  onAction: ee,
                                  onClose: z
                              })
                    ]
                }),
                Q !== G.y0.FULL_SIZE && ed()
            ]
        })
    });
}
