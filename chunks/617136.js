"use strict";
n.r(t), n.d(t, {
  QuestContentCTA: function() {
    return r
  },
  getContentProperties: function() {
    return f
  },
  getQuestContentName: function() {
    return E
  },
  getQuestStatus: function() {
    return I
  },
  trackQuestContentClicked: function() {
    return h
  },
  trackQuestEvent: function() {
    return S
  }
});
var i, r, s = n("367907"),
  a = n("857192"),
  o = n("626135"),
  l = n("569984"),
  u = n("497505"),
  d = n("566078"),
  _ = n("981631");
let c = Object.keys(u.QuestContent);

function E(e) {
  var t;
  return null !== (t = c.find(t => u.QuestContent[t] === e)) && void 0 !== t ? t : ""
}

function I(e) {
  var t, n, i;
  return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? "ENROLLED" : "NONE"
}

function T(e) {
  let t = d.SharedQuestFields.build(e.config);
  return {
    quest_id: e.id,
    game_id: t.application.id,
    game_name: t.application.name
  }
}

function f(e, t) {
  return {
    content_id: e,
    content_name: E(e),
    content_position: t
  }
}

function S(e) {
  let {
    questId: t,
    event: n,
    properties: i,
    trackGuildAndChannelMetadata: r = !1
  } = e, u = l.default.quests.get(t);
  if (null != u) {
    if (a.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, {
        ...T(u),
        ...i
      }), !u.preview) {
      if (r) return s.default.trackWithMetadata(n, {
        ...T(u),
        ...i
      });
      o.default.track(n, {
        ...T(u),
        ...i
      })
    }
  }
}

function h(e) {
  let {
    questId: t,
    questContent: n,
    questContentCTA: i,
    questContentPosition: r,
    trackGuildAndChannelMetadata: s = !1
  } = e;
  S({
    questId: t,
    event: _.AnalyticEvents.QUEST_CONTENT_CLICKED,
    properties: {
      ...f(n, r),
      cta_name: i
    },
    trackGuildAndChannelMetadata: s
  })
}(i = r || (r = {})).LEARN_MORE = "LEARN_MORE", i.SHOW_REWARD = "SHOW_REWARD", i.CLAIM_REWARD = "CLAIM_REWARD", i.GET_REWARD_CODE = "GET_REWARD_CODE", i.COPY_REWARD_CODE = "COPY_REWARD_CODE", i.ACCEPT_QUEST = "ACCEPT_QUEST", i.COPY_QUEST_URL = "COPY_QUEST_URL", i.TRACK_PROGRESS = "TRACK_PROGRESS", i.OPEN_DISCLOSURE = "OPEN_DISCLOSURE", i.WATCH_STREAM = "WATCH_STREAM", i.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", i.OPEN_GAME_LINK = "OPEN_GAME_LINK", i.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", i.QUEST_BAR_COPY_LINK = "QUEST_BAR.COPY_LINK", i.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", i.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", i.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", i.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", i.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE", i.EXPAND = "EXPAND", i.COLLAPSE = "COLLAPSE"