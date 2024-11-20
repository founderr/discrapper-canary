t.d(n, {
    Z: function () {
        return R;
    },
    _: function () {
        return V;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    u = t.n(r);
if (12633 == t.j) var a = t(91192);
var s = t(442837),
    I = t(481060),
    o = t(43267),
    T = t(933557),
    _ = t(471445),
    d = t(111028),
    c = t(727429),
    N = t(810123),
    E = t(690221),
    S = t(430824),
    O = t(158776),
    f = t(111583),
    m = t(594174),
    P = t(998502),
    g = t(981631),
    h = t(490897),
    M = t(206197);
let D = {
    SELECTED: M.modeSelected,
    CONNECTED: M.modeConnected,
    UNREAD_IMPORTANT: M.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: M.modeUnreadLessImportant,
    MUTED: M.modeMuted,
    LOCKED: M.modeLocked
};
function U(e) {
    e.preventDefault(), e.stopPropagation();
}
let p = P.ZP.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;
function A(e) {
    let { channel: n } = e;
    return (0, l.jsx)(p, {
        src: (0, o.x)(n),
        'aria-hidden': !0,
        size: I.AvatarSizes.SIZE_20
    });
}
function v(e) {
    let { channel: n } = e,
        t = (0, s.e7)([m.default], () => m.default.getUser(null == n ? void 0 : n.recipients[0])),
        i = (0, s.e7)([f.Z], () => !(null == t || null == n || n.isMultiUserDM()) && null != f.Z.getTypingUsers(null == n ? void 0 : n.id)[null == t ? void 0 : t.id]),
        { status: r, isMobile: u } = (0, s.cj)([O.Z], () =>
            null == t || null == n || n.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: O.Z.getStatus(t.id),
                      isMobile: O.Z.isMobileOnline(t.id)
                  }
        );
    return (0, l.jsx)(p, {
        size: I.AvatarSizes.SIZE_20,
        src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
        status: r,
        isMobile: u,
        isTyping: i,
        'aria-label': null == t ? void 0 : t.username,
        statusTooltip: !0
    });
}
let V = (e) => {
    let { className: n, channel: t, locked: i, hasActiveThreads: r, withGuildIcon: a } = e,
        o = (0, s.e7)([S.Z], () => S.Z.getGuild(t.guild_id), [t.guild_id]),
        T = t.type === g.d4z.DM || t.type === g.d4z.GROUP_DM,
        d = null;
    if (a && null != o && !T)
        d = (0, l.jsx)(N.Z, {
            size: N.E.SMALL_32,
            className: M.iconContainerWithGuildIcon,
            iconClassName: M.iconWithGuildIcon,
            channel: t,
            guild: o,
            locked: i,
            hasActiveThreads: r
        });
    else {
        let e = (function (e, n, t) {
            switch (e.type) {
                case g.d4z.DM:
                    return function () {
                        return (0, l.jsx)(v, { channel: e });
                    };
                case g.d4z.GROUP_DM:
                    return function () {
                        return (0, l.jsx)(A, { channel: e });
                    };
                default:
                    return (0, _.KS)(e, n, t);
            }
        })(t, o, {
            locked: i,
            hasActiveThreads: r
        });
        if (null == e) return null;
        d = (0, l.jsx)(e, {
            color: 'currentColor',
            className: u()(M.icon, n)
        });
    }
    let c = a ? (null == o ? void 0 : o.name) : (0, _.bT)(t, o, i, r),
        E = a && null != o ? ''.concat(o.name, ' - ').concat(c, ' icon') : ''.concat(c, ' icon');
    return (0, l.jsx)(I.Tooltip, {
        text: c,
        delay: 500,
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                role: 'img',
                'aria-label': E,
                className: u()(M.iconContainer),
                children: d
            })
    });
};
function R(e) {
    var n;
    let {
            channel: t,
            name: r,
            muted: s,
            selected: o,
            connected: _,
            unread: N,
            locked: S,
            hasActiveThreads: O,
            onClick: f,
            onMouseDown: m,
            onMouseUp: P,
            onContextMenu: p,
            connectDragPreview: A,
            className: v,
            iconClassName: R,
            subtitle: C,
            subtitleColor: L,
            channel: { type: x },
            onMouseEnter: y,
            onMouseLeave: Z,
            'aria-label': G,
            children: H,
            guild: z,
            channelTypeOverride: b,
            forceInteractable: j,
            mentionCount: k,
            resolvedUnreadSetting: F,
            isFavoriteSuggestion: Y,
            withGuildIcon: w
        } = e,
        q = F === h.i.ALL_MESSAGES || (null != k && k > 0),
        { role: B, ...X } = (0, a.JA)(t.id),
        W = i.useRef(null),
        J = i.useRef(null),
        K = (0, c.Z)(t),
        Q = g.Z5c.CHANNEL(K, t.id),
        $ = (0, T.ZP)(t),
        ee = t.isGuildVocal(),
        en = (0, l.jsx)('div', {
            className: u()({ [M.favoritesSuggestion]: Y }),
            ref: J,
            children: (0, l.jsxs)(E.Z, {
                role: ee && !_ ? 'button' : 'link',
                href: ee ? void 0 : Q,
                target: '_blank',
                ref: W,
                className: M.link,
                onClick: () => (null == f ? void 0 : f(t)),
                ...X,
                'aria-label': G,
                focusProps: { enabled: !1 },
                children: [
                    (0, l.jsxs)('div', {
                        className: M.linkTop,
                        children: [
                            (0, l.jsx)(V, {
                                className: R,
                                channel: t,
                                guild: z,
                                hasActiveThreads: O,
                                locked: S,
                                withGuildIcon: w
                            }),
                            (0, l.jsx)(d.Z, {
                                className: u()(M.name),
                                'aria-hidden': !0,
                                children: null == r ? $ : r
                            }),
                            i.Children.count(H) > 0
                                ? (0, l.jsx)('div', {
                                      onClick: U,
                                      className: M.children,
                                      children: H
                                  })
                                : null
                        ]
                    }),
                    null != C
                        ? (0, l.jsx)('div', {
                              className: u()(M.linkBottom, { [M.withGuildIcon]: w }),
                              children: (0, l.jsx)(I.Text, {
                                  color: null != L ? L : 'text-muted',
                                  variant: 'text-xs/medium',
                                  className: M.subtitle,
                                  children: C
                              })
                          })
                        : null
                ]
            })
        });
    return (0, l.jsx)(I.FocusRing, {
        focusTarget: W,
        ringTarget: J,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, l.jsxs)('div', {
            className: u()(
                v,
                null != f || null != P || null != m || j ? M.wrapper : M.notInteractive,
                (() => {
                    if (o) return D.SELECTED;
                    if (_) return D.CONNECTED;
                    if (S) return D.LOCKED;
                    if (s) return D.MUTED;
                    if (N) return q ? D.UNREAD_IMPORTANT : D.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case g.d4z.GUILD_STAGE_VOICE:
                        case g.d4z.GUILD_VOICE:
                            return M.typeVoice;
                        case g.d4z.ANNOUNCEMENT_THREAD:
                        case g.d4z.PUBLIC_THREAD:
                        case g.d4z.PRIVATE_THREAD:
                            return M.typeThread;
                        case g.d4z.GUILD_ANNOUNCEMENT:
                        case g.d4z.GUILD_TEXT:
                        case g.d4z.GUILD_STORE:
                        case g.d4z.GUILD_FORUM:
                        case g.d4z.GUILD_MEDIA:
                        default:
                            return M.typeDefault;
                    }
                })(null != b ? b : x)
            ),
            onMouseUp: (e) => (null == P ? void 0 : P(e, t)),
            onMouseDown: (e) => (null == m ? void 0 : m(e, t)),
            onContextMenu: (e) => (null == p ? void 0 : p(e, t)),
            onMouseEnter: y,
            onMouseLeave: Z,
            children: [s || !N ? null : (0, l.jsx)('div', { className: u()(M.unread, q ? M.unreadImportant : void 0) }), null !== (n = null == A ? void 0 : A(en)) && void 0 !== n ? n : en]
        })
    });
}
