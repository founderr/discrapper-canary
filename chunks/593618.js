n.d(t, {
    K: function () {
        return H;
    },
    Z: function () {
        return Y;
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
    p = n(750881),
    h = n(666188),
    m = n(372769),
    g = n(523751),
    E = n(246364),
    v = n(746916),
    b = n(965638),
    I = n(160404),
    S = n(777861),
    T = n(565799),
    y = n(501655),
    A = n(517334),
    N = n(344185),
    C = n(199902),
    R = n(77498),
    O = n(984933),
    D = n(158776),
    L = n(699516),
    x = n(9156),
    w = n(594174),
    M = n(938475),
    P = n(510601),
    k = n(981631),
    U = n(388032),
    B = n(516126),
    G = n(64056);
function Z(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: B.row,
              children: [
                  (0, r.jsx)(e, {
                      className: B.activityIcon,
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
function F(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: U.intl.string(U.t.fpKdS0)
          })
        : (0, r.jsx)(S.Z, {
              muteConfig: t,
              className: n
          });
}
function V(e) {
    var t, n, a;
    let { guild: o } = e,
        h = o.id,
        {
            voiceUsersToShow: m,
            stageSpeakers: g,
            numStageListeners: E,
            streamUsersToShow: v,
            embeddedActivitiesUsers: b,
            gameUsers: I,
            shouldShowGameBadge: S
        } = (function (e) {
            let t = e.id,
                n = (0, u.Wu)(
                    [O.ZP, N.Z],
                    () => {
                        let e = O.ZP.getChannels(t)
                            [O.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === k.d4z.GUILD_VOICE;
                            })
                            .map((e) => {
                                let { channel: t } = e;
                                return t.id;
                            });
                        return [...e, ...Object.values(N.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
                    },
                    [t]
                ),
                r = (0, A.ZP)(t),
                a = i.useMemo(() => r.map((e) => e.id), [r]),
                s = (0, u.e7)([M.ZP], () => M.ZP.getVoiceStates(t), [t]),
                o = (0, u.Wu)([L.Z], () => L.Z.getBlockedIDs()),
                { enabled: c } = (0, p.bA)('guild-tooltip'),
                f = l().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null !== (n = s[t]) && void 0 !== n ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return c ? (0, _.Qj)(r, o) : r;
                }),
                h = (0, u.Wu)([T.Z], () =>
                    l().flatMap(a, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = T.Z.getMutableParticipants(t, y.pV.SPEAKER)
                            .filter((e) => e.type === y.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return c ? (0, _.Qj)(n, o) : n;
                    })
                ),
                m = (0, u.e7)([T.Z], () => {
                    let e = 0;
                    for (let t of a) e += T.Z.getParticipantCount(t, y.pV.AUDIENCE);
                    return e;
                }),
                g = (0, u.Wu)(
                    [C.Z],
                    () => {
                        let e = C.Z.getAllApplicationStreams()
                            .filter((e) => e.guildId === t)
                            .map((e) => e.ownerId);
                        return c ? (0, _.$m)(e, o) : e;
                    },
                    [c, o, t]
                ),
                E = (0, u.Wu)([D.Z, R.Z], () => {
                    let e = f.filter((e) => D.Z.getActivities(e.id, t).some((e) => (null == e ? void 0 : e.application_id) != null && null != R.Z.getDetectableGame(null == e ? void 0 : e.application_id)));
                    return c ? (0, _.Qj)(e, o) : e;
                }),
                v = (0, P.kM)('Guild Tooltip', !1),
                b = v ? E.map((e) => e.id) : [],
                I = (0, u.Wu)(
                    [d.ZP],
                    () => {
                        let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                        return c ? (0, _.$m)(e, o) : e;
                    },
                    [t, c, o]
                ),
                S = (0, u.Wu)(
                    [w.default],
                    () => {
                        let e = I.map((e) => w.default.getUser(e));
                        return c ? (0, _.Qj)(e) : e;
                    },
                    [c, I]
                ),
                x = (0, u.Wu)([w.default], () => g.map((e) => w.default.getUser(e)), [g]),
                U = f.filter((e) => !g.includes(e.id) && !I.includes(e.id) && !b.includes(e.id)),
                B = c ? (0, _.Qj)(U) : U,
                G = x.filter((e) => null != e && !I.includes(e.id)),
                Z = h.length > 0 || U.length > 0 || G.length > 0 || S.length > 0;
            return {
                voiceUsersToShow: B,
                stageSpeakers: h,
                numStageListeners: m,
                streamUsersToShow: G,
                embeddedActivitiesUsers: S,
                gameUsers: E,
                shouldShowGameBadge: v,
                hasActivity: Z
            };
        })(o),
        U = Z(c.GameControllerIcon, I, h),
        G = Z(c.VoiceNormalIcon, m, h);
    let V =
            ((t = h),
            (n = g),
            (a = E),
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: B.row,
                      children: [
                          (0, r.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: B.activityIcon
                          }),
                          (0, r.jsx)(f.Z, {
                              guildId: t,
                              users: n,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: B.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: B.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/normal',
                                      children: a
                                  })
                              ]
                          })
                      ]
                  })),
        j = Z(c.ScreenArrowIcon, v, h),
        H = Z(c.ActivitiesIcon, b, h),
        { isMuted: Y, muteConfig: W } = (0, u.cj)(
            [x.ZP],
            () => ({
                isMuted: x.ZP.isMuted(h),
                muteConfig: x.ZP.getMuteConfig(h)
            }),
            [h]
        );
    return (
        null != U && P.ZP.trackExposure({ location: 'Guild Tooltip' }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                V,
                G,
                j,
                S && U,
                H,
                Y
                    ? (0, r.jsx)(F, {
                          muteConfig: W,
                          className: s()(B.muteText, { [B.muteTextWithActivity]: null != G || null != j })
                      })
                    : null
            ]
        })
    );
}
function j(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(c.Text, {
        className: B.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: (function (e) {
            switch (e) {
                case E.wB.SUBMITTED:
                    return U.intl.string(U.t['9KFC9/']);
                case E.wB.REJECTED:
                    return U.intl.string(U.t['TQY/RU']);
                case E.wB.APPROVED:
                    return U.intl.string(U.t.WXHcq6);
                default:
                    return U.intl.string(U.t.fjHFCw);
            }
        })(t)
    });
}
function H(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, h.Z)(t),
        a = (0, v.E)(t),
        o = null != a ? (0, r.jsx)(j, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(V, { guild: t }) : null,
        d = (0, u.e7)([I.Z], () => I.Z.isViewingRoles(t.id)),
        f = (0, b.I)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(B.row, B.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              className: B.rowIconV2
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: B.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: s()(B.guildNameText, { [B.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            f
                ? (0, r.jsx)(c.Text, {
                      className: B.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: U.intl.string(U.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(c.Text, {
                      className: B.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: U.intl.string(U.t['5LwN8/'])
                  })
                : null != o
                  ? o
                  : l
        ]
    });
}
function Y(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0 } = e;
    return (0, r.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(H, {
                  guild: t,
                  includeActivity: o
              }),
        'aria-label': a,
        tooltipClassName: G.listItemTooltip,
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
