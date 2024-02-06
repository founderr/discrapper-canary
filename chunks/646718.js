"use strict";
n.r(t), n.d(t, {
  PremiumTypes: function() {
    return i
  },
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
    return k
  },
  PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
    return V
  },
  PremiumTypeOrder: function() {
    return G
  },
  PREMIUM_SUBSCRIPTION_APPLICATION: function() {
    return F
  },
  PremiumSubscriptionSKUs: function() {
    return s
  },
  ACTIVE_PREMIUM_SKUS: function() {
    return x
  },
  PremiumSubscriptionSKUToPremiumType: function() {
    return B
  },
  SubscriptionPlans: function() {
    return r
  },
  PREMIUM_PLANS: function() {
    return H
  },
  PREMIUM_TIER_2_PLANS: function() {
    return Y
  },
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
    return j
  },
  MULTI_MONTH_PLANS: function() {
    return W
  },
  PREMIUM_MONTHLY_PLANS: function() {
    return K
  },
  PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
    return z
  },
  PREMIUM_SKU_TO_YEARLY_PLAN: function() {
    return q
  },
  SubscriptionIntervalTypes: function() {
    return a
  },
  SubscriptionPlanInfo: function() {
    return X
  },
  GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
    return Q
  },
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
    return Z
  },
  DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
    return J
  },
  PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
    return $
  },
  MAX_ACCOUNT_HOLD_DAYS: function() {
    return ee
  },
  BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
    return et
  },
  STICKERS_GIFT_CODE_BATCH_ID: function() {
    return en
  },
  USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
    return ei
  },
  MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
    return es
  },
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
    return er
  },
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
    return ea
  },
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
    return eo
  },
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
    return el
  },
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
    return eu
  },
  PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
    return ed
  },
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
    return ef
  },
  PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
    return e_
  },
  PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
    return eh
  },
  SubscriptionTrials: function() {
    return eg
  },
  PremiumUpsellTypes: function() {
    return o
  },
  PurchasedFlags: function() {
    return l
  },
  SKU_ID_PURCHASED_FLAGS: function() {
    return em
  },
  MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
    return eE
  },
  IncrementalStickerCountsByTier: function() {
    return ep
  },
  TotalStickerCountsByTier: function() {
    return ev
  },
  TotalSoundboardSoundCountsByTier: function() {
    return eS
  },
  BoostedGuildFeatures: function() {
    return eT
  },
  ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
    return eI
  },
  AnalyticsPremiumFeatureNames: function() {
    return u
  },
  AnalyticsPremiumFeatureTiers: function() {
    return d
  },
  DISCOUNTS: function() {
    return eC
  },
  StreamQualities: function() {
    return c
  },
  StreamQualitiesToPremiumType: function() {
    return eA
  },
  PremiumMarketingEntrypoints: function() {
    return f
  },
  InboundPromotionErrorCodes: function() {
    return _
  },
  PremiumUserLimits: function() {
    return ey
  },
  BoostingUpsellAction: function() {
    return m
  },
  ReferralTrialsAnalyticSteps: function() {
    return E
  },
  LegacyPricingCountries: function() {
    return eN
  },
  LegacySeasonalGiftStyles: function() {
    return eR
  },
  SeasonalGiftStyles2023: function() {
    return eD
  },
  AllSeasonalGiftStyles: function() {
    return eO
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _, h, g, m, E, p, v, S, T, I, C, A, y, N, R, D, O, P, b, L, M = n("78345"),
  U = n("49111"),
  w = n("958706");
(p = i || (i = {}))[p.TIER_1 = 1] = "TIER_1", p[p.TIER_2 = 2] = "TIER_2", p[p.TIER_0 = 3] = "TIER_0";
let k = void 0,
  V = [{
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
  G = Object.freeze({
    3: 0,
    1: 1,
    2: 2
  }),
  F = "521842831262875670";
(v = s || (s = {})).NONE = "628379670982688768", v.TIER_0 = "978380684370378762", v.TIER_1 = "521846918637420545", v.TIER_2 = "521847234246082599", v.GUILD = "590663762298667008", v.LEGACY = "521842865731534868";
let x = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
  B = Object.freeze({
    "978380684370378762": 3,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "521842865731534868": 2
  });
(S = r || (r = {})).NONE_MONTH = "628379151761408000", S.NONE_YEAR = "628381571568631808", S.PREMIUM_MONTH_TIER_0 = "978380692553465866", S.PREMIUM_YEAR_TIER_0 = "1024422698568122368", S.PREMIUM_MONTH_TIER_1 = "511651871736201216", S.PREMIUM_YEAR_TIER_1 = "511651876987469824", S.PREMIUM_MONTH_TIER_2 = "511651880837840896", S.PREMIUM_YEAR_TIER_2 = "511651885459963904", S.PREMIUM_MONTH_GUILD = "590665532894740483", S.PREMIUM_YEAR_GUILD = "590665538238152709", S.NONE_3_MONTH = "944265614527037440", S.NONE_6_MONTH = "944265636643602432", S.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", S.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", S.PREMIUM_3_MONTH_GUILD = "944037355453415424", S.PREMIUM_6_MONTH_GUILD = "944037391444738048", S.PREMIUM_MONTH_LEGACY = "511651856145973248", S.PREMIUM_YEAR_LEGACY = "511651860671627264";
let H = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
  Y = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
  j = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
  W = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
  K = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
  z = Object.freeze({
    "978380684370378762": "978380692553465866",
    "521846918637420545": "511651871736201216",
    "521847234246082599": "511651880837840896",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  }),
  q = Object.freeze({
    "978380684370378762": "1024422698568122368",
    "521846918637420545": "511651876987469824",
    "521847234246082599": "511651885459963904",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  });
(T = a || (a = {}))[T.MONTH = 1] = "MONTH", T[T.YEAR = 2] = "YEAR", T[T.DAY = 3] = "DAY";
let X = Object.freeze({
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
  Q = 30,
  Z = 2,
  J = 3,
  $ = 7,
  ee = 30,
  et = "775514091874680832",
  en = "845031178288889946",
  ei = 432e6,
  es = 14,
  er = "520373071933079552",
  ea = "902329034132684800",
  eo = "983601860436819968",
  el = "983601860436819969",
  eu = "984244797441048577",
  ed = "1004850445463584768",
  ec = "1073698058383917056",
  ef = "1070132870233980928",
  e_ = "1150904354090532864",
  eh = "1199128659810582528",
  eg = Object.freeze({
    [er]: {
      id: er,
      skus: ["521847234246082599"]
    },
    [ea]: {
      id: ea,
      skus: ["521847234246082599"]
    },
    [eo]: {
      id: eo,
      skus: ["521847234246082599"]
    },
    [el]: {
      id: el,
      skus: ["521847234246082599"]
    },
    [eu]: {
      id: eu,
      skus: ["521847234246082599"]
    },
    [ed]: {
      id: ed,
      skus: ["521847234246082599"]
    },
    [ef]: {
      id: ef,
      skus: ["978380684370378762"]
    },
    [ec]: {
      id: ec,
      skus: ["521847234246082599"]
    }
  });
(I = o || (o = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", I.EMOJI_PICKER_SEARCH = "emoji_picker_search", I.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", I.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", I.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", I.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", I.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", I.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", I.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", I.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked", I.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", I.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", I.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", I.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", I.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", I.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", I.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", I.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", I.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", I.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", I.STREAM_QUALITY_UPSELL = "stream_quality_upsell", I.MESSAGE_LENGTH_UPSELL = "message_length_upsell", I.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", I.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", I.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", I.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", I.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", I.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", I.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", I.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", I.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", I.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", I.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", I.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", I.STICKER_PICKER_UPSELL = "sticker_picker_upsell", I.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", I.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", I.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", I.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", I.UPLOAD_ERROR_UPSELL = "upload error upsell", I.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", I.CONCURRENT_ACTIVITIES = "Concurrent Activities", I.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", I.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", I.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", I.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", I.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", I.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", I.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", I.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", I.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", I.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", I.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", I.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", I.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", I.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", I.BURST_REACTION_UPSELL = "burst_reaction_upsell", I.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", I.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", I.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", I.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", I.VIDEO_STAGE_LIMIT = "video_stage_limit", I.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", I.APP_ICON_UPSELL = "app_icon_upsell", I.COLLECTIBLES_SHOP = "collectibles_shop", I.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", I.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", I.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", I.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (C = l || (l = {}))[C.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", C[C.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", C[C.GUILD_BOOST = 4] = "GUILD_BOOST", C[C.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
let em = Object.freeze({
    "978380684370378762": 8,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "590663762298667008": 4
  }),
  eE = 52428800,
  ep = {
    [U.BoostedGuildTiers.NONE]: 5,
    [U.BoostedGuildTiers.TIER_1]: 10,
    [U.BoostedGuildTiers.TIER_2]: 15,
    [U.BoostedGuildTiers.TIER_3]: 30
  },
  ev = {
    [U.BoostedGuildTiers.NONE]: ep[U.BoostedGuildTiers.NONE],
    [U.BoostedGuildTiers.TIER_1]: ep[U.BoostedGuildTiers.NONE] + ep[U.BoostedGuildTiers.TIER_1],
    [U.BoostedGuildTiers.TIER_2]: ep[U.BoostedGuildTiers.NONE] + ep[U.BoostedGuildTiers.TIER_1] + ep[U.BoostedGuildTiers.TIER_2],
    [U.BoostedGuildTiers.TIER_3]: ep[U.BoostedGuildTiers.NONE] + ep[U.BoostedGuildTiers.TIER_1] + ep[U.BoostedGuildTiers.TIER_2] + ep[U.BoostedGuildTiers.TIER_3]
  },
  eS = {
    [U.BoostedGuildTiers.NONE]: 8,
    [U.BoostedGuildTiers.TIER_1]: 24,
    [U.BoostedGuildTiers.TIER_2]: 36,
    [U.BoostedGuildTiers.TIER_3]: 48
  },
  eT = Object.freeze({
    [U.BoostedGuildTiers.NONE]: {
      features: [],
      limits: {
        emoji: w.EMOJI_MAX_SLOTS,
        bitrate: U.BITRATE_MAX,
        fileSize: U.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 30,
        screenShareQualityResolution: "720p",
        soundboardSounds: eS[U.BoostedGuildTiers.NONE],
        maxConcurrentActivities: 2,
        stickers: ev[U.BoostedGuildTiers.NONE],
        stageVideoUsers: U.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [U.BoostedGuildTiers.TIER_1]: {
      features: [U.GuildFeatures.INVITE_SPLASH, U.GuildFeatures.ANIMATED_ICON],
      limits: {
        emoji: 100,
        bitrate: 128e3,
        fileSize: U.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "720p",
        soundboardSounds: eS[U.BoostedGuildTiers.TIER_1],
        maxConcurrentActivities: 3,
        stickers: ev[U.BoostedGuildTiers.TIER_1],
        stageVideoUsers: U.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [U.BoostedGuildTiers.TIER_2]: {
      features: [U.GuildFeatures.INVITE_SPLASH, U.GuildFeatures.ANIMATED_ICON, U.GuildFeatures.BANNER, U.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 150,
        bitrate: 256e3,
        fileSize: 52428800,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: eS[U.BoostedGuildTiers.TIER_2],
        maxConcurrentActivities: 5,
        stickers: ev[U.BoostedGuildTiers.TIER_2],
        stageVideoUsers: U.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
      }
    },
    [U.BoostedGuildTiers.TIER_3]: {
      features: [U.GuildFeatures.INVITE_SPLASH, U.GuildFeatures.ANIMATED_ICON, U.GuildFeatures.BANNER, U.GuildFeatures.ANIMATED_BANNER, U.GuildFeatures.VANITY_URL, U.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 250,
        bitrate: 384e3,
        fileSize: 104857600,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: eS[U.BoostedGuildTiers.TIER_3],
        maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
        stickers: ev[U.BoostedGuildTiers.TIER_3],
        stageVideoUsers: U.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }
    }
  }),
  eI = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
(A = u || (u = {})).SOUNDBOARD_PLAY = "soundboard play", A.PROFILE_THEME_COLOR = "profile_theme_color", A.PROFILE_BANNER = "profile_banner", A.ANIMATED_AVATAR = "animated_avatar", A.AVATAR_DECORATION = "avatar_decoration", A.CLIENT_THEME = "client_theme", A.SHARED_CANVAS = "shared_canvas", A.PROFILE_EFFECT = "profile_effect", (y = d || (d = {})).FREE = "free", y.PREMIUM_STANDARD = "premium-standard";
let eC = {
  "1024422698568122368": 16,
  "511651876987469824": 16,
  "511651885459963904": 16,
  "944037208325619722": 8,
  "642251038925127690": 5
};
(N = c || (c = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", N.MID_STREAMING_QUALITY = "mid_streaming_quality";
let eA = Object.freeze({
  high_streaming_quality: 2,
  mid_streaming_quality: 1
});
(R = f || (f = {}))[R.UserSettings = 0] = "UserSettings", R[R.ApplicationStoreHome = 1] = "ApplicationStoreHome", (D = _ || (_ = {})).USER_NOT_VERIFIED = "user_not_verified", D.NO_CODE_BODY = "no_code_body", D.NO_PROMOTION = "no_promotion", D.CODE_CLAIMED = "code_claimed", D.EXISTING_SUBSCRIBER = "existing_subscriber", D.PREVIOUS_SUBSCRIBER = "previous_subscriber", D.BLOCKED_PAYMENT = "blocked_payment";
let ey = Object.freeze({
  3: {
    fileSize: eE
  },
  1: {
    fileSize: 52428800
  },
  2: {
    fileSize: 524288e3
  }
});
(O = h || (h = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", O.HELPER_COLLAPSED = "helper_collapsed", O.HELPER_UNCOLLAPSED = "helper_uncollapsed", O.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", O.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", O.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", O.HELPER_DISMISSED = "premium_feature_helper_dismissed", O.HELPER_RENDERED = "premium_feature_helper_rendered", (P = g || (g = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", P.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", P.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", P.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", P.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", P.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", P.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", P.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", P.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", P.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", P.BOOST_INTRO_VIEWED = "boost_intro_viewed", P.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (b = m || (m = {})).BOOST = "boost", b.DISMISS = "dismiss", (L = E || (E = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", L.BADGE_CLICKED = "share_nitro_badge_clicked", L.FLOW_STARTED = "share_nitro_flow_started", L.FLOW_COMPLETED = "share_nitro_flow_completed";
let eN = new Set(["PL", "TR"]),
  eR = [M.PremiumGiftStyles.SNOWGLOBE, M.PremiumGiftStyles.BOX, M.PremiumGiftStyles.CUP],
  eD = [M.PremiumGiftStyles.SEASONAL_STANDARD_BOX, M.PremiumGiftStyles.SEASONAL_CAKE, M.PremiumGiftStyles.SEASONAL_COFFEE, M.PremiumGiftStyles.SEASONAL_CHEST],
  eO = eD.concat(eR)