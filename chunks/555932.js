n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(267642),
    c = n(198466),
    d = n(436444),
    f = n(981631),
    _ = n(388032),
    p = n(527855);
let h = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3];
function m(e) {
    let { guild: t } = e,
        n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        [m, g] = i.useState(!1),
        [E, v] = i.useState(0),
        b = i.useRef(null),
        I = Math.min(f.Eu4.TIER_3, t.premiumTier + 1),
        T = f.oCV[t.premiumTier],
        S = f.oCV[I],
        y = (t.premiumSubscriberCount - T) / (S - T),
        A = d.P[t.premiumTier],
        N = d.P[I],
        C = t.premiumTier === f.Eu4.TIER_3,
        {
            progressBarFillWidthFactor: R,
            isProgressBarAnimationComplete: O,
            setShouldFireConfetti: D,
            shouldFireConfetti: L,
            tierMarkerAnimationPosition: x
        } = (function (e) {
            let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: a, useReducedMotion: s } = e,
                [l, u] = i.useState(s ? r : -1),
                [c, _] = i.useState(0 === n),
                [p, h] = i.useState(!1),
                m = i.useRef(!0),
                { widthFactor: g } = (0, o.useSpring)({
                    from: { widthFactor: 0 },
                    to: { widthFactor: a ? t : 0 },
                    config: {
                        tension: 15,
                        friction: 7,
                        clamp: !0
                    },
                    onChange: function (e) {
                        let { widthFactor: t } = e;
                        for (let [e, n] of Object.entries(d.P).reverse())
                            if (t >= n - 0.02727272727272727) {
                                u(Number(e));
                                break;
                            }
                    },
                    onStart: () => {
                        _(!1);
                    },
                    onRest: () => {
                        _(!0),
                            r === f.Eu4.TIER_3 &&
                                (h(!0),
                                window.setTimeout(() => {
                                    m.current && h(!1);
                                }, 200));
                    }
                });
            return (
                i.useEffect(
                    () => () => {
                        m.current = !1;
                    },
                    []
                ),
                {
                    isProgressBarAnimationComplete: c,
                    progressBarFillWidthFactor: g,
                    setShouldFireConfetti: h,
                    shouldFireConfetti: p,
                    tierMarkerAnimationPosition: l
                }
            );
        })({
            fillFactor: C ? 1 : y * (N - A) + A,
            isRevealed: m || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
    return (
        i.useEffect(() => {
            let e = window.setTimeout(() => {
                g(!0);
            }, 250);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, r.jsxs)('div', {
            className: p.progressBar,
            role: 'progressbar',
            'aria-valuenow': t.premiumSubscriberCount,
            'aria-valuetext':
                t.premiumTier === f.Eu4.NONE
                    ? _.intl.formatToPlainString(_.t.Ukqm9v, { numSubscriptionsApplied: t.premiumSubscriberCount })
                    : _.intl.formatToPlainString(_.t.qWunaW, {
                          numSubscriptionsApplied: t.premiumSubscriberCount,
                          tierName: (0, u.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, r.jsxs)('div', {
                    className: p.progressBarScrubber,
                    children: [
                        (0, r.jsx)(a.animated.div, {
                            className: p.progressBarFill,
                            style: {
                                width: R.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, r.jsx)('div', { className: p.progressBarTrack })
                    ]
                }),
                h.map((e) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            confettiTriggerRef: b,
                            guild: t,
                            isProgressBarAnimationComplete: O,
                            setConfettiCount: v,
                            setShouldFireConfetti: D,
                            tier: e,
                            tierMarkerAnimationPosition: x,
                            children: (0, u.nW)(e)
                        },
                        e
                    )
                ),
                (0, r.jsx)(c.Z, {
                    confettiCount: E,
                    confettiTriggerRef: b,
                    isFiring: L
                })
            ]
        })
    );
}
