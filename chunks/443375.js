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
    let { user: t, currentUser: n, activity: i, application: j, guild: W, channel: K, className: z, onClose: q, profileGuildId: Q } = e,
        { analyticsLocations: X } = (0, E.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: $ } = (0, D.z)(),
        J = { [Y.fullSize]: $ === F.y0.FULL_SIZE },
        { interactionSource: ee } = (0, O.Xo)(),
        et = (0, p.Bq)({
            activity: i,
            user: t
        }),
        en = (0, m.Z)({
            location: 'UserProfileActivityCard',
            source: I.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, B.nK)({
                user: t,
                activity: i,
                entry: et
            })
        }),
        er = (0, g.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: et,
            analyticsLocations: X
        }),
        ei = (0, A.Z)({
            userId: t.id,
            onAction: er
        }),
        ea = (0, N.Z)(i),
        { largeImage: es, smallImage: eo } = (0, f.FO)(i, j),
        el = (0, s.EQ)(i)
            .when(c.Z, () => en)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, G.s)({
                            activity: i,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        eu = () => {
            let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
            return null == el
                ? (0, r.jsx)(h.E, {
                      image: es,
                      smallImage: eo,
                      size: h.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(h.E, {
                      image: es,
                      smallImage: eo,
                      size: h.J.SIZE_60,
                      aspectRatio: e,
                      onClick: () => {
                          er({ action: 'PRESS_IMAGE' }), el();
                      }
                  });
        },
        ec = () => {
            var e;
            return i.type === V.IIU.HANG_STATUS
                ? (0, r.jsx)(P.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, T.O8)(i)
                  })
                : (0, d.Z)(i) && null != K
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
                                text: K.name
                            })
                        ]
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(P.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        ed = () =>
            i.type === V.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(i) && null != W
                  ? (0, r.jsx)(P.Z, {
                        variant: 'text-xs/normal',
                        text: Z.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: W.name }),
                        onClick: () => {
                            (0, S.X)(W.id), er({ action: 'OPEN_VOICE_GUILD' }), null == q || q();
                        }
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(P.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        e_ = () => {
            var e;
            return i.type === V.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? eE()
                  : (0, r.jsx)(P.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eE = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === H.Zc
                ? (0, r.jsxs)('div', {
                      className: Y.gameState,
                      children: [
                          (0, r.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(P.Z, {
                              variant: 'text-xs/normal',
                              text: Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == j ? void 0 : j.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: Y.gameState,
                        children: [
                            (0, r.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(P.Z, {
                                variant: 'text-xs/normal',
                                text: Z.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(P.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        ef = () => {
            if (!(0, R.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(x.Z, {
                start: e,
                end: t
            });
        },
        eh = () =>
            null == el
                ? (0, r.jsxs)('div', {
                      children: [ec(), ed(), e_()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: Y.clickable,
                      onClick: () => {
                          er({ action: 'PRESS_TEXT' }), el();
                      },
                      children: [ec(), ed(), e_()]
                  }),
        ep = () =>
            null == W || null == K
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: Y.voiceChannelDivider }),
                          (0, r.jsx)(U.Z, {
                              user: t,
                              guild: W,
                              channel: K,
                              onAction: er,
                              onClose: q
                          })
                      ]
                  }),
        eI = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(Y.actions, J),
                      children: (0, r.jsx)(y.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: er,
                          onClose: q
                      })
                  });
    return null === $ || $ === F.y0.CARD
        ? null
        : (0, r.jsx)(E.Gt, {
              value: X,
              children: (0, r.jsx)(w.Z, {
                  user: t,
                  onClose: q,
                  children: (e) => {
                      let { onAutoDismiss: n } = e;
                      return (0, r.jsx)(v.Z, {
                          user: t,
                          guildId: Q,
                          profileType: $,
                          sourceType: F.n_.ACTIVITY,
                          children: () =>
                              (0, r.jsx)(L.Z.Overlay, {
                                  className: a()(Y.card, z, { [Y.hoisted]: ee === F.n_.ACTIVITY }),
                                  ref: ei,
                                  children: (0, r.jsxs)(C.Z, {
                                      user: t,
                                      className: Y.body,
                                      sourceType: F.n_.ACTIVITY,
                                      children: [
                                          (0, r.jsx)(M.Z, {
                                              text: ea.text,
                                              icon: ea.icon,
                                              contextMenu: (0, r.jsx)(k.Z, {
                                                  display: 'live',
                                                  user: t,
                                                  activity: i,
                                                  entry: et,
                                                  onClose: q,
                                                  onRequestOpen: n
                                              })
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: Y.body,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: a()(Y.content, J),
                                                      children: [
                                                          !t.bot && eu(),
                                                          (0, r.jsxs)('div', {
                                                              className: Y.details,
                                                              children: [
                                                                  eh(),
                                                                  !t.bot &&
                                                                      (0, r.jsx)(b.Z, {
                                                                          user: t,
                                                                          activity: i,
                                                                          className: Y.badges
                                                                      }),
                                                                  ef()
                                                              ]
                                                          }),
                                                          $ === F.y0.FULL_SIZE && eI()
                                                      ]
                                                  }),
                                                  ep()
                                              ]
                                          }),
                                          $ !== F.y0.FULL_SIZE && eI()
                                      ]
                                  })
                              })
                      });
                  }
              })
          });
}
