"use strict";
n.r(t), n.d(t, {
  AnalyticsContext: function() {
    return I
  },
  addExtraAnalyticsDecorator: function() {
    return R
  },
  AnalyticEventConfigs: function() {
    return N
  },
  expandLocation: function() {
    return L
  },
  setUTMContext: function() {
    return m
  },
  expandEventProperties: function() {
    return P
  },
  debugLogEvent: function() {
    return h
  },
  trackNetworkAction: function() {
    return g
  },
  AnalyticsSchema: function() {
    return E
  },
  default: function() {
    return U
  }
}), n("424973"), n("222007");
var r = n("884691"),
  i = n("759843"),
  o = n("913144"),
  l = n("939011"),
  u = n("821316"),
  a = n("316217"),
  s = n("313915"),
  E = n("870623"),
  _ = n("872507"),
  c = n("286235"),
  d = n("49111"),
  T = n("727538"),
  A = n("782340");
let I = r.createContext({
    location: {}
  }),
  S = {},
  f = performance.now(),
  O = [];

function R(e) {
  O.push(e)
}
let N = {
  [d.AnalyticEvents.APP_OPENED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.APP_BACKGROUND]: {
    throttlePeriod: 12e4,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.ACK_MESSAGES]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
  },
  [d.AnalyticEvents.GUILD_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.is_pending]
  },
  [d.AnalyticEvents.FRIENDS_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab_opened]
  },
  [d.AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab_opened]
  },
  [d.AnalyticEvents.START_SPEAKING]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.server]
  },
  [d.AnalyticEvents.START_LISTENING]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.server]
  },
  [d.AnalyticEvents.ACTIVITY_UPDATED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.application_id],
    deduplicate: !0
  },
  [d.AnalyticEvents.CHANNEL_OPENED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
  },
  [d.AnalyticEvents.TEXT_IN_VOICE_OPENED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.channel_id]
  },
  [d.AnalyticEvents.NOTIFICATION_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.notif_type]
  },
  [d.AnalyticEvents.MEMBER_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [d.AnalyticEvents.DM_LIST_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [d.AnalyticEvents.NAV_DRAWER_OPENED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.KEYBOARD_SHORTCUT_USED]: {
    throttlePeriod: 12e4,
    throttleKeys: e => {
      var t;
      return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
    }
  },
  [d.AnalyticEvents.QUICKSWITCHER_OPENED]: {
    throttlePeriod: 1e4,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.type]
  },
  [d.AnalyticEvents.ROLE_PAGE_VIEWED]: {
    throttlePeriod: 12e4,
    throttleKeys: e => [e.role_id, e.tab_opened]
  },
  [d.AnalyticEvents.VIDEO_INPUT_INITIALIZED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: {
    throttlePeriod: 9e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: {
    throttlePeriod: 864e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.RPC_COMMAND_SENT]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.application_id, e.command],
    throttlePercent: .001
  },
  [d.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.application_id, e.event],
    throttlePercent: .001
  },
  [d.AnalyticEvents.CHANNEL_BANNER_VIEWED]: {
    throttlePeriod: 864e5,
    throttleKeys: e => [e.banner_type, e.channel_id]
  },
  [d.AnalyticEvents.PREMIUM_UPSELL_VIEWED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.type]
  },
  [d.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED]: {
    throttlePeriod: 36e5,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [d.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED]: {
    throttlePeriod: 36e5,
    throttleKeys: e => [e.guild_id]
  },
  [d.AnalyticEvents.FORUM_CHANNEL_SEARCHED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [d.AnalyticEvents.FORUM_CHANNEL_SCROLLED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [d.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.user_id]
  },
  [d.AnalyticEvents.DM_PROFILE_VIEWED]: {
    throttlePeriod: 36e5,
    throttleKeys: e => [e.viewed_profile_user_id]
  },
  [d.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: {
    throttlePercent: .01
  },
  [d.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: {
    throttlePeriod: 3e5,
    throttleKeys: e => [e.channel_id]
  },
  [d.AnalyticEvents.ACTIVITY_CARDS_VIEWED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.context, e.guild_id]
  },
  [d.AnalyticEvents.ACK_COMMUNITY_MESSAGES]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.channel_id]
  },
  [d.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.tab]
  },
  [d.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED]: {
    throttlePeriod: 6e4,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.BROADCAST_LIST_VISITED]: {
    throttlePeriod: 3e5,
    throttleKeys: () => []
  },
  [d.AnalyticEvents.CHANNEL_LIST_END_REACHED]: {
    throttlePeriod: 9e5,
    throttleKeys: e => [e.guild_id]
  },
  [d.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
    throttlePeriod: 6e4,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [d.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
    throttlePeriod: 36e5,
    throttleKeys: () => []
  }
};

function L(e) {
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
let p = () => T.AccessibilityFeatureFlags.NONE,
  C = (0, i.trackMaker)({
    analyticEventConfigs: N,
    dispatcher: o.default,
    TRACK_ACTION_NAME: "TRACK"
  });

function m(e) {
  return S = e
}

function P(e) {
  var t, n, r, i, o;
  let l = e;
  if (!l && (l = {}), null != l.location) {
    let {
      location: e,
      ...t
    } = l;
    l = {
      ...t,
      ...L(e)
    }
  }
  if (null != l.source) {
    ;
    let {
      source: e,
      ...t
    } = l;
    l = {
      ...t,
      ..."string" == typeof(o = e) ? {
        source: o
      } : {
        source_page: o.page,
        source_section: o.section,
        source_object: o.object,
        source_object_type: o.objectType,
        source_promotion_id: o.promotionId
      }
    }
  }
  l.client_performance_cpu = _.default.getCurrentCPUUsagePercent(), l.client_performance_memory = _.default.getCurrentMemoryUsageKB(), l.cpu_core_count = _.default.getCPUCoreCount(), l.accessibility_features = p(), l.rendered_locale = A.default.getLocale(), l.uptime_app = Math.floor((performance.now() - f) / 1e3);
  let u = _.default.getProcessUptime();
  null != u && (l.uptime_process_renderer = Math.floor(u));
  let {
    utmSource: a,
    utmMedium: s,
    utmCampaign: E,
    utmContent: c
  } = S;
  return l.utm_source = null !== (t = l.utm_source) && void 0 !== t ? t : a, l.utm_medium = null !== (n = l.utm_medium) && void 0 !== n ? n : s, l.utm_campaign = null !== (r = l.utm_campaign) && void 0 !== r ? r : E, l.utm_content = null !== (i = l.utm_content) && void 0 !== i ? i : c, O.forEach(e => e(l)), l
}

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  s.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? u.report("Analytics", e, t) : u.report("Analytics", e)
}
let D = (0, i.trackMaker)({
  analyticEventConfigs: N,
  dispatcher: o.default,
  TRACK_ACTION_NAME: "TRACK"
});

function g(e, t) {
  let n = (0, l.getLocation)(),
    r = P({
      location: n,
      ...t
    });
  (0, l.setDebugTrackedData)(e, {
    type: "action",
    ...t
  }), h(e, r), D(e, r)
}
var U = {
  ...i.default,
  getCampaignParams: i.getCampaignParams,
  setSystemAccessibilityFeatures: function(e) {
    p = e
  },
  expandEventProperties: P,
  track: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!a.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && c.default.addBreadcrumb({
        category: "analytics",
        message: "".concat(e)
      }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
    let r = P(t);
    return h(e, r, n.logEventProperties), C(e, r, {
      flush: n.flush,
      fingerprint: n.fingerprint
    })
  }
}