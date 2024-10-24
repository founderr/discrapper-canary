n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(100621),
    o = n(468194),
    c = n(442837),
    u = n(692547),
    d = n(477690),
    h = n(481060),
    p = n(2052),
    m = n(906732),
    _ = n(194082),
    f = n(484459),
    E = n(594174),
    g = n(626135),
    C = n(74538),
    I = n(557457),
    T = n(475674),
    x = n(981631),
    S = n(474936),
    v = n(689938),
    N = n(659102);
let A = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
    Z = {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    },
    M = {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    b = { opacity: 0 },
    R = { opacity: 1 },
    L = { borderRadius: ''.concat(A, 'px ').concat(A, 'px ').concat(A, 'px ').concat(A, 'px') },
    P = { borderRadius: '0px '.concat(A, 'px ').concat(A, 'px 0px') },
    j = {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
    },
    O = (e) => {
        let t,
            a,
            { participant: r, isUpsellEnabled: o, shape: d, size: f, didTrackUpsellViewed: A, setDidTrackUpsellViewed: Z, className: M, premiumIndicator: b } = e,
            R = (0, I.Wc)(r),
            { analyticsLocations: L } = (0, m.ZP)(),
            P = null != (0, T.Z)(r);
        try {
            t = (0, I.nG)(R);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, I.tR)(R);
        } catch (e) {
            a = !1;
        }
        let j = t || a,
            { location: O } = (0, p.O)(),
            y = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
            D = o && !C.ZP.isPremium(y, S.p9.TIER_1) && !C.ZP.canStreamQuality(C.ZP.StreamQuality.MID, y),
            U = s.useCallback(() => {
                D &&
                    j &&
                    (0, h.openModalLazy)(async () => {
                        let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                analyticsSource: O
                            });
                    });
            }, [D, j, O]);
        if (
            (s.useEffect(() => {
                !A &&
                    j &&
                    (g.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: S.cd.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: L
                    }),
                    Z(!0));
            }, [t, a, j, A, Z, L]),
            null == R)
        )
            return null;
        let k = (0, i.jsx)(h.Tooltip, {
            text: P ? v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : j ? v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
            position: 'bottom',
            color: h.Tooltip.Colors.GREY,
            children: (e) =>
                (0, i.jsxs)(h.Clickable, {
                    ...e,
                    onClick: U,
                    className: l()(N.qualityIndicator, f, _.eE[d], P ? N.qualityIndicatorLowQuality : N.qualityIndicatorFullQuality, { [N.clickable]: D && j }),
                    children: [
                        j
                            ? (0, i.jsx)(h.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: N.premiumStreamIcon
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: N.qualityResolution,
                            children: (0, I.ml)(R.maxResolution)
                        }),
                        (0, i.jsx)('span', { children: (0, I.bp)(R.maxFrameRate) })
                    ]
                })
        });
        return (0, i.jsx)(h.TextBadge, {
            text: k,
            className: l()(M, N.qualityIndicatorBadge, { [N.qualityIndicatorBadgePremium]: j && b }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d
        });
    };
t.Z = (e) => {
    let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: u } = e,
        [d, p] = s.useState(!1),
        m = (0, I.Wc)(t),
        { reducedMotion: E } = s.useContext(h.AccessibilityPreferencesContext),
        g = n && null != m;
    s.useEffect(() => {
        (0, f.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), { dispatchWait: !0 });
    }, [t]);
    let C = (0, h.useTransition)(
            g,
            {
                enter: {
                    from: E.enabled ? b : Z,
                    to: E.enabled ? R : M
                },
                leave: E.enabled ? b : Z,
                config: j
            },
            'animate-always'
        ),
        T = (0, h.useSpring)(
            {
                to: g ? P : L,
                config: j
            },
            'animate-always'
        );
    return ((e) => {
        let { className: n, popoutProps: s } = e;
        return (0, i.jsxs)('div', {
            className: l()(N.streamQualityIndicator, n),
            ...s,
            children: [
                C((e, n) =>
                    n
                        ? (0, i.jsx)(r.animated.div, {
                              style: e,
                              children: (0, i.jsx)(O, {
                                  className: N.liveQualityIndicator,
                                  participant: t,
                                  size: o,
                                  shape: h.BadgeShapes.ROUND_LEFT,
                                  isUpsellEnabled: a,
                                  didTrackUpsellViewed: d,
                                  setDidTrackUpsellViewed: p,
                                  premiumIndicator: u
                              })
                          })
                        : null
                ),
                (0, i.jsx)(r.animated.div, {
                    style: T,
                    className: N.liveIndicator,
                    children: (0, i.jsx)(_.ZP, {
                        look: _.jZ.RED,
                        size: o,
                        shape: g ? h.BadgeShapes.ROUND_RIGHT : h.BadgeShapes.ROUND
                    })
                })
            ]
        });
    })({ className: c });
};
