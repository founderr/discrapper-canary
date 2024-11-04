n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(100621),
    o = n(468194),
    c = n(442837),
    u = n(692547),
    d = n(477690),
    h = n(481060),
    m = n(2052),
    p = n(906732),
    f = n(194082),
    g = n(484459),
    C = n(594174),
    x = n(626135),
    v = n(74538),
    _ = n(557457),
    I = n(475674),
    E = n(981631),
    b = n(474936),
    S = n(388032),
    Z = n(659102);
let T = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    N = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    j = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    A = { opacity: 0 },
    y = { opacity: 1 },
    P = { borderRadius: ''.concat(T, 'px ').concat(T, 'px ').concat(T, 'px ').concat(T, 'px') },
    M = { borderRadius: '0px '.concat(T, 'px ').concat(T, 'px 0px') },
    R = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    L = (e) => {
        let t,
            r,
            { participant: a, isUpsellEnabled: o, shape: d, size: g, didTrackUpsellViewed: T, setDidTrackUpsellViewed: N, className: j, premiumIndicator: A } = e,
            y = (0, _.Wc)(a),
            { analyticsLocations: P } = (0, p.ZP)(),
            M = null != (0, I.Z)(a);
        try {
            t = (0, _.nG)(y);
        } catch (e) {
            t = !1;
        }
        try {
            r = (0, _.tR)(y);
        } catch (e) {
            r = !1;
        }
        let R = t || r,
            { location: L } = (0, m.O)(),
            k = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
            O = o && !v.ZP.isPremium(k, b.p9.TIER_1) && !v.ZP.canStreamQuality(v.ZP.StreamQuality.MID, k),
            w = l.useCallback(() => {
                O &&
                    R &&
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                analyticsSource: L
                            });
                    });
            }, [O, R, L]);
        if (
            (l.useEffect(() => {
                !T &&
                    R &&
                    (x.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: b.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: r,
                        location_stack: P
                    }),
                    N(!0));
            }, [t, r, R, T, N, P]),
            null == y)
        )
            return null;
        let D = (0, i.jsx)(h.Tooltip, {
            text: M ? S.intl.string(S.t.q8TiVl) : R ? S.intl.string(S.t.IHgpEh) : S.intl.string(S.t.vLb0VV),
            position: 'bottom',
            color: h.Tooltip.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(h.Clickable, {
                    ...e,
                    onClick: w,
                    className: s()(Z.qualityIndicator, g, f.eE[d], M ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, { [Z.clickable]: O && R }),
                    children: [
                        R
                            ? (0, i.jsx)(h.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: Z.premiumStreamIcon
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: Z.qualityResolution,
                            children: (0, _.ml)(y.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, _.bp)(y.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(h.TextBadge, {
            text: D,
            className: s()(j, Z.qualityIndicatorBadge, { [Z.qualityIndicatorBadgePremium]: R && A }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    };
t.Z = (e) => {
    let { participant: t, showQuality: n, isUpsellEnabled: r = !0, size: o, className: c, premiumIndicator: u } = e,
        [d, m] = l.useState(!1),
        p = (0, _.Wc)(t),
        { reducedMotion: C } = l.useContext(h.AccessibilityPreferencesContext),
        x = n && null != p;
    l.useEffect(() => {
        (0, g.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
    }, [t]);
    let v = (0, h.useTransition)(
            x,
            {
                enter: {
                    from: C.enabled ? A : N,
                    to: C.enabled ? y : j
                },
                leave: C.enabled ? A : N,
                config: R
            },
            'animate-always'
        ),
        I = (0, h.useSpring)(
            {
                to: x ? M : P,
                config: R
            },
            'animate-always'
        );
    return ((e) => {
        let { className: n, popoutProps: l } = e;
        return (0, i.jsxs)('div', {
            className: s()(Z.streamQualityIndicator, n),
            ...l,
            children: [
                v((e, n) =>
                    n
                        ? (0, i.jsx)(a.animated.div, {
                              style: e,
                              children: (0, i.jsx)(L, {
                                  className: Z.liveQualityIndicator,
                                  participant: t,
                                  size: o,
                                  shape: h.BadgeShapes.ROUND_LEFT,
                                  isUpsellEnabled: r,
                                  didTrackUpsellViewed: d,
                                  setDidTrackUpsellViewed: m,
                                  premiumIndicator: u
                              })
                          })
                        : null
                ),
                (0, i.jsx)(a.animated.div, {
                    style: I,
                    className: Z.liveIndicator,
                    children: (0, i.jsx)(f.ZP, {
                        look: f.jZ.RED,
                        size: o,
                        shape: x ? h.BadgeShapes.ROUND_RIGHT : h.BadgeShapes.ROUND
                    })
                })
            ]
        });
    })({ className: c });
};
