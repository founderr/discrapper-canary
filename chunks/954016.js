"use strict";
n.r(t), n.d(t, {
  ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
    return h
  },
  validStreamURL: function() {
    return D
  },
  XBOX_ACTIVITY_APPLICATION_ID: function() {
    return g
  },
  END_GAME_APPLICATION_ID: function() {
    return U
  },
  JAM_SPACE_APPLICATION_ID: function() {
    return G
  },
  GARTIC_PHONE_APPLICATION_ID: function() {
    return y
  },
  COLOR_TOGETHER_APPLICATION_ID: function() {
    return F
  },
  SPELL_CAST_APPLICATION_ID: function() {
    return b
  },
  LAND_IO_APPLICATION_ID: function() {
    return B
  },
  WATCH_YOUTUBE_PROD_APP_ID: function() {
    return H
  },
  KWIM_APPLICATION_ID: function() {
    return V
  },
  BOBBLE_LEAGUE_APPLICATION_ID: function() {
    return w
  },
  CHECKERS_IN_THE_PARK_APP_ID: function() {
    return k
  },
  CHESS_IN_THE_PARK_APP_ID: function() {
    return K
  },
  BLAZIN_8S_APPLICATION_ID: function() {
    return Y
  },
  POKER_NIGHT_APPLICATION_ID: function() {
    return W
  },
  BYS_LETTER_APP_ID: function() {
    return x
  },
  BYS_TWOODLE_APP_ID: function() {
    return j
  },
  CHEF_SHOWDOWN_APPLICATION_ID: function() {
    return X
  },
  PUTT_PARTY_APPLICATION_ID: function() {
    return J
  },
  KRUNKER_STRIKE_APPLICATION_ID: function() {
    return z
  },
  COLONIST_APPLICATION_ID: function() {
    return Z
  },
  EMBEDDED_ACTIVITY_SURVEY_URL: function() {
    return Q
  },
  ImageSizes: function() {
    return q
  },
  STAFF_RELEASE_PHASES: function() {
    return $
  },
  ActivityFeedbackReasons: function() {
    return r
  },
  ActivityIntent: function() {
    return i
  },
  ActivityPlatform: function() {
    return o
  },
  ActivityAccessStatus: function() {
    return u
  },
  EmbeddedActivityUpdateCodes: function() {
    return a
  },
  OrientationLockState: function() {
    return s
  },
  ActivityShelfSlides: function() {
    return E
  },
  ACTIVITY_SHELF_WEB_MODAL_KEY: function() {
    return ee
  },
  APPLICATIONS_WITH_ALLOWED_POPUPS: function() {
    return et
  },
  APPLICATIONS_WITH_NO_REFFERER: function() {
    return en
  },
  WhatsNewSection: function() {
    return _
  },
  ActivityScreenOrientation: function() {
    return c
  },
  ActivityLayoutMode: function() {
    return d
  },
  DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
    return ei
  },
  SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
    return eo
  }
}), n("222007");
var r, i, o, l, u, a, s, E, _, c, d, T, A, I, S, f, O, R, N, L, p, C, m = n("798609"),
  P = n("49111");
let h = 160,
  D = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
  g = "438122941302046720",
  U = "773336526917861400",
  M = "880218832743055411",
  v = "1050941315912835122",
  G = "1070087967294631976",
  y = "1007373802981822582",
  F = "1039835161136746497",
  b = "852509694341283871",
  B = "903769130790969345",
  H = "880218394199220334",
  V = "1078728822972764312",
  w = "947957217959759964",
  k = "832013003968348200",
  K = "832012774040141894",
  Y = "832025144389533716",
  W = "755827207812677713",
  x = "879863686565621790",
  j = "902271654783242291",
  X = "1037680572660727838",
  J = "945737671223947305",
  z = "1011683823555199066",
  Z = "1106787098452832296",
  Q = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
  q = {
    SMALL: 64,
    LARGE: 160
  },
  $ = ["in_development", "activities_team", "employee_release"];
(T = r || (r = {})).FAILED_LOAD = "FAILED_LOAD", T.LAGGING = "LAGGING", T.CONFUSING = "CONFUSING", T.NOT_FUN = "NOT_FUN", T.OTHER = "OTHER", (A = i || (i = {}))[A.PLAY = 0] = "PLAY", A[A.SPECTATE = 1] = "SPECTATE", (I = o || (o = {})).DESKTOP = "desktop", I.MOBILE = "mobile", (S = l || (l = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", S.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", S.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", S.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (f = u || (u = {}))[f.UNLOCKED = 0] = "UNLOCKED", f[f.NEEDS_NITRO = 1] = "NEEDS_NITRO", (O = a || (a = {}))[O.NO_UPDATE = 0] = "NO_UPDATE", O[O.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", O[O.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", O[O.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", O[O.USER_JOINED = 4] = "USER_JOINED", O[O.USER_LEFT = 5] = "USER_LEFT", O[O.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (R = s || (s = {}))[R.UNLOCKED = 1] = "UNLOCKED", R[R.PORTRAIT = 2] = "PORTRAIT", R[R.LANDSCAPE = 3] = "LANDSCAPE", (N = E || (E = {}))[N.DIRECTORY = 0] = "DIRECTORY", N[N.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", N[N.DETAIL_PAGE = 2] = "DETAIL_PAGE";
let ee = "activity-shelf",
  et = new Set(["755600276941176913", M, v, H, "1010174316991762534", z]),
  en = new Set([M, v, H]);
(L = _ || (_ = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", L.GDM_ACTIVITIES = "GDM_ACTIVITIES", L.PUTT_PARTY = "PUTT_PARTY", L.JAMSPACE_OLD = "JAMSPACE", L.JAMSPACE = "JAMSPACE2", L.POKER = "POKER", L.FREE = "FREE", (p = c || (c = {}))[p.PORTRAIT = 0] = "PORTRAIT", p[p.LANDSCAPE = 1] = "LANDSCAPE", (C = d || (d = {}))[C.FOCUSED = 0] = "FOCUSED", C[C.PIP = 1] = "PIP", C[C.GRID = 2] = "GRID";
let er = {
    label_type: m.EmbeddedActivityLabelTypes.NONE,
    release_phase: "",
    label_until: null
  },
  ei = {
    application_id: "",
    requires_age_gate: !1,
    default_orientation_lock_state: 1,
    tablet_default_orientation_lock_state: 1,
    supported_platforms: [m.EmbeddedActivitySupportedPlatforms.WEB],
    client_platform_config: {
      [m.EmbeddedActivitySupportedPlatforms.WEB]: er,
      [m.EmbeddedActivitySupportedPlatforms.IOS]: er,
      [m.EmbeddedActivitySupportedPlatforms.ANDROID]: er
    },
    has_csp_exception: !1,
    displays_advertisements: !1
  },
  eo = [P.ChannelTypes.GUILD_TEXT, P.ChannelTypes.DM, P.ChannelTypes.GROUP_DM]