r.d(n, {
    $7: function () {
        return o;
    },
    Fs: function () {
        return B;
    },
    O4: function () {
        return U;
    },
    Rj: function () {
        return G;
    },
    cI: function () {
        return a;
    },
    fM: function () {
        return R;
    },
    ih: function () {
        return k;
    }
});
var i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    h,
    p,
    m,
    g,
    E,
    v,
    I,
    T,
    b,
    y,
    S,
    A,
    N,
    C,
    R,
    O,
    D,
    L,
    x,
    w,
    P = r(47120);
var M = r(376345);
!(function (e) {
    (e.CHANNELS = 'CHANNELS'), (e.MEMBERS = 'MEMBERS');
})(i || (i = {})),
    !(function (e) {
        (e.CHAT = 'CHAT'), (e.FRIENDS = 'FRIENDS'), (e.QUICKSWITCHER = 'QUICKSWITCHER'), (e.NOTIFICATIONS = 'NOTIFICATIONS'), (e.MENTIONS_AND_QUICKSWITCHER = 'MENTIONS_AND_QUICKSWITCHER'), (e.USER_SETTINGS = 'USER_SETTINGS'), (e.STAGE_DISCOVERY = 'STAGE_DISCOVERY'), (e.SERVER_DISCOVERY = 'SERVER_DISCOVERY'), (e.PENDING_INCOMING_FRIEND_REQUESTS = 'PENDING_INCOMING_FRIEND_REQUESTS');
    })(a || (a = {})),
    !(function (e) {
        (e.BACK_BUTTON = 'Back Button'), (e.SWIPE = 'Swipe'), (e.MUTUAL_GUILD_ITEM = 'Mutual Guild Item'), (e.MEMBER_LIST_ICON = 'Member List Icon'), (e.CHANNEL_DRAWER_ICON = 'Channel Drawer Icon'), (e.CHANNEL_TITLE = 'Channel Title'), (e.PREMIUM_GUILD_SUBSCRIPTION_GUILD_LIST_UPSELL = 'Premium Guild Subscription Guild List Upsell');
    })(s || (s = {})),
    !(function (e) {
        (e.INACTIVE = 'inactive'), (e.BACKGROUND = 'background'), (e.ACTIVE = 'active');
    })(o || (o = {})),
    !(function (e) {
        (e.WELCOME = 'WELCOME'), (e.LOGIN = 'LOGIN'), (e.REGISTER = 'REGISTER'), (e.REGISTER_IDENTITY = 'REGISTER_IDENTITY'), (e.REGISTER_DISPLAY_NAME = 'REGISTER_DISPLAY_NAME'), (e.REGISTER_ACCOUNT_INFORMATION = 'REGISTER_ACCOUNT_INFORMATION'), (e.VERIFY_PHONE = 'VERIFY_PHONE'), (e.MFA = 'MFA'), (e.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = 'ACCOUNT_DISABLED_OR_DELETION_SCHEDULED'), (e.AGE_GATE_UNDERAGE = 'AGE_GATE_UNDERAGE'), (e.AGE_GATE = 'AGE_GATE'), (e.COUNTRY_SELECT = 'COUNTRY_SELECT'), (e.EXTERNAL_LINK = 'EXTERNAL_LINK');
    })(l || (l = {})),
    !(function (e) {
        (e.DEFAULT = 'default'), (e.DARK = 'dark'), (e.LIGHT = 'light');
    })(u || (u = {})),
    !(function (e) {
        (e.CAMERA = 'camera'), (e.PHOTO = 'photo');
    })(c || (c = {})),
    !(function (e) {
        (e[(e.BLURRED_NO_QUERY = 0)] = 'BLURRED_NO_QUERY'), (e[(e.BLURRED_WITH_QUERY = 1)] = 'BLURRED_WITH_QUERY'), (e[(e.FOCUSED_NO_QUERY = 2)] = 'FOCUSED_NO_QUERY'), (e[(e.FOCUSED_WITH_QUERY = 3)] = 'FOCUSED_WITH_QUERY');
    })(d || (d = {})),
    !(function (e) {
        (e[(e.GENERAL = 0)] = 'GENERAL'), (e[(e.TEXT = 1)] = 'TEXT'), (e[(e.VOICE = 2)] = 'VOICE');
    })(f || (f = {})),
    !(function (e) {
        (e.LANDING = 'LANDING'), (e.NAME = 'NAME');
    })(_ || (_ = {})),
    !(function (e) {
        (e[(e.SAFARI = 0)] = 'SAFARI'), (e[(e.IN_APP = 1)] = 'IN_APP'), (e[(e.CHROME = 2)] = 'CHROME');
    })(h || (h = {})),
    !(function (e) {
        (e.SOLVED = 'solved'), (e.EXPIRED = 'expired');
    })(p || (p = {})),
    !(function (e) {
        e.MENTIONS = 'mentions';
    })(m || (m = {})),
    !(function (e) {
        (e.OVERVIEW = 'OVERVIEW'), (e.RESEND_EMAIL = 'RESEND_EMAIL'), (e.CONFIRM_EMAIL_CHANGE_START = 'CONFIRM_EMAIL_CHANGE_START'), (e.CONFIRM_EMAIL_CHANGE_CODE = 'CONFIRM_EMAIL_CHANGE_CODE'), (e.ENTER_EMAIL = 'ENTER_EMAIL'), (e.ADD_PHONE = 'ADD_PHONE'), (e.VERIFY_PHONE = 'VERIFY_PHONE'), (e.VERIFY_PASSWORD = 'VERIFY_PASSWORD'), (e.PHONE_THEN_EMAIL_INTERSTITIAL = 'PHONE_THEN_EMAIL_INTERSTITIAL'), (e.CHANGE_EMAIL_COMPLETE = 'CHANGE_EMAIL_COMPLETE'), (e.CHANGE_EMAIL_COLLECT_REASONS = 'CHANGE_EMAIL_COLLECT_REASONS'), (e.CHANGE_EMAIL_WARNING = 'CHANGE_EMAIL_WARNING');
    })(g || (g = {})),
    !(function (e) {
        (e.VOICE = 'VOICE'), (e.VIDEO = 'VIDEO'), (e.STREAM = 'STREAM');
    })(E || (E = {})),
    !(function (e) {
        (e.LANDING = 'LANDING'), (e.SYNCING = 'SYNCING'), (e.RESULTS = 'RESULTS'), (e.NO_RESULTS = 'NO_RESULTS'), (e.ADD_PHONE = 'ADD_PHONE'), (e.VERIFY_PHONE = 'VERIFY_PHONE');
    })(v || (v = {})),
    !(function (e) {
        e.LANDING = 'LANDING';
    })(I || (I = {})),
    !(function (e) {
        e.ADVANCED = 'ADVANCED';
    })(T || (T = {})),
    !(function (e) {
        (e.USER = 'USER'), (e.ACTION = 'ACTION');
    })(b || (b = {})),
    !(function (e) {
        (e.OVERVIEW = 'OVERVIEW'), (e.ADD_OVERRIDE = 'ADD_OVERRIDE'), (e.CHANNEL_OVERRIDE = 'CHANNEL_OVERRIDE');
    })(y || (y = {}));
