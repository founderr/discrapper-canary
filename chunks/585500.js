n.d(t, {
    D: function () {
        return f;
    }
}),
    n(47120);
var r = n(113434),
    i = n(918701),
    a = n(5881),
    s = n(665430),
    o = n(566078),
    l = n(388032);
let u = (0, a.T)({});
function c(e, t, n) {
    return n ? l.intl.formatToParts(e, t) : l.intl.formatToPlainString(e, t);
}
let d = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += d(n.content);
            return t;
        }
        return d(e.content);
    } catch (e) {
        return u.error('Failed to convert ASTNode to string', e), '';
    }
};
function f(e) {
    let { quest: t, location: n, questContent: a } = e,
        u = (0, s.pF)({ location: n }),
        f = (0, r.uA)({
            quest: t,
            questContent: a
        });
    return (function (e) {
        let t = (function (e) {
            let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: a = !1, connectedConsoleLinkOnClick: s, thirdPartyTaskDetails: u, withoutMarkdown: d } = e,
                f = t.config.messages.gameTitle,
                _ = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                { targetMinutes: p } = n,
                h = (0, i.Kr)(t.config);
            if ((0, i.$J)(t) && (0, i.$H)(t))
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: a, withoutMarkdown: s, isEligibleForMobileGA: u } = e,
                        d = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        _ = (0, i.Kr)(n.config),
                        { targetMinutes: p } = r,
                        h = n.config.messages.gameTitle;
                    return c(
                        null != _ ? (f && !u ? l.t.TZT3Oj : l.t.Ta44ur) : l.t.NIimTk,
                        {
                            gameTitle: h,
                            reward: d,
                            streamingDurationRequirement: p,
                            rewardNameWithArticle: d,
                            targetMinutes: p,
                            onClick: a,
                            duration: _
                        },
                        s
                    );
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
                        { targetMinutes: u } = n,
                        d = t.config.messages.gameTitle;
                    return c(
                        null != s ? l.t.Ta44ur : l.t.NIimTk,
                        {
                            gameTitle: d,
                            targetMinutes: u,
                            rewardNameWithArticle: a,
                            duration: s
                        },
                        r
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            if ((0, i.$H)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: u } = n,
                        d = t.config.messages.gameTitle;
                    return c(
                        null != s ? l.t.AwuMRU : l.t.FZL5Q0,
                        {
                            gameTitle: d,
                            streamingDurationRequirement: u,
                            rewardNameWithArticle: a,
                            duration: s,
                            questReward: a
                        },
                        r
                    );
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
                    return c(
                        t ? l.t['a/ia7O'] : l.t.OVMlGx,
                        {
                            gameTitle: s,
                            streamingDurationRequirement: a
                        },
                        i
                    );
                })({
                    useV2Variants: a,
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            else if ((0, i.q8)(t))
                return (function (e, t) {
                    var n;
                    let r = o.r.build(e.config).defaultReward.messages.nameWithArticle,
                        i = null === (n = e.config.videoMetadata) || void 0 === n ? void 0 : n.messages.videoTitle;
                    return null == i
                        ? c(l.t['g+InPD'], { rewardNameWithArticle: r }, t)
                        : c(
                              l.t.yMsQ7e,
                              {
                                  videoTitle: i,
                                  rewardNameWithArticle: r
                              },
                              t
                          );
                })(t, d);
            else if ((0, i.pO)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        i = n.targetMinutes,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle;
                    return c(
                        l.t.VYwSSk,
                        {
                            streamingDurationRequirement: i,
                            questReward: a
                        },
                        r
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: d
                });
            return null != u
                ? u.description
                : c(
                      null != h ? l.t.BLyDvL : a ? l.t['hkJ+Gh'] : l.t.j9iEPD,
                      {
                          gameTitle: f,
                          streamingDurationRequirement: p,
                          questReward: _,
                          duration: h
                      },
                      d
                  );
        })(e);
        return e.withoutMarkdown ? d(t) : t;
    })({
        ...e,
        isEligibleForMobileGA: u,
        connectedConsoleLinkOnClick: f,
        withoutMarkdown: !1
    });
}
