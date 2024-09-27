n.d(t, {
    D: function () {
        return S;
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
function _(e, t, n) {
    return n ? e.astFormat(t) : e.format(t);
}
function E(e) {
    var t;
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        o = l.r.build(n.config).defaultReward.messages.nameWithArticle,
        s = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        u = (0, a.Kr)(n.config),
        { targetMinutes: d } = r;
    return _(
        s ? c.Z.Messages.QUEST_REWARD_WITH_EXPIRATION : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE,
        {
            targetMinutes: d,
            rewardNameWithArticle: o,
            reward: o,
            duration: u
        },
        i
    );
}
function f(e) {
    var t;
    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: i, withoutMarkdown: o, isEligibleForMobileGA: s } = e,
        u = l.r.build(n.config).defaultReward.messages.nameWithArticle,
        d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        E = (0, a.Kr)(n.config),
        { targetMinutes: f } = r,
        h = n.config.messages.gameTitle;
    return _(
        null != E ? (d && !s ? c.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD) : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME,
        {
            gameTitle: h,
            reward: u,
            streamingDurationRequirement: f,
            rewardNameWithArticle: u,
            targetMinutes: f,
            onClick: i,
            duration: E
        },
        o
    );
}
function h(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        o = (0, a.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle;
    return _(
        null != o ? c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD : c.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME,
        {
            gameTitle: u,
            targetMinutes: s,
            rewardNameWithArticle: i,
            duration: o
        },
        r
    );
}
function p(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        o = (0, a.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle;
    return _(
        null != o ? c.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD : c.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD,
        {
            gameTitle: u,
            streamingDurationRequirement: s,
            rewardNameWithArticle: i,
            duration: o,
            questReward: i
        },
        r
    );
}
function m(e) {
    let { useV2Variants: t, quest: n, taskDetails: r, withoutMarkdown: i } = e,
        { targetMinutes: a } = r,
        o = n.config.messages.gameTitle;
    return _(
        t ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED,
        {
            gameTitle: o,
            streamingDurationRequirement: a
        },
        i
    );
}
function I(e) {
    let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: i = !1, connectedConsoleLinkOnClick: o, thirdPartyTaskDetails: s, withoutMarkdown: d } = e,
        I = t.config.messages.gameTitle,
        T = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: g } = n,
        S = (0, a.zK)(t, u.S7.IN_HOUSE_CONSOLE_QUEST),
        A = (0, a.Kr)(t.config),
        v = (0, a.$J)(t) && (0, a.$H)(t);
    if (S && null != A)
        return E({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    if (v)
        return f({
            quest: t,
            taskDetails: n,
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: d,
            isEligibleForMobileGA: r
        });
    if ((0, a.$J)(t))
        return h({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    else if ((0, a.$H)(t))
        return p({
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    else if ((0, a.oo)({ quest: t }))
        return m({
            useV2Variants: i,
            quest: t,
            taskDetails: n,
            withoutMarkdown: d
        });
    return null != s
        ? s.description
        : _(
              null != A ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD : i ? c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : c.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD,
              {
                  gameTitle: I,
                  streamingDurationRequirement: g,
                  questReward: T,
                  duration: A
              },
              d
          );
}
let T = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += T(n.content);
            return t;
        }
        return T(e.content);
    } catch (e) {
        return d.error('Failed to convert ASTNode to string', e), '';
    }
};
function g(e) {
    let t = I(e);
    return e.withoutMarkdown ? T(t) : t;
}
function S(e) {
    let { quest: t, location: n, questContent: r } = e,
        a = (0, s.pF)({ location: n }),
        o = (0, i.uA)({
            quest: t,
            questContent: r
        });
    return g({
        ...e,
        isEligibleForMobileGA: a,
        connectedConsoleLinkOnClick: o,
        withoutMarkdown: !1
    });
}
