n.d(t, {
    $0: function () {
        return C;
    },
    AN: function () {
        return U;
    },
    Ct: function () {
        return N;
    },
    EQ: function () {
        return k;
    },
    Ej: function () {
        return A;
    },
    ME: function () {
        return h;
    },
    O1: function () {
        return g;
    },
    O8: function () {
        return L;
    },
    Pl: function () {
        return S;
    },
    Uw: function () {
        return D;
    },
    ZE: function () {
        return P;
    },
    _G: function () {
        return T;
    },
    _O: function () {
        return v;
    },
    _y: function () {
        return p;
    },
    do: function () {
        return w;
    },
    g7: function () {
        return y;
    },
    g_: function () {
        return E;
    },
    j4: function () {
        return R;
    },
    ks: function () {
        return F;
    },
    lX: function () {
        return I;
    },
    m_: function () {
        return f;
    },
    qH: function () {
        return b;
    },
    tj: function () {
        return m;
    },
    uw: function () {
        return O;
    },
    wN: function () {
        return G;
    },
    zZ: function () {
        return x;
    },
    zm: function () {
        return M;
    }
});
var r = n(848246),
    i = n(710845),
    a = n(380684),
    o = n(533293),
    s = n(575691),
    l = n(474936);
let u = new i.Z('ProductCatalog.tsx'),
    c = Object.freeze({
        [l.p9.TIER_0]: l.Si.TIER_0,
        [l.p9.TIER_1]: l.Si.TIER_1,
        [l.p9.TIER_2]: l.Si.TIER_2
    });
function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = c[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let r = B[n];
        if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, ' and premium type ').concat(t.premiumType)), !1;
        return r.skuFeatures.includes(e);
    } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)));
    }
    return !1;
}
class _ extends o.Z {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let E = new _(r.q.ANIMATED_EMOJIS),
    f = new _(r.q.EMOJIS_EVERYWHERE),
    h = new _(r.q.STICKERS_EVERYWHERE),
    p = new _(r.q.SOUNDBOARD_EVERYWHERE),
    m = new _(r.q.CUSTOM_CALL_SOUNDS),
    I = new _(r.q.ANIMATED_AVATAR),
    T = new _(r.q.CUSTOM_DISCRIMINATOR),
    g = new _(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
    S = new _('profileBadges'),
    A = new _(r.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    v = new _('collectibles'),
    N = new _('appIcons'),
    O = new _(r.q.CLIENT_THEMES),
    R = new _('boostDiscount'),
    C = new _('freeBoosts'),
    y = new _(r.q.STREAM_MID_QUALITY),
    L = new _(r.q.STREAM_HIGH_QUALITY),
    b = new _(r.q.CUSTOM_NOTIFICATION_SOUNDS),
    D = new _('fancyVoiceChannelReactions'),
    M = new _('installPremiumApplications'),
    P = new _('redeemPremiumPerks'),
    U = new _(r.q.VIDEO_FILTER_ASSETS);
new o.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, a.h6);
let w = new _(r.q.INCREASED_GUILD_LIMIT),
    x = new _(r.q.INCREASED_MESSAGE_LENGTH),
    G = new _('increasedVideoUploadQuality'),
    k = new _('uploadLargeFiles'),
    B = Object.freeze({
        [l.Si.TIER_0]: new s.Z(l.Si.TIER_0, [E, f, h, S, U, G, k, N]),
        [l.Si.TIER_1]: new s.Z(l.Si.TIER_1, [E, f, I, T, S, R, y, D, G, k, N]),
        [l.Si.TIER_2]: new s.Z(l.Si.TIER_2, [E, f, h, p, m, I, T, g, S, A, O, R, C, y, L, D, M, P, U, w, x, G, k, N, v, b])
    });
function F(e, t) {
    return e.getFeatureValue(t);
}
