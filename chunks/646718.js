"use strict";
n.r(t), n.d(t, {
  PremiumTypes: function() {
    return r
  },
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
    return k
  },
  PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
    return K
  },
  PremiumTypeOrder: function() {
    return Y
  },
  PREMIUM_SUBSCRIPTION_APPLICATION: function() {
    return W
  },
  PremiumSubscriptionSKUs: function() {
    return i
  },
  ACTIVE_PREMIUM_SKUS: function() {
    return x
  },
  PremiumSubscriptionSKUToPremiumType: function() {
    return j
  },
  SubscriptionPlans: function() {
    return o
  },
  PREMIUM_PLANS: function() {
    return X
  },
  PREMIUM_TIER_2_PLANS: function() {
    return J
  },
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
    return z
  },
  MULTI_MONTH_PLANS: function() {
    return Z
  },
  PREMIUM_MONTHLY_PLANS: function() {
    return Q
  },
  PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
    return q
  },
  PREMIUM_SKU_TO_YEARLY_PLAN: function() {
    return $
  },
  SubscriptionIntervalTypes: function() {
    return l
  },
  DiscountUserUsageLimitIntervalTypes: function() {
    return u
  },
  SubscriptionPlanInfo: function() {
    return ee
  },
  GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
    return et
  },
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
    return en
  },
  DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
    return er
  },
  PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
    return ei
  },
  MAX_ACCOUNT_HOLD_DAYS: function() {
    return eo
  },
  BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
    return el
  },
  STICKERS_GIFT_CODE_BATCH_ID: function() {
    return eu
  },
  USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
    return ea
  },
  MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
    return es
  },
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
    return eE
  },
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
    return e_
  },
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
    return ec
  },
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
    return ed
  },
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
    return eT
  },
  PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
    return eA
  },
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
    return eS
  },
  PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
    return ef
  },
  PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
    return eO
  },
  SubscriptionTrials: function() {
    return eR
  },
  PremiumUpsellTypes: function() {
    return a
  },
  PurchasedFlags: function() {
    return s
  },
  SKU_ID_PURCHASED_FLAGS: function() {
    return eN
  },
  MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
    return eL
  },
  IncrementalStickerCountsByTier: function() {
    return ep
  },
  TotalStickerCountsByTier: function() {
    return eC
  },
  TotalSoundboardSoundCountsByTier: function() {
    return em
  },
  BoostedGuildFeatures: function() {
    return eP
  },
  ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
    return eh
  },
  AnalyticsPremiumFeatureNames: function() {
    return E
  },
  AnalyticsPremiumFeatureTiers: function() {
    return _
  },
  DISCOUNTS: function() {
    return eD
  },
  StreamQualities: function() {
    return c
  },
  StreamQualitiesToPremiumType: function() {
    return eg
  },
  PremiumMarketingEntrypoints: function() {
    return d
  },
  PremiumHeaderThemes: function() {
    return T
  },
  PremiumGiftStyles: function() {
    return A
  },
  InboundPromotionErrorCodes: function() {
    return I
  },
  PromotionFlags: function() {
    return eU
  },
  PremiumUserLimits: function() {
    return eM
  },
  BoostingUpsellAction: function() {
    return O
  },
  ReferralTrialsAnalyticSteps: function() {
    return R
  },
  LegacyPricingCountries: function() {
    return ev
  },
  LegacySeasonalGiftStyles: function() {
    return eG
  },
  SeasonalGiftStyles2023: function() {
    return ey
  },
  AllSeasonalGiftStyles: function() {
    return eF
  }
}), n("222007");
var r, i, o, l, u, a, s, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m, P, h, D, g, U, M, v, G, y, F, b, B, H, V = n("49111"),
  w = n("958706");
(N = r || (r = {}))[N.TIER_1 = 1] = "TIER_1", N[N.TIER_2 = 2] = "TIER_2", N[N.TIER_0 = 3] = "TIER_0";
let k = void 0,
  K = [{
    value: null,
    label: "Non-Nitro"
  }, {
    value: 3,
    label: "Basic"
  }, {
    value: 1,
    label: "Classic"
  }, {
    value: 2,
    label: "Standard"
  }],
  Y = Object.freeze({
    3: 0,
    1: 1,
    2: 2
  }),
  W = "521842831262875670";
(L = i || (i = {})).NONE = "628379670982688768", L.TIER_0 = "978380684370378762", L.TIER_1 = "521846918637420545", L.TIER_2 = "521847234246082599", L.GUILD = "590663762298667008", L.LEGACY = "521842865731534868";
let x = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
  j = Object.freeze({
    "978380684370378762": 3,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "521842865731534868": 2
  });
