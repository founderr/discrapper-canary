n.d(t, {
    EK: function () {
        return h;
    },
    GX: function () {
        return E;
    },
    eQ: function () {
        return g;
    },
    vf: function () {
        return f;
    }
}),
    n(47120);
var o = n(470079),
    s = n(442837),
    r = n(481060),
    a = n(410030),
    l = n(706454),
    i = n(930153),
    c = n(113434),
    d = n(497505),
    u = n(918701),
    p = n(665430),
    m = n(585500),
    x = n(566078),
    _ = n(46140),
    C = n(689938);
function g(e) {
    var t, n;
    let o = (0, s.e7)([l.default], () => l.default.locale),
        r = (0, c.Rf)(e),
        [a] = (0, c.me)(e, r),
        m = (0, p.pF)({ location: _.dr.QUESTS_BAR });
    if ((null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return C.Z.Messages.QUESTS_COMPLETION_COMPLETE;
    if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && r.percentComplete > 0) {
        let e = (0, i.T3)(o, r.percentComplete, { roundingMode: 'floor' });
        return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({ percent: e });
    }
    return m && a === d.LI.SELECT ? C.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER : (0, u.$J)(e) ? C.Z.Messages.QUEST_BAR_TITLE_START_PLAYING : C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
}
function f(e, t, n) {
    var o;
    let s = (0, c.B6)(x.r.build(e.config).rewardsExpireAt),
        r = (0, c.Rf)(e),
        a = (null === (o = e.userStatus) || void 0 === o ? void 0 : o.completedAt) != null,
        l = (0, c.z)(e),
        i = (0, m.D)({
            quest: e,
            location: _.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: r,
            useV2Variants: !0
        });
    if (a) return C.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: s });
    if (t) return n === d.LI.SELECT ? C.Z.Messages.QUEST_MULTIPLATFORM_SELECT_FUN_SUBTITLE : i;
    if (r.percentComplete > 0)
        return l
            ? (0, u.AV)({
                  quest: e,
                  taskDetails: r
              })
            : C.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
    return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
}
function E() {
    let [{ spring: e }, t] = (0, r.useSpring)(() => ({ spring: 0 }), 'animate-always');
    return {
        completionSpring: e,
        startCompletionAnimation: o.useCallback(() => {
            t({ spring: 1 }),
                t({
                    spring: 0,
                    delay: 2000
                });
        }, [t])
    };
}
function h(e, t) {
    var n;
    let o = (0, c.z)(e),
        s = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
        r = 'var(--green-330)',
        l = ['var(--background-tertiary)', 'var(--interactive-normal)'],
        i = t ? l[s] : ['#828288', '#CBCDD4'][s];
    return {
        backgroundTop: i,
        backgroundBottom: t ? l[s] : ['#535356', '#8B8C95'][s],
        foreground: r,
        glow: t && o ? r : '#C4C1D66E'
    };
}
