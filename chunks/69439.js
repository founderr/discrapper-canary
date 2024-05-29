"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("617136"),
  r = n("272008"),
  o = n("497505"),
  u = n("667105"),
  d = n("341907"),
  c = n("689938"),
  f = n("626445");

function E(e) {
  var t, n, E;
  let {
    quest: h
  } = e, _ = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, C = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (E = h.userStatus) || void 0 === E ? void 0 : E.claimedAt) == null, m = (0, u.useHandleClaimQuestsReward)({
    quest: h,
    location: o.QuestContent.QUEST_BAR
  }), S = s.useCallback(() => {
    (0, d.openGameLink)(h, {
      content: o.QuestContent.QUEST_HOME_DESKTOP,
      ctaContent: i.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [h]), p = s.useCallback(() => {
    (0, r.enrollInQuest)(h.id, {
      questContent: o.QuestContent.QUEST_HOME_DESKTOP,
      questContentCTA: i.QuestContentCTA.ACCEPT_QUEST
    })
  }, [h]);
  return C ? (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: m,
      className: f.button,
      children: c.default.Messages.QUESTS_CLAIM_REWARD
    })
  }) : _ ? (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.PRIMARY,
      onClick: S,
      className: f.button,
      children: c.default.Messages.QUESTS_PLAY_GAME
    })
  }) : (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: p,
      className: f.button,
      children: c.default.Messages.QUESTS_ACCEPT
    })
  })
}