n.d(t, {
    K: function () {
        return q;
    },
    Z: function () {
        return Q;
    }
}),
    n(390547),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(317381),
    f = n(884338),
    _ = n(470883),
    h = n(750881),
    p = n(666188),
    m = n(372769),
    g = n(523751),
    E = n(246364),
    v = n(746916),
    I = n(965638),
    S = n(160404),
    b = n(41776),
    T = n(777861),
    y = n(565799),
    A = n(501655),
    N = n(517334),
    C = n(344185),
    R = n(199902),
    O = n(77498),
    D = n(984933),
    L = n(607744),
    x = n(158776),
    w = n(699516),
    M = n(9156),
    P = n(594174),
    k = n(938475),
    U = n(510601),
    G = n(59688),
    B = n(456774),
    Z = n(718582),
    F = n(981631),
    V = n(388032),
    H = n(479315),
    j = n(455491);
function Y(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: H.row,
              children: [
                  (0, r.jsx)(e, {
                      className: H.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(f.Z, {
                      guildId: n,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function W(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: V.intl.string(V.t.fpKdS0)
          })
        : (0, r.jsx)(T.Z, {
              muteConfig: t,
              className: n
          });
}
function K(e) {
    var t, n, a;
    let { guild: o } = e,
        p = o.id,
        {
            voiceUsersToShow: m,
            stageSpeakers: g,
            numStageListeners: E,
            streamUsersToShow: v,
            embeddedActivitiesUsers: I,
            gameUsers: S,
            shouldShowGameBadge: b
        } = (function (e) {
            let t = e.id,
                n = (0, u.Wu)(
                    [D.ZP, C.Z],
                    () => {
                        let e = D.ZP.getChannels(t)
                            [D.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === F.d4z.GUILD_VOICE;
                            })
                            .map((e) => {
                                let { channel: t } = e;
                                return t.id;
                            });
                        return [...e, ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
                    },
                    [t]
                ),
                r = (0, N.ZP)(t),
                a = i.useMemo(() => r.map((e) => e.id), [r]),
                s = (0, u.e7)([k.ZP], () => k.ZP.getVoiceStates(t), [t]),
                o = (0, u.Wu)([w.Z], () => w.Z.getBlockedIDs()),
                { enabled: c } = (0, h.bA)('guild-tooltip'),
                f = l().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null !== (n = s[t]) && void 0 !== n ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return c ? (0, _.Qj)(r, o) : r;
                }),
                p = (0, u.Wu)([y.Z], () =>
                    l().flatMap(a, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = y.Z.getMutableParticipants(t, A.pV.SPEAKER)
                            .filter((e) => e.type === A.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return c ? (0, _.Qj)(n, o) : n;
                    })
                ),
                m = (0, u.e7)([y.Z], () => {
                    let e = 0;
                    for (let t of a) e += y.Z.getParticipantCount(t, A.pV.AUDIENCE);
                    return e;
                }),
                g = (0, u.Wu)(
                    [R.Z],
                    () => {
                        let e = R.Z.getAllApplicationStreams()
                            .filter((e) => e.guildId === t)
                            .map((e) => e.ownerId);
                        return c ? (0, _.$m)(e, o) : e;
                    },
                    [c, o, t]
                ),
                E = (0, u.Wu)([x.Z, O.Z], () => {
                    let e = f.filter((e) => x.Z.getActivities(e.id, t).some((e) => (null == e ? void 0 : e.application_id) != null && null != O.Z.getDetectableGame(null == e ? void 0 : e.application_id)));
                    return c ? (0, _.Qj)(e, o) : e;
                }),
                v = (0, U.kM)('Guild Tooltip', !1),
                I = v ? E.map((e) => e.id) : [],
                S = (0, u.Wu)(
                    [d.ZP],
                    () => {
                        let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                        return c ? (0, _.$m)(e, o) : e;
                    },
                    [t, c, o]
                ),
                b = (0, u.Wu)(
                    [P.default],
                    () => {
                        let e = S.map((e) => P.default.getUser(e));
                        return c ? (0, _.Qj)(e) : e;
                    },
                    [c, S]
                ),
                T = (0, u.Wu)([P.default], () => g.map((e) => P.default.getUser(e)), [g]),
                L = f.filter((e) => !g.includes(e.id) && !S.includes(e.id) && !I.includes(e.id)),
                M = c ? (0, _.Qj)(L) : L,
                G = T.filter((e) => null != e && !S.includes(e.id)),
                B = p.length > 0 || L.length > 0 || G.length > 0 || b.length > 0;
            return {
                voiceUsersToShow: M,
                stageSpeakers: p,
                numStageListeners: m,
                streamUsersToShow: G,
                embeddedActivitiesUsers: b,
                gameUsers: E,
                shouldShowGameBadge: v,
                hasActivity: B
            };
        })(o),
        T = Y(c.GameControllerIcon, S, p),
        L = Y(c.VoiceNormalIcon, m, p);
    let G =
            ((t = p),
            (n = g),
            (a = E),
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: H.row,
                      children: [
                          (0, r.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: H.activityIcon
                          }),
                          (0, r.jsx)(f.Z, {
                              guildId: t,
                              users: n,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: H.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: H.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/normal',
                                      children: a
                                  })
                              ]
                          })
                      ]
                  })),
        B = Y(c.ScreenArrowIcon, v, p),
        Z = Y(c.ActivitiesIcon, I, p),
        { isMuted: V, muteConfig: j } = (0, u.cj)(
            [M.ZP],
            () => ({
                isMuted: M.ZP.isMuted(p),
                muteConfig: M.ZP.getMuteConfig(p)
            }),
            [p]
        );
    return (
        null != T && U.ZP.trackExposure({ location: 'Guild Tooltip' }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                G,
                L,
                B,
                b && T,
                Z,
                V
                    ? (0, r.jsx)(W, {
                          muteConfig: j,
                          className: s()(H.muteText, { [H.muteTextWithActivity]: null != L || null != B })
                      })
                    : null
            ]
        })
    );
}
function z(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(c.Text, {
        className: H.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: (function (e) {
            switch (e) {
                case E.wB.SUBMITTED:
                    return V.intl.string(V.t['9KFC9/']);
                case E.wB.REJECTED:
                    return V.intl.string(V.t['TQY/RU']);
                case E.wB.APPROVED:
                    return V.intl.string(V.t.WXHcq6);
                default:
                    return V.intl.string(V.t.fjHFCw);
            }
        })(t)
    });
}
function q(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, p.Z)(t),
        a = (0, v.E)(t),
        o = null != a ? (0, r.jsx)(z, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(K, { guild: t }) : null,
        d = (0, u.e7)([S.Z], () => S.Z.isViewingRoles(t.id)),
        f = (0, I.I)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(H.row, H.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              className: H.rowIconV2
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: H.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: s()(H.guildNameText, { [H.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            f
                ? (0, r.jsx)(c.Text, {
                      className: H.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: V.intl.string(V.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(c.Text, {
                      className: H.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: V.intl.string(V.t['5LwN8/'])
                  })
                : null != o
                  ? o
                  : l
        ]
    });
}
function Q(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0, isDragging: l } = e,
        d = (0, G.o)('guilds_bar', !1),
        [f, _] = i.useState(!1),
        h = (0, Z.V1)(t),
        { isUserLurking: p, isUnverifiedAccount: m } = (0, u.cj)([b.Z, L.Z], () => {
            let e = b.Z.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !L.Z.getCheck(t.id).canChat
            };
        }),
        g = i.useMemo(() => !p && !m && o && h.length > 0, [p, m, o, h.length]),
        E = () => {
            g && G.Z.trackExposure({ location: 'guild_tooltip' });
        },
        v = () => {
            _(!0), E();
        };
    return g && d
        ? (0, r.jsx)('div', {
              onMouseEnter: v,
              onMouseLeave: () => _(!1),
              onFocus: v,
              onBlur: () => _(!1),
              children: (0, r.jsx)(c.Popout, {
                  position: 'right',
                  renderPopout: (e) => {
                      var n;
                      return (0, r.jsx)(B.Z, {
                          guild: t,
                          closePopout: () => _(!1),
                          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
                      });
                  },
                  spacing: 0,
                  onRequestClose: () => _(!1),
                  shouldShow: !l && f,
                  children: (e) =>
                      (0, r.jsx)('div', {
                          ...e,
                          children: s
                      })
              })
          })
        : (0, r.jsx)(c.Tooltip, {
              hideOnClick: !0,
              spacing: 20,
              position: 'right',
              text: n
                  ? null
                  : (0, r.jsx)(q, {
                        guild: t,
                        includeActivity: o
                    }),
              'aria-label': a,
              onTooltipShow: E,
              tooltipClassName: j.listItemTooltip,
              children: (e) => {
                  let { onFocus: t, onBlur: n, ...a } = e;
                  return (0, r.jsx)('div', {
                      onFocus: t,
                      onBlur: n,
                      children: i.cloneElement(i.Children.only(s), { ...a })
                  });
              }
          });
}
