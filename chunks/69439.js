n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(617136),
  o = n(272008),
  c = n(569984),
  d = n(497505),
  u = n(918701),
  _ = n(667105),
  E = n(689938),
  h = n(207637);

function I(e) {
  let {
onClick: t,
submitting: n
  } = e;
  return (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(r.Button, {
  color: r.ButtonColors.BRAND,
  onClick: t,
  submitting: n,
  className: h.button,
  children: E.Z.Messages.QUESTS_CLAIM_REWARD
})
  });
}

function m(e) {
  var t, n, m, g;
  let {
quest: p
  } = e, {
isClaiming: T,
isEnrolling: S
  } = (0, a.cj)([c.Z], () => ({
isClaiming: c.Z.isClaimingRewardCode(p.id) || c.Z.isClaimingReward(p.id) || c.Z.isFetchingRewardCode(p.id),
isEnrolling: c.Z.isEnrolling(p.id)
  })), f = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, C = (null === (n = p.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (m = p.userStatus) || void 0 === m ? void 0 : m.claimedAt) == null, N = (0, u.iQ)(p), A = !(0, u.zi)(p), Z = (null === (g = p.userStatus) || void 0 === g ? void 0 : g.claimedAt) != null, v = (0, _.hf)({
quest: p,
location: d.jn.QUEST_BAR
  }), L = s.useCallback(() => {
(0, o.AH)(p.id, {
  questContent: d.jn.QUEST_HOME_DESKTOP,
  questContentCTA: l.jZ.ACCEPT_QUEST
});
  }, [p]);
  return N && C || A && C ? (0, i.jsx)(I, {
submitting: T,
onClick: v
  }) : A && f && !Z ? (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(r.Button, {
  color: r.ButtonColors.PRIMARY,
  disabled: !0,
  className: h.button,
  children: E.Z.Messages.QUEST_ACCEPTED
})
  }) : A && !f ? (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(r.Button, {
  submitting: S,
  color: r.ButtonColors.BRAND,
  onClick: L,
  className: h.button,
  children: E.Z.Messages.QUESTS_ACCEPT
})
  }) : null;
}