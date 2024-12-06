n.d(t, {
    K: function () {
        return V;
    },
    Z: function () {
        return j;
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
    h = n(540059),
    m = n(666188),
    g = n(372769),
    E = n(523751),
    v = n(246364),
    I = n(746916),
    T = n(965638),
    b = n(160404),
    S = n(777861),
    y = n(565799),
    A = n(501655),
    N = n(517334),
    C = n(344185),
    R = n(199902),
    O = n(984933),
    D = n(699516),
    L = n(9156),
    x = n(594174),
    w = n(938475),
    P = n(981631),
    M = n(388032),
    k = n(782451),
    U = n(572488);
function B(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: k.row,
              children: [
                  (0, r.jsx)(e, {
                      className: k.activityIcon,
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
function G(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: M.intl.string(M.t.fpKdS0)
          })
        : (0, r.jsx)(S.Z, {
              muteConfig: t,
              className: n
          });
}
function Z(e) {
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
                    [O.ZP, C.Z],
                    () => {
                        let e = O.ZP.getChannels(t)
                            [O.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === P.d4z.GUILD_VOICE;
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
                s = (0, u.e7)([w.ZP], () => w.ZP.getVoiceStates(t), [t]),
                o = (0, u.Wu)([D.Z], () => D.Z.getBlockedOrIgnoredIDs()),
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
                h = (0, u.Wu)([y.Z], () =>
                    l().flatMap(a, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = y.Z.getMutableParticipants(t, A.pV.SPEAKER)
                            .filter((e) => e.type === A.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return c ? (0, _.dq)(n, o) : n;
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
                    [x.default],
                    () => {
                        let e = E.map((e) => x.default.getUser(e));
                        return c ? (0, _.dq)(e) : e;
                    },
                    [c, E]
                ),
                I = (0, u.Wu)([x.default], () => g.map((e) => x.default.getUser(e)), [g]),
                T = f.filter((e) => !g.includes(e.id) && !E.includes(e.id)),
                b = c ? (0, _.dq)(T) : T,
                S = I.filter((e) => null != e && !E.includes(e.id)),
                L = h.length > 0 || T.length > 0 || S.length > 0 || v.length > 0;
            return {
                voiceUsersToShow: b,
                stageSpeakers: h,
                numStageListeners: m,
                streamUsersToShow: S,
                embeddedActivitiesUsers: v,
                hasActivity: L
            };
        })(o),
        T = B(c.VoiceNormalIcon, m, h);
    let b =
            ((t = h),
            (n = g),
            (a = E),
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: k.row,
                      children: [
                          (0, r.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: k.activityIcon
                          }),
                          (0, r.jsx)(f.Z, {
                              guildId: t,
                              users: n,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: k.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: k.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/normal',
                                      children: a
                                  })
                              ]
                          })
                      ]
                  })),
        S = B(c.ScreenArrowIcon, v, h),
        M = B(c.ActivitiesIcon, I, h),
        { isMuted: U, muteConfig: Z } = (0, u.cj)(
            [L.ZP],
            () => ({
                isMuted: L.ZP.isMuted(h),
                muteConfig: L.ZP.getMuteConfig(h)
            }),
            [h]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b,
            T,
            S,
            M,
            U
                ? (0, r.jsx)(G, {
                      muteConfig: Z,
                      className: s()(k.muteText, { [k.muteTextWithActivity]: null != T || null != S })
                  })
                : null
        ]
    });
}
function F(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(c.Text, {
        className: k.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: (function (e) {
            switch (e) {
                case v.wB.SUBMITTED:
                    return M.intl.string(M.t['9KFC9/']);
                case v.wB.REJECTED:
                    return M.intl.string(M.t['TQY/RU']);
                case v.wB.APPROVED:
                    return M.intl.string(M.t.WXHcq6);
                default:
                    return M.intl.string(M.t.fjHFCw);
            }
        })(t)
    });
}
function V(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, m.Z)(t),
        a = (0, I.E)(t),
        o = null != a ? (0, r.jsx)(F, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(Z, { guild: t }) : null,
        d = (0, u.e7)([b.Z], () => b.Z.isViewingRoles(t.id)),
        f = (0, T.I)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(k.row, k.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(E.Z, {
                              guild: t,
                              className: k.rowIconV2
                          })
                        : (0, r.jsx)(g.Z, {
                              guild: t,
                              size: 20,
                              className: k.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: s()(k.guildNameText, { [k.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            f
                ? (0, r.jsx)(c.Text, {
                      className: k.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: M.intl.string(M.t['2n0/Fh'])
                  })
                : null,
            d
                ? (0, r.jsx)(c.Text, {
                      className: k.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: M.intl.string(M.t['5LwN8/'])
                  })
                : null != o
                  ? o
                  : l
        ]
    });
}
function j(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0 } = e,
        l = (0, h.Q)('GuildTooltip');
    return (0, r.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: n
            ? null
            : (0, r.jsx)(V, {
                  guild: t,
                  includeActivity: o
              }),
        'aria-label': a,
        tooltipClassName: U.listItemTooltip,
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
