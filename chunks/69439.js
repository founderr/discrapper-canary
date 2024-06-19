n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(617136),
  r = n(272008),
  o = n(497505),
  c = n(667105),
  u = n(689938),
  d = n(201149);

function E(e) {
  var t, n, E, h;
  let {
    quest: _
  } = e, I = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, m = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (E = _.userStatus) || void 0 === E ? void 0 : E.claimedAt) == null, g = (null === (h = _.userStatus) || void 0 === h ? void 0 : h.claimedAt) != null, p = (0, c.hf)({
    quest: _,
    location: o.jn.QUEST_BAR
  }), T = s.useCallback(() => {
    (0, r.AH)(_.id, {
      questContent: o.jn.QUEST_HOME_DESKTOP,
      questContentCTA: a.jZ.ACCEPT_QUEST
    })
  }, [_]);
  return m ? (0, i.jsx)("div", {
    className: d.container,
    children: (0, i.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: p,
      className: d.button,
      children: u.Z.Messages.QUESTS_CLAIM_REWARD
    })
  }) : I && !g ? (0, i.jsx)("div", {
    className: d.container,
    children: (0, i.jsx)(l.Button, {
      color: l.ButtonColors.PRIMARY,
      disabled: !0,
      className: d.button,
      children: u.Z.Messages.QUEST_ACCEPTED
    })
  }) : (0, i.jsx)("div", {
    className: d.container,
    children: (0, i.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      onClick: T,
      className: d.button,
      children: u.Z.Messages.QUESTS_ACCEPT
    })
  })
}