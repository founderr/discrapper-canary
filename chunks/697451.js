n.d(t, {
    Z: function () {
        return F;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(481060),
    E = n(911969),
    f = n(595519),
    h = n(566620),
    p = n(403404),
    m = n(100527),
    I = n(906732),
    T = n(783097),
    g = n(581364),
    S = n(592180),
    A = n(347475),
    v = n(598077),
    N = n(768581),
    O = n(585483),
    R = n(55935),
    C = n(739566),
    y = n(421399),
    L = n(310423),
    b = n(223021),
    D = n(981631),
    M = n(689938),
    P = n(825193);
function U(e) {
    let { width: t = 6, height: n = 10, color: r = 'currentColor', className: a, foreground: o } = e;
    return (0, i.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: o,
            fill: r
        })
    });
}
function w(e) {
    let { user: t, guildId: n, guildAvatar: r, onClick: a, onContextMenu: o, onMouseDown: l } = e;
    return (0, i.jsx)('img', {
        alt: '',
        src: null != r ? r : t.getAvatarURL(n, 16),
        onClick: a,
        onContextMenu: o,
        onMouseDown: l,
        className: s()({
            [P.executedCommandAvatar]: !0,
            [P.clickable]: null != a
        })
    });
}
function x(e, t, n, r, a) {
    var o, s, l;
    let { message: u, compact: c, channel: d, isInteractionUserBlocked: E, showAvatarPopout: f, showTargetAvatarPopout: h, onClickAvatar: p, onUserContextMenu: m, onClickTargetAvatar: I, onTargetUserContextMenu: T, onPopoutRequestClose: g } = e;
    if (c && 1 === n) return null;
    if ((c && null == u.activityInstance) || E)
        return (0, i.jsx)('div', {
            className: P.replyBadge,
            children: (0, i.jsx)(U, { className: P.commandIcon })
        });
    let S =
            null !==
                (l = N.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (o = r.guildMemberAvatar) && void 0 !== o ? o : void 0,
                    userId: t.id,
                    guildId: null !== (s = null == d ? void 0 : d.guild_id) && void 0 !== s ? s : ''
                })) && void 0 !== l
                ? l
                : void 0,
        A = () =>
            w({
                user: t,
                guildId: d.guild_id,
                guildAvatar: S,
                onClick: 1 === n ? I : p,
                onContextMenu: 1 === n ? T : m
            }),
        v = 1 === n ? h : f;
    return null != a && null != v
        ? (0, i.jsx)(_.Popout, {
              renderPopout: a,
              shouldShow: v,
              position: 'right',
              onRequestClose: g,
              children: A
          })
        : A();
}
function G(e, t, n, r, a) {
    let { message: o, channel: s, showUsernamePopout: l, showTargetUsernamePopout: u, onClickUsername: c, onUserContextMenu: d, onClickTargetUsername: _, onTargetUserContextMenu: E, onPopoutRequestClose: f } = e;
    return (0, i.jsx)(y.Z, {
        className: 1 === n ? P.targetUsername : '',
        compact: !0,
        author: r,
        message: o,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? u : l,
        renderPopout: a,
        onClick: 1 === n ? _ : c,
        onContextMenu: 1 === n ? E : d,
        onPopoutRequestClose: f
    });
}
function k(e, t) {
    let { showDataPopout: n, message: r, onClickCommand: a, onPopoutRequestClose: o } = e,
        l = r.interaction.displayName;
    return (0, i.jsx)(_.Popout, {
        renderPopout: t,
        shouldShow: n,
        position: 'top',
        align: 'center',
        onRequestClose: o,
        animation: _.Popout.Animation.FADE,
        positionKey: null != r.interactionData ? 'ready' : 'loading',
        children: (e) => {
            let { onClick: t, ...n } = e;
            if (r.type === D.uaV.CHAT_INPUT_COMMAND || r.type === D.uaV.INTERACTION_PREMIUM_UPSELL)
                return (0, i.jsx)(_.Clickable, {
                    ...n,
                    tag: 'span',
                    onClick: a,
                    children: (0, i.jsxs)('div', {
                        className: s()(P.appLauncherOnboardingCommandName, P.clickable),
                        children: [
                            (0, i.jsx)(_.AppsIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 10,
                                width: 10,
                                className: P.appsIcon
                            }),
                            l
                        ]
                    })
                });
            if (!(0, S.g)(r))
                return (0, i.jsx)('div', {
                    className: P.commandName,
                    children: l
                });
            {
                let e = () => {
                        O.S.dispatchToLastSubscribed(D.CkL.OPEN_APP_LAUNCHER, { applicationId: r.applicationId });
                    },
                    t = (0, T.XZ)(l);
                return (0, i.jsx)(_.Clickable, {
                    ...n,
                    tag: 'span',
                    onClick: e,
                    children: (0, i.jsxs)('div', {
                        className: s()(P.appLauncherOnboardingCommandName, P.clickable),
                        children: [
                            (0, i.jsx)(_.AppsIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 10,
                                width: 10,
                                className: P.appsIcon
                            }),
                            t
                        ]
                    })
                });
            }
        }
    });
}
!(function (e) {
    (e[(e.InteractionUser = 0)] = 'InteractionUser'), (e[(e.InteractionTarget = 1)] = 'InteractionTarget');
})(r || (r = {}));
let B = () =>
    (0, i.jsx)(_.ChevronSmallRightIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: P.executedCommandSeparator
    });
