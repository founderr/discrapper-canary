n.d(t, {
    PD: function () {
        return j;
    },
    aR: function () {
        return P;
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
    g = n(434404),
    C = n(496675),
    _ = n(259580),
    v = n(267642),
    x = n(624138),
    I = n(667815),
    b = n(531572),
    E = n(26323),
    S = n(30513),
    Z = n(981631),
    N = n(388032),
    y = n(976019);
let T = (0, x.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    A = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_GUILD, t)),
            p = async () => {
                if (!!u) s(!0), await g.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), s(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': N.intl.string(N.t['m85s/v']),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: N.intl.string(N.t['0CJWPz']),
                checked: r,
                disabled: o,
                action: p
            })
        });
    },
    j = 57,
    P = 57 + T,
    R = {
        tension: 180,
        friction: 80
    };
t.ZP = (e) => {
    let { guild: t, withMargin: n } = e,
        { analyticsLocations: r } = (0, f.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
        { premiumSubscriberCount: u, id: g } = t,
        x = (0, v.rF)(u, g),
        T = (0, v.FZ)(x, t.id),
        j = null == T,
        P = null != T ? T : x,
        M = (0, c.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getCountForGuild(g)) && void 0 !== e ? e : 0;
        }),
        L = (0, c.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        M !== u && (0, I.v)(g, u);
    }, [g, M, u]);
    let w = ''.concat(Math.min(100, (u / (0, v.vn)(t.id)[P]) * 100), '%'),
        { current: D } = l.useRef(w),
        O = {
            from: { width: M === u ? D : '0%' },
            to: { width: w },
            config: R
        },
        [k, U] = (0, d.useSpring)(() => O),
        G = () => {
            (0, m.yw)(Z.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: g,
                location_stack: r
            }),
                (0, E.Z)({
                    analyticsLocations: r,
                    analyticsSourceLocation: {
                        page: Z.ZY5.GUILD_CHANNEL,
                        section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                        object: Z.qAy.TOOLTIP
                    },
                    guild: t,
                    perks: (0, S.VF)(),
                    perkIntro: N.intl.string(N.t.ZhvSn5)
                });
        },
        B = N.intl.formatToPlainString(N.t['2oNfMT'], { levelName: (0, v.e9)(P) }),
        H = N.intl.format(N.t.dhKnYm, {
            numBoosts: u,
            numTotal: (0, v.vn)(t.id)[P]
        });
    j && ((B = (0, v.e9)(P)), (H = N.intl.format(N.t.B2byER, { numBoosts: u })));
    let V = (0, s.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: j ? N.intl.string(N.t['Y+V9go']) : N.intl.formatToPlainString(N.t.UyDKl5, { levelName: (0, v.nW)(P) }),
            color: d.Tooltip.Colors.BLACK,
            position: 'top',
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
                (0, i.jsxs)(d.Clickable, {
                    ...V,
                    ...e,
                    'aria-label': void 0,
                    role: 'button',
                    focusProps: {
                        offset: {
                            left: 10,
                            right: 4
                        }
                    },
                    onClick: G,
                    onMouseEnter: () => {
                        var t;
                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), U(O);
                    },
                    className: a()(y.container, { [y.containerWithMargin]: n }),
                    onContextMenu: (e) => {
                        L &&
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
                            className: y.textArea,
                            children: [
                                (0, i.jsx)('div', {
                                    className: y.goalTextContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        className: y.goalText,
                                        color: 'interactive-active',
                                        variant: 'text-xs/bold',
                                        children: B
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: y.progressFraction,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-xs/normal',
                                            children: H
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            className: y.count,
                                            height: 16,
                                            width: 16,
                                            direction: _.Z.Directions.RIGHT
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(y.progressBarContainer, { [y.progressBarContainerComplete]: j }),
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    className: y.progressBar,
                                    style: k
                                }),
                                j
                                    ? (0, i.jsx)('span', {
                                          'aria-label': N.intl.string(N.t['7iL1q6']),
                                          role: 'img',
                                          className: y.tadaIcon,
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
