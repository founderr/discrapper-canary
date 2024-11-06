n.d(t, {
    Z: function () {
        return w;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(512722),
    u = n.n(c),
    d = n(913527),
    m = n.n(d),
    h = n(481060),
    f = n(911969),
    p = n(595519),
    g = n(566620),
    _ = n(403404),
    C = n(100527),
    E = n(906732),
    I = n(783097),
    x = n(581364),
    v = n(592180),
    N = n(347475),
    T = n(598077),
    S = n(768581),
    b = n(585483),
    A = n(55935),
    j = n(739566),
    Z = n(421399),
    R = n(310423),
    P = n(223021),
    y = n(981631),
    L = n(388032),
    O = n(825193);
function M(e) {
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: r, foreground: a } = e;
    return (0, l.jsx)('svg', {
        className: r,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, l.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: a,
            fill: i
        })
    });
}
((i = r || (r = {}))[(i.InteractionUser = 0)] = 'InteractionUser'), (i[(i.InteractionTarget = 1)] = 'InteractionTarget');
function k(e, t, n, i, r) {
    var a, o, c;
    let { message: u, compact: d, channel: m, isInteractionUserBlocked: f, showAvatarPopout: p, showTargetAvatarPopout: g, onClickAvatar: _, onUserContextMenu: C, onClickTargetAvatar: E, onTargetUserContextMenu: I, onPopoutRequestClose: x } = e;
    if (d && 1 === n) return null;
    if ((d && null == u.activityInstance) || f)
        return (0, l.jsx)('div', {
            className: O.replyBadge,
            children: (0, l.jsx)(M, { className: O.commandIcon })
        });
    let v =
            null !==
                (c = S.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (a = i.guildMemberAvatar) && void 0 !== a ? a : void 0,
                    userId: t.id,
                    guildId: null !== (o = null == m ? void 0 : m.guild_id) && void 0 !== o ? o : ''
                })) && void 0 !== c
                ? c
                : void 0,
        N = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: r, onContextMenu: a, onMouseDown: o } = e;
                return (0, l.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: r,
                    onContextMenu: a,
                    onMouseDown: o,
                    className: s()({
                        [O.executedCommandAvatar]: !0,
                        [O.clickable]: null != r
                    })
                });
            })({
                user: t,
                guildId: m.guild_id,
                guildAvatar: v,
                onClick: 1 === n ? E : _,
                onContextMenu: 1 === n ? I : C
            }),
        T = 1 === n ? g : p;
    return null != r && null != T
        ? (0, l.jsx)(h.Popout, {
              renderPopout: r,
              shouldShow: T,
              position: 'right',
              onRequestClose: x,
              children: N
          })
        : N();
}
function D(e, t, n, i, r) {
    let { message: a, channel: o, showUsernamePopout: s, showTargetUsernamePopout: c, onClickUsername: u, onUserContextMenu: d, onClickTargetUsername: m, onTargetUserContextMenu: h, onPopoutRequestClose: f } = e;
    return (0, l.jsx)(Z.Z, {
        className: 1 === n ? O.targetUsername : '',
        compact: !0,
        author: i,
        message: a,
        channel: o,
        userOverride: t,
        showPopout: 1 === n ? c : s,
        renderPopout: r,
        onClick: 1 === n ? m : u,
        onContextMenu: 1 === n ? h : d,
        onPopoutRequestClose: f
    });
}
let B = () =>
    (0, l.jsx)(h.ChevronSmallRightIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: O.executedCommandSeparator
    });
function w(e) {
    var t;
    let n;
    let { message: i, channel: r } = e,
        { analyticsLocations: o } = (0, E.ZP)(C.Z.EXECUTED_COMMAND),
        c = a.useMemo(
            () => (e, t, n) => (
                u()(null != r && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, l.jsx)(N.Z, {
                    ...e,
                    channelId: r.id,
                    messageId: i.id,
                    guildId: r.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [r, i.id]
        ),
        d = a.useMemo(
            () => (e) => (
                u()(null != r, 'ExecutedCommand: channel cannot be null'),
                (0, l.jsx)(R.Z, {
                    ...e,
                    channel: r,
                    messageId: i.id,
                    interactionData: i.interactionData
                })
            ),
            [r, i.id, i.interactionData]
        ),
        S = (0, x.t0)(i),
        Z = (null == S ? void 0 : S.type) === f.B8.APPLICATION_COMMAND && null != S.target_user ? new T.Z(S.target_user) : null,
        M = (null == S ? void 0 : S.type) === f.B8.APPLICATION_COMMAND && null != i.messageReference && null != e.renderTargetMessage,
        w = (0, j.Sw)(null === (t = i.interaction) || void 0 === t ? void 0 : t.user, r),
        U = (0, j.Sw)(Z, r),
        F = a.useMemo(() => (e.compact ? (0, P.Z)((0, A.vc)(m()(), 'LT')) : null), [e.compact]),
        G = (0, p.NX)(r.id),
        V = i.interaction;
    if (null == V || null == w) return null;
    let H = () => {
        let t = k(e, V.user, 0, w, (e) => c(e, V.user, [C.Z.AVATAR])),
            n = D(e, V.user, 0, w, (e) => c(e, V.user));
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == i ? void 0 : i.activityInstance) === null || (0, v.g)(i))
        (n = L.intl.format(L.t['rg7U+P'], {
            userHook: H,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: r, onPopoutRequestClose: a } = e,
                        o = i.interaction.displayName;
                    return (0, l.jsx)(h.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: a,
                        animation: h.Popout.Animation.FADE,
                        positionKey: null != i.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (i.type === y.uaV.CHAT_INPUT_COMMAND || i.type === y.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, l.jsx)(h.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: r,
                                    children: (0, l.jsxs)('div', {
                                        className: s()(O.appLauncherOnboardingCommandName, O.clickable),
                                        children: [
                                            (0, l.jsx)(h.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: O.appsIcon
                                            }),
                                            o
                                        ]
                                    })
                                });
                            if (!(0, v.g)(i))
                                return (0, l.jsx)('div', {
                                    className: O.commandName,
                                    children: o
                                });
                            {
                                let e = (0, I.XZ)(o);
                                return (0, l.jsx)(h.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        b.S.dispatchToLastSubscribed(y.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                    },
                                    children: (0, l.jsxs)('div', {
                                        className: s()(O.appLauncherOnboardingCommandName, O.clickable),
                                        children: [
                                            (0, l.jsx)(h.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: O.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, d);
                return (0, l.jsx)(a.Fragment, { children: t }, 'command');
            }
        })),
            M && null != e.renderTargetMessage
                ? (n = (0, l.jsxs)(l.Fragment, {
                      children: [n, (0, l.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != Z &&
                  (n = (0, l.jsxs)(l.Fragment, {
                      children: [
                          n,
                          (0, l.jsx)(B, {}),
                          (0, l.jsx)(() => {
                              if (null == Z) return null;
                              let t = k(e, Z, 1, U, (e) => c(e, Z, [C.Z.AVATAR])),
                                  n = D(e, Z, 1, U, (e) => c(e, Z));
                              return (0, l.jsxs)(
                                  a.Fragment,
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
            (0, _.Z)({
                channel: r,
                guildId: r.guild_id,
                locationObject: {
                    page: r.isPrivate() ? y.ZY5.DM_CHANNEL : y.ZY5.GUILD_CHANNEL,
                    section: y.jXE.CHANNEL_TEXT_AREA,
                    object: y.qAy.APP_COMMAND,
                    objectType: y.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: o
            }),
                (0, g.w1)({ guildId: r.guild_id });
        };
        n = G
            ? L.intl.format(L.t.kfV8WF, {
                  userHook: H,
                  activityHook: () =>
                      (0, l.jsx)(h.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, l.jsx)('div', {
                              className: s()(O.commandName, O.clickable),
                              children: L.intl.string(L.t.YTgRvr)
                          })
                      })
              })
            : L.intl.format(L.t['6FeSyc'], { userHook: H });
    }
    return (0, l.jsx)(E.Gt, {
        value: o,
        children: (0, l.jsx)('div', {
            className: s()(O.repliedMessage, O.messageSpine, O.executedCommand, F),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