(p = o || (o = {})).NONE_MONTH = "628379151761408000", p.NONE_YEAR = "628381571568631808", p.PREMIUM_MONTH_TIER_0 = "978380692553465866", p.PREMIUM_YEAR_TIER_0 = "1024422698568122368", p.PREMIUM_MONTH_TIER_1 = "511651871736201216", p.PREMIUM_YEAR_TIER_1 = "511651876987469824", p.PREMIUM_MONTH_TIER_2 = "511651880837840896", p.PREMIUM_YEAR_TIER_2 = "511651885459963904", p.PREMIUM_MONTH_GUILD = "590665532894740483", p.PREMIUM_YEAR_GUILD = "590665538238152709", p.NONE_3_MONTH = "944265614527037440", p.NONE_6_MONTH = "944265636643602432", p.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", p.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", p.PREMIUM_3_MONTH_GUILD = "944037355453415424", p.PREMIUM_6_MONTH_GUILD = "944037391444738048", p.PREMIUM_MONTH_LEGACY = "511651856145973248", p.PREMIUM_YEAR_LEGACY = "511651860671627264";
let X = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
  J = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
  z = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
  Z = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
  Q = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
  q = Object.freeze({
    "978380684370378762": "978380692553465866",
    "521846918637420545": "511651871736201216",
    "521847234246082599": "511651880837840896",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  }),
  $ = Object.freeze({
    "978380684370378762": "1024422698568122368",
    "521846918637420545": "511651876987469824",
    "521847234246082599": "511651885459963904",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  });
(C = l || (l = {}))[C.MONTH = 1] = "MONTH", C[C.YEAR = 2] = "YEAR", C[C.DAY = 3] = "DAY", (m = u || (u = {}))[m.DAY = 1] = "DAY", m[m.WEEK = 2] = "WEEK", m[m.MONTH = 3] = "MONTH", m[m.YEAR = 4] = "YEAR";
let ee = Object.freeze({
    "628379151761408000": {
      id: "628379151761408000",
      name: "None Monthly",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 1
    },
    "628381571568631808": {
      id: "628381571568631808",
      name: "None Yearly",
      skuId: "628379670982688768",
      interval: 2,
      intervalCount: 1
    },
    "978380692553465866": {
      id: "978380692553465866",
      name: "Nitro Basic Monthly",
      premiumType: 3,
      skuId: "978380684370378762",
      interval: 1,
      intervalCount: 1
    },
    "1024422698568122368": {
      id: "1024422698568122368",
      name: "Nitro Basic Yearly",
      premiumType: 3,
      skuId: "978380684370378762",
      interval: 2,
      intervalCount: 1
    },
    "511651871736201216": {
      id: "511651871736201216",
      name: "Nitro Classic Monthly",
      premiumType: 1,
      skuId: "521846918637420545",
      interval: 1,
      intervalCount: 1
    },
    "511651876987469824": {
      id: "511651876987469824",
      name: "Nitro Classic Yearly",
      premiumType: 1,
      skuId: "521846918637420545",
      interval: 2,
      intervalCount: 1
    },
    "511651880837840896": {
      id: "511651880837840896",
      name: "Nitro Monthly",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 1
    },
    "511651885459963904": {
      id: "511651885459963904",
      name: "Nitro Yearly",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 2,
      intervalCount: 1
    },
    "590665532894740483": {
      id: "590665532894740483",
      name: "Nitro Server Boost Monthly",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 1
    },
    "590665538238152709": {
      id: "590665538238152709",
      name: "Nitro Server Boost Yearly",
      skuId: "590663762298667008",
      interval: 2,
      intervalCount: 1
    },
    "642251038925127690": {
      id: "642251038925127690",
      name: "Nitro Three Month",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 3
    },
    "944037208325619722": {
      id: "944037208325619722",
      name: "Nitro Six Month",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 6
    },
    "944037355453415424": {
      id: "944037355453415424",
      name: "Nitro Server Boost Three Month",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 3
    },
    "944037391444738048": {
      id: "944037391444738048",
      name: "Nitro Server Boost Six Month",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 6
    },
    "944265614527037440": {
      id: "944265614527037440",
      name: "None Three Month",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 3
    },
    "944265636643602432": {
      id: "944265636643602432",
      name: "None Six Month",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 6
    },
    "511651856145973248": {
      id: "511651856145973248",
      name: "Nitro Monthly (Legacy)",
      premiumType: 2,
      skuId: "521842865731534868",
      interval: 1,
      intervalCount: 1
    },
    "511651860671627264": {
      id: "511651860671627264",
      name: "Nitro Classic Yearly (Legacy)",
      premiumType: 2,
      skuId: "521842865731534868",
      interval: 2,
      intervalCount: 1
    }
  }),
  et = 30,
  en = 2,
  er = 3,
  ei = 7,
  eo = 30,
  el = "775514091874680832",
  eu = "845031178288889946",
  ea = 432e6,
  es = 14,
  eE = "520373071933079552",
  e_ = "902329034132684800",
  ec = "983601860436819968",
  ed = "983601860436819969",
  eT = "984244797441048577",
  eA = "1004850445463584768",
  eI = "1073698058383917056",
  eS = "1070132870233980928",
  ef = "1150904354090532864",
  eO = "1199128659810582528",
  eR = Object.freeze({
    [eE]: {
      id: eE,
      skus: ["521847234246082599"]
    },
    [e_]: {
      id: e_,
      skus: ["521847234246082599"]
    },
    [ec]: {
      id: ec,
      skus: ["521847234246082599"]
    },
    [ed]: {
      id: ed,
      skus: ["521847234246082599"]
    },
    [eT]: {
      id: eT,
      skus: ["521847234246082599"]
    },
    [eA]: {
      id: eA,
      skus: ["521847234246082599"]
    },
    [eS]: {
      id: eS,
      skus: ["978380684370378762"]
    },
    [eI]: {
      id: eI,
      skus: ["521847234246082599"]
    }
  });
