n.d(t, {
    _3: function () {
        return m;
    },
    _b: function () {
        return _;
    },
    dA: function () {
        return p;
    },
    jZ: function () {
        return r;
    },
    mH: function () {
        return h;
    },
    uk: function () {
        return E;
    }
});
var r,
    i = n(367907),
    a = n(857192),
    o = n(626135),
    s = n(569984),
    l = n(497505),
    u = n(566078),
    c = n(981631);
let d = Object.keys(l.jn);
function _(e) {
    var t;
    return null !== (t = d.find((t) => l.jn[t] === e)) && void 0 !== t ? t : '';
}
function E(e) {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function f(e) {
    let t = u.r.build(e.config);
    return {
        quest_id: e.id,
        game_id: t.application.id,
        game_name: t.application.name
    };
}
function h(e, t, n) {
    return {
        content_id: e,
        content_name: _(e),
        content_position: t,
        row_index: n
    };
}
function p(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: l = !1 } = e,
        u = s.Z.quests.get(t);
    if (null != u) {
        if (
            (a.default.isLoggingAnalyticsEvents &&
                console.info('[Quest] AnalyticsUtils.track', n, {
                    ...f(u),
                    ...r
                }),
            u.preview)
        )
            return;
        if (l)
            return i.ZP.trackWithMetadata(n, {
                ...f(u),
                ...r
            });
        o.default.track(n, {
            ...f(u),
            ...r
        });
    }
}
function m(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: a, trackGuildAndChannelMetadata: o = !1 } = e;
    p({
        questId: t,
        event: c.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...h(n, i, a),
            cta_name: r
        },
        trackGuildAndChannelMetadata: o
    });
}
!(function (e) {
    (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST');
})(r || (r = {}));
