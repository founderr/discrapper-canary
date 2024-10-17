n.d(t, {
    CF: function () {
        return Y;
    },
    ZP: function () {
        return z;
    },
    nD: function () {
        return j;
    }
}),
    n(47120),
    n(789020),
    n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(835473),
    E = n(366030),
    f = n(91218),
    h = n(71619),
    p = n(340797),
    I = n(946241),
    m = n(98278),
    T = n(869765),
    S = n(243317),
    g = n(621853),
    A = n(518950),
    N = n(484459),
    R = n(184301),
    O = n(740492),
    v = n(430824),
    C = n(496675),
    L = n(594174),
    D = n(768581),
    y = n(585483),
    b = n(630388),
    M = n(74538),
    P = n(276554),
    U = n(421399),
    w = n(453687),
    x = n(318713),
    G = n(304176),
    k = n(47930),
    B = n(981631),
    F = n(689938),
    V = n(825193),
    H = n(255963);
function Z(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: i, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: _ = !1, className: E } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                onClick: a,
                onContextMenu: o,
                onMouseDown: l,
                onKeyDown: d,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                'aria-hidden': !0,
                className: s()(E, V.avatar, {
                    [V.compact]: i,
                    [V.clickable]: null != a,
                    [V.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == n || i
                ? null
                : (0, r.jsx)('img', {
                      className: V.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function Y(e, t, n) {
    let { message: i, channel: a, author: s, compact: o = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: _ } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U.Z, {
                message: i,
                channel: a,
                author: s,
                compact: o,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: _,
                decorations: n,
                renderRemixTag: !0
            }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: V.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function j(e) {
    let { message: t, avatar: n, username: i, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: c, showTimestampOnHover: d, ariaLabelledBy: E, ariaDescribedBy: f, className: h, messageClassname: p, badges: I } = e,
        m = (0, _.q)(t.applicationId);
    return (
        null != m && !(0, b.yE)(m.flags, B.udG.SOCIAL_LAYER_INTEGRATION) && (m = null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !l && n,
                (0, r.jsxs)(u.H, {
                    className: s()(V.header, h),
                    'aria-describedby': f,
                    'aria-labelledby': E,
                    children: [
                        c &&
                            l &&
                            (0, r.jsx)(x.Z, {
                                id: (0, w.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: p,
                                isInline: !1,
                                application: m
                            }),
                        l && n,
                        (0, r.jsx)('span', {
                            id: a,
                            className: o,
                            children: i
                        }),
                        c &&
                            !l &&
                            (0, r.jsx)(x.Z, {
                                id: (0, w.Dv)(t),
                                timestamp: t.timestamp,
                                className: p,
                                application: m
                            }),
                        null != I && I.length > 0
                            ? (0, r.jsx)('div', {
                                  className: V.badgesContainer,
                                  children: I
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let W = (e) => {
    !e && (0, m.z)();
};
function K(e) {
    let { currentUserIsPremium: t, author: n } = e,
        i = (0, l.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(u.Tooltip, {
        tooltipClassName: V.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: F.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
        onTooltipShow: () => (0, N.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(u.Clickable, {
                className: V.nitroAuthorBadgeContainer,
                onClick: () => W(t),
                'aria-label': F.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
                children: (0, r.jsx)('img', {
                    alt: '',
                    className: V.nitroBadgeSvg,
                    src: H,
                    ...e
                })
            })
    });
}
function z(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: _, showTimestampOnHover: m, roleIcon: g, subscribeToGroupId: N, hideTimestamp: x, className: H, channel: W } = e,
        z = i.useMemo(() => (null != _ ? (e) => _(e, t) : void 0), [_, t]),
        [, q] = (0, h.ZP)(t.author.id, e.guildId),
        Q = (0, l.e7)([v.Z], () => v.Z.getGuild(e.guildId), [e.guildId]),
        X = null != t.author && null != Q && C.Z.canManageUser(B.Plq.MODERATE_MEMBERS, t.author, Q),
        $ = q && X,
        J = (function (e) {
            var t, n;
            let { props: a, guildId: s, handleRenderPopout: _, showCommunicationDisabledStyles: E = !1, className: f } = e,
                { message: h, author: p, compact: I = !1, subscribeToGroupId: m, animate: T = !0, onContextMenu: S, onClickAvatar: g, onPopoutRequestClose: N, showAvatarPopout: v } = a,
                [C, L] = i.useState(!1),
                { analyticsLocations: b } = (0, d.ZP)(c.Z.AVATAR),
                M = (0, l.e7)([O.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : O.ZP.displayCompactAvatars;
                }),
                P = null != h.messageReference && null != h.webhookId && h.hasFlag(B.iLy.IS_CROSSPOST),
                U = h.author,
                { id: w } = U,
                x = I ? 32 : 80,
                {
                    avatarSrc: G,
                    avatarDecorationSrc: k,
                    eventHandlers: F
                } = (0, A.Z)({
                    user: U,
                    guildId: s,
                    size: x,
                    animateOnHover: null != m ? !C : !T,
                    showPending: !0
                }),
                V = h.isInteractionPlaceholder(),
                H = i.useMemo(() => {
                    var e, t;
                    return V && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null
                        ? null !==
                              (t = D.ZP.getApplicationIconURL({
                                  id: h.application.id,
                                  icon: h.application.icon,
                                  size: x,
                                  fallbackAvatar: !1
                              })) && void 0 !== t
                            ? t
                            : G
                        : G;
                }, [V, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, U.avatar, x, G]);
            return (i.useEffect(() => {
                if (null != m) return y.S.subscribeKeyed(B.LPv.ANIMATE_CHAT_AVATAR, ''.concat(m, ':').concat(w), L), () => void y.S.unsubscribeKeyed(B.LPv.ANIMATE_CHAT_AVATAR, ''.concat(m, ':').concat(w), L);
            }, [w, m]),
            I && !M)
                ? void 0
                : null != _ && null != v
                  ? (0, r.jsx)(d.Gt, {
                        value: b,
                        children: (0, r.jsx)(u.Popout, {
                            preload: P
                                ? void 0
                                : function () {
                                      return (0, R.Z)(
                                          h.author.id,
                                          null != p.guildMemberAvatar && null != s
                                              ? D.ZP.getGuildMemberAvatarURLSimple({
                                                    guildId: s,
                                                    userId: h.author.id,
                                                    avatar: p.guildMemberAvatar,
                                                    size: 80
                                                })
                                              : h.author.getAvatarURL(void 0, 80, !1),
                                          {
                                              guildId: s,
                                              channelId: h.channel_id
                                          }
                                      );
                                  },
                            renderPopout: _,
                            shouldShow: v,
                            position: o.tq ? 'window_center' : 'right',
                            onRequestClose: N,
                            children: (e) =>
                                Z({
                                    ...F,
                                    avatarSrc: H,
                                    avatarDecorationSrc: k,
                                    compact: I,
                                    onClick: g,
                                    onContextMenu: S,
                                    onMouseDown: e.onMouseDown,
                                    onKeyDown: e.onKeyDown,
                                    showCommunicationDisabledStyles: E,
                                    className: f
                                })
                        })
                    })
                  : (0, r.jsx)(d.Gt, {
                        value: b,
                        children: Z({
                            ...F,
                            avatarSrc: H,
                            avatarDecorationSrc: k,
                            compact: I,
                            onClick: g,
                            onContextMenu: S,
                            onMouseDown: void 0,
                            onKeyDown: void 0,
                            showCommunicationDisabledStyles: E,
                            className: f
                        })
                    });
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: z,
            showCommunicationDisabledStyles: $
        }),
        ee = (0, l.e7)([O.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : O.ZP.displayCompactAvatars;
        }),
        et =
            (!a || ee) && null != g && null != Q
                ? (0, r.jsx)(
                      u.Popout,
                      {
                          animation: u.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(G.Z, {
                                  roleIcon: g,
                                  guild: Q
                              }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(f.Z, {
                                  ...g,
                                  className: V.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || ee) && null != g
                  ? (0, r.jsx)(
                        f.Z,
                        {
                            ...g,
                            className: V.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        en = (0, k.x)({
            message: t,
            channel: W,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        er = [],
        ei = L.default.getCurrentUser(),
        ea = M.ZP.isPremium(t.author),
        es = M.ZP.isPremium(ei),
        eo = null == W ? void 0 : W.isPrivate();
    (0, P.R)(null != g, 'Message Username') &&
        ea &&
        !a &&
        !eo &&
        er.push(
            (0, r.jsx)(
                K,
                {
                    currentUserIsPremium: es,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != et && er.push(et),
        null != Q &&
            (er.push(
                (0, r.jsx)(
                    p.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'new-member'
                )
            ),
            er.push(
                (0, r.jsx)(
                    I.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != W &&
            null != Q &&
            er.push(
                (0, r.jsx)(
                    E.Z,
                    {
                        guild: Q,
                        channel: W,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let el = [];
    (0, b.yE)(t.flags, B.iLy.SUPPRESS_NOTIFICATIONS) && el.push((0, r.jsx)(S.Z, {}, 'suppress-notifications'));
    let eu = {};
    (eu[U.a.SYSTEM_TAG] = en), (eu[U.a.BADGES] = er);
    let ec = Y(e, z, eu),
        ed = (0, w.XX)(t, N),
        e_ = (0, w.Dv)(t),
        eE = x ? ''.concat(ed) : ''.concat(ed, ' ').concat(e_),
        ef = (null == n ? void 0 : n.state) === T.Y.LOADED ? (0, w.Gq)(t) : void 0;
    return (0, r.jsx)(j, {
        message: t,
        avatar: J,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                $ &&
                    (0, r.jsx)(u.Tooltip, {
                        text: F.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: a ? V.compactCommunicationDisabled : V.communicationDisabled
                                    }),
                                    (0, r.jsx)(u.HiddenVisually, { children: F.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
                                ]
                            })
                    }),
                ec
            ]
        }),
        usernameSpanId: (0, w.XX)(t, N),
        usernameClassName: s()(V.headerText, {
            [V.hasRoleIcon]: null != et,
            [V.hasBadges]: null != en || el.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== x,
        showTimestampOnHover: m,
        ariaLabelledBy: eE,
        ariaDescribedBy: ef,
        className: H,
        badges: el
    });
}
