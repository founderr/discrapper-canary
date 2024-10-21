n.d(t, {
    Z: function () {
        return H;
    }
});
var r = n(200651);
n(192379);
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
    T = n(960870),
    S = n(139793),
    g = n(994746),
    A = n(232174),
    N = n(510659),
    R = n(287954),
    O = n(660579),
    v = n(502762),
    C = n(652853),
    L = n(979038),
    D = n(448980),
    y = n(194811),
    b = n(373826),
    M = n(315324),
    P = n(582123),
    U = n(262210),
    w = n(290274),
    x = n(553375),
    G = n(228168),
    k = n(981631),
    B = n(701488),
    F = n(689938),
    V = n(676411);
function H(e) {
    let { user: t, currentUser: n, activity: i, application: H, guild: Z, channel: Y, className: j, onClose: W, profileGuildId: K } = e,
        { analyticsLocations: z } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: q } = (0, C.z)(),
        Q = { [V.fullSize]: q === G.y0.FULL_SIZE },
        { interactionType: X } = (0, N.Xo)(),
        $ = (0, f.Bq)({
            activity: i,
            user: t
        }),
        J = (0, p.Z)({
            location: 'UserProfileActivityCard',
            source: h.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, x.nK)({
                user: t,
                activity: i,
                entry: $
            })
        }),
        ee = (0, T.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: $,
            analyticsLocations: z
        }),
        et = (0, S.Z)({
            userId: t.id,
            onAction: ee
        }),
        en = (0, g.Z)(i),
        { largeImage: er, smallImage: ei } = (0, _.FO)(i, H),
        ea =
            null == J
                ? void 0
                : () => {
                      ee({ action: 'PRESS_GAME_IMAGE' }), J();
                  },
        es = () => {
            var e;
            return i.type === k.IIU.HANG_STATUS
                ? (0, r.jsx)(b.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, I.O8)(i)
                  })
                : (0, u.Z)(i) && null != Y
                  ? (0, r.jsxs)('div', {
                        className: V.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.VoiceNormalIcon, {
                                size: 'xxs',
                                color: s.tokens.colors.TEXT_NORMAL,
                                className: V.voiceIcon
                            }),
                            (0, r.jsx)(b.Z, {
                                variant: 'heading-sm/semibold',
                                text: Y.name
                            })
                        ]
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(b.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(b.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        eo = () =>
            i.type === k.IIU.HANG_STATUS
                ? null
                : (0, u.Z)(i) && null != Z
                  ? (0, r.jsx)(b.Z, {
                        variant: 'text-xs/normal',
                        text: F.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: Z.name }),
                        onClick: () => {
                            (0, m.X)(Z.id), ee({ action: 'OPEN_VOICE_GUILD' }), null == W || W();
                        }
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(b.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(b.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        el = () => {
            var e;
            return i.type === k.IIU.WATCHING
                ? null
                : (0, l.Z)(i)
                  ? eu()
                  : (0, r.jsx)(b.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        eu = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === B.Zc
                ? (0, r.jsxs)('div', {
                      className: V.gameState,
                      children: [
                          (0, r.jsx)(b.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(b.Z, {
                              variant: 'text-xs/normal',
                              text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == H ? void 0 : H.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, o.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: V.gameState,
                        children: [
                            (0, r.jsx)(b.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(b.Z, {
                                variant: 'text-xs/normal',
                                text: F.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(b.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        ec = () => {
            if (!(0, A.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(U.Z, {
                start: e,
                end: t
            });
        },
        ed = () =>
            null == J
                ? (0, r.jsxs)('div', {
                      className: V.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [es(), eo(), el()]
                          }),
                          !t.bot &&
                              (0, r.jsx)(D.Z, {
                                  user: t,
                                  activity: i,
                                  className: V.badges
                              }),
                          ec()
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: V.details,
                      children: [
                          (0, r.jsxs)(s.Clickable, {
                              className: V.clickable,
                              onClick: () => {
                                  ee({ action: 'OPEN_GAME_PROFILE' }), J(), null == W || W();
                              },
                              children: [es(), eo(), el()]
                          }),
                          (0, r.jsx)(D.Z, {
                              user: t,
                              activity: i,
                              className: V.badges
                          })
                      ]
                  }),
        e_ = () =>
            null == Z || null == Y
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: V.voiceChannelDivider }),
                          (0, r.jsx)(M.Z, {
                              user: t,
                              guild: Z,
                              channel: Y,
                              onAction: ee,
                              onClose: W
                          })
                      ]
                  }),
        eE = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(V.actions, Q),
                      children: (0, r.jsx)(L.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: ee,
                          onClose: W
                      })
                  });
    return null === q || q === G.y0.CARD
        ? null
        : (0, r.jsx)(d.Gt, {
              value: z,
              children: (0, r.jsx)(P.Z, {
                  user: t,
                  onClose: W,
                  children: (e) => {
                      let { onAutoDismiss: n } = e;
                      return (0, r.jsx)(R.Z, {
                          user: t,
                          guildId: K,
                          profileType: q,
                          sourceType: G.n_.ACTIVITY,
                          children: () =>
                              (0, r.jsx)(v.Z.Overlay, {
                                  className: a()(V.card, j, { [V.disabled]: null !== X }),
                                  ref: et,
                                  children: (0, r.jsxs)(O.Z, {
                                      user: t,
                                      className: V.body,
                                      sourceType: G.n_.ACTIVITY,
                                      children: [
                                          (0, r.jsx)(y.Z, {
                                              text: en.text,
                                              icon: en.icon,
                                              contextMenu: (0, r.jsx)(w.Z, {
                                                  display: 'live',
                                                  user: t,
                                                  activity: i,
                                                  entry: $,
                                                  onClose: W,
                                                  onRequestOpen: n
                                              })
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: V.body,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: a()(V.content, Q),
                                                      children: [
                                                          !t.bot &&
                                                              (0, r.jsx)(E.E, {
                                                                  image: er,
                                                                  smallImage: ei,
                                                                  onClick: ea,
                                                                  size: E.J.SIZE_60
                                                              }),
                                                          ed(),
                                                          q === G.y0.FULL_SIZE && eE()
                                                      ]
                                                  }),
                                                  e_()
                                              ]
                                          }),
                                          q !== G.y0.FULL_SIZE && eE()
                                      ]
                                  })
                              })
                      });
                  }
              })
          });
}
