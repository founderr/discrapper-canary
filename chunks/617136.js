n.d(t, {
    Ic: function () {
        return v;
    },
    _3: function () {
        return E;
    },
    _b: function () {
        return p;
    },
    dA: function () {
        return g;
    },
    jZ: function () {
        return r;
    },
    mH: function () {
        return m;
    },
    uk: function () {
        return h;
    }
}),
    n(47120);
var r,
    i,
    a = n(367907),
    s = n(857192),
    o = n(626135),
    l = n(569984),
    u = n(497505),
    c = n(566078),
    d = n(981631);
let f = Object.keys(u.jn),
    _ = new Set([d.rMx.QUEST_CONTENT_VIEWED, d.rMx.QUEST_CONTENT_CLICKED]);
function p(e) {
    var t;
    return null !== (t = f.find((t) => u.jn[t] === e)) && void 0 !== t ? t : '';
}
function h(e) {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function m(e, t, n) {
    return {
        content_id: e,
        content_name: p(e),
        content_position: t,
        row_index: n
    };
}
function g(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1 } = e,
        u = l.Z.quests.get(t);
    if (null == u) return;
    let d = {
        ...(function (e) {
            let t = c.r.build(e.config);
            return {
                quest_id: e.id,
                quest_type: t.questType,
                game_id: t.application.id,
                game_name: t.application.name
            };
        })(u),
        ...r
    };
    if ((s.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, d), u.preview)) return;
    let f = _.has(n);
    if (i) return a.ZP.trackWithMetadata(n, d, f);
    o.default.track(n, d, { flush: f });
}
function E(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: a, trackGuildAndChannelMetadata: s = !1 } = e;
    g({
        questId: t,
        event: d.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...m(n, i, a),
            cta_name: r
        },
        trackGuildAndChannelMetadata: s
    });
}
function v(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    g({
        questId: n,
        event: d.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            ...m(t),
            mode: r,
            previous_mode: i
        }
    });
}
((i = r || (r = {})).LEARN_MORE = 'LEARN_MORE'), (i.SHOW_REWARD = 'SHOW_REWARD'), (i.CLAIM_REWARD = 'CLAIM_REWARD'), (i.GET_REWARD_CODE = 'GET_REWARD_CODE'), (i.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (i.ACCEPT_QUEST = 'ACCEPT_QUEST'), (i.COPY_QUEST_URL = 'COPY_QUEST_URL'), (i.TRACK_PROGRESS = 'TRACK_PROGRESS'), (i.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (i.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (i.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (i.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (i.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (i.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (i.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (i.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (i.DEFIBRILLATOR = 'DEFIBRILLATOR'), (i.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (i.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (i.WATCH_STREAM = 'WATCH_STREAM'), (i.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (i.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (i.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (i.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (i.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (i.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (i.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (i.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (i.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (i.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (i.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (i.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (i.VIEW_QUESTS = 'VIEW_QUESTS'), (i.EXPAND = 'EXPAND'), (i.COLLAPSE = 'COLLAPSE'), (i.START_QUEST = 'START_QUEST'), (i.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (i.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (i.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (i.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (i.SEEK_BACKWARD = 'SEEK_BACKWARD'), (i.SEEK_FORWARD = 'SEEK_FORWARD');
