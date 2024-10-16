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
    p = n(248042),
    f = n(924540),
    S = n(351402),
    N = n(170671),
    b = n(474936),
    x = n(655580);
function v(e) {
    let t,
        { decoration: n, label: i, isSelected: v } = e,
        { fractionalState: _, endsAt: T } = (0, o.Z)({ forceFetch: !0 }),
        g = (0, d.N)(),
        C = (0, u.Ng)(),
        j = (0, p.Vi)(),
        E = (0, l.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) && null == g && null == n,
        { enabled: I } = a._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        R = I && (null == g ? void 0 : g.trial_id) === b.a7;
    return (
        (t =
            _ !== b.a$.NONE
                ? (0, s.jsx)(c.Z, {
                      className: '',
                      endsAt: T
                  })
                : j
                  ? (0, s.jsx)(h.Z, {})
                  : null != C
                    ? (0, s.jsx)(f.GN, {
                          isTabSelected: v,
                          userDiscount: C,
                          includesAmountOff: !1
                      })
                    : null == g || R
                      ? null != n
                          ? n
                          : E
                            ? (0, s.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                            : (0, s.jsx)(N.Z, { isSelected: v })
                      : (0, s.jsx)(f.$H, {
                            isTabSelected: v,
                            trialOffer: g
                        })),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: r()(x.premiumLabel, { [x.selected]: (v || E) && !j }),
                    children: [i, t]
                }),
                (0, s.jsx)('div', {
                    className: r()(x.background, {
                        [x.auPromo]: E && !v,
                        [x.auPromoSelected]: E && v,
                        [x.selectedBackground]: !E && !j && v
                    })
                })
            ]
        })
    );
}
