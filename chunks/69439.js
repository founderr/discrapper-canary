n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(113434),
  l = n(569984),
  o = n(918701),
  c = n(667105),
  d = n(46140),
  u = n(689938),
  _ = n(207637);

function h(e) {
  var t, n, h, E;
  let {
quest: I,
location: m,
contentPosition: g,
rowIndex: p
  } = e, T = (0, r.B6)(I.config.expiresAt, {
month: 'numeric',
day: '2-digit'
  }), {
isClaiming: f,
isEnrolling: S
  } = (0, s.cj)([l.Z], () => ({
isClaiming: l.Z.isClaimingReward(I.id) || l.Z.isFetchingRewardCode(I.id),
isEnrolling: l.Z.isEnrolling(I.id)
  })), C = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, A = N && (null === (h = I.userStatus) || void 0 === h ? void 0 : h.claimedAt) == null, v = (0, o.iQ)(I), Z = !(0, o.zi)(I), L = (0, r._Q)(I), O = (0, o.zK)(I, d.S7.IN_HOUSE_CONSOLE_QUEST), R = (0, o.Xv)(I.config), {
text: x,
onClick: b
  } = (0, c.Ks)({
progressState: L,
quest: I,
isInHouseQuest: O,
location: m,
isCollectibleQuest: R,
questContentPosition: g,
questContentRowIndex: p,
inGiftInventory: !0
  }), P = (null === (E = I.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null, M = null;
  return (v && A ? M = (0, i.jsx)(a.Button, {
color: a.ButtonColors.BRAND,
submitting: f,
onClick: null != b ? b : void 0,
className: _.button,
children: x
  }) : !Z && N ? M = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
className: _.button,
onClick: null != b ? b : void 0,
children: x
  }) : Z ? Z && A ? M = (0, i.jsx)(a.Button, {
color: a.ButtonColors.BRAND,
submitting: f,
onClick: null != b ? b : void 0,
className: _.button,
children: x
  }) : Z && C && !P ? M = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
disabled: !0,
className: _.button,
children: u.Z.Messages.QUEST_ACCEPTED
  }) : Z && !C && (M = (0, i.jsx)(a.Button, {
submitting: S,
color: a.ButtonColors.BRAND,
onClick: null != b ? b : void 0,
className: _.button,
children: x
  })) : M = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
disabled: !0,
className: _.button,
children: u.Z.Messages.QUESTS_ENDED_ON_DATE.format({
  expiryDate: T
})
  }), null == M) ? null : (0, i.jsx)('div', {
className: _.container,
children: M
  });
}