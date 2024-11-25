n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(769415),
    a = n(650032),
    c = n(104494),
    u = n(639119),
    d = n(655525),
    h = n(52188),
    m = n(346497),
    p = n(924540),
    b = n(474486),
    f = n(351402),
    v = n(170671),
    S = n(474936),
    x = n(913074);
let g = 'UserSettingsPremiumLabel';
function j(e) {
    let t,
        { decoration: n, label: l, isSelected: j } = e,
        N = (0, u.N)(),
        C = (0, c.Ng)(),
        y = (0, m.Vi)(),
        P = (0, r.e7)([f.Z], () => f.Z.isLocalizedPromoEnabled) && null == N && null == n,
        { enabled: T } = a._.useExperiment({ location: g }, { autoTrackExposure: !1 }),
        E = T && (null == N ? void 0 : N.trial_id) === S.a7,
        I = (null == N ? void 0 : N.trial_id) === S.jz,
        { enabled: R } = o.Z.getCurrentConfig({ location: g }, { autoTrackExposure: I });
    return (
        (t = y
            ? (0, i.jsx)(d.Z, {})
            : null != C
              ? (0, i.jsx)(p.GN, {
                    isTabSelected: j,
                    userDiscount: C,
                    includesAmountOff: !1
                })
              : I
                ? (0, i.jsx)(b.dX, {
                      isSelected: j,
                      trialOffer: N,
                      q4MarketingEnabled: R
                  })
                : null == N || E
                  ? null != n
                      ? n
                      : P
                        ? (0, i.jsx)(h.k, { entryPoint: h.U.SettingsMenu })
                        : (0, i.jsx)(v.Z, { isSelected: j })
                  : (0, i.jsx)(p.$H, {
                        isTabSelected: j,
                        trialOffer: N
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: s()(x.premiumLabel, { [x.selected]: (j || P) && !y }),
                    children: [l, t]
                }),
                (0, i.jsx)('div', {
                    className: s()(x.background, {
                        [x.auPromo]: P && !j,
                        [x.auPromoSelected]: P && j,
                        [x.selectedBackground]: !P && !y && j
                    })
                })
            ]
        })
    );
}
