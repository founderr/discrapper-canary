var r = n(627341);
var i = n(470079),
    a = n(278074),
    o = n(979554),
    s = n(399606),
    l = n(626135),
    u = n(597688),
    c = n(884697),
    d = n(981631),
    _ = n(474936);
let E = (e) => {
    let t = (0, s.e7)([u.Z], () => u.Z.products);
    return (0, i.useCallback)(
        (n) => {
            let { type: r, skuId: i } = n,
                s = t.get(i);
            l.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, a.EQ)(r)
                    .with(o.Z.AVATAR_DECORATION, () => _.QP.AVATAR_DECORATION)
                    .with(o.Z.PROFILE_EFFECT, () => _.QP.PROFILE_EFFECT)
                    .otherwise(() => void 0),
                feature_tier: (0, c.G1)(s) ? _.h1.FREE : _.h1.PREMIUM_STANDARD,
                feature_selection: null == s ? void 0 : s.name,
                location_stack: e
            });
        },
        [t, e]
    );
};
t.Z = E;
