n.d(t, {
    Z: function () {
        return y;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(927359),
    a = n(975298),
    c = n(769415),
    u = n(650032),
    d = n(767870),
    h = n(104494),
    m = n(639119),
    p = n(655525),
    f = n(52188),
    b = n(346497),
    v = n(924540),
    S = n(474486),
    x = n(351402),
    g = n(170671),
    j = n(474936),
    N = n(840468);
let C = 'UserSettingsPremiumLabel';
function y(e) {
    let t,
        { decoration: n, label: l, isSelected: y } = e,
        { fractionalState: T, endsAt: P } = (0, a.Z)({ forceFetch: !0 }),
        E = (0, m.N)(),
        I = (0, h.Ng)(),
        R = (0, b.Vi)(),
        A = (0, r.e7)([x.Z], () => x.Z.isLocalizedPromoEnabled) && null == E && null == n,
        { enabled: Z } = u._.useExperiment({ location: C }, { autoTrackExposure: !1 }),
        O = Z && (null == E ? void 0 : E.trial_id) === j.a7,
        _ = (null == E ? void 0 : E.trial_id) === j.jz,
        { enabled: w } = c.Z.getCurrentConfig({ location: C }, { autoTrackExposure: _ });
    return (
        (t =
            T !== j.a$.NONE
                ? (0, i.jsx)(d.Z, {
                      className: '',
                      endsAt: P,
                      messageStyle: o.a.SHORT_TIME_LEFT,
                      showSparkles: !0
                  })
                : R
                  ? (0, i.jsx)(p.Z, {})
                  : null != I
                    ? (0, i.jsx)(v.GN, {
                          isTabSelected: y,
                          userDiscount: I,
                          includesAmountOff: !1
                      })
                    : _
                      ? (0, i.jsx)(S.dX, {
                            isSelected: y,
                            trialOffer: E,
                            q4MarketingEnabled: w
                        })
                      : null == E || O
                        ? null != n
                            ? n
                            : A
                              ? (0, i.jsx)(f.k, { entryPoint: f.U.SettingsMenu })
                              : (0, i.jsx)(g.Z, { isSelected: y })
                        : (0, i.jsx)(v.$H, {
                              isTabSelected: y,
                              trialOffer: E
                          })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: s()(N.premiumLabel, { [N.selected]: (y || A) && !R }),
                    children: [l, t]
                }),
                (0, i.jsx)('div', {
                    className: s()(N.background, {
                        [N.auPromo]: A && !y,
                        [N.auPromoSelected]: A && y,
                        [N.selectedBackground]: !A && !R && y
                    })
                })
            ]
        })
    );
}
