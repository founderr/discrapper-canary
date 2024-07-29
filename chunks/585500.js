n.d(t, {
  D: function() {
return u;
  }
});
var s = n(113434),
  a = n(918701),
  o = n(566078),
  i = n(46140),
  r = n(689938);

function u(e) {
  let {
quest: t,
taskDetails: n,
location: u,
questContent: l,
useV2Variants: c = !1,
thirdPartyTaskDetails: d
  } = e, _ = t.config.messages.gameTitle, T = o.r.build(t.config).defaultReward.messages.nameWithArticle, {
targetMinutes: E
  } = n, m = (0, a.zK)(t, i.S7.IN_HOUSE_CONSOLE_QUEST), I = (0, a.Kr)(t.config), R = (0, a.$J)(t) && (0, a.$H)(t), g = (0, s.uA)({
quest: t,
location: u,
questContent: l
  });
  if (m && null != I)
return function(e, t) {
  var n;
  let s = o.r.build(e.config).defaultReward.messages.nameWithArticle,
    i = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
    u = (0, a.Kr)(e.config),
    {
      targetMinutes: l
    } = t;
  return i ? r.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
    reward: s,
    duration: u
  }) : r.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
    targetMinutes: l,
    rewardNameWithArticle: s,
    duration: u
  });
}(t, n);
  if (R)
return function(e) {
  var t;
  let {
    quest: n,
    taskDetails: s,
    connectedConsoleLinkOnClick: i
  } = e, u = o.r.build(n.config).defaultReward.messages.nameWithArticle, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, c = (0, a.Kr)(n.config), {
    targetMinutes: d
  } = s, _ = n.config.messages.gameTitle;
  if (null != c)
    return l ? r.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
      gameTitle: _,
      reward: u,
      streamingDurationRequirement: d,
      onClick: i,
      duration: c
    }) : r.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
      gameTitle: _,
      targetMinutes: d,
      rewardNameWithArticle: u,
      duration: c
    });
  return r.Z.Messages.QUEST_REWARD_MULTIPLATFORM.format({
    gameTitle: _,
    streamingDurationRequirement: d,
    reward: u,
    onClick: i
  });
}({
  quest: t,
  taskDetails: n,
  connectedConsoleLinkOnClick: g
});
  if ((0, a.$J)(t))
return function(e, t) {
  let n = o.r.build(e.config).defaultReward.messages.nameWithArticle,
    s = (0, a.Kr)(e.config),
    {
      targetMinutes: i
    } = t,
    u = e.config.messages.gameTitle;
  return null != s ? r.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: u,
    targetMinutes: i,
    rewardNameWithArticle: n,
    duration: s
  }) : r.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
    gameTitle: u,
    targetMinutes: i,
    rewardNameWithArticle: n
  });
}(t, n);
  else if ((0, a.$H)(t))
return function(e, t) {
  let n = o.r.build(e.config).defaultReward.messages.nameWithArticle,
    s = (0, a.Kr)(e.config),
    {
      targetMinutes: i
    } = t,
    u = e.config.messages.gameTitle;
  return null != s ? r.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
    gameTitle: u,
    streamingDurationRequirement: i,
    rewardNameWithArticle: n,
    duration: s
  }) : r.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
    gameTitle: u,
    questReward: n,
    streamingDurationRequirement: i
  });
}(t, n);
  else if ((0, a.oo)({
  quest: t
}))
return function(e, t, n) {
  let {
    targetMinutes: s
  } = n, a = t.config.messages.gameTitle;
  return e ? r.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2.format({
    gameTitle: a,
    streamingDurationRequirement: s
  }) : r.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
    gameTitle: a,
    streamingDurationRequirement: s
  });
}(c, t, n);
  return null != d ? d.description : null != I ? r.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
gameTitle: _,
streamingDurationRequirement: E,
questReward: T,
duration: I
  }) : c ? r.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2.format({
gameTitle: _,
questReward: T,
streamingDurationRequirement: E
  }) : r.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
gameTitle: _,
questReward: T,
streamingDurationRequirement: E
  });
}