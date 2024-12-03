n.d(t, {
    K: function () {
        return F;
    },
    Z: function () {
        return V;
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
    I = n(965638),
    T = n(160404),
    b = n(777861),
    S = n(565799),
    y = n(501655),
    A = n(517334),
    N = n(344185),
    C = n(199902),
    R = n(984933),
    O = n(699516),
    D = n(9156),
    L = n(594174),
    x = n(938475),
    w = n(981631),
    P = n(388032),
    M = n(782451),
    k = n(572488);
function U(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: M.row,
              children: [
                  (0, r.jsx)(e, {
                      className: M.activityIcon,
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
function B(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: P.intl.string(P.t.fpKdS0)
          })
        : (0, r.jsx)(b.Z, {
              muteConfig: t,
              className: n
          });
}
function G(e) {
    var t, n, a;
    let { guild: o } = e,
        h = o.id,
        {
            voiceUsersToShow: m,
            stageSpeakers: g,
            numStageListeners: E,
            streamUsersToShow: v,
            embeddedActivitiesUsers: I
        } = (function (e) {
            let t = e.id,
                n = (0, u.Wu)(
                    [R.ZP, N.Z],
                    () => {
                        let e = R.ZP.getChannels(t)
                            [R.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === w.d4z.GUILD_VOICE;
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
                s = (0, u.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
                o = (0, u.Wu)([O.Z], () => O.Z.getBlockedOrIgnoredIDs()),
                { enabled: c } = (0, p.bA)('guild-tooltip'),
                f = l().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null !== (n = s[t]) && void 0 !== n ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return c ? (0, _.dq)(r, o) : r;
                }),
                h = (0, u.Wu)([S.Z], () =>
                    l().flatMap(a, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = S.Z.getMutableParticipants(t, y.pV.SPEAKER)
                            .filter((e) => e.type === y.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return c ? (0, _.dq)(n, o) : n;
                    })
                ),
                m = (0, u.e7)([S.Z], () => {
                    let e = 0;
                    for (let t of a) e += S.Z.getParticipantCount(t, y.pV.AUDIENCE);
                    return e;
                }),
                g = (0, u.Wu)(
                    [C.Z],
                    () => {
                        let e = C.Z.getAllApplicationStreams()
                            .filter((e) => e.guildId === t)
                            .map((e) => e.ownerId);
                        return c ? (0, _._j)(e, o) : e;
                    },
                    [c, o, t]
                ),
                E = (0, u.Wu)(
                    [d.ZP],
                    () => {
                        let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                        return c ? (0, _._j)(e, o) : e;
                    },
                    [t, c, o]
                ),
                v = (0, u.Wu)(
                    [L.default],
                    () => {
                        let e = E.map((e) => L.default.getUser(e));
                        return c ? (0, _.dq)(e) : e;
                    },
                    [c, E]
                ),
                I = (0, u.Wu)([L.default], () => g.map((e) => L.default.getUser(e)), [g]),
                T = f.filter((e) => !g.includes(e.id) && !E.includes(e.id)),
                b = c ? (0, _.dq)(T) : T,
                D = I.filter((e) => null != e && !E.includes(e.id)),
                P = h.length > 0 || T.length > 0 || D.length > 0 || v.length > 0;
            return {
                voiceUsersToShow: b,
                stageSpeakers: h,
                numStageListeners: m,
                streamUsersToShow: D,
                embeddedActivitiesUsers: v,
                hasActivity: P
            };
        })(o),
        T = U(c.VoiceNormalIcon, m, h);
    let b =
            ((t = h),
            (n = g),
            (a = E),
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: M.row,
                      children: [
                          (0, r.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: M.activityIcon
                          }),
                          (0, r.jsx)(f.Z, {
                              guildId: t,
                              users: n,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: M.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: M.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/normal',
                                      children: a
                                  })
                              ]
                          })
                      ]
                  })),
        P = U(c.ScreenArrowIcon, v, h),
        k = U(c.ActivitiesIcon, I, h),
        { isMuted: G, muteConfig: Z } = (0, u.cj)(
            [D.ZP],
            () => ({
                isMuted: D.ZP.isMuted(h),
                muteConfig: D.ZP.getMuteConfig(h)
            }),
            [h]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b,
            T,
            P,
            k,
            G
                ? (0, r.jsx)(B, {
                      muteConfig: Z,
                      className: s()(M.muteText, { [M.muteTextWithActivity]: null != T || null != P })
                  })
                : null
        ]
    });
}
function Z(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(c.Text, {
        className: M.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: (function (e) {
            switch (e) {
                case E.wB.SUBMITTED:
                    return P.intl.string(P.t['9KFC9/']);
                case E.wB.REJECTED:
                    return P.intl.string(P.t['TQY/RU']);
                case E.wB.APPROVED:
                    return P.intl.string(P.t.WXHcq6);
                default:
                    return P.intl.string(P.t.fjHFCw);
            }
        })(t)
    });
}
function F(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, h.Z)(t),
        a = (0, v.E)(t),
        o = null != a ? (0, r.jsx)(Z, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(G, { guild: t }) : null,
        d = (0, u.e7)([T.Z], () => T.Z.isViewingRoles(t.id)),
        f = (0, I.I)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(M.row, M.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              className: M.rowIconV2
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: M.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: s()(M.guildNameText, { [M.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            f
                ? (0, r.jsx)(c.Text, {
                      className: M.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: P.intl.string(P.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(c.Text, {
                      className: M.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: P.intl.string(P.t['5LwN8/'])
                  })
                : null != o
                  ? o
                  : l
        ]
    });
}
function V(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0 } = e;
    return (0, r.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(F, {
                  guild: t,
                  includeActivity: o
              }),
        'aria-label': a,
        tooltipClassName: k.listItemTooltip,
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
