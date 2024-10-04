n.d(t, {
    Z: function () {
        return v;
    }
});
var s = n(735250);
n(470079);
var i = n(120356),
    r = n.n(i),
    l = n(442837),
    o = n(975298),
    a = n(650032),
    c = n(767870),
    u = n(104494),
    d = n(639119),
    h = n(655525),
    m = n(52188),
    f = n(248042),
    p = n(924540),
    S = n(351402),
    N = n(170671),
    b = n(474936),
    x = n(655580);
function v(e) {
    let t,
        { decoration: n, label: i, isSelected: v } = e,
        { fractionalState: g, endsAt: T } = (0, o.Z)({ forceFetch: !0 }),
        _ = (0, d.N)(),
        A = (0, u.Ng)(),
        E = (0, f.Vi)(),
        C = (0, l.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) && null == _ && null == n,
        { enabled: I } = a._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        R = I && (null == _ ? void 0 : _.trial_id) === b.a7;
    return (
        (t =
            g !== b.a$.NONE
                ? (0, s.jsx)(c.Z, {
                      className: '',
                      endsAt: T
                  })
                : E
                  ? (0, s.jsx)(h.Z, {})
                  : null != A
                    ? (0, s.jsx)(p.GN, {
                          isTabSelected: v,
                          userDiscount: A,
                          includesAmountOff: !1
                      })
                    : null == _ || R
                      ? null != n
                          ? n
                          : C
                            ? (0, s.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                            : (0, s.jsx)(N.Z, { isSelected: v })
                      : (0, s.jsx)(p.$H, {
                            isTabSelected: v,
                            trialOffer: _
                        })),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: r()(x.premiumLabel, { [x.selected]: (v || C) && !E }),
                    children: [i, t]
                }),
                (0, s.jsx)('div', {
                    className: r()(x.background, {
                        [x.auPromo]: C && !v,
                        [x.auPromoSelected]: C && v,
                        [x.selectedBackground]: !C && !E && v
                    })
                })
            ]
        })
    );
}
