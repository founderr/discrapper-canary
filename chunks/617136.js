r.d(n, {
    Ic: function () {
        return T;
    },
    _3: function () {
        return I;
    },
    _b: function () {
        return p;
    },
    dA: function () {
        return v;
    },
    jZ: function () {
        return i;
    },
    mH: function () {
        return E;
    },
    uk: function () {
        return m;
    }
});
var i,
    a = r(47120);
var s = r(367907),
    o = r(857192),
    l = r(626135),
    u = r(569984),
    c = r(497505),
    d = r(566078),
    f = r(981631);
let _ = Object.keys(c.jn),
    h = new Set([f.rMx.QUEST_CONTENT_VIEWED, f.rMx.QUEST_CONTENT_CLICKED]);
function p(e) {
    var n;
    return null !== (n = _.find((n) => c.jn[n] === e)) && void 0 !== n ? n : '';
}
function m(e) {
    var n, r, i;
    return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null ? 'COMPLETED' : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function g(e) {
    let n = d.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name
    };
}
function E(e, n, r) {
    return {
        content_id: e,
        content_name: p(e),
        content_position: n,
        row_index: r
    };
}
function v(e) {
    let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: a = !1 } = e,
        c = u.Z.quests.get(n);
    if (null == c) return;
    let d = {
        ...g(c),
        ...i
    };
    if ((o.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', r, d), c.preview)) return;
    let f = h.has(r);
    if (a) return s.ZP.trackWithMetadata(r, d, f);
    l.default.track(r, d, { flush: f });
}
function I(e) {
    let { questId: n, questContent: r, questContentCTA: i, questContentPosition: a, questContentRowIndex: s, trackGuildAndChannelMetadata: o = !1 } = e;
    v({
        questId: n,
        event: f.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...E(r, a, s),
            cta_name: i
        },
        trackGuildAndChannelMetadata: o
    });
}
function T(e) {
    let { questContent: n, questId: r, mode: i, prevMode: a } = e;
    v({
        questId: r,
        event: f.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            ...E(n),
            mode: i,
            previous_mode: a
        }
    });
}
!(function (e) {
    (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD');
})(i || (i = {}));
