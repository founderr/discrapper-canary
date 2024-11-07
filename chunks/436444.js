n.d(t, {
    P: function () {
        return m;
    }
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(100621),
    o = n(481060),
    l = n(906732),
    u = n(471885),
    c = n(267642),
    d = n(879892),
    f = n(198466),
    _ = n(981631),
    h = n(388032),
    p = n(759385);
let m = {
    [_.Eu4.NONE]: 0,
    [_.Eu4.TIER_1]: 1 / 3,
    [_.Eu4.TIER_2]: 2 / 3,
    [_.Eu4.TIER_3]: 1
};
t.Z = function (e) {
    let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: g, setConfettiCount: E, setShouldFireConfetti: v, tier: I, tierMarkerAnimationPosition: S } = e,
        { analyticsLocations: T } = (0, l.ZP)(),
        b = _.oCV[I] - i.premiumSubscriberCount,
        y = I <= S || g,
        A = y && I <= i.premiumTier,
        N = y && I < i.premiumTier,
        C = y && I === i.premiumTier,
        { scaleFactor: R } = (0, o.useSpring)({
            from: { scaleFactor: 0 },
            to: { scaleFactor: S >= I || (g && S + 1 === I) || (g && -1 === S && I === _.Eu4.NONE) ? 1 : 0 },
            config: {
                tension: 360,
                friction: 12
            }
        }),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: p.progressBarMarkerIndicator,
                    style: { transform: R.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                }),
                I !== _.Eu4.NONE &&
                    (0, r.jsx)(u.Z, {
                        tier: I,
                        className: p.boostedTierIcon
                    })
            ]
        }),
        D = A ? 'div' : o.Clickable,
        L = A
            ? {}
            : {
                  onClick: function () {
                      y &&
                          (0, d.u)({
                              analyticsLocations: T,
                              analyticsLocation: {
                                  page: _.ZY5.PREMIUM_GUILD_USER_MODAL,
                                  section: _.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                                  object: _.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                                  objectType: (function (e) {
                                      switch (e) {
                                          case _.Eu4.TIER_3:
                                              return _.Qqv.TIER_3;
                                          case _.Eu4.TIER_2:
                                              return _.Qqv.TIER_2;
                                          case _.Eu4.TIER_1:
                                              return _.Qqv.TIER_1;
                                          default:
                                              throw Error('Unsupported Boosting tier: '.concat(e));
                                      }
                                  })(I)
                              },
                              numberOfBoostsToAdd: b,
                              guild: i
                          });
                  }
              };
    return (0, r.jsx)(o.Tooltip, {
        text: A
            ? h.intl.formatToPlainString(h.t['1o48kp'], { tierName: (0, c.nW)(I, { useLevels: !1 }) })
            : h.intl.formatToPlainString(h.t.r6NN6e, {
                  numBoostsRequired: b,
                  tierName: (0, c.nW)(I, { useLevels: !1 })
              }),
        shouldShow: I !== _.Eu4.NONE,
        children: (e) =>
            (0, r.jsxs)(D, {
                className: a()(p.progressBarMarker, {
                    [p.progressBarMarkerUnlocked]: A,
                    [p.progressBarMarkerLocked]: !A,
                    [p.progressBarMarkerLower]: N,
                    [p.progressBarMarkerCurrent]: C
                }),
                style: { left: ''.concat(100 * m[I], '%') },
                ...e,
                ...L,
                children: [
                    !A && (0, r.jsx)('div', { className: p.boostedTierIconBackground }),
                    A && I === _.Eu4.TIER_3
                        ? (0, r.jsx)(f.m, {
                              confettiTriggerRef: n,
                              setConfettiCount: E,
                              setShouldFireConfetti: v,
                              children: O
                          })
                        : O,
                    (0, r.jsxs)(o.Text, {
                        className: p.progressBarMarkerLabel,
                        variant: 'text-md/normal',
                        children: [
                            A &&
                                I !== _.Eu4.NONE &&
                                (0, r.jsx)(o.CheckmarkLargeIcon, {
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
};
