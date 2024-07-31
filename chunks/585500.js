n.d(t, {
  D: function() {
return d;
  }
}), n(47120);
var s = n(113434),
  r = n(918701),
  a = n(5881),
  o = n(566078),
  i = n(46140),
  u = n(689938);
let l = (0, a.T)({}),
  c = e => {
try {
  let t = '';
  if ('string' == typeof e)
    return e;
  if (Array.isArray(e)) {
    for (let n of e)
      t += c(n.content);
    return t;
  }
  return c(e.content);
} catch (e) {
  return l.error('Failed to convert ASTNode to string', e), '';
}
  };

function d(e) {
  let {
quest: t,
location: n,
questContent: a
  } = e, l = (0, s.uA)({
quest: t,
location: n,
questContent: a
  });
  return function(e) {
let t = function(e) {
  let {
    quest: t,
    taskDetails: n,
    useV2Variants: s = !1,
    connectedConsoleLinkOnClick: a,
    thirdPartyTaskDetails: l,
    withoutMarkdown: c
  } = e, d = t.config.messages.gameTitle, m = o.r.build(t.config).defaultReward.messages.nameWithArticle, {
    targetMinutes: _
  } = n, T = (0, r.zK)(t, i.S7.IN_HOUSE_CONSOLE_QUEST), E = (0, r.Kr)(t.config), I = (0, r.$J)(t) && (0, r.$H)(t);
  if (T && null != E)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: s,
        withoutMarkdown: a
      } = e, i = o.r.build(n.config).defaultReward.messages.nameWithArticle, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, c = (0, r.Kr)(n.config), {
        targetMinutes: d
      } = s;
      return l ? u.Z.Messages.QUEST_REWARD_WITH_EXPIRATION[a ? 'astFormat' : 'format']({
        reward: i,
        duration: c
      }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE[a ? 'astFormat' : 'format']({
        targetMinutes: d,
        rewardNameWithArticle: i,
        duration: c
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  if (I)
    return function(e) {
      var t;
      let {
        quest: n,
        taskDetails: s,
        connectedConsoleLinkOnClick: a,
        withoutMarkdown: i
      } = e, l = o.r.build(n.config).defaultReward.messages.nameWithArticle, c = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, d = (0, r.Kr)(n.config), {
        targetMinutes: m
      } = s, _ = n.config.messages.gameTitle;
      if (null != d)
        return c ? u.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD[i ? 'astFormat' : 'format']({
          gameTitle: _,
          reward: l,
          streamingDurationRequirement: m,
          onClick: a,
          duration: d
        }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[i ? 'astFormat' : 'format']({
          gameTitle: _,
          targetMinutes: m,
          rewardNameWithArticle: l,
          duration: d
        });
      return u.Z.Messages.QUEST_REWARD_MULTIPLATFORM[i ? 'astFormat' : 'format']({
        gameTitle: _,
        streamingDurationRequirement: m,
        reward: l,
        onClick: a
      });
    }({
      quest: t,
      taskDetails: n,
      connectedConsoleLinkOnClick: a,
      withoutMarkdown: c
    });
  if ((0, r.$J)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: s
      } = e, a = o.r.build(t.config).defaultReward.messages.nameWithArticle, i = (0, r.Kr)(t.config), {
        targetMinutes: l
      } = n, c = t.config.messages.gameTitle;
      return null != i ? u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: l,
        rewardNameWithArticle: a,
        duration: i
      }) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[s ? 'astFormat' : 'format']({
        gameTitle: c,
        targetMinutes: l,
        rewardNameWithArticle: a
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  else if ((0, r.$H)(t))
    return function(e) {
      let {
        quest: t,
        taskDetails: n,
        withoutMarkdown: s
      } = e, a = o.r.build(t.config).defaultReward.messages.nameWithArticle, i = (0, r.Kr)(t.config), {
        targetMinutes: l
      } = n, c = t.config.messages.gameTitle;
      return null != i ? u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
        gameTitle: c,
        streamingDurationRequirement: l,
        rewardNameWithArticle: a,
        duration: i
      }) : u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD[s ? 'astFormat' : 'format']({
        gameTitle: c,
        questReward: a,
        streamingDurationRequirement: l
      });
    }({
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  else if ((0, r.oo)({
      quest: t
    }))
    return function(e) {
      let {
        useV2Variants: t,
        quest: n,
        taskDetails: s,
        withoutMarkdown: r
      } = e, {
        targetMinutes: a
      } = s, o = n.config.messages.gameTitle;
      return t ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2[r ? 'astFormat' : 'format']({
        gameTitle: o,
        streamingDurationRequirement: a
      }) : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED[r ? 'astFormat' : 'format']({
        gameTitle: o,
        streamingDurationRequirement: a
      });
    }({
      useV2Variants: s,
      quest: t,
      taskDetails: n,
      withoutMarkdown: c
    });
  return null != l ? l.description : null != E ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[c ? 'astFormat' : 'format']({
    gameTitle: d,
    streamingDurationRequirement: _,
    questReward: m,
    duration: E
  }) : s ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2[c ? 'astFormat' : 'format']({
    gameTitle: d,
    questReward: m,
    streamingDurationRequirement: _
  }) : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD[c ? 'astFormat' : 'format']({
    gameTitle: d,
    questReward: m,
    streamingDurationRequirement: _
  });
}(e);
return e.withoutMarkdown ? c(t) : t;
  }({
...e,
connectedConsoleLinkOnClick: l,
withoutMarkdown: !1
  });
}