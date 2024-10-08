n.d(t, {
    PD: function () {
        return M;
    },
    aR: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(212433),
    o = n(91192),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(367907),
    _ = n(906732),
    m = n(434404),
    g = n(496675),
    C = n(259580),
    I = n(267642),
    E = n(624138),
    N = n(667815),
    S = n(531572),
    x = n(26323),
    v = n(30513),
    T = n(981631),
    Z = n(689938),
    b = n(402723);
let A = (0, E.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
    R = (e) => {
        let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [s, o] = l.useState(!1),
            u = (0, c.e7)([g.Z], () => g.Z.can(T.Plq.MANAGE_GUILD, t)),
            p = async () => {
                if (!!u) o(!0), await m.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), o(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': Z.Z.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: Z.Z.Messages.GUILD_ENABLE_PROGRESS_BAR,
                checked: r,
                disabled: s,
                action: p
            })
        });
    },
    M = 57,
    L = 57 + A,
    P = {
        tension: 180,
        friction: 80
    };
t.ZP = (e) => {
    let { guild: t, withMargin: n } = e,
        { analyticsLocations: r } = (0, _.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
        { premiumSubscriberCount: u, id: m } = t,
        E = (0, I.rF)(u, m),
        A = (0, I.FZ)(E, t.id),
        M = null == A,
        L = null != A ? A : E,
        O = (0, c.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getCountForGuild(m)) && void 0 !== e ? e : 0;
        }),
        y = (0, c.e7)([g.Z], () => g.Z.can(T.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        O !== u && (0, N.v)(m, u);
    }, [m, O, u]);
    let j = ''.concat(Math.min(100, (u / (0, I.vn)(t.id)[L]) * 100), '%'),
        { current: D } = l.useRef(j),
        w = {
            from: { width: O === u ? D : '0%' },
            to: { width: j },
            config: P
        },
        [U, G] = (0, d.useSpring)(() => w),
        k = () => {
            (0, f.yw)(T.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: m,
                location_stack: r
            }),
                (0, x.Z)({
                    analyticsLocations: r,
                    analyticsSourceLocation: {
                        page: T.ZY5.GUILD_CHANNEL,
                        section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                        object: T.qAy.TOOLTIP
                    },
                    guild: t,
                    perks: (0, v.VF)(),
                    perkIntro: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
                });
        },
        B = Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({ levelName: (0, I.e9)(L) }),
        H = Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
            numBoosts: u,
            numTotal: (0, I.vn)(t.id)[L]
        });
    M && ((B = (0, I.e9)(L)), (H = Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({ numBoosts: u })));
    let V = (0, o.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: M ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({ levelName: (0, I.nW)(L) }),
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
                    onClick: k,
                    onMouseEnter: () => {
                        var t;
                        null === (t = e.onMouseEnter) || void 0 === t || t.call(e), G(w);
                    },
                    className: a()(b.container, { [b.containerWithMargin]: n }),
                    onContextMenu: (e) => {
                        y &&
                            (0, h.vq)(e, (e) =>
                                (0, i.jsx)(R, {
                                    ...e,
                                    guild: t
                                })
                            );
                    },
                    children: [
                        (0, i.jsx)(d.HiddenVisually, { children: e['aria-label'] }),
                        (0, i.jsxs)('div', {
                            className: b.textArea,
                            children: [
                                (0, i.jsx)('div', {
                                    className: b.goalTextContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        className: b.goalText,
                                        color: 'interactive-active',
                                        variant: 'text-xs/bold',
                                        children: B
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.progressFraction,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-xs/normal',
                                            children: H
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            className: b.count,
                                            height: 16,
                                            width: 16,
                                            direction: C.Z.Directions.RIGHT
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(b.progressBarContainer, { [b.progressBarContainerComplete]: M }),
                            children: [
                                (0, i.jsx)(s.animated.div, {
                                    className: b.progressBar,
                                    style: U
                                }),
                                M
                                    ? (0, i.jsx)('span', {
                                          'aria-label': Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                                          role: 'img',
                                          className: b.tadaIcon,
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
