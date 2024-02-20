"use strict";
n.r(t), n.d(t, {
  ANIMATED_EMOJIS: function() {
    return d
  },
  EMOJIS_EVERYWHERE: function() {
    return p
  },
  STICKERS_EVERYWHERE: function() {
    return h
  },
  SOUNDBOARD_EVERYWHERE: function() {
    return f
  },
  CUSTOM_CALL_SOUNDS: function() {
    return E
  },
  ANIMATED_AVATAR: function() {
    return _
  },
  CUSTOM_DISCRIMINATOR: function() {
    return m
  },
  PREMIUM_GUILD_MEMBER_PROFILE: function() {
    return S
  },
  PROFILE_BADGES: function() {
    return g
  },
  PROFILE_PREMIUM_FEATURES: function() {
    return T
  },
  COLLECTIBLES: function() {
    return I
  },
  APP_ICONS: function() {
    return v
  },
  CLIENT_THEMES: function() {
    return C
  },
  BOOST_DISCOUNT: function() {
    return A
  },
  FREE_BOOSTS: function() {
    return R
  },
  HOST_PREMIUM_ACTIVITIES: function() {
    return N
  },
  STREAM_MID_QUALITY: function() {
    return y
  },
  STREAM_HIGH_QUALITY: function() {
    return O
  },
  FANCY_VOICE_CHANNEL_REACTIONS: function() {
    return D
  },
  INSTALL_PREMIUM_APPLICATIONS: function() {
    return b
  },
  REDEEM_PREMIUM_PERKS: function() {
    return P
  },
  VIDEO_FILTER_ASSETS: function() {
    return L
  },
  INCREASED_GUILD_LIMIT: function() {
    return M
  },
  INCREASED_MESSAGE_LENGTH: function() {
    return U
  },
  INCREASED_VIDEO_UPLOAD_QUALITY: function() {
    return w
  },
  UPLOAD_LARGE_FILES: function() {
    return k
  },
  canUserUse: function() {
    return x
  }
});
var i = n("605250"),
  r = n("886551"),
  s = n("45120"),
  a = n("715757"),
  o = n("646718");
let l = new i.default("ProductCatalog.tsx"),
  u = Object.freeze({
    [o.PremiumTypes.TIER_0]: o.PremiumSubscriptionSKUs.TIER_0,
    [o.PremiumTypes.TIER_1]: o.PremiumSubscriptionSKUs.TIER_1,
    [o.PremiumTypes.TIER_2]: o.PremiumSubscriptionSKUs.TIER_2
  });
class c extends s.default {
  constructor(e, t) {
    super(e, e => (function(e, t) {
      if (null == t || null == t.premiumType) return !1;
      try {
        let n = u[t.premiumType];
        if (null == n) return l.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = G[n];
        if (null == i) return l.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e)
      } catch (e) {
        var n;
        l.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
      }
      return !1
    })(this, e), t)
  }
}
let d = new c("animatedEmojis"),
  p = new c("emojisEverywhere"),
  h = new c("stickersEverywhere"),
  f = new c("soundboardEverywhere"),
  E = new c("customCallSounds"),
  _ = new c("animatedAvatar"),
  m = new c("customDiscriminator"),
  S = new c("premiumGuildMemberProfile"),
  g = new c("profileBadges"),
  T = new c("profilePremiumFeatures", "custom banner and avatar decoration"),
  I = new c("collectibles"),
  v = new c("appIcons"),
  C = new c("clientThemes"),
  A = new c("boostDiscount"),
  R = new c("freeBoosts"),
  N = new c("hostPremiumActivities"),
  y = new c("streamMidQuality"),
  O = new c("streamHighQuality"),
  D = new c("fancyVoiceChannelReactions"),
  b = new c("installPremiumApplications"),
  P = new c("redeemPremiumPerks"),
  L = new c("videoFilterAssets");
new s.default("increasedFileUploadSize", r.getUserMaxFileSize);
let M = new c("increasedGuildLimit"),
  U = new c("increasedMessageLength"),
  w = new c("increasedVideoUploadQuality"),
  k = new c("uploadLargeFiles"),
  G = Object.freeze({
    [o.PremiumSubscriptionSKUs.TIER_0]: new a.default(o.PremiumSubscriptionSKUs.TIER_0, [d, p, h, g, L, w, k, v]),
    [o.PremiumSubscriptionSKUs.TIER_1]: new a.default(o.PremiumSubscriptionSKUs.TIER_1, [d, p, _, m, g, A, y, D, w, k, v]),
    [o.PremiumSubscriptionSKUs.TIER_2]: new a.default(o.PremiumSubscriptionSKUs.TIER_2, [d, p, h, f, E, _, m, S, g, T, C, A, R, N, y, O, D, b, P, L, M, U, w, k, v, I])
  });

function x(e, t) {
  return e.getFeatureValue(t)
}