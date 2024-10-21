t.d(n, {
    Z: function () {
        return v;
    },
    _: function () {
        return p;
    }
});
var l = t(200651),
    s = t(192379),
    u = t(120356),
    i = t.n(u);
if (12633 == t.j) var r = t(91192);
var a = t(442837),
    I = t(481060),
    _ = t(43267),
    o = t(933557),
    E = t(471445),
    N = t(111028),
    d = t(727429),
    T = t(810123),
    S = t(690221),
    c = t(430824),
    O = t(158776),
    f = t(111583),
    M = t(594174),
    m = t(998502),
    U = t(981631),
    P = t(490897),
    D = t(206197);
let g = {
    SELECTED: D.modeSelected,
    CONNECTED: D.modeConnected,
    UNREAD_IMPORTANT: D.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
    MUTED: D.modeMuted,
    LOCKED: D.modeLocked
};
function h(e) {
    e.preventDefault(), e.stopPropagation();
}
let A = m.ZP.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;
function R(e) {
    let { channel: n } = e;
    return (0, l.jsx)(A, {
        src: (0, _.x)(n),
        'aria-hidden': !0,
        size: I.AvatarSizes.SIZE_20
    });
}
function V(e) {
    let { channel: n } = e,
        t = (0, a.e7)([M.default], () => M.default.getUser(null == n ? void 0 : n.recipients[0])),
        s = (0, a.e7)([f.Z], () => !(null == t || null == n || n.isMultiUserDM()) && null != f.Z.getTypingUsers(null == n ? void 0 : n.id)[null == t ? void 0 : t.id]),
        { status: u, isMobile: i } = (0, a.cj)([O.Z], () =>
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
    return (0, l.jsx)(A, {
        size: I.AvatarSizes.SIZE_20,
        src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
        status: u,
        isMobile: i,
        isTyping: s,
        'aria-label': null == t ? void 0 : t.username,
        statusTooltip: !0
    });
}
let p = (e) => {
    let { className: n, channel: t, locked: s, hasActiveThreads: u, withGuildIcon: r } = e,
        _ = (0, a.e7)([c.Z], () => c.Z.getGuild(t.guild_id), [t.guild_id]),
        o = t.type === U.d4z.DM || t.type === U.d4z.GROUP_DM,
        N = null;
    if (r && null != _ && !o)
        N = (0, l.jsx)(T.Z, {
            size: T.E.SMALL_32,
            className: D.iconContainerWithGuildIcon,
            iconClassName: D.iconWithGuildIcon,
            channel: t,
            guild: _,
            locked: s,
            hasActiveThreads: u
        });
    else {
        let e = (function (e, n, t) {
            switch (e.type) {
                case U.d4z.DM:
                    return function () {
                        return (0, l.jsx)(V, { channel: e });
                    };
                case U.d4z.GROUP_DM:
                    return function () {
                        return (0, l.jsx)(R, { channel: e });
                    };
                default:
                    return (0, E.KS)(e, n, t);
            }
        })(t, _, {
            locked: s,
            hasActiveThreads: u
        });
        if (null == e) return null;
        N = (0, l.jsx)(e, {
            color: 'currentColor',
            className: i()(D.icon, n)
        });
    }
    let d = r ? (null == _ ? void 0 : _.name) : (0, E.bT)(t, _, s, u),
        S = r && null != _ ? ''.concat(_.name, ' - ').concat(d, ' icon') : ''.concat(d, ' icon');
    return (0, l.jsx)(I.Tooltip, {
        text: d,
        delay: 500,
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                role: 'img',
                'aria-label': S,
                className: i()(D.iconContainer),
                children: N
            })
    });
};
function v(e) {
    var n;
    let {
            channel: t,
            name: u,
            muted: a,
            selected: _,
            connected: E,
            unread: T,
            locked: c,
            hasActiveThreads: O,
            onClick: f,
            onMouseDown: M,
            onMouseUp: m,
            onContextMenu: A,
            connectDragPreview: R,
            className: V,
            iconClassName: v,
            subtitle: Z,
            subtitleColor: C,
            channel: { type: L },
            onMouseEnter: y,
            onMouseLeave: x,
            'aria-label': G,
            children: H,
            guild: b,
            channelTypeOverride: z,
            forceInteractable: j,
            mentionCount: X,
            resolvedUnreadSetting: k,
            isFavoriteSuggestion: F,
            withGuildIcon: w
        } = e,
        Y = k === P.i.ALL_MESSAGES || (null != X && X > 0),
        { role: q, ...B } = (0, r.JA)(t.id),
        K = s.useRef(null),
        W = s.useRef(null),
        J = (0, d.Z)(t),
        Q = U.Z5c.CHANNEL(J, t.id),
        $ = (0, o.ZP)(t),
        ee = t.isGuildVocal(),
        en = t.hdStreamingUntil,
        et = t.type,
        el = s.useMemo(() => {
            if (et === U.d4z.GUILD_VOICE) return null != en && new Date(en) > new Date();
        }, [en, et]),
        es = (0, l.jsx)('div', {
            className: i()({
                [D.favoritesSuggestion]: F,
                [D.hdStreamed]: el
            }),
            ref: W,
            children: (0, l.jsxs)(S.Z, {
                role: ee && !E ? 'button' : 'link',
                href: ee ? void 0 : Q,
                target: '_blank',
                ref: K,
                className: D.link,
                onClick: () => (null == f ? void 0 : f(t)),
                ...B,
                'aria-label': G,
                focusProps: { enabled: !1 },
                children: [
                    (0, l.jsxs)('div', {
                        className: D.linkTop,
                        children: [
                            (0, l.jsx)(p, {
                                className: v,
                                channel: t,
                                guild: b,
                                hasActiveThreads: O,
                                locked: c,
                                withGuildIcon: w
                            }),
                            (0, l.jsx)(N.Z, {
                                className: i()(D.name),
                                'aria-hidden': !0,
                                children: null == u ? $ : u
                            }),
                            s.Children.count(H) > 0
                                ? (0, l.jsx)('div', {
                                      onClick: h,
                                      className: D.children,
                                      children: H
                                  })
                                : null
                        ]
                    }),
                    null != Z
                        ? (0, l.jsx)('div', {
                              className: i()(D.linkBottom, { [D.withGuildIcon]: w }),
                              children: (0, l.jsx)(I.Text, {
                                  color: null != C ? C : 'text-muted',
                                  variant: 'text-xs/medium',
                                  className: D.subtitle,
                                  children: Z
                              })
                          })
                        : null
                ]
            })
        });
    return (0, l.jsx)(I.FocusRing, {
        focusTarget: K,
        ringTarget: W,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, l.jsxs)('div', {
            className: i()(
                V,
                null != f || null != m || null != M || j ? D.wrapper : D.notInteractive,
                (() => {
                    if (_) return g.SELECTED;
                    if (E) return g.CONNECTED;
                    if (c) return g.LOCKED;
                    if (a) return g.MUTED;
                    if (T) return Y ? g.UNREAD_IMPORTANT : g.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case U.d4z.GUILD_STAGE_VOICE:
                        case U.d4z.GUILD_VOICE:
                            return D.typeVoice;
                        case U.d4z.ANNOUNCEMENT_THREAD:
                        case U.d4z.PUBLIC_THREAD:
                        case U.d4z.PRIVATE_THREAD:
                            return D.typeThread;
                        case U.d4z.GUILD_ANNOUNCEMENT:
                        case U.d4z.GUILD_TEXT:
                        case U.d4z.GUILD_STORE:
                        case U.d4z.GUILD_FORUM:
                        case U.d4z.GUILD_MEDIA:
                        default:
                            return D.typeDefault;
                    }
                })(null != z ? z : L)
            ),
            onMouseUp: (e) => (null == m ? void 0 : m(e, t)),
            onMouseDown: (e) => (null == M ? void 0 : M(e, t)),
            onContextMenu: (e) => (null == A ? void 0 : A(e, t)),
            onMouseEnter: y,
            onMouseLeave: x,
            children: [a || !T ? null : (0, l.jsx)('div', { className: i()(D.unread, Y ? D.unreadImportant : void 0) }), null !== (n = null == R ? void 0 : R(es)) && void 0 !== n ? n : es]
        })
    });
}
