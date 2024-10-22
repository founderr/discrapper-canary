n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(927359),
    a = n(975298),
    c = n(650032),
    u = n(767870),
    d = n(104494),
    h = n(639119),
    m = n(655525),
    p = n(52188),
    f = n(248042),
    b = n(924540),
    S = n(351402),
    v = n(170671),
    x = n(474936),
    g = n(655580);
function N(e) {
    let t,
        { decoration: n, label: s, isSelected: N } = e,
        { fractionalState: j, endsAt: C } = (0, a.Z)({ forceFetch: !0 }),
        T = (0, h.N)(),
        E = (0, d.Ng)(),
        y = (0, f.Vi)(),
        P = (0, r.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) && null == T && null == n,
        { enabled: R } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        I = R && (null == T ? void 0 : T.trial_id) === x.a7;
    return (
        (t =
            j !== x.a$.NONE
                ? (0, i.jsx)(u.Z, {
                      className: '',
                      endsAt: C,
                      messageStyle: o.a.SHORT_TIME_LEFT,
                      showSparkles: !0
                  })
                : y
                  ? (0, i.jsx)(m.Z, {})
                  : null != E
                    ? (0, i.jsx)(b.GN, {
                          isTabSelected: N,
                          userDiscount: E,
                          includesAmountOff: !1
                      })
                    : null == T || I
                      ? null != n
                          ? n
                          : P
                            ? (0, i.jsx)(p.k, { entryPoint: p.U.SettingsMenu })
                            : (0, i.jsx)(v.Z, { isSelected: N })
                      : (0, i.jsx)(b.$H, {
                            isTabSelected: N,
                            trialOffer: T
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: l()(g.premiumLabel, { [g.selected]: (N || P) && !y }),
                    children: [s, t]
                }),
                (0, i.jsx)('div', {
                    className: l()(g.background, {
                        [g.auPromo]: P && !N,
                        [g.auPromoSelected]: P && N,
                        [g.selectedBackground]: !P && !y && N
                    })
                })
            ]
        })
    );
}
