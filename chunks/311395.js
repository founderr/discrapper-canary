var i = r(627341);
var a = r(192379),
    s = r(278074),
    o = r(979554),
    l = r(399606),
    u = r(626135),
    c = r(597688),
    d = r(884697),
    f = r(981631),
    _ = r(474936);
let h = (e) => {
    let n = (0, l.e7)([c.Z], () => c.Z.products);
    return (0, a.useCallback)(
        (r) => {
            let { type: i, skuId: a } = r,
                l = n.get(a);
            u.default.track(f.rMx.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, s.EQ)(i)
                    .with(o.Z.AVATAR_DECORATION, () => _.QP.AVATAR_DECORATION)
                    .with(o.Z.PROFILE_EFFECT, () => _.QP.PROFILE_EFFECT)
                    .otherwise(() => void 0),
                feature_tier: (0, d.G1)(l) ? _.h1.FREE : _.h1.PREMIUM_STANDARD,
                feature_selection: null == l ? void 0 : l.name,
                location_stack: e
            });
        },
        [n, e]
    );
};
n.Z = h;
