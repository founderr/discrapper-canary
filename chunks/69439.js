n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(617136),
  l = n(272008),
  o = n(497505),
  c = n(918701),
  d = n(667105),
  u = n(689938),
  _ = n(207637);

function E(e) {
  let {
onClick: t
  } = e;
  return (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(s.Button, {
  color: s.ButtonColors.BRAND,
  onClick: t,
  className: _.button,
  children: u.Z.Messages.QUESTS_CLAIM_REWARD
})
  });
}

function h(e) {
  var t, n, h, I;
  let {
quest: m
  } = e, g = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (h = m.userStatus) || void 0 === h ? void 0 : h.claimedAt) == null, T = (0, c.iQ)(m), f = !(0, c.zi)(m), S = (null === (I = m.userStatus) || void 0 === I ? void 0 : I.claimedAt) != null, C = (0, d.hf)({
quest: m,
location: o.jn.QUEST_BAR
  }), N = a.useCallback(() => {
(0, l.AH)(m.id, {
  questContent: o.jn.QUEST_HOME_DESKTOP,
  questContentCTA: r.jZ.ACCEPT_QUEST
});
  }, [m]);
  return T && p || f && p ? (0, i.jsx)(E, {
onClick: C
  }) : f && g && !S ? (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(s.Button, {
  color: s.ButtonColors.PRIMARY,
  disabled: !0,
  className: _.button,
  children: u.Z.Messages.QUEST_ACCEPTED
})
  }) : f && !g ? (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(s.Button, {
  color: s.ButtonColors.BRAND,
  onClick: N,
  className: _.button,
  children: u.Z.Messages.QUESTS_ACCEPT
})
  }) : null;
}