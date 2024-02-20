"use strict";
E.r(_), E.d(_, {
  DrawerTabTypes: function() {
    return o
  },
  AppStates: function() {
    return T
  },
  CACHE_STORE_LAZY_KEY: function() {
    return er
  },
  CACHE_STORE_CHANNELS_LAZY_KEY: function() {
    return ea
  },
  CACHE_STORE_KEY: function() {
    return en
  },
  ModalAnimation: function() {
    return G
  },
  Gradients: function() {
    return ei
  }
}), E("222007");
var t, o, I, T, r, a, n, i, A, s, R, N, O, S, L, l, D, C, c, u, d, U, M, P, G, h, m, p, B, y, g, H, f, b, Y, w, v, F, V, k, W, K, x, X, j, Q, J, q, z, $, Z, ee, e_, eE, et, eo, eI, eT = E("854588");
(g = t || (t = {})).CHANNELS = "CHANNELS", g.MEMBERS = "MEMBERS", (H = o || (o = {})).CHAT = "CHAT", H.FRIENDS = "FRIENDS", H.QUICKSWITCHER = "QUICKSWITCHER", H.NOTIFICATIONS = "NOTIFICATIONS", H.MENTIONS_AND_QUICKSWITCHER = "MENTIONS_AND_QUICKSWITCHER", H.USER_SETTINGS = "USER_SETTINGS", H.STAGE_DISCOVERY = "STAGE_DISCOVERY", H.SERVER_DISCOVERY = "SERVER_DISCOVERY", H.PENDING_INCOMING_FRIEND_REQUESTS = "PENDING_INCOMING_FRIEND_REQUESTS", (f = I || (I = {})).BACK_BUTTON = "Back Button", f.SWIPE = "Swipe", f.MUTUAL_GUILD_ITEM = "Mutual Guild Item", f.MEMBER_LIST_ICON = "Member List Icon", f.CHANNEL_DRAWER_ICON = "Channel Drawer Icon", f.CHANNEL_TITLE = "Channel Title", f.PREMIUM_GUILD_SUBSCRIPTION_GUILD_LIST_UPSELL = "Premium Guild Subscription Guild List Upsell", (b = T || (T = {})).INACTIVE = "inactive", b.BACKGROUND = "background", b.ACTIVE = "active", (Y = r || (r = {})).WELCOME = "WELCOME", Y.LOGIN = "LOGIN", Y.REGISTER = "REGISTER", Y.REGISTER_IDENTITY = "REGISTER_IDENTITY", Y.REGISTER_DISPLAY_NAME = "REGISTER_DISPLAY_NAME", Y.REGISTER_ACCOUNT_INFORMATION = "REGISTER_ACCOUNT_INFORMATION", Y.VERIFY_PHONE = "VERIFY_PHONE", Y.MFA = "MFA", Y.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED", Y.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", Y.AGE_GATE = "AGE_GATE", Y.COUNTRY_SELECT = "COUNTRY_SELECT", Y.EXTERNAL_LINK = "EXTERNAL_LINK", (w = a || (a = {})).DEFAULT = "default", w.DARK = "dark", w.LIGHT = "light", (v = n || (n = {})).CAMERA = "camera", v.PHOTO = "photo", (F = i || (i = {}))[F.BLURRED_NO_QUERY = 0] = "BLURRED_NO_QUERY", F[F.BLURRED_WITH_QUERY = 1] = "BLURRED_WITH_QUERY", F[F.FOCUSED_NO_QUERY = 2] = "FOCUSED_NO_QUERY", F[F.FOCUSED_WITH_QUERY = 3] = "FOCUSED_WITH_QUERY", (V = A || (A = {}))[V.GENERAL = 0] = "GENERAL", V[V.TEXT = 1] = "TEXT", V[V.VOICE = 2] = "VOICE", (k = s || (s = {})).LANDING = "LANDING", k.NAME = "NAME", (W = R || (R = {}))[W.SAFARI = 0] = "SAFARI", W[W.IN_APP = 1] = "IN_APP", W[W.CHROME = 2] = "CHROME", (K = N || (N = {})).SOLVED = "solved", K.EXPIRED = "expired", (O || (O = {})).MENTIONS = "mentions", (x = S || (S = {})).OVERVIEW = "OVERVIEW", x.RESEND_EMAIL = "RESEND_EMAIL", x.CONFIRM_EMAIL_CHANGE_START = "CONFIRM_EMAIL_CHANGE_START", x.CONFIRM_EMAIL_CHANGE_CODE = "CONFIRM_EMAIL_CHANGE_CODE", x.ENTER_EMAIL = "ENTER_EMAIL", x.ADD_PHONE = "ADD_PHONE", x.VERIFY_PHONE = "VERIFY_PHONE", x.VERIFY_PASSWORD = "VERIFY_PASSWORD", x.PHONE_THEN_EMAIL_INTERSTITIAL = "PHONE_THEN_EMAIL_INTERSTITIAL", x.CHANGE_EMAIL_COMPLETE = "CHANGE_EMAIL_COMPLETE", (X = L || (L = {})).VOICE = "VOICE", X.VIDEO = "VIDEO", X.STREAM = "STREAM", (j = l || (l = {})).LANDING = "LANDING", j.SYNCING = "SYNCING", j.RESULTS = "RESULTS", j.NO_RESULTS = "NO_RESULTS", j.ADD_PHONE = "ADD_PHONE", j.VERIFY_PHONE = "VERIFY_PHONE", (D || (D = {})).LANDING = "LANDING", (C || (C = {})).ADVANCED = "ADVANCED", (Q = c || (c = {})).USER = "USER", Q.ACTION = "ACTION", (J = u || (u = {})).OVERVIEW = "OVERVIEW", J.ADD_OVERRIDE = "ADD_OVERRIDE", J.CHANNEL_OVERRIDE = "CHANNEL_OVERRIDE", (q = d || (d = {})).INVITE = "invite", q.GUILD_TEMPLATE = "guild-template", q.CHANNEL = "channel", q.GIFT_CODE = "gift-code", q.MESSAGE = "message", q.OAUTH2_AUTHORIZE = "oauth2-authorize", q.APP_DIRECTORY_PROFILE = "app-directory-profile", q.PROMOTIONS = "promotions", q.NONE = "none", q.REMOTE_AUTH = "remote-auth", q.USER_PROFILE = "user-profile", q.BUILD_OVERRIDE = "build-override", q.CONTACT_SYNC = "contact-sync", q.ADD_FRIENDS = "add-friends", q.COMPOSE_MESSAGE = "compose-message", q.GUILD_EVENT_DETAILS = "guild-event-details", q.FRIENDS = "friends", q.EDIT_PROFILE = "edit-profile", q.MOBILE_WEB_HANDOFF = "mobile-web-handoff", q.VOICE_CHANNEL = "voice-channel", q.GUILD_HOME = "guild-home", q.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback", q.SESSION_MANAGEMENT = "session-management", q.CONNECTIONS = "connections", q.GUILD_SETTINGS = "guild-settings", q.GUILD_SETTINGS_PICKER = "guild-settings-picker", q.ACTIVATE_DEVICE = "activate-device", q.FAMILY_CENTER = "family-center", q.SHARE = "share", q.CREATE_VOICE_INVITE = "create_voice_invite", q.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave", q.ACCOUNT_STANDING = "account-standing", q.MOBILE_NATIVE_UPDATE = "mobile-native-update";
let er = "CacheStoreLazy",
  ea = "CacheStoreChannelsLazy",
  en = "CacheStore";
