n.d(t, {
    PD: function () {
        return P;
    },
    aR: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    m = n(367907),
    f = n(906732),
    g = n(540059),
    C = n(434404),
    _ = n(496675),
    v = n(259580),
    x = n(267642),
    I = n(624138),
    b = n(667815),
    E = n(531572),
    S = n(26323),
    Z = n(30513),
    N = n(981631),
    y = n(388032),
    T = n(976019);
let j = (0, I.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([_.Z], () => _.Z.can(N.Plq.MANAGE_GUILD, t)),
            p = async () => {
                if (!!u) s(!0), await C.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), s(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': y.intl.string(y.t['m85s/v']),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: y.intl.string(y.t['0CJWPz']),
                checked: r,
                disabled: o,
                action: p
            })
        });
    },
    P = 57,
    R = 57 + j,
    M = {
        tension: 180,
        friction: 80
    };
t.ZP = (e) => {
    let { guild: t, withMargin: n } = e,
        r = (0, g.Q3)('GuildBoostingSidebarDisplay'),
        { analyticsLocations: u } = (0, f.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
        { premiumSubscriberCount: C, id: I } = t,
        j = (0, x.rF)(C, I),
        P = (0, x.FZ)(j, t.id),
        R = null == P,
        L = null != P ? P : j,
        w = (0, c.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getCountForGuild(I)) && void 0 !== e ? e : 0;
        }),
        D = (0, c.e7)([_.Z], () => _.Z.can(N.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        w !== C && (0, b.v)(I, C);
    }, [I, w, C]);
    let O = ''.concat(Math.min(100, (C / (0, x.vn)(t.id)[L]) * 100), '%'),
        { current: k } = l.useRef(O),
        U = {
            from: { width: w === C ? k : '0%' },
            to: { width: O },
            config: M
        },
        [G, B] = (0, d.useSpring)(() => U),
        H = () => {
            (0, m.yw)(N.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: I,
                location_stack: u
            }),
                (0, S.Z)({
                    analyticsLocations: u,
                    analyticsSourceLocation: {
                        page: N.ZY5.GUILD_CHANNEL,
                        section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                        object: N.qAy.TOOLTIP
                    },
                    guild: t,
                    perks: (0, Z.VF)(),
                    perkIntro: y.intl.string(y.t.ZhvSn5)
                });
        },
        V = y.intl.formatToPlainString(y.t['2oNfMT'], { levelName: (0, x.e9)(L) }),
        F = y.intl.format(y.t.dhKnYm, {
            numBoosts: C,
            numTotal: (0, x.vn)(t.id)[L]
        });
    R && ((V = (0, x.e9)(L)), (F = y.intl.format(y.t.B2byER, { numBoosts: C }))), r && (V = V.toLocaleLowerCase());
    let W = (0, s.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: R ? y.intl.string(y.t['Y+V9go']) : y.intl.formatToPlainString(y.t.UyDKl5, { levelName: (0, x.nW)(L) }),
            color: d.Tooltip.Colors.BLACK,
            position: 'top',
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
                (0, i.jsxs)(d.Clickable, {
                    ...W,
                    ...e,
                    'aria-label': void 0,
                    role: 'button',
                    focusProps: {
                        offset: {
                            left: 10,
                            right: 4
                        }
                    },
                    onClick: H,
                    onMouseEnter: () => {
                        var t;
                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), B(U);
                    },
                    className: a()(T.container, { [T.containerWithMargin]: n }),
                    onContextMenu: (e) => {
                        D &&
                            (0, h.vq)(e, (e) =>
                                (0, i.jsx)(A, {
                                    ...e,
                                    guild: t
                                })
                            );
                    },
                    children: [
                        (0, i.jsx)(d.HiddenVisually, { children: e['aria-label'] }),
                        (0, i.jsxs)('div', {
                            className: T.textArea,
                            children: [
                                (0, i.jsx)('div', {
                                    className: T.goalTextContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        className: T.goalText,
                                        color: r ? 'none' : 'interactive-active',
                                        variant: r ? 'text-sm/medium' : 'text-xs/bold',
                                        children: V
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.progressFraction,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            color: r ? 'none' : 'interactive-normal',
                                            variant: r ? 'text-sm/medium' : 'text-xs/normal',
                                            className: T.progressText,
                                            children: F
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            className: T.count,
                                            height: 16,
                                            width: 16,
                                            direction: v.Z.Directions.RIGHT
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(T.progressBarContainer, { [T.progressBarContainerComplete]: R }),
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    className: T.progressBar,
                                    style: G
                                }),
                                R
                                    ? (0, i.jsx)('span', {
                                          'aria-label': y.intl.string(y.t['7iL1q6']),
                                          role: 'img',
                                          className: T.tadaIcon,
                                          children: '\uD83C\uDF89'
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
};