function F(e) {
    var t;
    let n;
    let { message: r, channel: o } = e,
        { analyticsLocations: l } = (0, I.ZP)(m.Z.EXECUTED_COMMAND),
        c = a.useMemo(
            () => (e, t, n) => (
                u()(null != o && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, i.jsx)(A.Z, {
                    ...e,
                    channelId: o.id,
                    messageId: r.id,
                    guildId: o.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [o, r.id]
        ),
        T = a.useMemo(
            () => (e) => (
                u()(null != o, 'ExecutedCommand: channel cannot be null'),
                (0, i.jsx)(L.Z, {
                    ...e,
                    channel: o,
                    messageId: r.id,
                    interactionData: r.interactionData
                })
            ),
            [o, r.id, r.interactionData]
        ),
        N = (0, g.t0)(r),
        O = (null == N ? void 0 : N.type) === E.B8.APPLICATION_COMMAND && null != N.target_user ? new v.Z(N.target_user) : null,
        y = (null == N ? void 0 : N.type) === E.B8.APPLICATION_COMMAND && null != r.messageReference && null != e.renderTargetMessage,
        U = (0, C.Sw)(null === (t = r.interaction) || void 0 === t ? void 0 : t.user, o),
        w = (0, C.Sw)(O, o),
        F = a.useMemo(() => (e.compact ? (0, b.Z)((0, R.vc)(d()(), 'LT')) : null), [e.compact]),
        Z = (0, f.NX)(o.id),
        V = r.interaction;
    if (null == V || null == U) return null;
    let H = () => {
            let t = x(e, V.user, 0, U, (e) => c(e, V.user, [m.Z.AVATAR])),
                n = G(e, V.user, 0, U, (e) => c(e, V.user));
            return (0, i.jsxs)(
                a.Fragment,
                {
                    children: [t, n]
                },
                'user'
            );
        },
        Y = () => {
            if (null == O) return null;
            let t = x(e, O, 1, w, (e) => c(e, O, [m.Z.AVATAR])),
                n = G(e, O, 1, w, (e) => c(e, O));
            return (0, i.jsxs)(
                a.Fragment,
                {
                    children: [t, n]
                },
                'target'
            );
        };
    if ((null == r ? void 0 : r.activityInstance) === null || (0, S.g)(r)) {
        let t = () => {
            let t = k(e, T);
            return (0, i.jsx)(a.Fragment, { children: t }, 'command');
        };
        (n = M.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: H,
            commandHook: t
        })),
            y && null != e.renderTargetMessage
                ? (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != O &&
                  (n = (0, i.jsxs)(i.Fragment, {
                      children: [n, (0, i.jsx)(B, {}), (0, i.jsx)(Y, {})]
                  }));
    } else {
        let e = () => {
                (0, p.Z)({
                    channel: o,
                    guildId: o.guild_id,
                    locationObject: {
                        page: o.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
                        section: D.jXE.CHANNEL_TEXT_AREA,
                        object: D.qAy.APP_COMMAND,
                        objectType: D.Qqv.ACTIVITY
                    },
                    openInPopout: !1,
                    enableSelectedTextChannelInvite: !0,
                    analyticsLocations: l
                }),
                    (0, h.w1)({ guildId: o.guild_id });
            },
            t = () =>
                (0, i.jsx)(_.Clickable, {
                    tag: 'span',
                    onClick: e,
                    children: (0, i.jsx)('div', {
                        className: s()(P.commandName, P.clickable),
                        children: M.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                    })
                });
        n = Z
            ? M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                  userHook: H,
                  activityHook: t
              })
            : M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: H });
    }
    return (0, i.jsx)(I.Gt, {
        value: l,
        children: (0, i.jsx)('div', {
            className: s()(P.repliedMessage, P.executedCommand, F),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
