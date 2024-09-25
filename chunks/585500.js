n.d(t, {
    D: function () {
        return g;
    }
});
var r = n(47120);
var i = n(113434),
    a = n(918701),
    o = n(5881),
    s = n(665430),
    l = n(566078),
    u = n(46140),
    c = n(689938);
let d = (0, o.T)({});
function _(e) {
    var t;
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        o = l.r.build(n.config).defaultReward.messages.nameWithArticle,
        s = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        u = (0, a.Kr)(n.config),
        { targetMinutes: d } = r;
    return s
        ? c.Z.Messages.QUEST_REWARD_WITH_EXPIRATION[i ? 'astFormat' : 'format']({
              reward: o,
              duration: u
          })
        : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE[i ? 'astFormat' : 'format']({
              targetMinutes: d,
              rewardNameWithArticle: o,
              duration: u
          });
}
function E(e) {
    var t;
    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: i, withoutMarkdown: o, isEligibleForMobileGA: s } = e,
        u = l.r.build(n.config).defaultReward.messages.nameWithArticle,
        d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        _ = (0, a.Kr)(n.config),
        { targetMinutes: E } = r,
        f = n.config.messages.gameTitle;
    if (null != _)
        return d && !s
            ? c.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD[o ? 'astFormat' : 'format']({
                  gameTitle: f,
                  reward: u,
                  streamingDurationRequirement: E,
                  onClick: i,
                  duration: _
              })
            : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[o ? 'astFormat' : 'format']({
                  gameTitle: f,
                  targetMinutes: E,
                  rewardNameWithArticle: u,
                  duration: _
              });
    return c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[o ? 'astFormat' : 'format']({
        gameTitle: f,
        targetMinutes: E,
        rewardNameWithArticle: u
    });
}
function f(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        o = (0, a.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle;
    return null != o
        ? c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
              gameTitle: u,
              targetMinutes: s,
              rewardNameWithArticle: i,
              duration: o
          })
        : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[r ? 'astFormat' : 'format']({
              gameTitle: u,
              targetMinutes: s,
              rewardNameWithArticle: i
          });
}
function h(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        o = (0, a.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle;
    return null != o
        ? c.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
              gameTitle: u,
              streamingDurationRequirement: s,
              rewardNameWithArticle: i,
              duration: o
          })
        : c.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD[r ? 'astFormat' : 'format']({
              gameTitle: u,
              questReward: i,
              streamingDurationRequirement: s
          });
}
function p(e) {
    let { useV2Variants: t, quest: n, taskDetails: r, withoutMarkdown: i } = e,
        { targetMinutes: a } = r,
        o = n.config.messages.gameTitle;
    return t
        ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2[i ? 'astFormat' : 'format']({
              gameTitle: o,
              streamingDurationRequirement: a
          })
        : c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED[i ? 'astFormat' : 'format']({
              gameTitle: o,
              streamingDurationRequirement: a
          });
}
function m(e) {
    let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: i = !1, connectedConsoleLinkOnClick: o, thirdPartyTaskDetails: s, withoutMarkdown: d } = e,
        m = t.config.messages.gameTitle,
        I = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: T } = n,
        g = (0, a.zK)(t, u.S7.IN_HOUSE_CONSOLE_QUEST),
        S = (0, a.Kr)(t.config),
        A = (0, a.$J)(t) && (0, a.$H)(t);
    if (g && null != S)
        return _({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    if (A)
        return E({
            quest: t,
            taskDetails: n,
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: d,
            isEligibleForMobileGA: r
        });
    if ((0, a.$J)(t))
        return f({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    else if ((0, a.$H)(t))
        return h({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    else if ((0, a.oo)({ quest: t }))
        return p({
            useV2Variants: i,
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    return null != s
        ? s.description
        : null != S
          ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[d ? 'astFormat' : 'format']({
                gameTitle: m,
                streamingDurationRequirement: T,
                questReward: I,
                duration: S
            })
          : i
            ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2[d ? 'astFormat' : 'format']({
                  gameTitle: m,
                  questReward: I,
                  streamingDurationRequirement: T
              })
            : c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD[d ? 'astFormat' : 'format']({
                  gameTitle: m,
                  questReward: I,
                  streamingDurationRequirement: T
              });
}
let I = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += I(n.content);
            return t;
        }
        return I(e.content);
    } catch (e) {
        return d.error('Failed to convert ASTNode to string', e), '';
    }
};
function T(e) {
    let t = m(e);
    return e.withoutMarkdown ? I(t) : t;
}
function g(e) {
    let { quest: t, location: n, questContent: r } = e,
        a = (0, s.pF)({ location: n }),
        o = (0, i.uA)({
            quest: t,
            questContent: r
        });
    return T({
        ...e,
        isEligibleForMobileGA: a,
        connectedConsoleLinkOnClick: o,
        withoutMarkdown: !1
    });
}
