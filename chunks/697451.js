n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    u = n.n(c),
    d = n(481060),
    _ = n(595519),
    E = n(566620),
    I = n(403404),
    m = n(100527),
    T = n(906732),
    h = n(783097),
    N = n(592180),
    f = n(103575),
    C = n(768581),
    p = n(585483),
    g = n(55935),
    S = n(739566),
    A = n(421399),
    R = n(310423),
    O = n(223021),
    x = n(981631),
    M = n(689938),
    v = n(438379);
function L(e) {
    let { width: t = 6, height: n = 10, color: a = 'currentColor', className: s, foreground: r } = e;
    return (0, i.jsx)('svg', {
        className: s,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: r,
            fill: a
        })
    });
}
function Z(e) {
    var t;
    let n;
    let { message: s, channel: l } = e,
        { analyticsLocations: c } = (0, T.ZP)(m.Z.EXECUTED_COMMAND),
        Z = a.useMemo(
            () => (e, t, n) => (
                o()(null != l && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, i.jsx)(f.Z, {
                    ...e,
                    location: 'ExecutedCommand',
                    channelId: l.id,
                    messageId: s.id,
                    guildId: l.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [l, s.id]
        ),
        P = a.useMemo(
            () => (e) => (
                o()(null != l, 'ExecutedCommand: channel cannot be null'),
                (0, i.jsx)(R.Z, {
                    ...e,
                    channel: l,
                    messageId: s.id,
                    interactionData: s.interactionData
                })
            ),
            [l, s.id, s.interactionData]
        ),
        b = (0, S.Sw)(null === (t = s.interaction) || void 0 === t ? void 0 : t.user, l),
        D = a.useMemo(() => (e.compact ? (0, O.Z)((0, g.vc)(u()(), 'LT')) : null), [e.compact]),
        j = (0, _.NX)(l.id),
        U = s.interaction;
    if (null == U || null == b) return null;
    let y = () => {
        let t = (function (e, t) {
                let n,
                    { message: a, compact: s, channel: l, isInteractionUserBlocked: o, showAvatarPopout: c, onClickAvatar: u, onUserContextMenu: _, onPopoutRequestClose: E } = e;
                if ((s && null == a.activityInstance) || o)
                    return (0, i.jsx)('div', {
                        className: v.replyBadge,
                        children: (0, i.jsx)(L, { className: v.commandIcon })
                    });
                if (null != a.interaction) {
                    var I, m, T;
                    let e = (0, S.ij)(a.interaction.user, l);
                    n =
                        null !==
                            (T = C.ZP.getGuildMemberAvatarURL({
                                avatar: null !== (I = e.guildMemberAvatar) && void 0 !== I ? I : void 0,
                                userId: a.interaction.user.id,
                                guildId: null !== (m = null == l ? void 0 : l.guild_id) && void 0 !== m ? m : ''
                            })) && void 0 !== T
                            ? T
                            : void 0;
                }
                let h = () =>
                    null != a.interaction &&
                    (function (e) {
                        let { user: t, guildId: n, guildAvatar: a, onClick: s, onContextMenu: l, onMouseDown: o } = e;
                        return (0, i.jsx)('img', {
                            alt: '',
                            src: null != a ? a : t.getAvatarURL(n, 16),
                            onClick: s,
                            onContextMenu: l,
                            onMouseDown: o,
                            className: r()({
                                [v.executedCommandAvatar]: !0,
                                [v.clickable]: null != s
                            })
                        });
                    })({
                        user: a.interaction.user,
                        guildId: l.guild_id,
                        guildAvatar: n,
                        onClick: u,
                        onContextMenu: _
                    });
                return null != t && null != c
                    ? (0, i.jsx)(d.Popout, {
                          renderPopout: t,
                          shouldShow: c,
                          position: 'right',
                          onRequestClose: E,
                          children: h
                      })
                    : h();
            })(e, (e) => Z(e, U.user, [m.Z.AVATAR])),
            n = (function (e, t, n) {
                var a;
                let { message: s, channel: r, showUsernamePopout: l, onClickUsername: o, onUserContextMenu: c, onPopoutRequestClose: u } = e;
                return (0, i.jsx)(A.Z, {
                    compact: !0,
                    author: t,
                    message: s,
                    channel: r,
                    userOverride: null === (a = s.interaction) || void 0 === a ? void 0 : a.user,
                    showPopout: l,
                    renderPopout: n,
                    onClick: o,
                    onContextMenu: c,
                    onPopoutRequestClose: u
                });
            })(e, b, (e) => Z(e, U.user));
        return (0, i.jsxs)(
            a.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == s ? void 0 : s.activityInstance) === null || (0, N.g)(s))
        n = M.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: y,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: a, onClickCommand: s, onPopoutRequestClose: l } = e,
                        o = a.interaction.displayName;
                    return (0, i.jsx)(d.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: l,
                        animation: d.Popout.Animation.FADE,
                        positionKey: null != a.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (a.type === x.uaV.CHAT_INPUT_COMMAND || a.type === x.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, i.jsx)(d.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: s,
                                    children: (0, i.jsxs)('div', {
                                        className: r()(v.appLauncherOnboardingCommandName, v.clickable),
                                        children: [
                                            (0, i.jsx)(d.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: v.appsIcon
                                            }),
                                            o
                                        ]
                                    })
                                });
                            if (!(0, N.g)(a))
                                return (0, i.jsx)('div', {
                                    className: v.commandName,
                                    children: o
                                });
                            {
                                let e = (0, h.XZ)(o);
                                return (0, i.jsx)(d.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        p.S.dispatchToLastSubscribed(x.CkL.OPEN_APP_LAUNCHER, { applicationId: a.applicationId });
                                    },
                                    children: (0, i.jsxs)('div', {
                                        className: r()(v.appLauncherOnboardingCommandName, v.clickable),
                                        children: [
                                            (0, i.jsx)(d.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: v.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, P);
                return (0, i.jsx)(a.Fragment, { children: t }, 'command');
            }
        });
    else {
        let e = () => {
            (0, I.Z)({
                channel: l,
                guildId: l.guild_id,
                locationObject: {
                    page: l.isPrivate() ? x.ZY5.DM_CHANNEL : x.ZY5.GUILD_CHANNEL,
                    section: x.jXE.CHANNEL_TEXT_AREA,
                    object: x.qAy.APP_COMMAND,
                    objectType: x.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }),
                (0, E.w1)({ guildId: l.guild_id });
        };
        n = j
            ? M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                  userHook: y,
                  activityHook: () =>
                      (0, i.jsx)(d.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, i.jsx)('div', {
                              className: r()(v.commandName, v.clickable),
                              children: M.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                          })
                      })
              })
            : M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: y });
    }
    return (0, i.jsx)(T.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: r()(v.repliedMessage, v.executedCommand, D),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
