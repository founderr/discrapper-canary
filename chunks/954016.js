"use strict";
n.r(t), n.d(t, {
  ACTIVITY_INVITE_COVER_IMAGE_SIZE: function() {
    return R
  },
  validStreamURL: function() {
    return O
  },
  XBOX_ACTIVITY_APPLICATION_ID: function() {
    return D
  },
  END_GAME_APPLICATION_ID: function() {
    return P
  },
  JAM_SPACE_APPLICATION_ID: function() {
    return M
  },
  GARTIC_PHONE_APPLICATION_ID: function() {
    return U
  },
  COLOR_TOGETHER_APPLICATION_ID: function() {
    return k
  },
  SPELL_CAST_APPLICATION_ID: function() {
    return w
  },
  LAND_IO_APPLICATION_ID: function() {
    return V
  },
  WATCH_YOUTUBE_PROD_APP_ID: function() {
    return G
  },
  KWIM_APPLICATION_ID: function() {
    return F
  },
  BOBBLE_LEAGUE_APPLICATION_ID: function() {
    return x
  },
  CHECKERS_IN_THE_PARK_APP_ID: function() {
    return B
  },
  CHESS_IN_THE_PARK_APP_ID: function() {
    return H
  },
  BLAZIN_8S_APPLICATION_ID: function() {
    return Y
  },
  POKER_NIGHT_APPLICATION_ID: function() {
    return j
  },
  BYS_LETTER_APP_ID: function() {
    return W
  },
  BYS_TWOODLE_APP_ID: function() {
    return K
  },
  CHEF_SHOWDOWN_APPLICATION_ID: function() {
    return z
  },
  PUTT_PARTY_APPLICATION_ID: function() {
    return q
  },
  KRUNKER_STRIKE_APPLICATION_ID: function() {
    return X
  },
  COLONIST_APPLICATION_ID: function() {
    return Q
  },
  EMBEDDED_ACTIVITY_SURVEY_URL: function() {
    return Z
  },
  ImageSizes: function() {
    return J
  },
  STAFF_RELEASE_PHASES: function() {
    return $
  },
  ActivityFeedbackReasons: function() {
    return i
  },
  ActivityIntent: function() {
    return s
  },
  ActivityPlatform: function() {
    return r
  },
  ActivityAccessStatus: function() {
    return o
  },
  EmbeddedActivityUpdateCodes: function() {
    return l
  },
  OrientationLockState: function() {
    return u
  },
  ActivityShelfSlides: function() {
    return d
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
    return c
  },
  ActivityScreenOrientation: function() {
    return f
  },
  ActivityLayoutMode: function() {
    return _
  },
  DEFAULT_EMBEDDED_ACTIVITY_CONFIG: function() {
    return es
  },
  SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES: function() {
    return er
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _, h, g, m, E, p, v, S, T, I, C, A, y = n("798609"),
  N = n("49111");
let R = 160,
  O = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
  D = "438122941302046720",
  P = "773336526917861400",
  b = "880218832743055411",
  L = "1050941315912835122",
  M = "1070087967294631976",
  U = "1007373802981822582",
  k = "1039835161136746497",
  w = "852509694341283871",
  V = "903769130790969345",
  G = "880218394199220334",
  F = "1078728822972764312",
  x = "947957217959759964",
  B = "832013003968348200",
  H = "832012774040141894",
  Y = "832025144389533716",
  j = "755827207812677713",
  W = "879863686565621790",
  K = "902271654783242291",
  z = "1037680572660727838",
  q = "945737671223947305",
  X = "1011683823555199066",
  Q = "1106787098452832296",
  Z = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
  J = {
    SMALL: 64,
    LARGE: 160
  },
  $ = ["in_development", "activities_team", "employee_release"];
(h = i || (i = {})).FAILED_LOAD = "FAILED_LOAD", h.LAGGING = "LAGGING", h.CONFUSING = "CONFUSING", h.NOT_FUN = "NOT_FUN", h.OTHER = "OTHER", (g = s || (s = {}))[g.PLAY = 0] = "PLAY", g[g.SPECTATE = 1] = "SPECTATE", (m = r || (r = {})).DESKTOP = "desktop", m.MOBILE = "mobile", (E = a || (a = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", E.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", E.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", E.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (p = o || (o = {}))[p.UNLOCKED = 0] = "UNLOCKED", p[p.NEEDS_NITRO = 1] = "NEEDS_NITRO", (v = l || (l = {}))[v.NO_UPDATE = 0] = "NO_UPDATE", v[v.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", v[v.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", v[v.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", v[v.USER_JOINED = 4] = "USER_JOINED", v[v.USER_LEFT = 5] = "USER_LEFT", v[v.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (S = u || (u = {}))[S.UNLOCKED = 1] = "UNLOCKED", S[S.PORTRAIT = 2] = "PORTRAIT", S[S.LANDSCAPE = 3] = "LANDSCAPE", (T = d || (d = {}))[T.DIRECTORY = 0] = "DIRECTORY", T[T.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", T[T.DETAIL_PAGE = 2] = "DETAIL_PAGE";
let ee = "activity-shelf",
  et = new Set(["755600276941176913", b, L, G]),
  en = new Set([b, L, G]);
(I = c || (c = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", I.GDM_ACTIVITIES = "GDM_ACTIVITIES", I.PUTT_PARTY = "PUTT_PARTY", I.JAMSPACE_OLD = "JAMSPACE", I.JAMSPACE = "JAMSPACE2", I.POKER = "POKER", I.FREE = "FREE", (C = f || (f = {}))[C.PORTRAIT = 0] = "PORTRAIT", C[C.LANDSCAPE = 1] = "LANDSCAPE", (A = _ || (_ = {}))[A.FOCUSED = 0] = "FOCUSED", A[A.PIP = 1] = "PIP", A[A.GRID = 2] = "GRID";
let ei = {
    label_type: y.EmbeddedActivityLabelTypes.NONE,
    release_phase: "",
    label_until: null
  },
  es = {
    application_id: "",
    requires_age_gate: !1,
    default_orientation_lock_state: 1,
    tablet_default_orientation_lock_state: 1,
    supported_platforms: [y.EmbeddedActivitySupportedPlatforms.WEB],
    client_platform_config: {
      [y.EmbeddedActivitySupportedPlatforms.WEB]: ei,
      [y.EmbeddedActivitySupportedPlatforms.IOS]: ei,
      [y.EmbeddedActivitySupportedPlatforms.ANDROID]: ei
    },
    has_csp_exception: !1
  },
  er = [N.ChannelTypes.GUILD_TEXT, N.ChannelTypes.DM, N.ChannelTypes.GROUP_DM]