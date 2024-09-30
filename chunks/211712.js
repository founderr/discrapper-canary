t.d(s, {
    J2: function () {
        return A;
    },
    _h: function () {
        return C;
    },
    eQ: function () {
        return a;
    },
    j_: function () {
        return m;
    }
});
var n,
    a,
    i = t(597688),
    r = t(350327),
    o = t(689938),
    l = t(201016),
    c = t(673497),
    d = t(421450),
    _ = t(977787),
    u = t(187812),
    E = t(947557),
    T = t(808236),
    S = t(265665),
    I = t(181793),
    N = t(338430);
((n = a || (a = {}))[(n.ABOVE_THE_CLOUDS = 0)] = 'ABOVE_THE_CLOUDS'), (n[(n.CYBERPUNK = 1)] = 'CYBERPUNK'), (n[(n.STARLIT_DREAM = 2)] = 'STARLIT_DREAM'), (n[(n.SHADOW_REALM = 3)] = 'SHADOW_REALM'), (n[(n.NEON_SPACE = 4)] = 'NEON_SPACE');
let A = {
    0: {
        presetName: 0,
        presetBackgroundUrl: E.Z,
        themeColors: [752280, 9215590],
        bannerImageUrl: l.Z,
        avatarDecorationSkuId: '1144059132517826601'
    },
    1: {
        presetName: 1,
        presetBackgroundUrl: T.Z,
        themeColors: [1967991, 742532],
        bannerImageUrl: c.Z
    },
    2: {
        presetName: 2,
        presetBackgroundUrl: S.Z,
        themeColors: [0, 4458504],
        bannerImageUrl: d.Z,
        avatarDecorationSkuId: '1144058522808614923'
    },
    3: {
        presetName: 3,
        presetBackgroundUrl: I.Z,
        themeColors: [5123751, 590625],
        bannerImageUrl: _.Z,
        avatarDecorationSkuId: '1144058844004233369'
    },
    4: {
        presetName: 4,
        presetBackgroundUrl: N.Z,
        themeColors: [6094952, 1007678],
        bannerImageUrl: u.Z
    }
};
function C(e) {
    switch (e) {
        case 0:
            return o.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_ABOVE_THE_CLOUDS;
        case 1:
            return o.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_CYBERPUNK;
        case 2:
            return o.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_STARLIT_DREAM;
        case 3:
            return o.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_SHADOW_REALM;
        case 4:
            return o.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_NEON_SPACE;
    }
}
function m(e) {
    var s;
    let t = A[e];
    (0, r.x3)({
        bannerImage: t.bannerImageUrl,
        themeColors: t.themeColors,
        avatarDecoration: null != t.avatarDecorationSkuId ? (null === (s = i.Z.getProduct(t.avatarDecorationSkuId)) || void 0 === s ? void 0 : s.items[0]) : void 0
    });
}
