n.d(t, {
    K: function () {
        return ee;
    },
    Z: function () {
        return et;
    }
});
var r = n(390547);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(481060),
    E = n(317381),
    f = n(884338),
    h = n(470883),
    p = n(750881),
    m = n(666188),
    I = n(372769),
    T = n(523751),
    g = n(246364),
    S = n(746916),
    A = n(965638),
    v = n(160404),
    N = n(41776),
    O = n(777861),
    R = n(565799),
    C = n(501655),
    y = n(517334),
    L = n(344185),
    b = n(199902),
    D = n(77498),
    M = n(984933),
    P = n(607744),
    U = n(158776),
    w = n(699516),
    x = n(9156),
    G = n(594174),
    k = n(938475),
    B = n(510601),
    F = n(59688),
    Z = n(456774),
    V = n(718582),
    H = n(981631),
    Y = n(689938),
    j = n(516126),
    W = n(64056);
function K(e) {
    let t = e.id,
        n = (0, d.Wu)(
            [M.ZP, L.Z],
            () => {
                let e = M.ZP.getChannels(t)
                    [M.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === H.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    });
                return [...e, ...Object.values(L.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
            },
            [t]
        ),
        r = (0, y.ZP)(t),
        i = o.useMemo(() => r.map((e) => e.id), [r]),
        a = (0, d.e7)([k.ZP], () => k.ZP.getVoiceStates(t), [t]),
        s = (0, d.Wu)([w.Z], () => w.Z.getBlockedIDs()),
        l = (0, p.aK)('guild-tooltip'),
        u = c().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null !== (n = a[t]) && void 0 !== n ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return l ? (0, h.Qj)(r, s) : r;
        }),
        _ = (0, d.Wu)([R.Z], () =>
            c().flatMap(i, (t) => {
                if (t === e.afkChannelId) return [];
                let n = R.Z.getMutableParticipants(t, C.pV.SPEAKER)
                    .filter((e) => e.type === C.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return l ? (0, h.Qj)(n, s) : n;
            })
        ),
        f = (0, d.e7)([R.Z], () => {
            let e = 0;
            for (let t of i) e += R.Z.getParticipantCount(t, C.pV.AUDIENCE);
            return e;
        }),
        m = (0, d.Wu)(
            [b.Z],
            () => {
                let e = b.Z.getAllApplicationStreams()
                    .filter((e) => e.guildId === t)
                    .map((e) => e.ownerId);
                return l ? (0, h.$m)(e, s) : e;
            },
            [l, s, t]
        ),
        I = (0, d.Wu)([U.Z, D.Z], () => {
            let e = u.filter((e) => U.Z.getActivities(e.id, t).some((e) => (null == e ? void 0 : e.application_id) != null && null != D.Z.getDetectableGame(null == e ? void 0 : e.application_id)));
            return l ? (0, h.Qj)(e, s) : e;
        }),
        T = (0, B.kM)('Guild Tooltip', !1),
        g = T ? I.map((e) => e.id) : [],
        S = (0, d.Wu)(
            [E.ZP],
            () => {
                let e = E.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                return l ? (0, h.$m)(e, s) : e;
            },
            [t, l, s]
        ),
        A = (0, d.Wu)(
            [G.default],
            () => {
                let e = S.map((e) => G.default.getUser(e));
                return l ? (0, h.Qj)(e) : e;
            },
            [l, S]
        ),
        v = (0, d.Wu)([G.default], () => m.map((e) => G.default.getUser(e)), [m]),
        N = u.filter((e) => !m.includes(e.id) && !S.includes(e.id) && !g.includes(e.id)),
        O = l ? (0, h.Qj)(N) : N,
        P = v.filter((e) => null != e && !S.includes(e.id)),
        x = _.length > 0 || N.length > 0 || P.length > 0 || A.length > 0;
    return {
        voiceUsersToShow: O,
        stageSpeakers: _,
        numStageListeners: f,
        streamUsersToShow: P,
        embeddedActivitiesUsers: A,
        gameUsers: I,
        shouldShowGameBadge: T,
        hasActivity: x
    };
}
function z(e, t, n) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              className: j.row,
              children: [
                  (0, a.jsx)(e, {
                      className: j.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, a.jsx)(f.Z, {
                      guildId: n,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function q(e, t, n) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              className: j.row,
              children: [
                  (0, a.jsx)(_.StageIcon, {
                      size: 'lg',
                      color: 'currentColor',
                      className: j.activityIcon
                  }),
                  (0, a.jsx)(f.Z, {
                      guildId: e,
                      users: t,
                      max: 3
                  }),
                  (0, a.jsxs)('div', {
                      className: j.stageListenerPill,
                      children: [
                          (0, a.jsx)(_.HeadphonesIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, a.jsx)(_.Text, {
                              className: j.stageListenerCount,
                              color: 'text-normal',
                              variant: 'text-xs/normal',
                              children: n
                          })
                      ]
                  })
              ]
          });
}
function Q(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, a.jsx)(_.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: Y.Z.Messages.FORM_LABEL_MUTED
          })
        : (0, a.jsx)(O.Z, {
              muteConfig: t,
              className: n
          });
}
function X(e) {
    let { guild: t } = e,
        n = t.id,
        { voiceUsersToShow: r, stageSpeakers: i, numStageListeners: o, streamUsersToShow: s, embeddedActivitiesUsers: u, gameUsers: c, shouldShowGameBadge: E } = K(t),
        f = z(_.GameControllerIcon, c, n),
        h = z(_.VoiceNormalIcon, r, n),
        p = q(n, i, o),
        m = z(_.ScreenArrowIcon, s, n),
        I = z(_.ActivitiesIcon, u, n),
        { isMuted: T, muteConfig: g } = (0, d.cj)(
            [x.ZP],
            () => ({
                isMuted: x.ZP.isMuted(n),
                muteConfig: x.ZP.getMuteConfig(n)
            }),
            [n]
        ),
        S = null != h || null != m;
    return (
        null != f && B.ZP.trackExposure({ location: 'Guild Tooltip' }),
        (0, a.jsxs)(a.Fragment, {
            children: [
                p,
                h,
                m,
                E && f,
                I,
                T
                    ? (0, a.jsx)(Q, {
                          muteConfig: g,
                          className: l()(j.muteText, { [j.muteTextWithActivity]: S })
                      })
                    : null
            ]
        })
    );
}
function $(e) {
    switch (e) {
        case g.wB.SUBMITTED:
            return Y.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case g.wB.REJECTED:
            return Y.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case g.wB.APPROVED:
            return Y.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
            return Y.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED;
    }
}
function J(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, a.jsx)(_.Text, {
        className: j.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: $(t)
    });
}
function ee(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        r = (0, m.Z)(t),
        i = (0, S.E)(t),
        o = null != i ? (0, a.jsx)(J, { guildJoinRequestStatus: i }) : null,
        s = n ? (0, a.jsx)(X, { guild: t }) : null,
        u = (0, d.e7)([v.Z], () => v.Z.isViewingRoles(t.id)),
        c = null != o ? o : s,
        E = (0, A.I)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: l()(j.row, j.rowGuildName),
                children: [
                    r
                        ? (0, a.jsx)(T.Z, {
                              guild: t,
                              className: j.rowIconV2
                          })
                        : (0, a.jsx)(I.Z, {
                              guild: t,
                              size: 20,
                              className: j.rowIcon
                          }),
                    (0, a.jsx)('span', {
                        className: l()(j.guildNameText, { [j.guildNameTextLimitedSize]: null != s }),
                        children: t.toString()
                    })
                ]
            }),
            E
                ? (0, a.jsx)(_.Text, {
                      className: j.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: Y.Z.Messages.INVITES_DISABLED_TOOLTIP
                  })
                : null,
            u
                ? (0, a.jsx)(_.Text, {
                      className: j.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: Y.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
                  })
                : c
        ]
    });
}
function et(e) {
    let { guild: t, disabled: n = !1, 'aria-label': r = !1, children: i, includeActivity: s = !0, isDragging: l } = e,
        u = (0, F.o)('guilds_bar', !1),
        [c, E] = o.useState(!1),
        f = (0, V.V1)(t),
        { isUserLurking: h, isUnverifiedAccount: p } = (0, d.cj)([N.Z, P.Z], () => {
            let e = N.Z.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !P.Z.getCheck(t.id).canChat
            };
        }),
        m = o.useMemo(() => !h && !p && s && f.length > 0, [h, p, s, f.length]),
        I = () => {
            m && F.Z.trackExposure({ location: 'guild_tooltip' });
        },
        T = () => {
            E(!0), I();
        };
    return m && u
        ? (0, a.jsx)('div', {
              onMouseEnter: T,
              onMouseLeave: () => E(!1),
              onFocus: T,
              onBlur: () => E(!1),
              children: (0, a.jsx)(_.Popout, {
                  position: 'right',
                  renderPopout: (e) => {
                      var n;
                      return (0, a.jsx)(Z.Z, {
                          guild: t,
                          closePopout: () => E(!1),
                          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
                      });
                  },
                  spacing: 0,
                  onRequestClose: () => E(!1),
                  shouldShow: !l && c,
                  children: (e) =>
                      (0, a.jsx)('div', {
                          ...e,
                          children: i
                      })
              })
          })
        : (0, a.jsx)(_.Tooltip, {
              hideOnClick: !0,
              spacing: 20,
              position: 'right',
              text: n
                  ? null
                  : (0, a.jsx)(ee, {
                        guild: t,
                        includeActivity: s
                    }),
              'aria-label': r,
              onTooltipShow: I,
              tooltipClassName: W.listItemTooltip,
              children: (e) => {
                  let { onFocus: t, onBlur: n, ...r } = e;
                  return (0, a.jsx)('div', {
                      onFocus: t,
                      onBlur: n,
                      children: o.cloneElement(o.Children.only(i), { ...r })
                  });
              }
          });
}