(P = a || (a = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", P.EMOJI_PICKER_SEARCH = "emoji_picker_search", P.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", P.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", P.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", P.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", P.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", P.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", P.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", P.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked", P.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", P.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", P.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", P.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", P.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", P.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", P.EMOJI_PICKER_FLOATING_UPSELL = "emoji_picker_floating_upsell", P.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", P.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", P.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", P.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", P.STREAM_QUALITY_UPSELL = "stream_quality_upsell", P.MESSAGE_LENGTH_UPSELL = "message_length_upsell", P.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", P.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", P.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", P.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", P.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", P.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", P.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", P.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", P.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", P.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", P.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", P.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", P.STICKER_PICKER_UPSELL = "sticker_picker_upsell", P.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", P.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", P.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", P.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", P.UPLOAD_ERROR_UPSELL = "upload error upsell", P.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", P.CONCURRENT_ACTIVITIES = "Concurrent Activities", P.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", P.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", P.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", P.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", P.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", P.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", P.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", P.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", P.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", P.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", P.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", P.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", P.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", P.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", P.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", P.BURST_REACTION_UPSELL = "burst_reaction_upsell", P.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", P.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", P.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", P.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", P.VIDEO_STAGE_LIMIT = "video_stage_limit", P.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", P.APP_ICON_UPSELL = "app_icon_upsell", P.COLLECTIBLES_SHOP = "collectibles_shop", P.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", P.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", P.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", P.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (h = s || (s = {}))[h.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", h[h.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", h[h.GUILD_BOOST = 4] = "GUILD_BOOST", h[h.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
let eN = Object.freeze({
    "978380684370378762": 8,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "590663762298667008": 4
  }),
  eL = 52428800,
  ep = {
    [V.BoostedGuildTiers.NONE]: 5,
    [V.BoostedGuildTiers.TIER_1]: 10,
    [V.BoostedGuildTiers.TIER_2]: 15,
    [V.BoostedGuildTiers.TIER_3]: 30
  },
  eC = {
    [V.BoostedGuildTiers.NONE]: ep[V.BoostedGuildTiers.NONE],
    [V.BoostedGuildTiers.TIER_1]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1],
    [V.BoostedGuildTiers.TIER_2]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1] + ep[V.BoostedGuildTiers.TIER_2],
    [V.BoostedGuildTiers.TIER_3]: ep[V.BoostedGuildTiers.NONE] + ep[V.BoostedGuildTiers.TIER_1] + ep[V.BoostedGuildTiers.TIER_2] + ep[V.BoostedGuildTiers.TIER_3]
  },
  em = {
    [V.BoostedGuildTiers.NONE]: 8,
    [V.BoostedGuildTiers.TIER_1]: 24,
    [V.BoostedGuildTiers.TIER_2]: 36,
    [V.BoostedGuildTiers.TIER_3]: 48
  },
  eP = Object.freeze({
    [V.BoostedGuildTiers.NONE]: {
      features: [],
      limits: {
        emoji: w.EMOJI_MAX_SLOTS,
        bitrate: V.BITRATE_MAX,
        fileSize: V.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 30,
        screenShareQualityResolution: "720p",
        soundboardSounds: em[V.BoostedGuildTiers.NONE],
        maxConcurrentActivities: 2,
        stickers: eC[V.BoostedGuildTiers.NONE],
        stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [V.BoostedGuildTiers.TIER_1]: {
      features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON],
      limits: {
        emoji: 100,
        bitrate: 128e3,
        fileSize: V.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "720p",
        soundboardSounds: em[V.BoostedGuildTiers.TIER_1],
        maxConcurrentActivities: 3,
        stickers: eC[V.BoostedGuildTiers.TIER_1],
        stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [V.BoostedGuildTiers.TIER_2]: {
      features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON, V.GuildFeatures.BANNER, V.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 150,
        bitrate: 256e3,
        fileSize: 52428800,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: em[V.BoostedGuildTiers.TIER_2],
        maxConcurrentActivities: 5,
        stickers: eC[V.BoostedGuildTiers.TIER_2],
        stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
      }
    },
    [V.BoostedGuildTiers.TIER_3]: {
      features: [V.GuildFeatures.INVITE_SPLASH, V.GuildFeatures.ANIMATED_ICON, V.GuildFeatures.BANNER, V.GuildFeatures.ANIMATED_BANNER, V.GuildFeatures.VANITY_URL, V.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 250,
        bitrate: 384e3,
        fileSize: 104857600,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: em[V.BoostedGuildTiers.TIER_3],
        maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
        stickers: eC[V.BoostedGuildTiers.TIER_3],
        stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }
    }
  }),
  eh = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
(D = E || (E = {})).SOUNDBOARD_PLAY = "soundboard play", D.PROFILE_THEME_COLOR = "profile_theme_color", D.PROFILE_BANNER = "profile_banner", D.ANIMATED_AVATAR = "animated_avatar", D.AVATAR_DECORATION = "avatar_decoration", D.CLIENT_THEME = "client_theme", D.SHARED_CANVAS = "shared_canvas", D.PROFILE_EFFECT = "profile_effect", (g = _ || (_ = {})).FREE = "free", g.PREMIUM_STANDARD = "premium-standard";
let eD = {
  "1024422698568122368": 16,
  "511651876987469824": 16,
  "511651885459963904": 16,
  "944037208325619722": 8,
  "642251038925127690": 5
};
(U = c || (c = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", U.MID_STREAMING_QUALITY = "mid_streaming_quality";
let eg = Object.freeze({
  high_streaming_quality: 2,
  mid_streaming_quality: 1
});
(M = d || (d = {}))[M.UserSettings = 0] = "UserSettings", M[M.ApplicationStoreHome = 1] = "ApplicationStoreHome", (v = T || (T = {}))[v.DEFAULT = 0] = "DEFAULT", v[v.WINTER = 1] = "WINTER", (G = A || (A = {}))[G.SNOWGLOBE = 1] = "SNOWGLOBE", G[G.BOX = 2] = "BOX", G[G.CUP = 3] = "CUP", G[G.STANDARD_BOX = 4] = "STANDARD_BOX", G[G.CAKE = 5] = "CAKE", G[G.CHEST = 6] = "CHEST", G[G.COFFEE = 7] = "COFFEE", G[G.SEASONAL_STANDARD_BOX = 8] = "SEASONAL_STANDARD_BOX", G[G.SEASONAL_CAKE = 9] = "SEASONAL_CAKE", G[G.SEASONAL_CHEST = 10] = "SEASONAL_CHEST", G[G.SEASONAL_COFFEE = 11] = "SEASONAL_COFFEE", (y = I || (I = {})).USER_NOT_VERIFIED = "user_not_verified", y.NO_CODE_BODY = "no_code_body", y.NO_PROMOTION = "no_promotion", y.CODE_CLAIMED = "code_claimed", y.EXISTING_SUBSCRIBER = "existing_subscriber", y.PREVIOUS_SUBSCRIBER = "previous_subscriber", y.BLOCKED_PAYMENT = "blocked_payment";
let eU = Object.freeze({
    IS_BLOCKED_IOS: 32,
    IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
    SUPPRESS_NOTIFICATION: 128
  }),
  eM = Object.freeze({
    3: {
      fileSize: eL
    },
    1: {
      fileSize: 52428800
    },
    2: {
      fileSize: 524288e3
    }
  });
(F = S || (S = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", F.HELPER_COLLAPSED = "helper_collapsed", F.HELPER_UNCOLLAPSED = "helper_uncollapsed", F.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", F.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", F.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", F.HELPER_DISMISSED = "premium_feature_helper_dismissed", F.HELPER_RENDERED = "premium_feature_helper_rendered", (b = f || (f = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", b.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", b.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", b.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", b.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", b.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", b.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", b.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", b.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", b.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", b.BOOST_INTRO_VIEWED = "boost_intro_viewed", b.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (B = O || (O = {})).BOOST = "boost", B.DISMISS = "dismiss", (H = R || (R = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", H.BADGE_CLICKED = "share_nitro_badge_clicked", H.FLOW_STARTED = "share_nitro_flow_started", H.FLOW_COMPLETED = "share_nitro_flow_completed";
let ev = new Set(["PL", "TR"]),
  eG = [1, 2, 3],
  ey = [8, 9, 11, 10],
  eF = ey.concat(eG)