!(function (e) {
    (e.INVITE = 'invite'), (e.GUILD_TEMPLATE = 'guild-template'), (e.CHANNEL = 'channel'), (e.GIFT_CODE = 'gift-code'), (e.MESSAGE = 'message'), (e.OAUTH2_AUTHORIZE = 'oauth2-authorize'), (e.APP_DIRECTORY_PROFILE = 'app-directory-profile'), (e.PROMOTIONS = 'promotions'), (e.FEATURE_PROMO_URL = 'promo-url'), (e.NONE = 'none'), (e.REMOTE_AUTH = 'remote-auth'), (e.USER_PROFILE = 'user-profile'), (e.BUILD_OVERRIDE = 'build-override'), (e.CONTACT_SYNC = 'contact-sync'), (e.ADD_FRIENDS = 'add-friends'), (e.COMPOSE_MESSAGE = 'compose-message'), (e.GUILD_EVENT_DETAILS = 'guild-event-details'), (e.FRIENDS = 'friends'), (e.EDIT_PROFILE = 'edit-profile'), (e.MOBILE_WEB_HANDOFF = 'mobile-web-handoff'), (e.USER_CONNECTIONS_CALLBACK = 'user-connections-callback'), (e.VOICE_CHANNEL = 'voice-channel'), (e.GUILD_HOME = 'guild-home'), (e.USER_CONNECTIONS_LINK_CALLBACK = 'user-connections-link-callback'), (e.SESSION_MANAGEMENT = 'session-management'), (e.CONNECTIONS = 'connections'), (e.GUILD_SETTINGS = 'guild-settings'), (e.GUILD_SETTINGS_PICKER = 'guild-settings-picker'), (e.ACTIVATE_DEVICE = 'activate-device'), (e.FAMILY_CENTER = 'family-center'), (e.SHARE = 'share'), (e.CREATE_VOICE_INVITE = 'create_voice_invite'), (e.SEND_VOICE_HANGOUT_WAVE = 'send_voice_hangout_wave'), (e.ACCOUNT_STANDING = 'account-standing'), (e.MOBILE_NATIVE_UPDATE = 'mobile-native-update'), (e.SHOP = 'shop'), (e.AUTHORIZED_APPS = 'authorized-apps'), (e.DAVE_PROTOCOL_VERIFICATION = 'dave-protocol-verification'), (e.ICYMI = 'icymi'), (e.QUESTS = 'quests'), (e.GIFT = 'gift'), (e.NITRO_HOME = 'store');
})(S || (S = {}));
let k = 'CacheStoreLazy',
    U = 'CacheStoreChannelsLazy',
    B = 'CacheStore';
