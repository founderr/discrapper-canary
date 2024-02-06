"use strict";
n.r(t), n.d(t, {
  PremiumTypes: function() {
    return i
  },
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
    return F
  },
  PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
    return x
  },
  PremiumTypeOrder: function() {
    return B
  },
  PREMIUM_SUBSCRIPTION_APPLICATION: function() {
    return H
  },
  PremiumSubscriptionSKUs: function() {
    return s
  },
  ACTIVE_PREMIUM_SKUS: function() {
    return Y
  },
  PremiumSubscriptionSKUToPremiumType: function() {
    return j
  },
  SubscriptionPlans: function() {
    return r
  },
  PREMIUM_PLANS: function() {
    return W
  },
  PREMIUM_TIER_2_PLANS: function() {
    return K
  },
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
    return z
  },
  MULTI_MONTH_PLANS: function() {
    return q
  },
  PREMIUM_MONTHLY_PLANS: function() {
    return X
  },
  PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
    return Q
  },
  PREMIUM_SKU_TO_YEARLY_PLAN: function() {
    return Z
  },
  SubscriptionIntervalTypes: function() {
    return a
  },
  SubscriptionPlanInfo: function() {
    return J
  },
  GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
    return $
  },
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
    return ee
  },
  DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
    return et
  },
  PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
    return en
  },
  MAX_ACCOUNT_HOLD_DAYS: function() {
    return ei
  },
  BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
    return es
  },
  STICKERS_GIFT_CODE_BATCH_ID: function() {
    return er
  },
  USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
    return ea
  },
  MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
    return eo
  },
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
    return el
  },
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
    return eu
  },
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
    return ed
  },
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
    return ec
  },
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
    return ef
  },
  PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
    return e_
  },
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
    return eg
  },
  PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
    return em
  },
  PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
    return eE
  },
  SubscriptionTrials: function() {
    return ep
  },
  PremiumUpsellTypes: function() {
    return o
  },
  PurchasedFlags: function() {
    return l
  },
  SKU_ID_PURCHASED_FLAGS: function() {
    return ev
  },
  MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
    return eS
  },
  IncrementalStickerCountsByTier: function() {
    return eT
  },
  TotalStickerCountsByTier: function() {
    return eI
  },
  TotalSoundboardSoundCountsByTier: function() {
    return eC
  },
  BoostedGuildFeatures: function() {
    return eA
  },
  ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
    return ey
  },
  AnalyticsPremiumFeatureNames: function() {
    return u
  },
  AnalyticsPremiumFeatureTiers: function() {
    return d
  },
  DISCOUNTS: function() {
    return eN
  },
  StreamQualities: function() {
    return c
  },
  StreamQualitiesToPremiumType: function() {
    return eR
  },
  PremiumMarketingEntrypoints: function() {
    return f
  },
  PremiumHeaderThemes: function() {
    return _
  },
  PremiumGiftStyles: function() {
    return h
  },
  InboundPromotionErrorCodes: function() {
    return g
  },
  PromotionFlags: function() {
    return eD
  },
  PremiumUserLimits: function() {
    return eO
  },
  BoostingUpsellAction: function() {
    return p
  },
  ReferralTrialsAnalyticSteps: function() {
    return v
  },
  LegacyPricingCountries: function() {
    return eP
  },
  LegacySeasonalGiftStyles: function() {
    return eb
  },
  SeasonalGiftStyles2023: function() {
    return eL
  },
  AllSeasonalGiftStyles: function() {
    return eM
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _, h, g, m, E, p, v, S, T, I, C, A, y, N, R, D, O, P, b, L, M, U, w, k, V = n("49111"),
  G = n("958706");
(S = i || (i = {}))[S.TIER_1 = 1] = "TIER_1", S[S.TIER_2 = 2] = "TIER_2", S[S.TIER_0 = 3] = "TIER_0";
let F = void 0,
  x = [{
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
  B = Object.freeze({
    3: 0,
    1: 1,
    2: 2
  }),
  H = "521842831262875670";
(T = s || (s = {})).NONE = "628379670982688768", T.TIER_0 = "978380684370378762", T.TIER_1 = "521846918637420545", T.TIER_2 = "521847234246082599", T.GUILD = "590663762298667008", T.LEGACY = "521842865731534868";
let Y = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
  j = Object.freeze({
    "978380684370378762": 3,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "521842865731534868": 2
  });
(I = r || (r = {})).NONE_MONTH = "628379151761408000", I.NONE_YEAR = "628381571568631808", I.PREMIUM_MONTH_TIER_0 = "978380692553465866", I.PREMIUM_YEAR_TIER_0 = "1024422698568122368", I.PREMIUM_MONTH_TIER_1 = "511651871736201216", I.PREMIUM_YEAR_TIER_1 = "511651876987469824", I.PREMIUM_MONTH_TIER_2 = "511651880837840896", I.PREMIUM_YEAR_TIER_2 = "511651885459963904", I.PREMIUM_MONTH_GUILD = "590665532894740483", I.PREMIUM_YEAR_GUILD = "590665538238152709", I.NONE_3_MONTH = "944265614527037440", I.NONE_6_MONTH = "944265636643602432", I.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", I.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", I.PREMIUM_3_MONTH_GUILD = "944037355453415424", I.PREMIUM_6_MONTH_GUILD = "944037391444738048", I.PREMIUM_MONTH_LEGACY = "511651856145973248", I.PREMIUM_YEAR_LEGACY = "511651860671627264";
let W = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
  K = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
  z = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
  q = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
  X = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
  Q = Object.freeze({
    "978380684370378762": "978380692553465866",
    "521846918637420545": "511651871736201216",
    "521847234246082599": "511651880837840896",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  }),
  Z = Object.freeze({
    "978380684370378762": "1024422698568122368",
    "521846918637420545": "511651876987469824",
    "521847234246082599": "511651885459963904",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  });
(C = a || (a = {}))[C.MONTH = 1] = "MONTH", C[C.YEAR = 2] = "YEAR", C[C.DAY = 3] = "DAY";
let J = Object.freeze({
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
  $ = 30,
  ee = 2,
  et = 3,
  en = 7,
  ei = 30,
  es = "775514091874680832",
  er = "845031178288889946",
  ea = 432e6,
  eo = 14,
  el = "520373071933079552",
  eu = "902329034132684800",
  ed = "983601860436819968",
  ec = "983601860436819969",
  ef = "984244797441048577",
  e_ = "1004850445463584768",
  eh = "1073698058383917056",
  eg = "1070132870233980928",
  em = "1150904354090532864",
  eE = "1199128659810582528",
  ep = Object.freeze({
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
    [ec]: {
      id: ec,
      skus: ["521847234246082599"]
    },
    [ef]: {
      id: ef,
      skus: ["521847234246082599"]
    },
    [e_]: {
      id: e_,
      skus: ["521847234246082599"]
    },
    [eg]: {
      id: eg,
      skus: ["978380684370378762"]
    },
    [eh]: {
      id: eh,
      skus: ["521847234246082599"]
    }
  });
(A = o || (o = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", A.EMOJI_PICKER_SEARCH = "emoji_picker_search", A.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", A.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", A.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", A.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", A.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", A.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", A.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", A.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked", A.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", A.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", A.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", A.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", A.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", A.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", A.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", A.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", A.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", A.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", A.STREAM_QUALITY_UPSELL = "stream_quality_upsell", A.MESSAGE_LENGTH_UPSELL = "message_length_upsell", A.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", A.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", A.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", A.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", A.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", A.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", A.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", A.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", A.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", A.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", A.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", A.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", A.STICKER_PICKER_UPSELL = "sticker_picker_upsell", A.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", A.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", A.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", A.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", A.UPLOAD_ERROR_UPSELL = "upload error upsell", A.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", A.CONCURRENT_ACTIVITIES = "Concurrent Activities", A.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", A.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", A.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", A.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", A.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", A.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", A.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", A.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", A.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", A.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", A.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", A.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", A.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", A.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", A.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", A.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", A.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", A.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", A.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", A.BURST_REACTION_UPSELL = "burst_reaction_upsell", A.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", A.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", A.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", A.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", A.VIDEO_STAGE_LIMIT = "video_stage_limit", A.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", A.APP_ICON_UPSELL = "app_icon_upsell", A.COLLECTIBLES_SHOP = "collectibles_shop", A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", A.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", A.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", A.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (y = l || (l = {}))[y.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", y[y.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", y[y.GUILD_BOOST = 4] = "GUILD_BOOST", y[y.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
let ev = Object.freeze({
    "978380684370378762": 8,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "590663762298667008": 4
  }),
  eS = 52428800,
  eT = {
    [V.BoostedGuildTiers.NONE]: 5,
    [V.BoostedGuildTiers.TIER_1]: 10,
    [V.BoostedGuildTiers.TIER_2]: 15,
    [V.BoostedGuildTiers.TIER_3]: 30
  },
  eI = {
    [V.BoostedGuildTiers.NONE]: eT[V.BoostedGuildTiers.NONE],
    [V.BoostedGuildTiers.TIER_1]: eT[V.BoostedGuildTiers.NONE] + eT[V.BoostedGuildTiers.TIER_1],
    [V.BoostedGuildTiers.TIER_2]: eT[V.BoostedGuildTiers.NONE] + eT[V.BoostedGuildTiers.TIER_1] + eT[V.BoostedGuildTiers.TIER_2],
    [V.BoostedGuildTiers.TIER_3]: eT[V.BoostedGuildTiers.NONE] + eT[V.BoostedGuildTiers.TIER_1] + eT[V.BoostedGuildTiers.TIER_2] + eT[V.BoostedGuildTiers.TIER_3]
  },
  eC = {
    [V.BoostedGuildTiers.NONE]: 8,
    [V.BoostedGuildTiers.TIER_1]: 24,
    [V.BoostedGuildTiers.TIER_2]: 36,
    [V.BoostedGuildTiers.TIER_3]: 48
  },
  eA = Object.freeze({
    [V.BoostedGuildTiers.NONE]: {
      features: [],
      limits: {
        emoji: G.EMOJI_MAX_SLOTS,
        bitrate: V.BITRATE_MAX,
        fileSize: V.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 30,
        screenShareQualityResolution: "720p",
        soundboardSounds: eC[V.BoostedGuildTiers.NONE],
        maxConcurrentActivities: 2,
        stickers: eI[V.BoostedGuildTiers.NONE],
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
        soundboardSounds: eC[V.BoostedGuildTiers.TIER_1],
        maxConcurrentActivities: 3,
        stickers: eI[V.BoostedGuildTiers.TIER_1],
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
        soundboardSounds: eC[V.BoostedGuildTiers.TIER_2],
        maxConcurrentActivities: 5,
        stickers: eI[V.BoostedGuildTiers.TIER_2],
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
        soundboardSounds: eC[V.BoostedGuildTiers.TIER_3],
        maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
        stickers: eI[V.BoostedGuildTiers.TIER_3],
        stageVideoUsers: V.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }
    }
  }),
  ey = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
(N = u || (u = {})).SOUNDBOARD_PLAY = "soundboard play", N.PROFILE_THEME_COLOR = "profile_theme_color", N.PROFILE_BANNER = "profile_banner", N.ANIMATED_AVATAR = "animated_avatar", N.AVATAR_DECORATION = "avatar_decoration", N.CLIENT_THEME = "client_theme", N.SHARED_CANVAS = "shared_canvas", N.PROFILE_EFFECT = "profile_effect", (R = d || (d = {})).FREE = "free", R.PREMIUM_STANDARD = "premium-standard";
let eN = {
  "1024422698568122368": 16,
  "511651876987469824": 16,
  "511651885459963904": 16,
  "944037208325619722": 8,
  "642251038925127690": 5
};
(D = c || (c = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", D.MID_STREAMING_QUALITY = "mid_streaming_quality";
let eR = Object.freeze({
  high_streaming_quality: 2,
  mid_streaming_quality: 1
});
(O = f || (f = {}))[O.UserSettings = 0] = "UserSettings", O[O.ApplicationStoreHome = 1] = "ApplicationStoreHome", (P = _ || (_ = {}))[P.DEFAULT = 0] = "DEFAULT", P[P.WINTER = 1] = "WINTER", (b = h || (h = {}))[b.SNOWGLOBE = 1] = "SNOWGLOBE", b[b.BOX = 2] = "BOX", b[b.CUP = 3] = "CUP", b[b.STANDARD_BOX = 4] = "STANDARD_BOX", b[b.CAKE = 5] = "CAKE", b[b.CHEST = 6] = "CHEST", b[b.COFFEE = 7] = "COFFEE", b[b.SEASONAL_STANDARD_BOX = 8] = "SEASONAL_STANDARD_BOX", b[b.SEASONAL_CAKE = 9] = "SEASONAL_CAKE", b[b.SEASONAL_CHEST = 10] = "SEASONAL_CHEST", b[b.SEASONAL_COFFEE = 11] = "SEASONAL_COFFEE", (L = g || (g = {})).USER_NOT_VERIFIED = "user_not_verified", L.NO_CODE_BODY = "no_code_body", L.NO_PROMOTION = "no_promotion", L.CODE_CLAIMED = "code_claimed", L.EXISTING_SUBSCRIBER = "existing_subscriber", L.PREVIOUS_SUBSCRIBER = "previous_subscriber", L.BLOCKED_PAYMENT = "blocked_payment";
let eD = Object.freeze({
    IS_BLOCKED_IOS: 32,
    IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
    SUPPRESS_NOTIFICATION: 128
  }),
  eO = Object.freeze({
    3: {
      fileSize: eS
    },
    1: {
      fileSize: 52428800
    },
    2: {
      fileSize: 524288e3
    }
  });
(M = m || (m = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", M.HELPER_COLLAPSED = "helper_collapsed", M.HELPER_UNCOLLAPSED = "helper_uncollapsed", M.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", M.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", M.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", M.HELPER_DISMISSED = "premium_feature_helper_dismissed", M.HELPER_RENDERED = "premium_feature_helper_rendered", (U = E || (E = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", U.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", U.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", U.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", U.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", U.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", U.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", U.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", U.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", U.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", U.BOOST_INTRO_VIEWED = "boost_intro_viewed", U.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (w = p || (p = {})).BOOST = "boost", w.DISMISS = "dismiss", (k = v || (v = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", k.BADGE_CLICKED = "share_nitro_badge_clicked", k.FLOW_STARTED = "share_nitro_flow_started", k.FLOW_COMPLETED = "share_nitro_flow_completed";
let eP = new Set(["PL", "TR"]),
  eb = [1, 2, 3],
  eL = [8, 9, 11, 10],
  eM = eL.concat(eb)