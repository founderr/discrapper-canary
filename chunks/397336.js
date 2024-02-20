"use strict";
var t, o, I, T, r, a, n, i, A, s, R, N, O, S, L;
E.r(_), E.d(_, {
  MAX_FAVORITES: function() {
    return l
  },
  MAX_FAVORITE_GIFS_SIZE: function() {
    return D
  },
  ROLE_SUBSCRIPTION_SUBSECTION: function() {
    return C
  },
  APPLICATION_SUBSCRIPTION_SUBSECTION: function() {
    return c
  },
  SOUNDBOARD_SUBSECTION: function() {
    return u
  },
  ProfileCustomizationSubsection: function() {
    return t
  },
  AppearanceScrollPositions: function() {
    return o
  },
  ProfileCustomizationScrollPositions: function() {
    return I
  },
  AccessibilityScrollPositions: function() {
    return T
  },
  UserSettingsScrollPositions: function() {
    return d
  },
  UserSettingsTypes: function() {
    return a
  },
  UserSettingsDelay: function() {
    return n
  },
  createEmptyEditInfo: function() {
    return U
  },
  ChangeEmailSteps: function() {
    return i
  },
  ChannelNotificationSettingsFlags: function() {
    return M
  },
  GuildNotificationSettingsFlags: function() {
    return P
  },
  ProtoAudioSettingsContextTypes: function() {
    return A
  }
});
let l = 250,
  D = 762880,
  C = "ROLE_SUBSCRIPTIONS",
  c = "APPLICATION_SUBSCRIPTION_SUBSECTION",
  u = "SOUNDBOARD_SUBSECTION";
(s = t || (t = {})).USER_PROFILE = "user_profile", s.GUILD = "guild", s.TRY_IT_OUT = "try_it_out", (o || (o = {})).CUSTOM_APP_ICONS = "custom_app_icon", (I || (I = {})).TRY_IT_OUT = "try_it_out", (R = T || (T = {})).REDUCED_MOTION = "reduced_motion", R.SYNC_PROFILE_THEME_WITH_USER_THEME = "sync_profile_theme_with_user_theme", R.LEGACY_CHAT_INPUT = "legacy_chat_input", (r || (r = {})).HARDWARE_ACCELERATION = "hardware_acceleration";
let d = {
  ProfileCustomizationScrollPositions: I,
  AccessibilityScrollPositions: T,
  VoiceAndVideoScrollPositions: r,
  AppearanceScrollPositions: o
};

function U() {
  return {
    protoToSave: void 0,
    timeout: void 0,
    timeoutDelay: Number.MIN_SAFE_INTEGER,
    rateLimited: !1,
    cleanupFuncs: [],
    loaded: !1,
    loading: !1,
    triggeredMigrations: !1,
    offlineEditDataVersion: void 0
  }
}(N = a || (a = {}))[N.PRELOADED_USER_SETTINGS = 1] = "PRELOADED_USER_SETTINGS", N[N.FRECENCY_AND_FAVORITES_SETTINGS = 2] = "FRECENCY_AND_FAVORITES_SETTINGS", N[N.TEST_SETTINGS = 3] = "TEST_SETTINGS", (O = n || (n = {}))[O.INFREQUENT_USER_ACTION = 0] = "INFREQUENT_USER_ACTION", O[O.FREQUENT_USER_ACTION = 10] = "FREQUENT_USER_ACTION", O[O.SLOW_USER_ACTION = 20] = "SLOW_USER_ACTION", O[O.AUTOMATED = 30] = "AUTOMATED", O[O.DAILY = 86400] = "DAILY", (S = i || (i = {}))[S.CONFIRM_START = 0] = "CONFIRM_START", S[S.CONFIRM_CODE = 1] = "CONFIRM_CODE", S[S.EMAIL_AND_PASSWORD = 2] = "EMAIL_AND_PASSWORD", S[S.COMPLETE = 3] = "COMPLETE";
let M = {
    NEW_FORUM_THREADS_ON: 16384,
    NEW_FORUM_THREADS_OFF: 8192,
    OPT_IN_ENABLED: 4096,
    FAVORITED: 2048,
    UNREADS_ALL_MESSAGES: 1024,
    UNREADS_ONLY_MENTIONS: 512
  },
  P = {
    OPT_IN_CHANNELS_ON: 16384,
    OPT_IN_CHANNELS_OFF: 8192,
    UNREADS_ONLY_MENTIONS: 4096,
    UNREADS_ALL_MESSAGES: 2048
  };
(L = A || (A = {})).USER = "user", L.STREAM = "stream"