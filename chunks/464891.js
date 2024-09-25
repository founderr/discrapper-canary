n.d(t, {
    CF: function () {
        return z;
    },
    ZP: function () {
        return J;
    },
    nD: function () {
        return Q;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(789020);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(873546),
    d = n(442837),
    _ = n(481060),
    E = n(100527),
    f = n(906732),
    h = n(366030),
    p = n(91218),
    m = n(71619),
    I = n(340797),
    T = n(98278),
    g = n(869765),
    S = n(243317),
    A = n(621853),
    v = n(518950),
    N = n(484459),
    O = n(184301),
    R = n(740492),
    C = n(430824),
    y = n(496675),
    b = n(594174),
    L = n(768581),
    D = n(585483),
    M = n(630388),
    P = n(74538),
    U = n(276554),
    w = n(421399),
    x = n(453687),
    G = n(318713),
    k = n(304176),
    B = n(47930),
    F = n(981631),
    Z = n(689938),
    V = n(825193),
    H = n(255963);
let Y = 32,
    j = 80,
    W = 80;
function K(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: r, onClick: i, onContextMenu: a, onMouseDown: s, onMouseEnter: l, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: _ = !1, className: E } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('img', {
                onClick: i,
                onContextMenu: a,
                onMouseDown: s,
                onKeyDown: d,
                onMouseEnter: l,
                onMouseLeave: c,
                src: t,
                'aria-hidden': !0,
                className: u()(E, V.avatar, {
                    [V.compact]: r,
                    [V.clickable]: null != i,
                    [V.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == n || r
                ? null
                : (0, o.jsx)('img', {
                      className: V.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function z(e, t, n) {
    let { message: r, channel: i, author: a, compact: s = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: _ } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(w.Z, {
                message: r,
                channel: i,
                author: a,
                compact: s,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: _,
                decorations: n,
                renderRemixTag: !0
            }),
            s &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('i', {
                            className: V.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function q(e) {
    var t, n;
    let { props: r, guildId: i, handleRenderPopout: a, showCommunicationDisabledStyles: l = !1, className: u } = e,
        { message: h, author: p, compact: m = !1, subscribeToGroupId: I, animate: T = !0, onContextMenu: g, onClickAvatar: S, onPopoutRequestClose: A, showAvatarPopout: N } = r,
        [C, y] = s.useState(!1),
        { analyticsLocations: b } = (0, f.ZP)(E.Z.AVATAR),
        M = (0, d.e7)([R.ZP], () => {
            var e;
            return null !== (e = r.displayCompactAvatars) && void 0 !== e ? e : R.ZP.displayCompactAvatars;
        }),
        P = null != h.messageReference && null != h.webhookId && h.hasFlag(F.iLy.IS_CROSSPOST),
        U = h.author,
        { id: w } = U,
        x = m ? Y : j,
        {
            avatarSrc: G,
            avatarDecorationSrc: k,
            eventHandlers: B
        } = (0, v.Z)({
            user: U,
            guildId: i,
            size: x,
            animateOnHover: null != I ? !C : !T,
            showPending: !0
        }),
        Z = h.isInteractionPlaceholder(),
        V = s.useMemo(() => {
            var e, t;
            return Z && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null
                ? null !==
                      (t = L.ZP.getApplicationIconURL({
                          id: h.application.id,
                          icon: h.application.icon,
                          size: x,
                          fallbackAvatar: !1
                      })) && void 0 !== t
                    ? t
                    : G
                : G;
        }, [Z, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, U.avatar, x, G]);
    if (
        (s.useEffect(() => {
            if (null != I) return D.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y), () => void D.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y);
        }, [w, I]),
        !m || !!M)
    )
        return null != a && null != N
            ? (0, o.jsx)(f.Gt, {
                  value: b,
                  children: (0, o.jsx)(_.Popout, {
                      preload: P ? void 0 : H,
                      renderPopout: a,
                      shouldShow: N,
                      position: c.tq ? 'window_center' : 'right',
                      onRequestClose: A,
                      children: (e) =>
                          K({
                              ...B,
                              avatarSrc: V,
                              avatarDecorationSrc: k,
                              compact: m,
                              onClick: S,
                              onContextMenu: g,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: l,
                              className: u
                          })
                  })
              })
            : (0, o.jsx)(f.Gt, {
                  value: b,
                  children: K({
                      ...B,
                      avatarSrc: V,
                      avatarDecorationSrc: k,
                      compact: m,
                      onClick: S,
                      onContextMenu: g,
                      onMouseDown: void 0,
                      onKeyDown: void 0,
                      showCommunicationDisabledStyles: l,
                      className: u
                  })
              });
    function H() {
        return (0, O.Z)(
            h.author.id,
            null != p.guildMemberAvatar && null != i
                ? L.ZP.getGuildMemberAvatarURLSimple({
                      guildId: i,
                      userId: h.author.id,
                      avatar: p.guildMemberAvatar,
                      size: W
                  })
                : h.author.getAvatarURL(void 0, W, !1),
            {
                guildId: i,
                channelId: h.channel_id
            }
        );
    }
}
function Q(e) {
    let { message: t, avatar: n, username: r, usernameSpanId: i, usernameClassName: a, compact: s, showTimestamp: l, showTimestampOnHover: c, ariaLabelledBy: d, ariaDescribedBy: E, className: f, messageClassname: h, badges: p } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            !s && n,
            (0, o.jsxs)(_.H, {
                className: u()(V.header, f),
                'aria-describedby': E,
                'aria-labelledby': d,
                children: [
                    l &&
                        s &&
                        (0, o.jsx)(G.Z, {
                            id: (0, x.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: c,
                            className: h,
                            isInline: !1
                        }),
                    s && n,
                    (0, o.jsx)('span', {
                        id: i,
                        className: a,
                        children: r
                    }),
                    l &&
                        !s &&
                        (0, o.jsx)(G.Z, {
                            id: (0, x.Dv)(t),
                            timestamp: t.timestamp,
                            className: h
                        }),
                    null != p && p.length > 0
                        ? (0, o.jsx)('div', {
                              className: V.badgesContainer,
                              children: p
                          })
                        : null
                ]
            })
        ]
    });
}
let X = (e) => {
    !e && (0, T.z)();
};
function $(e) {
    let { currentUserIsPremium: t, author: n } = e,
        r = (0, d.e7)([A.Z], () => {
            var e;
            return null === (e = A.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, o.jsx)(_.Tooltip, {
        tooltipClassName: V.nitroAuthorBadgeTootip,
        shouldShow: null != r,
        text: Z.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: r }),
        onTooltipShow: () => (0, N.Z)(n.id),
        children: (e) =>
            (0, o.jsx)(_.Clickable, {
                className: V.nitroAuthorBadgeContainer,
                onClick: () => X(t),
                'aria-label': Z.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: r }),
                children: (0, o.jsx)('img', {
                    alt: '',
                    className: V.nitroBadgeSvg,
                    src: H,
                    ...e
                })
            })
    });
}
function J(e) {
    let { message: t, repliedMessage: n, compact: r = !1, renderPopout: i, showTimestampOnHover: a, roleIcon: l, subscribeToGroupId: c, hideTimestamp: E, className: f, channel: T } = e,
        A = s.useMemo(() => (null != i ? (e) => i(e, t) : void 0), [i, t]),
        [, v] = (0, m.ZP)(t.author.id, e.guildId),
        N = (0, d.e7)([C.Z], () => C.Z.getGuild(e.guildId), [e.guildId]),
        O = null != t.author && null != N && y.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, N),
        L = v && O,
        D = q({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: A,
            showCommunicationDisabledStyles: L
        }),
        G = (0, d.e7)([R.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : R.ZP.displayCompactAvatars;
        }),
        H =
            (!r || G) && null != l && null != N
                ? (0, o.jsx)(
                      _.Popout,
                      {
                          animation: _.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, o.jsx)(k.Z, {
                                  roleIcon: l,
                                  guild: N
                              }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, o.jsx)(p.Z, {
                                  ...l,
                                  className: V.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!r || G) && null != l
                  ? (0, o.jsx)(
                        p.Z,
                        {
                            ...l,
                            className: V.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        Y = (0, B.x)({
            message: t,
            channel: T,
            user: null == t ? void 0 : t.author,
            compact: r,
            isRepliedMessage: !1
        }),
        j = [],
        W = b.default.getCurrentUser(),
        K = P.ZP.isPremium(t.author),
        X = P.ZP.isPremium(W),
        J = null == T ? void 0 : T.isPrivate();
    (0, U.R)(null != l, 'Message Username') &&
        K &&
        !r &&
        !J &&
        j.push(
            (0, o.jsx)(
                $,
                {
                    currentUserIsPremium: X,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != H && j.push(H),
        null != N &&
            j.push(
                (0, o.jsx)(
                    I.Z,
                    {
                        guild: N,
                        message: t
                    },
                    'new-member'
                )
            ),
        null != T &&
            null != N &&
            j.push(
                (0, o.jsx)(
                    h.Z,
                    {
                        guild: N,
                        channel: T,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ee = [];
    (0, M.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && ee.push((0, o.jsx)(S.Z, {}, 'suppress-notifications'));
    let et = {};
    (et[w.a.SYSTEM_TAG] = Y), (et[w.a.BADGES] = j);
    let en = z(e, A, et),
        er = (0, x.XX)(t, c),
        ei = (0, x.Dv)(t),
        ea = E ? ''.concat(er) : ''.concat(er, ' ').concat(ei),
        eo = (null == n ? void 0 : n.state) === g.Y.LOADED ? (0, x.Gq)(t) : void 0,
        es = !0 !== E;
    return (0, o.jsx)(Q, {
        message: t,
        avatar: D,
        username: (0, o.jsxs)(o.Fragment, {
            children: [
                L &&
                    (0, o.jsx)(_.Tooltip, {
                        text: Z.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                        children: (e) =>
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(_.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: r ? V.compactCommunicationDisabled : V.communicationDisabled
                                    }),
                                    (0, o.jsx)(_.HiddenVisually, { children: Z.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
                                ]
                            })
                    }),
                en
            ]
        }),
        usernameSpanId: (0, x.XX)(t, c),
        usernameClassName: u()(V.headerText, {
            [V.hasRoleIcon]: null != H,
            [V.hasBadges]: null != Y || ee.length > 0
        }),
        compact: r,
        showTimestamp: es,
        showTimestampOnHover: a,
        ariaLabelledBy: ea,
        ariaDescribedBy: eo,
        className: f,
        badges: ee
    });
}