(z = U || (U = {})).UPLOAD = "upload", z.GLOBAL_EMOJI = "global-emoji", z.EMOJI_AUTOCOMPLETE = "emoji-autocomplete", z.BADGE = "badge", z.ANIMATED_EMOJI = "animated-emoji", z.ANIMATED_AVATAR = "animated-avatar", z.CUSTOM_PROFILES = "custom-profiles", z.GLOBAL_STICKER = "global-sticker", z.PREMIUM_GUILD_PROFILE = "premium-guild-profile", z.LONGER_MESSAGE = "longer-message", z.GUILD_CAP = "guild-cap", z.ACTIVITIES = "activities", z.APP_ICONS = "app-icons", ($ = M || (M = {})).UNKNOWN = "ESKERRORDOMAIN0", $.CLIENT_INVALID = "ESKERRORDOMAIN1", $.PAYMENT_CANCELED = "ESKERRORDOMAIN2", $.PAYMENT_INVALID = "ESKERRORDOMAIN3", $.PAYMENT_NOT_ALLOWED = "ESKERRORDOMAIN4", $.STORE_PRODUCT_NOT_AVAILABLE = "ESKERRORDOMAIN5", $.CLOUD_SERVICE_PERMISSION_DENIED = "ESKERRORDOMAIN6", $.CLOUD_SERVICE_NETWORK_CONNECTION_FAILED = "ESKERRORDOMAIN7", $.CLOUD_SERVICE_REVOKED = "ESKERRORDOMAIN8", $.PRIVACY_ACKNOWLEDGEMENT_REQUIRED = "ESKERRORDOMAIN9", $.UNAUTHORIZED_REQUEST_DATA = "ESKERRORDOMAIN10", $.INVALID_OFFER_IDENTIFIER = "ESKERRORDOMAIN11", $.INVALID_SIGNATURE = "ESKERRORDOMAIN12", $.MISSING_OFFER_PARAMS = "ESKERRORDOMAIN13", $.INVALID_OFFER_PRICE = "ESKERRORDOMAIN14", $.OVERLAY_CANCELLED = "ESKERRORDOMAIN15", $.OVERLAY_INVALID_CONFIGURATION = "ESKERRORDOMAIN16", $.OVERLAY_TIMEOUT = "ESKERRORDOMAIN17", $.INELIGIBLE_FOR_OFFER = "ESKERRORDOMAIN18", $.UNSUPPORTED_PLATFORM = "ESKERRORDOMAIN19", (Z = P || (P = {})).LOGOUT_TIMESTAMP_KEY = "logout_timestamp_key", Z.ACKNOWLEDGED_TOOLTIPS_KEY = "acknowledged_tooltips_key", Z.KRISP_ONBOARD = "krisp_onboard", Z.SCREENSHARE_ONBOARD = "screenshare_onboard", (ee = G || (G = {})).NONE = "none", ee.SLIDE_UP = "slide-up", ee.SLIDE_IN = "slide-in", ee.SLIDE_OUT = "slide-out", ee.SLIDE_IN_OUT = "slide-in-out", ee.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse", ee.FADE = "fade", Object.freeze({
  START: {
    x: 0,
    y: 0
  },
  END: {
    x: 1,
    y: 0
  }
}), Object.freeze({
  START: {
    x: 0,
    y: 0
  },
  END: {
    x: 0,
    y: 1
  }
});
let ei = {
  PREMIUM_TIER_0: [eT.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, eT.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS],
  PREMIUM_TIER_1: [eT.default.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, eT.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS],
  PREMIUM_TIER_2: [eT.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, eT.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
  PREMIUM_TIER_2_TRI_COLOR: [eT.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, eT.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, eT.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
  PREMIUM_GUILD: [eT.default.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, eT.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS],
  PREMIUM_TIER_0_PERK_CARD: ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"]
};
(e_ = h || (h = {}))[e_.HIGH = .6] = "HIGH", e_[e_.LOW = .3] = "LOW", (eE = m || (m = {}))[eE.IMAGE = 0] = "IMAGE", eE[eE.GIF = 1] = "GIF", eE[eE.VIDEO = 2] = "VIDEO", (et = p || (p = {})).OVERVIEW = "overview", et.GIF_RESULTS = "gif_results", (eo = B || (B = {})).GUILD_TOOLTIP = "guild_tooltip", eo.GIF_PICKER_TOOLTIP = "gif_picker_tooltip", eo.GIF_PICKER_TOOLTIP_SPARKLE = "gif_picker_tooltip_sparkle", eo.STICKER_PICKER_SHOP_VIEW_ALL = "sticker_picker_shop_view_all", eo.SCREENSHARE_ONBOARD_SPARKLES = "screenshare_onboard_sparkles", eo.SCREENSHARE_SWIPE_UP_CONTROLS = "screenshare_swipe_up_controls", eo.STAGE_DISCOVERY_TOOLTIP = "stage_discovery_tooltip", eo.HUB_DISCOVERY_TOOLTIP = "hub_discovery_tooltip", (eI = y || (y = {}))[eI.ROW = 0] = "ROW", eI[eI.HEADER = 1] = "HEADER", eI[eI.FOOTER = 2] = "FOOTER"