!(function (e) {
    (e.UPLOAD = 'upload'), (e.GLOBAL_EMOJI = 'global-emoji'), (e.EMOJI_AUTOCOMPLETE = 'emoji-autocomplete'), (e.BADGE = 'badge'), (e.ANIMATED_EMOJI = 'animated-emoji'), (e.ANIMATED_AVATAR = 'animated-avatar'), (e.CUSTOM_PROFILES = 'custom-profiles'), (e.GLOBAL_STICKER = 'global-sticker'), (e.PREMIUM_GUILD_PROFILE = 'premium-guild-profile'), (e.LONGER_MESSAGE = 'longer-message'), (e.GUILD_CAP = 'guild-cap'), (e.ACTIVITIES = 'activities'), (e.APP_ICONS = 'app-icons'), (e.SOUNDBOARD = 'soundboard'), (e.CLIENT_THEMES = 'client-themes'), (e.FOR_LATER = 'for-later');
})(A || (A = {})),
    !(function (e) {
        (e.UNKNOWN = 'ESKERRORDOMAIN0'), (e.CLIENT_INVALID = 'ESKERRORDOMAIN1'), (e.PAYMENT_CANCELED = 'ESKERRORDOMAIN2'), (e.PAYMENT_INVALID = 'ESKERRORDOMAIN3'), (e.PAYMENT_NOT_ALLOWED = 'ESKERRORDOMAIN4'), (e.STORE_PRODUCT_NOT_AVAILABLE = 'ESKERRORDOMAIN5'), (e.CLOUD_SERVICE_PERMISSION_DENIED = 'ESKERRORDOMAIN6'), (e.CLOUD_SERVICE_NETWORK_CONNECTION_FAILED = 'ESKERRORDOMAIN7'), (e.CLOUD_SERVICE_REVOKED = 'ESKERRORDOMAIN8'), (e.PRIVACY_ACKNOWLEDGEMENT_REQUIRED = 'ESKERRORDOMAIN9'), (e.UNAUTHORIZED_REQUEST_DATA = 'ESKERRORDOMAIN10'), (e.INVALID_OFFER_IDENTIFIER = 'ESKERRORDOMAIN11'), (e.INVALID_SIGNATURE = 'ESKERRORDOMAIN12'), (e.MISSING_OFFER_PARAMS = 'ESKERRORDOMAIN13'), (e.INVALID_OFFER_PRICE = 'ESKERRORDOMAIN14'), (e.OVERLAY_CANCELLED = 'ESKERRORDOMAIN15'), (e.OVERLAY_INVALID_CONFIGURATION = 'ESKERRORDOMAIN16'), (e.OVERLAY_TIMEOUT = 'ESKERRORDOMAIN17'), (e.INELIGIBLE_FOR_OFFER = 'ESKERRORDOMAIN18'), (e.UNSUPPORTED_PLATFORM = 'ESKERRORDOMAIN19');
    })(N || (N = {})),
    !(function (e) {
        (e.LOGOUT_TIMESTAMP_KEY = 'logout_timestamp_key'), (e.ACKNOWLEDGED_TOOLTIPS_KEY = 'acknowledged_tooltips_key'), (e.KRISP_ONBOARD = 'krisp_onboard'), (e.SCREENSHARE_ONBOARD = 'screenshare_onboard');
    })(C || (C = {})),
    !(function (e) {
        (e.NONE = 'none'), (e.SLIDE_UP = 'slide-up'), (e.SLIDE_IN = 'slide-in'), (e.SLIDE_OUT = 'slide-out'), (e.SLIDE_IN_OUT = 'slide-in-out'), (e.SLIDE_IN_OUT_REVERSE = 'slide-in-out-reverse'), (e.FADE = 'fade');
    })(R || (R = {}));
