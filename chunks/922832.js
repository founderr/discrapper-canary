"use strict";
E.r(t), E.d(t, {
  FAMILY_CENTER_REFETCH_COOLDOWN: function() {
    return F
  },
  MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: function() {
    return p
  },
  MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: function() {
    return U
  },
  FAMILY_CENTER_REQUEST_SECTION_HEIGHT: function() {
    return g
  },
  FAMILY_CENTER_REQUEST_ROW_HEIGHT: function() {
    return P
  },
  FAMILY_CENTER_REQUEST_QR_CODE_URL: function() {
    return V
  },
  FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: function() {
    return m
  },
  QR_CODE_AUTO_HIDE_TIMEOUT: function() {
    return v
  },
  PLACEHOLDER_QR_CODE_URL: function() {
    return G
  },
  FAMILY_CENTER_SUB_ROUTES: function() {
    return h
  },
  UserLinkStatus: function() {
    return n
  },
  TeenActionDisplayType: function() {
    return I
  },
  FamilyCenterSubPages: function() {
    return s
  },
  FamilyCenterSubPageAnalyticsIds: function() {
    return a
  },
  FamilyCenterPageLocation: function() {
    return A
  },
  FamilyCenterPageLocationAnalyticsIds: function() {
    return i
  },
  FamilyCenterAction: function() {
    return u
  },
  ACTION_TO_TEXT: function() {
    return H
  },
  PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return k
  },
  ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return w
  }
}), E("222007");
var _, T, n, I, s, a, A, i, u, r, l, C, d, o, N, R, S, M, L, c, D, f, Y = E("447669"),
  O = E("718517"),
  y = E("782340");
let F = 30 * O.default.Millis.SECOND,
  p = 8,
  U = 3,
  g = 26,
  P = 64,
  V = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  m = 4,
  v = 5 * O.default.Millis.MINUTE,
  G = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  h = (0, Y.wrapPaths)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
(C = _ || (_ = {}))[C.DM_MESSAGE_SEND = 1] = "DM_MESSAGE_SEND", C[C.GDM_MESSAGE_SEND = 2] = "GDM_MESSAGE_SEND", C[C.MESSAGE_REACT = 3] = "MESSAGE_REACT", C[C.ADD_FRIEND = 4] = "ADD_FRIEND", C[C.SEND_CALL = 5] = "SEND_CALL", C[C.CALL_JOIN = 6] = "CALL_JOIN", C[C.GUILD_JOIN = 7] = "GUILD_JOIN", (d = T || (T = {}))[d.PARENT = 1] = "PARENT", d[d.CHILD = 2] = "CHILD", (o = n || (n = {}))[o.PENDING = 1] = "PENDING", o[o.ACTIVE = 2] = "ACTIVE", o[o.INACTIVE = 3] = "INACTIVE", o[o.DECLINED = 4] = "DECLINED", o[o.EXPIRED = 5] = "EXPIRED", (N = I || (I = {}))[N.USER_ADD = 1] = "USER_ADD", N[N.GUILD_ADD = 2] = "GUILD_ADD", N[N.USER_INTERACTION = 3] = "USER_INTERACTION", N[N.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", N[N.USER_CALLED = 5] = "USER_CALLED", (R = s || (s = {})).ACTIVITY = "ACTIVITY", R.REQUESTS = "REQUESTS", R.SETTINGS = "SETTINGS", (S = a || (a = {}))[S.ACTIVITY = 0] = "ACTIVITY", S[S.REQUESTS = 1] = "REQUESTS", S[S.SETTINGS = 2] = "SETTINGS", (M = A || (A = {})).SIDENAV = "SIDENAV", M.SETTINGS = "SETTINGS", (L = i || (i = {}))[L.SIDENAV = 0] = "SIDENAV", L[L.SETTINGS = 1] = "SETTINGS", (c = u || (u = {}))[c.TabChange = 0] = "TabChange", c[c.ShowQRCodeModal = 1] = "ShowQRCodeModal", c[c.RevealQRCode = 2] = "RevealQRCode", c[c.ScanQRCodeButton = 3] = "ScanQRCodeButton", c[c.ScanQRCode = 4] = "ScanQRCode", c[c.LoadMore = 5] = "LoadMore", c[c.SelectTeen = 6] = "SelectTeen", c[c.HideQRCode = 7] = "HideQRCode";
let H = new Map([
  [3, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS
    })
  }],
  [5, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS
    })
  }],
  [1, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS
    })
  }],
  [2, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN
  }],
  [4, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN
  }]
]);
(D = r || (r = {}))[D.CHECK = 0] = "CHECK", D[D.X = 1] = "X", (f = l || (l = {}))[f.GENERIC_ERROR = 0] = "GENERIC_ERROR", f[f.INELIGIBLE_FOR_FAMILY_CENTER = 1] = "INELIGIBLE_FOR_FAMILY_CENTER", f[f.PENDING_REQUEST_EXISTS = 2] = "PENDING_REQUEST_EXISTS", f[f.MAX_CONNECTIONS_REACHED = 3] = "MAX_CONNECTIONS_REACHED";
let k = () => ({
    seconds: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
    minutes: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
    hours: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
    yesterday: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
    days: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
    date: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE
  }),
  w = () => ({
    seconds: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
    minutes: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
    hours: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
    yesterday: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
    days: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
    date: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE
  })