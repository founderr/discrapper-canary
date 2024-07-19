n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(617136),
  o = n(272008),
  c = n(113434),
  d = n(569984),
  u = n(497505),
  _ = n(918701),
  E = n(667105),
  h = n(689938),
  I = n(207637);

function m(e) {
  let {
onClick: t,
submitting: n
  } = e;
  return (0, i.jsx)(r.Button, {
color: r.ButtonColors.BRAND,
onClick: t,
submitting: n,
className: I.button,
children: h.Z.Messages.QUESTS_CLAIM_REWARD
  });
}

function g(e) {
  var t, n, g, p;
  let {
quest: T
  } = e, S = (0, c.B6)(T.config.expiresAt, {
month: '2-digit',
day: '2-digit'
  }), {
isClaiming: f,
isEnrolling: C
  } = (0, a.cj)([d.Z], () => ({
isClaiming: d.Z.isClaimingRewardCode(T.id) || d.Z.isClaimingReward(T.id) || d.Z.isFetchingRewardCode(T.id),
isEnrolling: d.Z.isEnrolling(T.id)
  })), N = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, A = (null === (n = T.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (g = T.userStatus) || void 0 === g ? void 0 : g.claimedAt) == null, Z = (0, _.iQ)(T), v = !(0, _.zi)(T), L = (null === (p = T.userStatus) || void 0 === p ? void 0 : p.claimedAt) != null, O = (0, E.hf)({
quest: T,
location: u.jn.QUEST_BAR
  }), R = s.useCallback(() => {
(0, o.AH)(T.id, {
  questContent: u.jn.QUEST_HOME_DESKTOP,
  questContentCTA: l.jZ.ACCEPT_QUEST
});
  }, [T]);
  if (Z && A)
return (0, i.jsx)(m, {
  submitting: f,
  onClick: O
});
  let x = null;
  return (v ? v && A ? x = (0, i.jsx)(m, {
submitting: f,
onClick: O
  }) : v && N && !L ? x = (0, i.jsx)(r.Button, {
color: r.ButtonColors.PRIMARY,
disabled: !0,
className: I.button,
children: h.Z.Messages.QUEST_ACCEPTED
  }) : v && !N && (x = (0, i.jsx)(r.Button, {
submitting: C,
color: r.ButtonColors.BRAND,
onClick: R,
className: I.button,
children: h.Z.Messages.QUESTS_ACCEPT
  })) : x = (0, i.jsx)(r.Button, {
color: r.ButtonColors.PRIMARY,
disabled: !0,
className: I.button,
children: h.Z.Messages.QUESTS_ENDED_ON_DATE.format({
  expiryDate: S
})
  }), null == x) ? null : (0, i.jsx)('div', {
className: I.container,
children: x
  });
}