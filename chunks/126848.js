n.d(t, {
    Z: function () {
        return b;
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
    _ = n(474936),
    T = n(655580);
function b(e) {
    let t,
        { decoration: n, label: i, isSelected: b } = e,
        { fractionalState: x, endsAt: R } = (0, o.Z)({ forceFetch: !0 }),
        I = (0, d.N)(),
        v = (0, u.Ng)(),
        g = (0, p.Vi)(),
        E = (0, l.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) && null == I && null == n,
        { enabled: C } = a._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        j = C && (null == I ? void 0 : I.trial_id) === _.a7;
    return (
        (t =
            x !== _.a$.NONE
                ? (0, s.jsx)(c.Z, {
                      className: '',
                      endsAt: R
                  })
                : g
                  ? (0, s.jsx)(h.Z, {})
                  : null != v
                    ? (0, s.jsx)(f.GN, {
                          isTabSelected: b,
                          userDiscount: v,
                          includesAmountOff: !1
                      })
                    : null == I || j
                      ? null != n
                          ? n
                          : E
                            ? (0, s.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                            : (0, s.jsx)(N.Z, { isSelected: b })
                      : (0, s.jsx)(f.$H, {
                            isTabSelected: b,
                            trialOffer: I
                        })),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: r()(T.premiumLabel, { [T.selected]: (b || E) && !g }),
                    children: [i, t]
                }),
                (0, s.jsx)('div', {
                    className: r()(T.background, {
                        [T.auPromo]: E && !b,
                        [T.auPromoSelected]: E && b,
                        [T.selectedBackground]: !E && !g && b
                    })
                })
            ]
        })
    );
}
