n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(650032),
    a = n(104494),
    c = n(639119),
    u = n(655525),
    d = n(52188),
    h = n(248042),
    m = n(924540),
    p = n(351402),
    b = n(170671),
    f = n(474936),
    S = n(655580);
function v(e) {
    let t,
        { decoration: n, label: s, isSelected: v } = e,
        x = (0, c.N)(),
        g = (0, a.Ng)(),
        j = (0, h.Vi)(),
        N = (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) && null == x && null == n,
        { enabled: C } = o._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        P = C && (null == x ? void 0 : x.trial_id) === f.a7;
    return (
        (t = j
            ? (0, i.jsx)(u.Z, {})
            : null != g
              ? (0, i.jsx)(m.GN, {
                    isTabSelected: v,
                    userDiscount: g,
                    includesAmountOff: !1
                })
              : null == x || P
                ? null != n
                    ? n
                    : N
                      ? (0, i.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, i.jsx)(b.Z, { isSelected: v })
                : (0, i.jsx)(m.$H, {
                      isTabSelected: v,
                      trialOffer: x
                  })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: l()(S.premiumLabel, { [S.selected]: (v || N) && !j }),
                    children: [s, t]
                }),
                (0, i.jsx)('div', {
                    className: l()(S.background, {
                        [S.auPromo]: N && !v,
                        [S.auPromoSelected]: N && v,
                        [S.selectedBackground]: !N && !j && v
                    })
                })
            ]
        })
    );
}
