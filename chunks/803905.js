n.d(t, {
    $0: function () {
        return N;
    },
    AN: function () {
        return w;
    },
    Ct: function () {
        return b;
    },
    EQ: function () {
        return U;
    },
    Ej: function () {
        return S;
    },
    ME: function () {
        return h;
    },
    O1: function () {
        return v;
    },
    O8: function () {
        return R;
    },
    Pl: function () {
        return I;
    },
    Uw: function () {
        return D;
    },
    ZE: function () {
        return x;
    },
    _G: function () {
        return E;
    },
    _O: function () {
        return T;
    },
    _y: function () {
        return p;
    },
    do: function () {
        return M;
    },
    g7: function () {
        return C;
    },
    g_: function () {
        return f;
    },
    j4: function () {
        return A;
    },
    ks: function () {
        return B;
    },
    lX: function () {
        return g;
    },
    m_: function () {
        return _;
    },
    qH: function () {
        return O;
    },
    tj: function () {
        return m;
    },
    uw: function () {
        return y;
    },
    wN: function () {
        return k;
    },
    zZ: function () {
        return P;
    },
    zm: function () {
        return L;
    }
});
var r = n(848246),
    i = n(710845),
    a = n(380684),
    s = n(533293),
    o = n(575691),
    l = n(474936);
let u = new i.Z('ProductCatalog.tsx'),
    c = Object.freeze({
        [l.p9.TIER_0]: l.Si.TIER_0,
        [l.p9.TIER_1]: l.Si.TIER_1,
        [l.p9.TIER_2]: l.Si.TIER_2
    });
class d extends s.Z {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = c[t.premiumType];
                        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
                        let r = G[n];
                        if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, ' and premium type ').concat(t.premiumType)), !1;
                        return r.skuFeatures.includes(e);
                    } catch (e) {
                        var n;
                        u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)));
                    }
                    return !1;
                })(this, e),
            t
        );
    }
}
let f = new d(r.q.ANIMATED_EMOJIS),
    _ = new d(r.q.EMOJIS_EVERYWHERE),
    h = new d(r.q.STICKERS_EVERYWHERE),
    p = new d(r.q.SOUNDBOARD_EVERYWHERE),
    m = new d(r.q.CUSTOM_CALL_SOUNDS),
    g = new d(r.q.ANIMATED_AVATAR),
    E = new d(r.q.CUSTOM_DISCRIMINATOR),
    v = new d(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
    I = new d('profileBadges'),
    S = new d(r.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    T = new d('collectibles'),
    b = new d('appIcons'),
    y = new d(r.q.CLIENT_THEMES),
    A = new d('boostDiscount'),
    N = new d('freeBoosts'),
    C = new d(r.q.STREAM_MID_QUALITY),
    R = new d(r.q.STREAM_HIGH_QUALITY),
    O = new d(r.q.CUSTOM_NOTIFICATION_SOUNDS),
    D = new d('fancyVoiceChannelReactions'),
    L = new d('installPremiumApplications'),
    x = new d('redeemPremiumPerks'),
    w = new d(r.q.VIDEO_FILTER_ASSETS);
new s.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, a.h6);
let M = new d(r.q.INCREASED_GUILD_LIMIT),
    P = new d(r.q.INCREASED_MESSAGE_LENGTH),
    k = new d('increasedVideoUploadQuality'),
    U = new d('uploadLargeFiles'),
    G = Object.freeze({
        [l.Si.TIER_0]: new o.Z(l.Si.TIER_0, [f, _, h, I, w, k, U, b]),
        [l.Si.TIER_1]: new o.Z(l.Si.TIER_1, [f, _, g, E, I, A, C, D, k, U, b]),
        [l.Si.TIER_2]: new o.Z(l.Si.TIER_2, [f, _, h, p, m, g, E, v, I, S, y, A, N, C, R, D, L, x, w, M, P, k, U, b, T, O])
    });
function B(e, t) {
    return e.getFeatureValue(t);
}
