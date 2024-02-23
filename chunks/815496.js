"use strict";
n.r(e), n.d(e, {
  trackQuestEvent: function() {
    return E
  },
  QuestContentCTA: function() {
    return u
  },
  trackQuestContentClicked: function() {
    return c
  }
});
var s, u, o = n("599110"),
  i = n("2973"),
  a = n("588025"),
  l = n("49111");
let r = Object.keys(a.QuestContent);

function E(t, e, n) {
  let s = i.default.quests.get(t);
  if (null != s && !s.preview) {
    var u;
    o.default.track(e, {
      quest_id: (u = s).id,
      game_id: u.config.applicationId,
      game_name: u.config.applicationName,
      ...n
    })
  }
}

function c(t, e, n) {
  var s, u;
  E(t, l.AnalyticEvents.QUEST_CONTENT_CLICKED, {
    content_id: s = e,
    content_name: null !== (u = r.find(t => a.QuestContent[t] === s)) && void 0 !== u ? u : "",
    cta_name: n
  })
}(s = u || (u = {})).OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", s.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", s.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", s.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", s.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK"