"use strict";
n.d(t, {
  $0: function() {
    return C
  },
  AN: function() {
    return U
  },
  Ct: function() {
    return p
  },
  EQ: function() {
    return x
  },
  Ej: function() {
    return m
  },
  ME: function() {
    return I
  },
  O1: function() {
    return A
  },
  O8: function() {
    return L
  },
  Pl: function() {
    return N
  },
  Uw: function() {
    return M
  },
  ZE: function() {
    return y
  },
  _G: function() {
    return S
  },
  _O: function() {
    return O
  },
  _y: function() {
    return T
  },
  do: function() {
    return b
  },
  g7: function() {
    return v
  },
  g_: function() {
    return d
  },
  j4: function() {
    return g
  },
  ks: function() {
    return k
  },
  lX: function() {
    return f
  },
  m_: function() {
    return E
  },
  qH: function() {
    return D
  },
  tj: function() {
    return h
  },
  uw: function() {
    return R
  },
  wN: function() {
    return w
  },
  zZ: function() {
    return G
  },
  zm: function() {
    return P
  }
});
var i = n(848246),
  r = n(710845),
  s = n(380684),
  o = n(533293),
  a = n(575691),
  l = n(474936);
let u = new r.Z("ProductCatalog.tsx"),
  _ = Object.freeze({
    [l.p9.TIER_0]: l.Si.TIER_0,
    [l.p9.TIER_1]: l.Si.TIER_1,
    [l.p9.TIER_2]: l.Si.TIER_2
  });
class c extends o.Z {
  constructor(e, t) {
    super(e, e => (function(e, t) {
      if (null == t || null == t.premiumType) return !1;
      try {
        let n = _[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = B[n];
        if (null == i) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e)
      } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
      }
      return !1
    })(this, e), t)
  }
}
let d = new c(i.q.ANIMATED_EMOJIS),
  E = new c(i.q.EMOJIS_EVERYWHERE),
  I = new c(i.q.STICKERS_EVERYWHERE),
  T = new c(i.q.SOUNDBOARD_EVERYWHERE),
  h = new c(i.q.CUSTOM_CALL_SOUNDS),
  f = new c(i.q.ANIMATED_AVATAR),
  S = new c(i.q.CUSTOM_DISCRIMINATOR),
  A = new c(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
  N = new c("profileBadges"),
  m = new c(i.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  O = new c("collectibles"),
  p = new c("appIcons"),
  R = new c(i.q.CLIENT_THEMES),
  g = new c("boostDiscount"),
  C = new c("freeBoosts"),
  v = new c(i.q.STREAM_MID_QUALITY),
  L = new c(i.q.STREAM_HIGH_QUALITY),
  D = new c(i.q.CUSTOM_NOTIFICATION_SOUNDS),
  M = new c("fancyVoiceChannelReactions"),
  P = new c("installPremiumApplications"),
  y = new c("redeemPremiumPerks"),
  U = new c(i.q.VIDEO_FILTER_ASSETS);
new o.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, s.h);
let b = new c(i.q.INCREASED_GUILD_LIMIT),
  G = new c(i.q.INCREASED_MESSAGE_LENGTH),
  w = new c("increasedVideoUploadQuality"),
  x = new c("uploadLargeFiles"),
  B = Object.freeze({
    [l.Si.TIER_0]: new a.Z(l.Si.TIER_0, [d, E, I, N, U, w, x, p]),
    [l.Si.TIER_1]: new a.Z(l.Si.TIER_1, [d, E, f, S, N, g, v, M, w, x, p]),
    [l.Si.TIER_2]: new a.Z(l.Si.TIER_2, [d, E, I, T, h, f, S, A, N, m, R, g, C, v, L, M, P, y, U, b, G, w, x, p, O, D])
  });

function k(e, t) {
  return e.getFeatureValue(t)
}