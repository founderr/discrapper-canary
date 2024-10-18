n.d(t, {
    Z: function () {
        return k;
    }
});
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(512722),
    u = n.n(c),
    d = n(913527),
    _ = n.n(d),
    E = n(481060),
    I = n(911969),
    m = n(595519),
    T = n(566620),
    f = n(403404),
    h = n(100527),
    N = n(906732),
    p = n(783097),
    C = n(581364),
    g = n(592180),
    S = n(347475),
    A = n(598077),
    x = n(768581),
    R = n(585483),
    v = n(55935),
    O = n(739566),
    M = n(421399),
    L = n(310423),
    Z = n(223021),
    b = n(981631),
    P = n(689938),
    D = n(825193);
function j(e) {
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: a, foreground: r } = e;
    return (0, s.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, s.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: r,
            fill: i
        })
    });
}
((i = a || (a = {}))[(i.InteractionUser = 0)] = 'InteractionUser'), (i[(i.InteractionTarget = 1)] = 'InteractionTarget');
function U(e, t, n, i, a) {
    var r, l, c;
    let { message: u, compact: d, channel: _, isInteractionUserBlocked: I, showAvatarPopout: m, showTargetAvatarPopout: T, onClickAvatar: f, onUserContextMenu: h, onClickTargetAvatar: N, onTargetUserContextMenu: p, onPopoutRequestClose: C } = e;
    if (d && 1 === n) return null;
    if ((d && null == u.activityInstance) || I)
        return (0, s.jsx)('div', {
            className: D.replyBadge,
            children: (0, s.jsx)(j, { className: D.commandIcon })
        });
    let g =
            null !==
                (c = x.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (r = i.guildMemberAvatar) && void 0 !== r ? r : void 0,
                    userId: t.id,
                    guildId: null !== (l = null == _ ? void 0 : _.guild_id) && void 0 !== l ? l : ''
                })) && void 0 !== c
                ? c
                : void 0,
        S = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: r, onMouseDown: l } = e;
                return (0, s.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: r,
                    onMouseDown: l,
                    className: o()({
                        [D.executedCommandAvatar]: !0,
                        [D.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: _.guild_id,
                guildAvatar: g,
                onClick: 1 === n ? N : f,
                onContextMenu: 1 === n ? p : h
            }),
        A = 1 === n ? T : m;
    return null != a && null != A
        ? (0, s.jsx)(E.Popout, {
              renderPopout: a,
              shouldShow: A,
              position: 'right',
              onRequestClose: C,
              children: S
          })
        : S();
}
function y(e, t, n, i, a) {
    let { message: r, channel: l, showUsernamePopout: o, showTargetUsernamePopout: c, onClickUsername: u, onUserContextMenu: d, onClickTargetUsername: _, onTargetUserContextMenu: E, onPopoutRequestClose: I } = e;
    return (0, s.jsx)(M.Z, {
        className: 1 === n ? D.targetUsername : '',
        compact: !0,
        author: i,
        message: r,
        channel: l,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: a,
        onClick: 1 === n ? _ : u,
        onContextMenu: 1 === n ? E : d,
        onPopoutRequestClose: I
    });
}
let B = () =>
    (0, s.jsx)(E.ChevronSmallRightIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: D.executedCommandSeparator
    });
function k(e) {
    var t;
    let n;
    let { message: i, channel: a } = e,
        { analyticsLocations: l } = (0, N.ZP)(h.Z.EXECUTED_COMMAND),
        c = r.useMemo(
            () => (e, t, n) => (
                u()(null != a && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, s.jsx)(S.Z, {
                    ...e,
                    channelId: a.id,
                    messageId: i.id,
                    guildId: a.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [a, i.id]
        ),
        d = r.useMemo(
            () => (e) => (
                u()(null != a, 'ExecutedCommand: channel cannot be null'),
                (0, s.jsx)(L.Z, {
                    ...e,
                    channel: a,
                    messageId: i.id,
                    interactionData: i.interactionData
                })
            ),
            [a, i.id, i.interactionData]
        ),
        x = (0, C.t0)(i),
        M = (null == x ? void 0 : x.type) === I.B8.APPLICATION_COMMAND && null != x.target_user ? new A.Z(x.target_user) : null,
        j = (null == x ? void 0 : x.type) === I.B8.APPLICATION_COMMAND && null != i.messageReference && null != e.renderTargetMessage,
        k = (0, O.Sw)(null === (t = i.interaction) || void 0 === t ? void 0 : t.user, a),
        G = (0, O.Sw)(M, a),
        F = r.useMemo(() => (e.compact ? (0, Z.Z)((0, v.vc)(_()(), 'LT')) : null), [e.compact]),
        w = (0, m.NX)(a.id),
        V = i.interaction;
    if (null == V || null == k) return null;
    let H = () => {
        let t = U(e, V.user, 0, k, (e) => c(e, V.user, [h.Z.AVATAR])),
            n = y(e, V.user, 0, k, (e) => c(e, V.user));
        return (0, s.jsxs)(
            r.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == i ? void 0 : i.activityInstance) === null || (0, g.g)(i))
        (n = P.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: H,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: a, onPopoutRequestClose: r } = e,
                        l = i.interaction.displayName;
                    return (0, s.jsx)(E.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: r,
                        animation: E.Popout.Animation.FADE,
                        positionKey: null != i.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (i.type === b.uaV.CHAT_INPUT_COMMAND || i.type === b.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, s.jsx)(E.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: a,
                                    children: (0, s.jsxs)('div', {
                                        className: o()(D.appLauncherOnboardingCommandName, D.clickable),
                                        children: [
                                            (0, s.jsx)(E.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: D.appsIcon
                                            }),
                                            l
                                        ]
                                    })
                                });
                            if (!(0, g.g)(i))
                                return (0, s.jsx)('div', {
                                    className: D.commandName,
                                    children: l
                                });
                            {
                                let e = (0, p.XZ)(l);
                                return (0, s.jsx)(E.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        R.S.dispatchToLastSubscribed(b.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                    },
                                    children: (0, s.jsxs)('div', {
                                        className: o()(D.appLauncherOnboardingCommandName, D.clickable),
                                        children: [
                                            (0, s.jsx)(E.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: D.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, d);
                return (0, s.jsx)(r.Fragment, { children: t }, 'command');
            }
        })),
            j && null != e.renderTargetMessage
                ? (n = (0, s.jsxs)(s.Fragment, {
                      children: [n, (0, s.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != M &&
                  (n = (0, s.jsxs)(s.Fragment, {
                      children: [
                          n,
                          (0, s.jsx)(B, {}),
                          (0, s.jsx)(() => {
                              if (null == M) return null;
                              let t = U(e, M, 1, G, (e) => c(e, M, [h.Z.AVATAR])),
                                  n = y(e, M, 1, G, (e) => c(e, M));
                              return (0, s.jsxs)(
                                  r.Fragment,
                                  {
                                      children: [t, n]
                                  },
                                  'target'
                              );
                          }, {})
                      ]
                  }));
    else {
        let e = () => {
            (0, f.Z)({
                channel: a,
                guildId: a.guild_id,
                locationObject: {
                    page: a.isPrivate() ? b.ZY5.DM_CHANNEL : b.ZY5.GUILD_CHANNEL,
                    section: b.jXE.CHANNEL_TEXT_AREA,
                    object: b.qAy.APP_COMMAND,
                    objectType: b.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: l
            }),
                (0, T.w1)({ guildId: a.guild_id });
        };
        n = w
            ? P.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                  userHook: H,
                  activityHook: () =>
                      (0, s.jsx)(E.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, s.jsx)('div', {
                              className: o()(D.commandName, D.clickable),
                              children: P.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                          })
                      })
              })
            : P.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: H });
    }
    return (0, s.jsx)(N.Gt, {
        value: l,
        children: (0, s.jsx)('div', {
            className: o()(D.repliedMessage, D.messageSpine, D.executedCommand, F),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
