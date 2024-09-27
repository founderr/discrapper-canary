n.d(t, {
    CF: function () {
        return q;
    },
    ZP: function () {
        return ee;
    },
    nD: function () {
        return X;
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
    T = n(946241),
    g = n(98278),
    S = n(869765),
    A = n(243317),
    v = n(621853),
    N = n(518950),
    O = n(484459),
    R = n(184301),
    C = n(740492),
    y = n(430824),
    L = n(496675),
    b = n(594174),
    D = n(768581),
    M = n(585483),
    P = n(630388),
    U = n(74538),
    w = n(276554),
    x = n(421399),
    G = n(453687),
    k = n(318713),
    B = n(304176),
    F = n(47930),
    Z = n(981631),
    V = n(689938),
    H = n(825193),
    Y = n(255963);
let j = 32,
    W = 80,
    K = 80;
function z(e) {
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
                className: u()(E, H.avatar, {
                    [H.compact]: r,
                    [H.clickable]: null != i,
                    [H.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == n || r
                ? null
                : (0, o.jsx)('img', {
                      className: H.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function q(e, t, n) {
    let { message: r, channel: i, author: a, compact: s = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: _ } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(x.Z, {
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
                            className: H.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function Q(e) {
    var t, n;
    let { props: r, guildId: i, handleRenderPopout: a, showCommunicationDisabledStyles: l = !1, className: u } = e,
        { message: h, author: p, compact: m = !1, subscribeToGroupId: I, animate: T = !0, onContextMenu: g, onClickAvatar: S, onPopoutRequestClose: A, showAvatarPopout: v } = r,
        [O, y] = s.useState(!1),
        { analyticsLocations: L } = (0, f.ZP)(E.Z.AVATAR),
        b = (0, d.e7)([C.ZP], () => {
            var e;
            return null !== (e = r.displayCompactAvatars) && void 0 !== e ? e : C.ZP.displayCompactAvatars;
        }),
        P = null != h.messageReference && null != h.webhookId && h.hasFlag(Z.iLy.IS_CROSSPOST),
        U = h.author,
        { id: w } = U,
        x = m ? j : W,
        {
            avatarSrc: G,
            avatarDecorationSrc: k,
            eventHandlers: B
        } = (0, N.Z)({
            user: U,
            guildId: i,
            size: x,
            animateOnHover: null != I ? !O : !T,
            showPending: !0
        }),
        F = h.isInteractionPlaceholder(),
        V = s.useMemo(() => {
            var e, t;
            return F && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null
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
        }, [F, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, U.avatar, x, G]);
    if (
        (s.useEffect(() => {
            if (null != I) return M.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y), () => void M.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), y);
        }, [w, I]),
        !m || !!b)
    )
        return null != a && null != v
            ? (0, o.jsx)(f.Gt, {
                  value: L,
                  children: (0, o.jsx)(_.Popout, {
                      preload: P ? void 0 : H,
                      renderPopout: a,
                      shouldShow: v,
                      position: c.tq ? 'window_center' : 'right',
                      onRequestClose: A,
                      children: (e) =>
                          z({
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
                  value: L,
                  children: z({
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
        return (0, R.Z)(
            h.author.id,
            null != p.guildMemberAvatar && null != i
                ? D.ZP.getGuildMemberAvatarURLSimple({
                      guildId: i,
                      userId: h.author.id,
                      avatar: p.guildMemberAvatar,
                      size: K
                  })
                : h.author.getAvatarURL(void 0, K, !1),
            {
                guildId: i,
                channelId: h.channel_id
            }
        );
    }
}
function X(e) {
    let { message: t, avatar: n, username: r, usernameSpanId: i, usernameClassName: a, compact: s, showTimestamp: l, showTimestampOnHover: c, ariaLabelledBy: d, ariaDescribedBy: E, className: f, messageClassname: h, badges: p } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            !s && n,
            (0, o.jsxs)(_.H, {
                className: u()(H.header, f),
                'aria-describedby': E,
                'aria-labelledby': d,
                children: [
                    l &&
                        s &&
                        (0, o.jsx)(k.Z, {
                            id: (0, G.Dv)(t),
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
                        (0, o.jsx)(k.Z, {
                            id: (0, G.Dv)(t),
                            timestamp: t.timestamp,
                            className: h
                        }),
                    null != p && p.length > 0
                        ? (0, o.jsx)('div', {
                              className: H.badgesContainer,
                              children: p
                          })
                        : null
                ]
            })
        ]
    });
}
let $ = (e) => {
    !e && (0, g.z)();
};
function J(e) {
    let { currentUserIsPremium: t, author: n } = e,
        r = (0, d.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, o.jsx)(_.Tooltip, {
        tooltipClassName: H.nitroAuthorBadgeTootip,
        shouldShow: null != r,
        text: V.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: r }),
        onTooltipShow: () => (0, O.Z)(n.id),
        children: (e) =>
            (0, o.jsx)(_.Clickable, {
                className: H.nitroAuthorBadgeContainer,
                onClick: () => $(t),
                'aria-label': V.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: r }),
                children: (0, o.jsx)('img', {
                    alt: '',
                    className: H.nitroBadgeSvg,
                    src: Y,
                    ...e
                })
            })
    });
}
function ee(e) {
    let { message: t, repliedMessage: n, compact: r = !1, renderPopout: i, showTimestampOnHover: a, roleIcon: l, subscribeToGroupId: c, hideTimestamp: E, className: f, channel: g } = e,
        v = s.useMemo(() => (null != i ? (e) => i(e, t) : void 0), [i, t]),
        [, N] = (0, m.ZP)(t.author.id, e.guildId),
        O = (0, d.e7)([y.Z], () => y.Z.getGuild(e.guildId), [e.guildId]),
        R = null != t.author && null != O && L.Z.canManageUser(Z.Plq.MODERATE_MEMBERS, t.author, O),
        D = N && R,
        M = Q({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: v,
            showCommunicationDisabledStyles: D
        }),
        k = (0, d.e7)([C.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : C.ZP.displayCompactAvatars;
        }),
        Y =
            (!r || k) && null != l && null != O
                ? (0, o.jsx)(
                      _.Popout,
                      {
                          animation: _.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, o.jsx)(B.Z, {
                                  roleIcon: l,
                                  guild: O
                              }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, o.jsx)(p.Z, {
                                  ...l,
                                  className: H.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!r || k) && null != l
                  ? (0, o.jsx)(
                        p.Z,
                        {
                            ...l,
                            className: H.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        j = (0, F.x)({
            message: t,
            channel: g,
            user: null == t ? void 0 : t.author,
            compact: r,
            isRepliedMessage: !1
        }),
        W = [],
        K = b.default.getCurrentUser(),
        z = U.ZP.isPremium(t.author),
        $ = U.ZP.isPremium(K),
        ee = null == g ? void 0 : g.isPrivate();
    (0, w.R)(null != l, 'Message Username') &&
        z &&
        !r &&
        !ee &&
        W.push(
            (0, o.jsx)(
                J,
                {
                    currentUserIsPremium: $,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != Y && W.push(Y),
        null != O &&
            (W.push(
                (0, o.jsx)(
                    I.Z,
                    {
                        guild: O,
                        message: t
                    },
                    'new-member'
                )
            ),
            W.push(
                (0, o.jsx)(
                    T.Z,
                    {
                        guild: O,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != g &&
            null != O &&
            W.push(
                (0, o.jsx)(
                    h.Z,
                    {
                        guild: O,
                        channel: g,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let et = [];
    (0, P.yE)(t.flags, Z.iLy.SUPPRESS_NOTIFICATIONS) && et.push((0, o.jsx)(A.Z, {}, 'suppress-notifications'));
    let en = {};
    (en[x.a.SYSTEM_TAG] = j), (en[x.a.BADGES] = W);
    let er = q(e, v, en),
        ei = (0, G.XX)(t, c),
        ea = (0, G.Dv)(t),
        eo = E ? ''.concat(ei) : ''.concat(ei, ' ').concat(ea),
        es = (null == n ? void 0 : n.state) === S.Y.LOADED ? (0, G.Gq)(t) : void 0,
        el = !0 !== E;
    return (0, o.jsx)(X, {
        message: t,
        avatar: M,
        username: (0, o.jsxs)(o.Fragment, {
            children: [
                D &&
                    (0, o.jsx)(_.Tooltip, {
                        text: V.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                        children: (e) =>
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(_.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: r ? H.compactCommunicationDisabled : H.communicationDisabled
                                    }),
                                    (0, o.jsx)(_.HiddenVisually, { children: V.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
                                ]
                            })
                    }),
                er
            ]
        }),
        usernameSpanId: (0, G.XX)(t, c),
        usernameClassName: u()(H.headerText, {
            [H.hasRoleIcon]: null != Y,
            [H.hasBadges]: null != j || et.length > 0
        }),
        compact: r,
        showTimestamp: el,
        showTimestampOnHover: a,
        ariaLabelledBy: eo,
        ariaDescribedBy: es,
        className: f,
        badges: et
    });
}
