n.d(t, {
    Z: function () {
        return T;
    }
});
var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(566078),
    x = n(472144),
    C = n(644646),
    _ = n(69439),
    g = n(46140),
    f = n(642145),
    h = n(689938),
    E = n(684688);
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function T(e) {
    var t, n, r;
    let { quest: T, questContent: v, isHovering: N, contentPosition: j, rowIndex: A, onReceiveErrorHints: b } = e,
        B = m.r.build(T.config),
        R = B.defaultReward.messages.name,
        y = B.defaultReward.messages.nameWithArticle,
        I = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: M, scrollHeight: O } = (0, d.Z)(),
        w = 104 !== O,
        { expansionSpring: k } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: {
                ...f.Y,
                clamp: !0
            }
        }),
        P = (null === (n = T.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        L = (null === (r = T.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        { completedRatio: U, completedRatioDisplay: q } = (0, p.I)(T),
        Z = (0, p.Bd)(T),
        Q = s.useCallback(
            (e) =>
                (0, o.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: E.header,
                    children: e
                }),
            []
        ),
        D = s.useMemo(() => (L ? Q(R) : h.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({ rewardWithArticleHook: () => Q(y) })), [R, y, L, Q]),
        W = s.useMemo(() => {
            if (null != Z)
                return (0, o.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(E.description),
                    children: Z
                });
        }, [Z]),
        H = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, o.jsxs)('div', {
        className: a()(E.container),
        children: [
            (0, o.jsxs)(l.animated.div, {
                style: {
                    maxHeight: k.to([0, 1], [104, (null != O ? O : 0) + 12])
                },
                className: a()(E.rewardDescriptionContainer),
                children: [
                    (0, o.jsxs)('div', {
                        className: E.assetWrapper,
                        children: [
                            !L && P && (0, o.jsx)('div', { className: E.completionAnimation }),
                            I && !L
                                ? (0, o.jsxs)('div', {
                                      className: E.progressWrapper,
                                      children: [
                                          P &&
                                              (0, o.jsx)(c.LottieAnimation, {
                                                  importData: S,
                                                  className: E.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !H
                                              }),
                                          (0, o.jsx)(x.Z, {
                                              quest: T,
                                              size: 76,
                                              percentComplete: U,
                                              percentCompleteText: N ? q : void 0,
                                              children: (0, o.jsx)('div', {
                                                  className: E.circularRewardTileWrapper,
                                                  children: (0, o.jsx)(C.Z, {
                                                      quest: T,
                                                      questContent: v,
                                                      className: E.circularQuestRewardTileAsset,
                                                      location: g.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, o.jsx)(C.Z, {
                                      quest: T,
                                      autoplay: N,
                                      questContent: v,
                                      className: E.questRewardTileAsset,
                                      location: g.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        ref: M,
                        className: a()(E.textContainer, { [E.justifyCenter]: !w }),
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: E.questName,
                                children: h.Z.Messages.QUEST.format({ questName: T.config.messages.questName })
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.header,
                                children: D
                            }),
                            W
                        ]
                    }),
                    w &&
                        (0, o.jsx)(l.animated.div, {
                            style: {
                                opacity: k.to([0, 1], [1, 0])
                            },
                            className: E.textOverflowBlur
                        })
                ]
            }),
            (0, o.jsx)(_.Z, {
                quest: T,
                location: v,
                contentPosition: j,
                rowIndex: A,
                onReceiveErrorHints: b
            })
        ]
    });
}
