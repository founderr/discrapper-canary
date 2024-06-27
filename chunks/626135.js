"use strict";
n.r(t), n.d(t, {
  AnalyticEventConfigs: function() {
    return m
  },
  AnalyticsContext: function() {
    return h
  },
  AnalyticsSchema: function() {
    return _
  },
  addExtraAnalyticsDecorator: function() {
    return N
  },
  debugLogEvent: function() {
    return v
  },
  expandEventProperties: function() {
    return C
  },
  expandLocation: function() {
    return O
  },
  setUTMContext: function() {
    return g
  },
  trackNetworkAction: function() {
    return D
  }
}), n(653041), n(47120);
var i = n(470079),
  r = n(990547),
  s = n(570140),
  o = n(565384),
  a = n(569611),
  l = n(97145),
  u = n(857192),
  _ = n(747161),
  c = n(848479),
  d = n(960048),
  E = n(981631),
  I = n(94752),
  T = n(689938);
let h = i.createContext({
    location: {}
  }),
  f = {},
  S = performance.now(),
  A = [];

function N(e) {
  A.push(e)
}
let m = {
  [E.rMx.APP_OPENED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [E.rMx.APP_BACKGROUND]: {
    throttlePeriod: 12e4,
    throttleKeys: () => []
  },
  [E.rMx.ACK_MESSAGES]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
  },
  [E.rMx.ACTIVITIES_RESTRICTRED_CSP_VIOLATION]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.application_id],
    throttlePercent: .001
  },
  [E.rMx.GUILD_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.is_pending]
  },
  [E.rMx.FRIENDS_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab_opened]
  },
  [E.rMx.NOW_PLAYING_CARD_HOVERED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab_opened]
  },
  [E.rMx.START_SPEAKING]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.server]
  },
  [E.rMx.START_LISTENING]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.server]
  },
  [E.rMx.ACTIVITY_UPDATED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.application_id],
    deduplicate: !0
  },
  [E.rMx.CHANNEL_OPENED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
  },
  [E.rMx.TEXT_IN_VOICE_OPENED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.channel_id]
  },
  [E.rMx.NOTIFICATION_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.notif_type]
  },
  [E.rMx.MEMBER_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [E.rMx.DM_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [E.rMx.NAV_DRAWER_OPENED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [E.rMx.KEYBOARD_SHORTCUT_USED]: {
    throttlePeriod: 12e4,
    throttleKeys: e => {
      var t;
      return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
    }
  },
  [E.rMx.QUICKSWITCHER_OPENED]: {
    throttlePeriod: 1e4,
    throttleKeys: () => []
  },
  [E.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.type]
  },
  [E.rMx.ROLE_PAGE_VIEWED]: {
    throttlePeriod: 12e4,
    throttleKeys: e => [e.role_id, e.tab_opened]
  },
  [E.rMx.VIDEO_INPUT_INITIALIZED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [E.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [E.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [E.rMx.RPC_SERVER_ERROR_CAUGHT]: {
    throttlePeriod: 864e5,
    throttleKeys: () => []
  },
  [E.rMx.RPC_COMMAND_SENT]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.application_id, e.command],
    throttlePercent: .001
  },
  [E.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.application_id, e.event],
    throttlePercent: .001
  },
  [E.rMx.CHANNEL_BANNER_VIEWED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.banner_type, e.channel_id]
  },
  [E.rMx.PREMIUM_UPSELL_VIEWED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.type]
  },
  [E.rMx.FORUM_CHANNEL_SEARCHED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [E.rMx.FORUM_CHANNEL_SCROLLED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.user_id]
  },
  [E.rMx.DM_PROFILE_VIEWED]: {
    throttlePeriod: 36e5,
    throttleKeys: e => [e.viewed_profile_user_id]
  },
  [E.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
    throttlePercent: .01
  },
  [E.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
    throttlePeriod: 3e5,
    throttleKeys: e => [e.channel_id]
  },
  [E.rMx.ACTIVITY_CARDS_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.context, e.guild_id]
  },
  [E.rMx.GUILD_TOOLTIP_SHOWN]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id]
  },
  [E.rMx.ACK_COMMUNITY_MESSAGES]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [E.rMx.REDESIGN_NAV_BAR_CLICKED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab]
  },
  [E.rMx.BROADCAST_START_BUTTON_HOVERED]: {
    throttlePeriod: 6e4,
    throttleKeys: () => []
  },
  [E.rMx.BROADCAST_LIST_VISITED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [E.rMx.CHANNEL_LIST_END_REACHED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id]
  },
  [E.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [E.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
    throttlePeriod: 36e5,
    throttleKeys: () => []
  },
  [E.rMx.KEYWORD_FILTER_MATCH]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.message_id]
  }
};

function O(e) {
  return "string" == typeof e ? {
    location: e
  } : {
    location: e.page,
    location_page: e.page,
    location_section: e.section,
    location_object: e.object,
    location_object_type: e.objectType
  }
}
let R = () => I.E.NONE,
  p = (0, r.trackMaker)({
    analyticEventConfigs: m,
    dispatcher: s.Z,
    TRACK_ACTION_NAME: "TRACK"
  });

function g(e) {
  return f = e
}

function C(e) {
  var t, n, i, r, s;
  let o = e;
  if (!o && (o = {}), null != o.location) {
    let {
      location: e,
      ...t
    } = o;
    o = {
      ...t,
      ...O(e)
    }
  }
  if (null != o.source) {
    ;
    let {
      source: e,
      ...t
    } = o;
    o = {
      ...t,
      ..."string" == typeof(s = e) ? {
        source: s
      } : {
        source_page: s.page,
        source_section: s.section,
        source_object: s.object,
        source_object_type: s.objectType,
        source_promotion_id: s.promotionId
      }
    }
  }
  o.client_performance_cpu = c.Z.getCurrentCPUUsagePercent(), o.client_performance_memory = c.Z.getCurrentMemoryUsageKB(), o.cpu_core_count = c.Z.getCPUCoreCount(), o.accessibility_features = R(), o.rendered_locale = T.Z.getLocale(), o.uptime_app = Math.floor((performance.now() - S) / 1e3);
  let a = c.Z.getProcessUptime();
  null != a && (o.uptime_process_renderer = Math.floor(a));
  let {
    utmSource: l,
    utmMedium: u,
    utmCampaign: _,
    utmContent: d
  } = f;
  return o.utm_source = null !== (t = o.utm_source) && void 0 !== t ? t : l, o.utm_medium = null !== (n = o.utm_medium) && void 0 !== n ? n : u, o.utm_campaign = null !== (i = o.utm_campaign) && void 0 !== i ? i : _, o.utm_content = null !== (r = o.utm_content) && void 0 !== r ? r : d, A.forEach(e => e(o)), o
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  u.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? a.Hj("Analytics", e, t) : a.Hj("Analytics", e)
}
let L = (0, r.trackMaker)({
  analyticEventConfigs: m,
  dispatcher: s.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function D(e, t) {
  let n = C({
    location: (0, o.k$)(),
    ...t
  });
  (0, o.dT)(e, {
    type: "action",
    ...t
  }), v(e, n), L(e, n)
}
t.default = {
  ...r,
  getCampaignParams: r.getCampaignParams,
  setSystemAccessibilityFeatures: function(e) {
    R = e
  },
  expandEventProperties: C,
  track: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!l.R.includes(e) && d.Z.addBreadcrumb({
        category: "analytics",
        message: "".concat(e)
      }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
    let i = C(t);
    return v(e, i, n.logEventProperties), p(e, i, {
      flush: n.flush,
      fingerprint: n.fingerprint
    })
  }
}