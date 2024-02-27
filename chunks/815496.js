"use strict";
n.r(t), n.d(t, {
  trackQuestEvent: function() {
    return d
  },
  QuestContentCTA: function() {
    return i
  },
  trackQuestContentClicked: function() {
    return c
  }
});
var s, i, r = n("599110"),
  a = n("2973"),
  u = n("588025"),
  l = n("49111");
let o = Object.keys(u.QuestContent);

function d(e, t, n) {
  let s = a.default.quests.get(e);
  if (null != s && !s.preview) {
    var i;
    r.default.track(t, {
      quest_id: (i = s).id,
      game_id: i.config.applicationId,
      game_name: i.config.applicationName,
      ...n
    })
  }
}

function c(e, t, n) {
  var s, i;
  d(e, l.AnalyticEvents.QUEST_CONTENT_CLICKED, {
    content_id: s = t,
    content_name: null !== (i = o.find(e => u.QuestContent[e] === s)) && void 0 !== i ? i : "",
    cta_name: n
  })
}(s = i || (i = {})).LEARN_MORE = "LEARN_MORE", s.SHOW_REWARD = "SHOW_REWARD", s.CLAIM_REWARD = "CLAIM_REWARD", s.ACCEPT_QUEST = "ACCEPT_QUEST", s.COPY_QUEST_URL = "COPY_QUEST_URL", s.TRACK_PROGRESS = "TRACK_PROGRESS", s.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", s.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", s.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", s.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", s.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", s.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE"