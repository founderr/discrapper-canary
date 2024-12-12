r.d(n, {
    D: function () {
        return b;
    }
});
var i = r(47120);
var a = r(113434),
    s = r(918701),
    o = r(5881),
    l = r(665430),
    u = r(566078),
    c = r(388032);
let d = (0, o.T)({});
function f(e, n, r) {
    return r ? c.intl.formatToParts(e, n) : c.intl.formatToPlainString(e, n);
}
function _(e) {
    var n;
    let { quest: r, taskDetails: i, connectedConsoleLinkOnClick: a, withoutMarkdown: o, isEligibleForMobileGA: l } = e,
        d = u.r.build(r.config).defaultReward.messages.nameWithArticle,
        _ = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        h = (0, s.Kr)(r.config),
        { targetMinutes: p } = i,
        m = r.config.messages.gameTitle;
    return f(
        null != h ? (_ && !l ? c.t.TZT3Oj : c.t.Ta44ur) : c.t.NIimTk,
        {
            gameTitle: m,
            reward: d,
            streamingDurationRequirement: p,
            rewardNameWithArticle: d,
            targetMinutes: p,
            onClick: a,
            duration: h
        },
        o
    );
}
function h(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        o = (0, s.Kr)(n.config),
        { targetMinutes: l } = r,
        d = n.config.messages.gameTitle;
    return f(
        null != o ? c.t.Ta44ur : c.t.NIimTk,
        {
            gameTitle: d,
            targetMinutes: l,
            rewardNameWithArticle: a,
            duration: o
        },
        i
    );
}
function p(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        o = (0, s.Kr)(n.config),
        { targetMinutes: l } = r,
        d = n.config.messages.gameTitle;
    return f(
        null != o ? c.t.AwuMRU : c.t.FZL5Q0,
        {
            gameTitle: d,
            streamingDurationRequirement: l,
            rewardNameWithArticle: a,
            duration: o,
            questReward: a
        },
        i
    );
}
function m(e) {
    let { useV2Variants: n, quest: r, taskDetails: i, withoutMarkdown: a } = e,
        { targetMinutes: s } = i,
        o = r.config.messages.gameTitle;
    return f(
        n ? c.t['a/ia7O'] : c.t.OVMlGx,
        {
            gameTitle: o,
            streamingDurationRequirement: s
        },
        a
    );
}
function g(e, n) {
    var r;
    let i = u.r.build(e.config).defaultReward.messages.nameWithArticle,
        a = null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.messages.videoTitle;
    return null == a
        ? f(c.t['g+InPD'], { rewardNameWithArticle: i }, n)
        : f(
              c.t.yMsQ7e,
              {
                  videoTitle: a,
                  rewardNameWithArticle: i
              },
              n
          );
}
function E(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = r.targetMinutes,
        s = u.r.build(n.config).defaultReward.messages.nameWithArticle;
    return f(
        c.t.VYwSSk,
        {
            streamingDurationRequirement: a,
            questReward: s
        },
        i
    );
}
function v(e) {
    let { quest: n, taskDetails: r, isEligibleForMobileGA: i, useV2Variants: a = !1, connectedConsoleLinkOnClick: o, thirdPartyTaskDetails: l, withoutMarkdown: d } = e,
        v = n.config.messages.gameTitle,
        I = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: T } = r,
        b = (0, s.Kr)(n.config);
    if ((0, s.$J)(n) && (0, s.$H)(n))
        return _({
            quest: n,
            taskDetails: r,
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: d,
            isEligibleForMobileGA: i
        });
    if ((0, s.$J)(n))
        return h({
            quest: n,
            taskDetails: r,
            withoutMarkdown: d
        });
    if ((0, s.$H)(n))
        return p({
            quest: n,
            taskDetails: r,
            withoutMarkdown: d
        });
    else if ((0, s.oo)({ quest: n }))
        return m({
            useV2Variants: a,
            quest: n,
            taskDetails: r,
            withoutMarkdown: d
        });
    else if ((0, s.q8)(n)) return g(n, d);
    else if ((0, s.pO)(n))
        return E({
            quest: n,
            taskDetails: r,
            withoutMarkdown: d
        });
    return null != l
        ? l.description
        : f(
              null != b ? c.t.BLyDvL : a ? c.t['hkJ+Gh'] : c.t.j9iEPD,
              {
                  gameTitle: v,
                  streamingDurationRequirement: T,
                  questReward: I,
                  duration: b
              },
              d
          );
}
let I = (e) => {
    try {
        let n = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let r of e) n += I(r.content);
            return n;
        }
        return I(e.content);
    } catch (e) {
        return d.error('Failed to convert ASTNode to string', e), '';
    }
};
function T(e) {
    let n = v(e);
    return e.withoutMarkdown ? I(n) : n;
}
function b(e) {
    let { quest: n, location: r, questContent: i } = e,
        s = (0, l.pF)({ location: r }),
        o = (0, a.uA)({
            quest: n,
            questContent: i
        });
    return T({
        ...e,
        isEligibleForMobileGA: s,
        connectedConsoleLinkOnClick: o,
        withoutMarkdown: !1
    });
}
