n.d(t, {
  Z: function() {
return E;
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
  _ = n(839062);

function E(e) {
  var t, n, E, h;
  let {
quest: I,
location: m,
questContentPosition: g
  } = e, p = (0, r.B6)(I.config.expiresAt, {
month: 'numeric',
day: '2-digit'
  }), {
isClaiming: T,
isEnrolling: f
  } = (0, s.cj)([l.Z], () => ({
isClaiming: l.Z.isClaimingReward(I.id) || l.Z.isFetchingRewardCode(I.id),
isEnrolling: l.Z.isEnrolling(I.id)
  })), S = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, C = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, N = C && (null === (E = I.userStatus) || void 0 === E ? void 0 : E.claimedAt) == null, A = (0, o.iQ)(I), v = !(0, o.zi)(I), Z = (0, r._Q)(I), L = (0, o.zK)(I, d.S7.IN_HOUSE_CONSOLE_QUEST), O = (0, o.Xv)(I.config), {
text: R,
onClick: x
  } = (0, c.Ks)({
progressState: Z,
quest: I,
isInHouseQuest: L,
location: m,
isCollectibleQuest: O,
questContentPosition: g,
inGiftInventory: !0
  }), b = (null === (h = I.userStatus) || void 0 === h ? void 0 : h.claimedAt) != null, P = null;
  return (A && N ? P = (0, i.jsx)(a.Button, {
color: a.ButtonColors.BRAND,
submitting: T,
onClick: null != x ? x : void 0,
className: _.button,
children: R
  }) : !v && C ? P = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
className: _.button,
onClick: null != x ? x : void 0,
children: R
  }) : v ? v && N ? P = (0, i.jsx)(a.Button, {
color: a.ButtonColors.BRAND,
submitting: T,
onClick: null != x ? x : void 0,
className: _.button,
children: R
  }) : v && S && !b ? P = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
disabled: !0,
className: _.button,
children: u.Z.Messages.QUEST_ACCEPTED
  }) : v && !S && (P = (0, i.jsx)(a.Button, {
submitting: f,
color: a.ButtonColors.BRAND,
onClick: null != x ? x : void 0,
className: _.button,
children: R
  })) : P = (0, i.jsx)(a.Button, {
color: a.ButtonColors.PRIMARY,
disabled: !0,
className: _.button,
children: u.Z.Messages.QUESTS_ENDED_ON_DATE.format({
  expiryDate: p
})
  }), null == P) ? null : (0, i.jsx)('div', {
className: _.container,
children: P
  });
}