Object.freeze({
    START: {
        x: 0,
        y: 0
    },
    END: {
        x: 1,
        y: 0
    }
}),
    Object.freeze({
        START: {
            x: 0,
            y: 0
        },
        END: {
            x: 0,
            y: 1
        }
    });
let G = {
    PREMIUM_TIER_0: [M.ZP.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, M.ZP.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS],
    PREMIUM_TIER_1: [M.ZP.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, M.ZP.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS],
    PREMIUM_TIER_2: [M.ZP.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, M.ZP.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
    PREMIUM_TIER_2_TRI_COLOR: [M.ZP.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, M.ZP.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, M.ZP.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
    PREMIUM_GUILD: [M.ZP.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, M.ZP.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS],
    PREMIUM_TIER_0_PERK_CARD: ['#3736BB', '#4670E8', '#8377EB', '#E782F1', '#DF90AF']
};
!(function (e) {
    (e[(e.HIGH = 0.6)] = 'HIGH'), (e[(e.LOW = 0.3)] = 'LOW');
})(O || (O = {}));
!(function (e) {
    (e[(e.IMAGE = 0)] = 'IMAGE'), (e[(e.GIF = 1)] = 'GIF'), (e[(e.VIDEO = 2)] = 'VIDEO');
})(D || (D = {})),
    !(function (e) {
        (e.OVERVIEW = 'overview'), (e.GIF_RESULTS = 'gif_results');
    })(L || (L = {})),
    !(function (e) {
        (e.GUILD_TOOLTIP = 'guild_tooltip'), (e.GIF_PICKER_TOOLTIP = 'gif_picker_tooltip'), (e.GIF_PICKER_TOOLTIP_SPARKLE = 'gif_picker_tooltip_sparkle'), (e.STICKER_PICKER_SHOP_VIEW_ALL = 'sticker_picker_shop_view_all'), (e.SCREENSHARE_ONBOARD_SPARKLES = 'screenshare_onboard_sparkles'), (e.SCREENSHARE_SWIPE_UP_CONTROLS = 'screenshare_swipe_up_controls'), (e.STAGE_DISCOVERY_TOOLTIP = 'stage_discovery_tooltip'), (e.HUB_DISCOVERY_TOOLTIP = 'hub_discovery_tooltip');
    })(x || (x = {}));
!(function (e) {
    (e[(e.ROW = 0)] = 'ROW'), (e[(e.HEADER = 1)] = 'HEADER'), (e[(e.FOOTER = 2)] = 'FOOTER');
})(w || (w = {}));
