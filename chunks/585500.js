n.d(t, {
    D: function () {
        return _;
    }
}),
    n(47120);
var r = n(113434),
    i = n(918701),
    a = n(5881),
    s = n(665430),
    o = n(566078),
    l = n(46140),
    u = n(689938);
let c = (0, a.T)({}),
    d = (e) => {
        try {
            let t = '';
            if ('string' == typeof e) return e;
            if (Array.isArray(e)) {
                for (let n of e) t += d(n.content);
                return t;
            }
            return d(e.content);
        } catch (e) {
            return c.error('Failed to convert ASTNode to string', e), '';
        }
    };
function _(e) {
    let { quest: t, location: n, questContent: a } = e,
        c = (0, s.pF)({ location: n }),
        _ = (0, r.uA)({
            quest: t,
            questContent: a
        });
    return (function (e) {
        let t = (function (e) {
            let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: a = !1, connectedConsoleLinkOnClick: s, thirdPartyTaskDetails: c, withoutMarkdown: d } = e,
                _ = t.config.messages.gameTitle,
                E = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                { targetMinutes: f } = n,
                h = (0, i.zK)(t, l.S7.IN_HOUSE_CONSOLE_QUEST),
                p = (0, i.Kr)(t.config),
                I = (0, i.$J)(t) && (0, i.$H)(t);
            if (h && null != p)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, withoutMarkdown: a } = e,
                        s = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        c = (0, i.Kr)(n.config),
                        { targetMinutes: d } = r;
                    return l
                        ? u.Z.Messages.QUEST_REWARD_WITH_EXPIRATION[a ? 'astFormat' : 'format']({
                              reward: s,
                              duration: c
                          })
                        : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE[a ? 'astFormat' : 'format']({
                              targetMinutes: d,
                              rewardNameWithArticle: s,
                              duration: c
                          });
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            if (I)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: a, withoutMarkdown: s, isEligibleForMobileGA: l } = e,
                        c = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        _ = (0, i.Kr)(n.config),
                        { targetMinutes: E } = r,
                        f = n.config.messages.gameTitle;
                    if (null != _)
                        return d && !l
                            ? u.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
                                  gameTitle: f,
                                  reward: c,
                                  streamingDurationRequirement: E,
                                  onClick: a,
                                  duration: _
                              })
                            : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[s ? 'astFormat' : 'format']({
                                  gameTitle: f,
                                  targetMinutes: E,
                                  rewardNameWithArticle: c,
                                  duration: _
                              });
                    return u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[s ? 'astFormat' : 'format']({
                        gameTitle: f,
                        targetMinutes: E,
                        rewardNameWithArticle: c
                    });
                })({
                    quest: t,
                    taskDetails: n,
                    connectedConsoleLinkOnClick: s,
                    withoutMarkdown: d,
                    isEligibleForMobileGA: r
                });
            if ((0, i.$J)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: l } = n,
                        c = t.config.messages.gameTitle;
                    return null != s
                        ? u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
                              gameTitle: c,
                              targetMinutes: l,
                              rewardNameWithArticle: a,
                              duration: s
                          })
                        : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME[r ? 'astFormat' : 'format']({
                              gameTitle: c,
                              targetMinutes: l,
                              rewardNameWithArticle: a
                          });
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            else if ((0, i.$H)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: l } = n,
                        c = t.config.messages.gameTitle;
                    return null != s
                        ? u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[r ? 'astFormat' : 'format']({
                              gameTitle: c,
                              streamingDurationRequirement: l,
                              rewardNameWithArticle: a,
                              duration: s
                          })
                        : u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD[r ? 'astFormat' : 'format']({
                              gameTitle: c,
                              questReward: a,
                              streamingDurationRequirement: l
                          });
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            else if ((0, i.oo)({ quest: t }))
                return (function (e) {
                    let { useV2Variants: t, quest: n, taskDetails: r, withoutMarkdown: i } = e,
                        { targetMinutes: a } = r,
                        s = n.config.messages.gameTitle;
                    return t
                        ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2[i ? 'astFormat' : 'format']({
                              gameTitle: s,
                              streamingDurationRequirement: a
                          })
                        : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED[i ? 'astFormat' : 'format']({
                              gameTitle: s,
                              streamingDurationRequirement: a
                          });
                })({
                    useV2Variants: a,
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            return null != c
                ? c.description
                : null != p
                  ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD[d ? 'astFormat' : 'format']({
                        gameTitle: _,
                        streamingDurationRequirement: f,
                        questReward: E,
                        duration: p
                    })
                  : a
                    ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2[d ? 'astFormat' : 'format']({
                          gameTitle: _,
                          questReward: E,
                          streamingDurationRequirement: f
                      })
                    : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD[d ? 'astFormat' : 'format']({
                          gameTitle: _,
                          questReward: E,
                          streamingDurationRequirement: f
                      });
        })(e);
        return e.withoutMarkdown ? d(t) : t;
    })({
        ...e,
        isEligibleForMobileGA: c,
        connectedConsoleLinkOnClick: _,
        withoutMarkdown: !1
    });
}
