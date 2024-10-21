t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    o = t(120356),
    r = t.n(o),
    i = t(100621),
    s = t(399606),
    c = t(692547),
    d = t(780384),
    u = t(481060),
    m = t(596454),
    h = t(410030),
    v = t(339085),
    g = t(14263),
    x = t(689938),
    p = t(695352);
function C(e) {
    let { guildId: n, option: t, selected: o, onSelect: C, hideMemberCount: f, canBeNew: N } = e,
        j = (0, d.wj)((0, h.ZP)()),
        [O, _] = a.useState(!1),
        Z = O && !f,
        T = a.useRef(null),
        { reducedMotion: M } = a.useContext(u.AccessibilityPreferencesContext),
        I = (0, s.e7)([v.ZP], () => {
            var e, n, l, a;
            return (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (a = null === (n = v.ZP.getCustomEmojiById(null === (l = t.emoji) || void 0 === l ? void 0 : l.id)) || void 0 === n ? void 0 : n.animated) && void 0 !== a && a;
        }),
        b = (0, g.Z)(n, 1000),
        A = null == b || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => b[e])),
        D = N && !o && t.isUnseen,
        E = (0, u.useSpring)(
            {
                transform: o || M.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: o ? 1 : 0,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        k = (0, u.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
        y = (0, u.useToken)(c.Z.unsafe_rawColors.BRAND_500),
        S = (0, u.useSpring)(
            {
                from: { color: y.spring() },
                color: k.spring({ opacity: j ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        R = (0, u.useTransition)(
            Z,
            {
                from: {
                    transform: M.enabled ? 'translateX(0)' : 'translateX(8px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateX(0)',
                    opacity: 1
                },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        [w, L] = a.useState(!1);
    a.useEffect(() => {
        if (Z)
            return (
                (T.current = setTimeout(() => {
                    _(!1), (T.current = null);
                }, 3000)),
                () => {
                    null != T.current && clearTimeout(T.current);
                }
            );
    }, [Z]);
    let B = r()(p.optionButtonWrapper, {
            [p.selected]: o,
            [p.pressed]: w
        }),
        P = D ? { borderColor: S.color } : {};
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(i.animated.div, {
            style: P,
            className: B,
            children: (0, l.jsxs)(u.Clickable, {
                className: r()(p.optionButton),
                onClick: () => {
                    _(!o), C(!o);
                },
                onMouseDown: () => L(!0),
                onMouseUp: () => L(!1),
                children: [
                    null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                        ? (0, l.jsx)(m.Z, {
                              animated: t.emoji.animated || I,
                              className: p.buttonEmoji,
                              emojiId: t.emoji.id,
                              emojiName: t.emoji.name
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: p.buttonText,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: t.title
                            }),
                            t.description.length > 0
                                ? (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: t.description
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: p.checkIcon,
                        style: E,
                        children: (0, l.jsx)(u.CheckmarkLargeIcon, {
                            size: 'custom',
                            width: 10,
                            height: 10,
                            color: c.Z.unsafe_rawColors.WHITE_500.css
                        })
                    }),
                    R(
                        (e, n) =>
                            A > 0 &&
                            n &&
                            (0, l.jsx)(i.animated.div, {
                                className: p.memberCount,
                                style: e,
                                children: (0, l.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: x.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({ memberCount: A })
                                })
                            })
                    ),
                    D &&
                        (0, l.jsx)(u.TextBadge, {
                            color: c.Z.unsafe_rawColors.BRAND_260.css,
                            text: x.Z.Messages.NEW,
                            className: p.newBadge
                        })
                ]
            })
        })
    });
}
