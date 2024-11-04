n.d(t, {
    PD: function () {
        return P;
    },
    aR: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(100621),
    s = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(367907),
    m = n(906732),
    g = n(434404),
    C = n(496675),
    _ = n(259580),
    x = n(267642),
    v = n(624138),
    I = n(667815),
    b = n(531572),
    S = n(26323),
    Z = n(30513),
    N = n(981631),
    E = n(388032),
    y = n(402723);
let j = (0, v.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    T = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([C.Z], () => C.Z.can(N.Plq.MANAGE_GUILD, t)),
            p = async () => {
                if (!!u) s(!0), await g.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), s(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': E.intl.string(E.t['m85s/v']),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: E.intl.string(E.t['0CJWPz']),
                checked: r,
                disabled: o,
                action: p
            })
        });
    },
    P = 57,
    A = 57 + j,
    M = {
        tension: 180,
        friction: 80
    };
t.ZP = (e) => {
    let { guild: t, withMargin: n } = e,
        { analyticsLocations: r } = (0, m.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
        { premiumSubscriberCount: u, id: g } = t,
        v = (0, x.rF)(u, g),
        j = (0, x.FZ)(v, t.id),
        P = null == j,
        A = null != j ? j : v,
        w = (0, c.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getCountForGuild(g)) && void 0 !== e ? e : 0;
        }),
        L = (0, c.e7)([C.Z], () => C.Z.can(N.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        w !== u && (0, I.v)(g, u);
    }, [g, w, u]);
    let R = ''.concat(Math.min(100, (u / (0, x.vn)(t.id)[A]) * 100), '%'),
        { current: D } = l.useRef(R),
        O = {
            from: { width: w === u ? D : '0%' },
            to: { width: R },
            config: M
        },
        [k, U] = (0, d.useSpring)(() => O),
        G = () => {
            (0, f.yw)(N.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: g,
                location_stack: r
            }),
                (0, S.Z)({
                    analyticsLocations: r,
                    analyticsSourceLocation: {
                        page: N.ZY5.GUILD_CHANNEL,
                        section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                        object: N.qAy.TOOLTIP
                    },
                    guild: t,
                    perks: (0, Z.VF)(),
                    perkIntro: E.intl.string(E.t.ZhvSn5)
                });
        },
        B = E.intl.formatToPlainString(E.t['2oNfMT'], { levelName: (0, x.e9)(A) }),
        V = E.intl.format(E.t.dhKnYm, {
            numBoosts: u,
            numTotal: (0, x.vn)(t.id)[A]
        });
    P && ((B = (0, x.e9)(A)), (V = E.intl.format(E.t.B2byER, { numBoosts: u })));
    let H = (0, s.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: P ? E.intl.string(E.t['Y+V9go']) : E.intl.formatToPlainString(E.t.UyDKl5, { levelName: (0, x.nW)(A) }),
            color: d.Tooltip.Colors.BLACK,
            position: 'top',
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
                (0, i.jsxs)(d.Clickable, {
                    ...H,
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
                                (0, i.jsx)(T, {
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
                                            children: V
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
                            className: a()(y.progressBarContainer, { [y.progressBarContainerComplete]: P }),
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    className: y.progressBar,
                                    style: k
                                }),
                                P
                                    ? (0, i.jsx)('span', {
                                          'aria-label': E.intl.string(E.t['7iL1q6']),
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
