n.r(t),
    n.d(t, {
        AnalyticEventConfigs: function () {
            return T;
        },
        AnalyticsContext: function () {
            return g;
        },
        AnalyticsSchema: function () {
            return d;
        },
        addExtraAnalyticsDecorator: function () {
            return I;
        },
        clearAnalyticsEventsRecording: function () {
            return M;
        },
        debugLogEvent: function () {
            return R;
        },
        expandEventProperties: function () {
            return C;
        },
        expandLocation: function () {
            return S;
        },
        getAnalyticsEventsRecording: function () {
            return w;
        },
        getNewAnalyticsLoadId: function () {
            return U;
        },
        setUTMContext: function () {
            return N;
        },
        startRecordingAnalyticsEvents: function () {
            return L;
        },
        stopRecordingAnalyticsEvents: function () {
            return x;
        },
        trackNetworkAction: function () {
            return k;
        }
    }),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(772848),
    a = n(990547),
    s = n(570140),
    o = n(565384),
    l = n(569611),
    u = n(97145),
    c = n(857192),
    d = n(747161),
    f = n(848479),
    _ = n(960048),
    p = n(981631),
    h = n(94752),
    m = n(388032);
let g = r.createContext({ location: {} }),
    E = {},
    v = performance.now(),
    b = [];
function I(e) {
    b.push(e);
}
let T = {
    [p.rMx.APP_OPENED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [p.rMx.APP_BACKGROUND]: {
        throttlePeriod: 120000,
        throttleKeys: () => []
    },
    [p.rMx.ACK_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [p.rMx.GUILD_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [p.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.START_SPEAKING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.START_LISTENING]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [p.rMx.CHANNEL_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [p.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.notif_type]
    },
    [p.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [p.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [p.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: 10000,
        throttleKeys: () => []
    },
    [p.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: 120000,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [p.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: 300000,
        throttleKeys: () => []
    },
    [p.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [p.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: () => []
    },
    [p.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: 86400000,
        throttleKeys: () => []
    },
    [p.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001
    },
    [p.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001
    },
    [p.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.application_id]
    },
    [p.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: 86400000,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [p.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.user_id]
    },
    [p.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePercent: 0.01 },
    [p.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [p.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.tab]
    },
    [p.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 60000,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: 3600000,
        throttleKeys: () => []
    },
    [p.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.message_id]
    },
    [p.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: 900000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [p.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 300000,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    }
};
function S(e) {
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
let y = () => h.E.NONE,
    A = (0, a.trackMaker)({
        analyticEventConfigs: T,
        dispatcher: s.Z,
        TRACK_ACTION_NAME: 'TRACK'
    });
function N(e) {
    return (E = e);
}
function C(e) {
    var t, n, r, i, a;
    let s = e;
    if ((!s && (s = {}), null != s.location)) {
        let { location: e, ...t } = s;
        s = {
            ...t,
            ...S(e)
        };
    }
    if (null != s.source) {
        let { source: e, ...t } = s;
        s = {
            ...t,
            ...('string' == typeof (a = e)
                ? { source: a }
                : {
                      source_page: a.page,
                      source_section: a.section,
                      source_object: a.object,
                      source_object_type: a.objectType,
                      source_promotion_id: a.promotionId
                  })
        };
    }
    (s.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (s.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (s.cpu_core_count = f.Z.getCPUCoreCount()), (s.accessibility_features = y()), (s.rendered_locale = m.intl.currentLocale), (s.uptime_app = Math.floor((performance.now() - v) / 1000));
    let o = f.Z.getProcessUptime();
    null != o && (s.uptime_process_renderer = Math.floor(o));
    let { utmSource: l, utmMedium: u, utmCampaign: c, utmContent: d } = E;
    return (s.utm_source = null !== (t = s.utm_source) && void 0 !== t ? t : l), (s.utm_medium = null !== (n = s.utm_medium) && void 0 !== n ? n : u), (s.utm_campaign = null !== (r = s.utm_campaign) && void 0 !== r ? r : c), (s.utm_content = null !== (i = s.utm_content) && void 0 !== i ? i : d), b.forEach((e) => e(s)), s;
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? l.Hj('Analytics', e, t) : l.Hj('Analytics', e);
}
let O = !1,
    D = {};
function L() {
    O = !0;
}
function x() {
    O = !1;
}
function w() {
    return D;
}
function M() {
    Object.keys(D).forEach((e) => {
        delete D[e];
    });
}
let P = (0, a.trackMaker)({
    analyticEventConfigs: T,
    dispatcher: s.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function k(e, t) {
    let n = C({
        location: (0, o.k$)(),
        ...t
    });
    (0, o.dT)(e, {
        type: 'action',
        ...t
    }),
        R(e, n),
        P(e, n);
}
function U() {
    return (0, i.Z)();
}
t.default = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        y = e;
    },
    expandEventProperties: C,
    track: function (e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = String(e);
        if (
            (!u.R.includes(a) &&
                _.Z.addBreadcrumb({
                    category: 'analytics',
                    message: ''.concat(a)
                }),
            (n = e),
            (r = t),
            !O || (null != r && (Array.isArray(D[n]) ? D[n].push(r) : (D[n] = [r]))),
            null != i.throttlePercent && Math.random() > i.throttlePercent)
        )
            return Promise.resolve();
        let s = C(t);
        return (
            R(a, s, i.logEventProperties),
            A(e, s, {
                flush: i.flush,
                fingerprint: i.fingerprint
            })
        );
    }
};
