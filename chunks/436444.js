n.d(t, {
    P: function () {
        return I;
    }
});
var r = n(411104);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(526629),
    l = n(481060),
    u = n(906732),
    c = n(471885),
    d = n(267642),
    _ = n(879892),
    E = n(198466),
    f = n(981631),
    h = n(689938),
    p = n(979274);
function m(e) {
    switch (e) {
        case f.Eu4.TIER_3:
            return f.Qqv.TIER_3;
        case f.Eu4.TIER_2:
            return f.Qqv.TIER_2;
        case f.Eu4.TIER_1:
            return f.Qqv.TIER_1;
        default:
            throw Error('Unsupported Boosting tier: '.concat(e));
    }
}
let I = {
    [f.Eu4.NONE]: 0,
    [f.Eu4.TIER_1]: 1 / 3,
    [f.Eu4.TIER_2]: 2 / 3,
    [f.Eu4.TIER_3]: 1
};
function T(e) {
    let { children: t, confettiTriggerRef: n, guild: r, isProgressBarAnimationComplete: a, setConfettiCount: T, setShouldFireConfetti: g, tier: S, tierMarkerAnimationPosition: A } = e,
        { analyticsLocations: v } = (0, u.ZP)(),
        N = f.oCV[S] - r.premiumSubscriberCount,
        O = S <= A || a,
        R = O && S <= r.premiumTier,
        C = O && S < r.premiumTier,
        y = O && S === r.premiumTier,
        { scaleFactor: L } = (0, l.useSpring)({
            from: { scaleFactor: 0 },
            to: { scaleFactor: A >= S || (a && A + 1 === S) || (a && -1 === A && S === f.Eu4.NONE) ? 1 : 0 },
            config: {
                tension: 360,
                friction: 12
            }
        }),
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.animated.div, {
                    className: p.progressBarMarkerIndicator,
                    style: { transform: L.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                }),
                S !== f.Eu4.NONE &&
                    (0, i.jsx)(c.Z, {
                        tier: S,
                        className: p.boostedTierIcon
                    })
            ]
        });
    function D() {
        O &&
            (0, _.u)({
                analyticsLocations: v,
                analyticsLocation: {
                    page: f.ZY5.PREMIUM_GUILD_USER_MODAL,
                    section: f.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                    object: f.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                    objectType: m(S)
                },
                numberOfBoostsToAdd: N,
                guild: r
            });
    }
    let M = R ? 'div' : l.Clickable,
        P = R ? {} : { onClick: D };
    return (0, i.jsx)(l.Tooltip, {
        text: R
            ? h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({ tierName: (0, d.nW)(S, { useLevels: !1 }) })
            : h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
                  numBoostsRequired: N,
                  tierName: (0, d.nW)(S, { useLevels: !1 })
              }),
        shouldShow: S !== f.Eu4.NONE,
        children: (e) =>
            (0, i.jsxs)(M, {
                className: o()(p.progressBarMarker, {
                    [p.progressBarMarkerUnlocked]: R,
                    [p.progressBarMarkerLocked]: !R,
                    [p.progressBarMarkerLower]: C,
                    [p.progressBarMarkerCurrent]: y
                }),
                style: { left: ''.concat(100 * I[S], '%') },
                ...e,
                ...P,
                children: [
                    !R && (0, i.jsx)('div', { className: p.boostedTierIconBackground }),
                    R && S === f.Eu4.TIER_3
                        ? (0, i.jsx)(E.m, {
                              confettiTriggerRef: n,
                              setConfettiCount: T,
                              setShouldFireConfetti: g,
                              children: b
                          })
                        : b,
                    (0, i.jsxs)(l.Text, {
                        className: p.progressBarMarkerLabel,
                        variant: 'text-md/normal',
                        children: [
                            R &&
                                S !== f.Eu4.NONE &&
                                (0, i.jsx)(l.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: p.progressBarMarkerUnlockedIcon
                                }),
                            t
                        ]
                    })
                ]
            })
    });
}
t.Z = T;
