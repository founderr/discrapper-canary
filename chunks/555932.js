n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(526629),
    s = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(267642),
    d = n(198466),
    _ = n(436444),
    E = n(981631),
    f = n(689938),
    h = n(527855);
let p = 200,
    m = 250,
    I = 36,
    T = 660,
    g = [E.Eu4.NONE, E.Eu4.TIER_1, E.Eu4.TIER_2, E.Eu4.TIER_3];
function S(e) {
    let { fillFactor: t, guildBoostCount: n, premiumTier: r, isRevealed: i, useReducedMotion: o } = e,
        [s, u] = a.useState(o ? r : -1),
        [c, d] = a.useState(0 === n),
        [f, h] = a.useState(!1),
        m = a.useRef(!0);
    function g(e) {
        let { widthFactor: t } = e;
        for (let [e, n] of Object.entries(_.P).reverse())
            if (t >= n - I / 2 / T) {
                u(Number(e));
                break;
            }
    }
    let { widthFactor: S } = (0, l.useSpring)({
        from: { widthFactor: 0 },
        to: { widthFactor: i ? t : 0 },
        config: {
            tension: 15,
            friction: 7,
            clamp: !0
        },
        onChange: g,
        onStart: () => {
            d(!1);
        },
        onRest: () => {
            d(!0),
                r === E.Eu4.TIER_3 &&
                    (h(!0),
                    window.setTimeout(() => {
                        m.current && h(!1);
                    }, p));
        }
    });
    return (
        a.useEffect(
            () => () => {
                m.current = !1;
            },
            []
        ),
        {
            isProgressBarAnimationComplete: c,
            progressBarFillWidthFactor: S,
            setShouldFireConfetti: h,
            shouldFireConfetti: f,
            tierMarkerAnimationPosition: s
        }
    );
}
function A(e) {
    let { guild: t } = e,
        n = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [r, l] = a.useState(!1),
        [p, I] = a.useState(0),
        T = a.useRef(null),
        A = Math.min(E.Eu4.TIER_3, t.premiumTier + 1),
        v = E.oCV[t.premiumTier],
        N = E.oCV[A],
        O = (t.premiumSubscriberCount - v) / (N - v),
        R = _.P[t.premiumTier],
        C = _.P[A],
        y = t.premiumTier === E.Eu4.TIER_3 ? 1 : O * (C - R) + R,
        {
            progressBarFillWidthFactor: L,
            isProgressBarAnimationComplete: b,
            setShouldFireConfetti: D,
            shouldFireConfetti: M,
            tierMarkerAnimationPosition: P
        } = S({
            fillFactor: y,
            isRevealed: r || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
    return (
        a.useEffect(() => {
            let e = window.setTimeout(() => {
                l(!0);
            }, m);
            return () => {
                window.clearTimeout(e);
            };
        }, []),
        (0, i.jsxs)('div', {
            className: h.progressBar,
            role: 'progressbar',
            'aria-valuenow': t.premiumSubscriberCount,
            'aria-valuetext':
                t.premiumTier === E.Eu4.NONE
                    ? f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({ numSubscriptionsApplied: t.premiumSubscriberCount })
                    : f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                          numSubscriptionsApplied: t.premiumSubscriberCount,
                          tierName: (0, c.nW)(t.premiumTier, { useLevels: !1 })
                      }),
            children: [
                (0, i.jsxs)('div', {
                    className: h.progressBarScrubber,
                    children: [
                        (0, i.jsx)(o.animated.div, {
                            className: h.progressBarFill,
                            style: {
                                width: L.to({
                                    range: [0, 1],
                                    output: [0, 100]
                                }).to((e) => ''.concat(e, '%'))
                            }
                        }),
                        (0, i.jsx)('div', { className: h.progressBarTrack })
                    ]
                }),
                g.map((e) =>
                    (0, i.jsx)(
                        _.Z,
                        {
                            confettiTriggerRef: T,
                            guild: t,
                            isProgressBarAnimationComplete: b,
                            setConfettiCount: I,
                            setShouldFireConfetti: D,
                            tier: e,
                            tierMarkerAnimationPosition: P,
                            children: (0, c.nW)(e)
                        },
                        e
                    )
                ),
                (0, i.jsx)(d.Z, {
                    confettiCount: p,
                    confettiTriggerRef: T,
                    isFiring: M
                })
            ]
        })
    );
}
