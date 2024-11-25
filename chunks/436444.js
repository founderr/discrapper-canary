n.d(t, {
    P: function () {
        return E;
    }
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(752877),
    o = n(481060),
    l = n(906732),
    u = n(975298),
    c = n(471885),
    d = n(267642),
    f = n(879892),
    _ = n(198466),
    p = n(981631),
    h = n(474936),
    m = n(388032),
    g = n(979274);
let E = {
    [p.Eu4.NONE]: 0,
    [p.Eu4.TIER_1]: 1 / 3,
    [p.Eu4.TIER_2]: 2 / 3,
    [p.Eu4.TIER_3]: 1
};
t.Z = function (e) {
    let { children: t, confettiTriggerRef: n, guild: i, isProgressBarAnimationComplete: v, setConfettiCount: I, setShouldFireConfetti: b, tier: T, tierMarkerAnimationPosition: S } = e,
        { analyticsLocations: y } = (0, l.ZP)(),
        A = (0, u.Z)(),
        N = p.oCV[T] - i.premiumSubscriberCount,
        C = T <= S || v,
        R = C && T <= i.premiumTier,
        O = C && T < i.premiumTier,
        D = C && T === i.premiumTier,
        { scaleFactor: L } = (0, o.useSpring)({
            from: { scaleFactor: 0 },
            to: { scaleFactor: S >= T || (v && S + 1 === T) || (v && -1 === S && T === p.Eu4.NONE) ? 1 : 0 },
            config: {
                tension: 360,
                friction: 12
            }
        }),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: g.progressBarMarkerIndicator,
                    style: { transform: L.to((e) => 'translate(-50%, -50%) scale('.concat(e, ')')) }
                }),
                T !== p.Eu4.NONE &&
                    (0, r.jsx)(c.Z, {
                        tier: T,
                        className: g.boostedTierIcon
                    })
            ]
        }),
        w = !R && A.fractionalState === h.a$.NONE,
        M = w ? o.Clickable : 'div',
        P = w
            ? {
                  onClick: function () {
                      C &&
                          (0, f.u)({
                              analyticsLocations: y,
                              analyticsLocation: {
                                  page: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                                  section: p.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                                  object: p.qAy.SUBSCRIBE_TO_TIER_BUTTON,
                                  objectType: (function (e) {
                                      switch (e) {
                                          case p.Eu4.TIER_3:
                                              return p.Qqv.TIER_3;
                                          case p.Eu4.TIER_2:
                                              return p.Qqv.TIER_2;
                                          case p.Eu4.TIER_1:
                                              return p.Qqv.TIER_1;
                                          default:
                                              throw Error('Unsupported Boosting tier: '.concat(e));
                                      }
                                  })(T)
                              },
                              numberOfBoostsToAdd: N,
                              guild: i
                          });
                  }
              }
            : {};
    return (0, r.jsx)(o.Tooltip, {
        text: R
            ? m.intl.formatToPlainString(m.t['1o48kp'], { tierName: (0, d.nW)(T, { useLevels: !1 }) })
            : m.intl.formatToPlainString(m.t.r6NN6e, {
                  numBoostsRequired: N,
                  tierName: (0, d.nW)(T, { useLevels: !1 })
              }),
        shouldShow: T !== p.Eu4.NONE,
        children: (e) =>
            (0, r.jsxs)(M, {
                className: a()(g.progressBarMarker, {
                    [g.progressBarMarkerUnlocked]: R,
                    [g.progressBarMarkerLocked]: w,
                    [g.progressBarMarkerLower]: O,
                    [g.progressBarMarkerCurrent]: D
                }),
                style: { left: ''.concat(100 * E[T], '%') },
                ...e,
                ...P,
                children: [
                    !R && (0, r.jsx)('div', { className: g.boostedTierIconBackground }),
                    R && T === p.Eu4.TIER_3
                        ? (0, r.jsx)(_.m, {
                              confettiTriggerRef: n,
                              setConfettiCount: I,
                              setShouldFireConfetti: b,
                              children: x
                          })
                        : x,
                    (0, r.jsxs)(o.Text, {
                        className: g.progressBarMarkerLabel,
                        variant: 'text-md/normal',
                        children: [
                            R &&
                                T !== p.Eu4.NONE &&
                                (0, r.jsx)(o.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: g.progressBarMarkerUnlockedIcon
                                }),
                            t
                        ]
                    })
                ]
            })
    });
};
