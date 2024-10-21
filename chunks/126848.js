n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
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
    x = n(351402),
    b = n(170671),
    v = n(474936),
    S = n(655580);
function j(e) {
    let t,
        { decoration: n, label: s, isSelected: j } = e,
        { fractionalState: g, endsAt: C } = (0, o.Z)({ forceFetch: !0 }),
        N = (0, d.N)(),
        E = (0, u.Ng)(),
        T = (0, p.Vi)(),
        y = (0, l.e7)([x.Z], () => x.Z.isLocalizedPromoEnabled) && null == N && null == n,
        { enabled: P } = a._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        R = P && (null == N ? void 0 : N.trial_id) === v.a7;
    return (
        (t =
            g !== v.a$.NONE
                ? (0, i.jsx)(c.Z, {
                      className: '',
                      endsAt: C
                  })
                : T
                  ? (0, i.jsx)(h.Z, {})
                  : null != E
                    ? (0, i.jsx)(f.GN, {
                          isTabSelected: j,
                          userDiscount: E,
                          includesAmountOff: !1
                      })
                    : null == N || R
                      ? null != n
                          ? n
                          : y
                            ? (0, i.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                            : (0, i.jsx)(b.Z, { isSelected: j })
                      : (0, i.jsx)(f.$H, {
                            isTabSelected: j,
                            trialOffer: N
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: r()(S.premiumLabel, { [S.selected]: (j || y) && !T }),
                    children: [s, t]
                }),
                (0, i.jsx)('div', {
                    className: r()(S.background, {
                        [S.auPromo]: y && !j,
                        [S.auPromoSelected]: y && j,
                        [S.selectedBackground]: !y && !T && j
                    })
                })
            ]
        })
    );
}
