"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("617136"),
  r = n("272008"),
  o = n("497505"),
  u = n("667105"),
  d = n("689938"),
  c = n("626445");

function f(e) {
  var t, n, f, E;
  let {
    quest: h
  } = e, _ = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, C = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (f = h.userStatus) || void 0 === f ? void 0 : f.claimedAt) == null, m = (null === (E = h.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null, S = (0, u.useHandleClaimQuestsReward)({
    quest: h,
    location: o.QuestContent.QUEST_BAR
  }), p = s.useCallback(() => {
    (0, r.enrollInQuest)(h.id, {
      questContent: o.QuestContent.QUEST_HOME_DESKTOP,
      questContentCTA: i.QuestContentCTA.ACCEPT_QUEST
    })
  }, [h]);
  return C ? (0, a.jsx)("div", {
    className: c.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: S,
      className: c.button,
      children: d.default.Messages.QUESTS_CLAIM_REWARD
    })
  }) : _ && !m ? (0, a.jsx)("div", {
    className: c.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.PRIMARY,
      disabled: !0,
      className: c.button,
      children: d.default.Messages.QUEST_ACCEPTED
    })
  }) : (0, a.jsx)("div", {
    className: c.container,
    children: (0, a.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: p,
      className: c.button,
      children: d.default.Messages.QUESTS_ACCEPT
    })
  })
}