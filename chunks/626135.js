n.r(t),
    n.d(t, {
        AnalyticEventConfigs: function () {
            return U;
        },
        AnalyticsContext: function () {
            return g;
        },
        AnalyticsSchema: function () {
            return E;
        },
        addExtraAnalyticsDecorator: function () {
            return P;
        },
        debugLogEvent: function () {
            return V;
        },
        expandEventProperties: function () {
            return Z;
        },
        expandLocation: function () {
            return w;
        },
        getNewAnalyticsLoadId: function () {
            return W;
        },
        setUTMContext: function () {
            return F;
        },
        trackNetworkAction: function () {
            return j;
        }
    });
var r = n(653041);
var i = n(47120);
var a = n(470079),
    o = n(772848),
    s = n(990547),
    l = n(570140),
    u = n(565384),
    c = n(569611),
    d = n(97145),
    _ = n(857192),
    E = n(747161),
    f = n(848479),
    h = n(960048),
    p = n(981631),
    m = n(94752),
    I = n(689938);
let T = { location: {} },
    g = a.createContext(T),
    S = {},
    A = 10000,
    v = 60000,
    N = 120000,
    O = 300000,
    R = 900000,
    C = 3600000,
    y = 86400000,
    L = 0.01,
    b = 0.001,
    D = performance.now(),
    M = [];
function P(e) {
    M.push(e);
}
let U = {
    [p.rMx.APP_OPENED]: {
        throttlePeriod: O,
        throttleKeys: () => []
    },
    [p.rMx.APP_BACKGROUND]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [p.rMx.ACK_MESSAGES]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [p.rMx.GUILD_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [p.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.START_SPEAKING]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.START_LISTENING]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: v,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [p.rMx.CHANNEL_OPENED]: {
        throttlePeriod: R,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [p.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: y,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.notif_type]
    },
    [p.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: N,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [p.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: A,
        throttleKeys: () => []
    },
    [p.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [p.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: O,
        throttleKeys: () => []
    },
    [p.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: y,
        throttleKeys: () => []
    },
    [p.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: y,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: b
    },
    [p.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: y,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: b
    },
    [p.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: y,
        throttleKeys: (e) => [e.application_id]
    },
    [p.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: y,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [p.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: v,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: v,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: v,
        throttleKeys: (e) => [e.user_id]
    },
    [p.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePercent: L },
    [p.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [p.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.tab]
    },
    [p.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: v,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [p.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.message_id]
    },
    [p.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.location_stack]
    }
};
function w(e) {
    return 'string' == typeof e
        ? { location: e }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType
          };
}
function x(e) {
    return 'string' == typeof e
        ? { source: e }
        : {
              source_page: e.page,
              source_section: e.section,
              source_object: e.object,
              source_object_type: e.objectType,
              source_promotion_id: e.promotionId
          };
}
let G = () => m.E.NONE;
function k(e) {
    G = e;
}
let B = (0, s.trackMaker)({
    analyticEventConfigs: U,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function F(e) {
    return (S = e);
}
function Z(e) {
    var t, n, r, i;
    let a = e;
    if ((!a && (a = {}), null != a.location)) {
        let { location: e, ...t } = a;
        a = {
            ...t,
            ...w(e)
        };
    }
    if (null != a.source) {
        let { source: e, ...t } = a;
        a = {
            ...t,
            ...x(e)
        };
    }
    (a.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (a.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (a.cpu_core_count = f.Z.getCPUCoreCount()), (a.accessibility_features = G()), (a.rendered_locale = I.Z.getLocale()), (a.uptime_app = Math.floor((performance.now() - D) / 1000));
    let o = f.Z.getProcessUptime();
    null != o && (a.uptime_process_renderer = Math.floor(o));
    let { utmSource: s, utmMedium: l, utmCampaign: u, utmContent: c } = S;
    return (a.utm_source = null !== (t = a.utm_source) && void 0 !== t ? t : s), (a.utm_medium = null !== (n = a.utm_medium) && void 0 !== n ? n : l), (a.utm_campaign = null !== (r = a.utm_campaign) && void 0 !== r ? r : u), (a.utm_content = null !== (i = a.utm_content) && void 0 !== i ? i : c), M.forEach((e) => e(a)), a;
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    _.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? c.Hj('Analytics', e, t) : c.Hj('Analytics', e);
}
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (
        (!d.R.includes(e) &&
            h.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(e)
            }),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let r = Z(t);
    return (
        V(e, r, n.logEventProperties),
        B(e, r, {
            flush: n.flush,
            fingerprint: n.fingerprint
        })
    );
}
let Y = (0, s.trackMaker)({
    analyticEventConfigs: U,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function j(e, t) {
    let n = Z({
        location: (0, u.k$)(),
        ...t
    });
    (0, u.dT)(e, {
        type: 'action',
        ...t
    }),
        V(e, n),
        Y(e, n);
}
function W() {
    return (0, o.Z)();
}
t.default = {
    ...s,
    getCampaignParams: s.getCampaignParams,
    setSystemAccessibilityFeatures: k,
    expandEventProperties: Z,
    track: H
};
