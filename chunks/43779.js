n.d(t, {
    Z: function () {
        return A;
    }
});
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(56217),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    _ = n(607070),
    u = n(113434),
    E = n(566078),
    T = n(472144),
    I = n(644646),
    R = n(69439),
    m = n(46140),
    g = n(642145),
    N = n(689938),
    C = n(684688);
let p = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function A(e) {
    var t, n, r;
    let { quest: A, questContent: f, isHovering: h, contentPosition: S, rowIndex: M, onReceiveErrorHints: x } = e,
        b = E.r.build(A.config),
        O = b.defaultReward.messages.name,
        v = b.defaultReward.messages.nameWithArticle,
        P = (null === (t = A.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: L, scrollHeight: Z } = (0, d.Z)(),
        D = 104 !== Z,
        { expansionSpring: U } = (0, c.useSpring)({
            expansionSpring: h ? 1 : 0,
            config: {
                ...g.Y,
                clamp: !0
            }
        }),
        B = (null === (n = A.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        j = (null === (r = A.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        { completedRatio: G, completedRatioDisplay: w } = (0, u.I)(A),
        y = (0, u.Bd)(A),
        H = a.useCallback(
            (e) =>
                (0, s.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: C.header,
                    children: e
                }),
            []
        ),
        k = a.useMemo(() => (j ? H(O) : N.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({ rewardWithArticleHook: () => H(v) })), [O, v, j, H]),
        F = a.useMemo(() => {
            if (null != y)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: i()(C.description),
                    children: y
                });
        }, [y]),
        V = (0, o.e7)([_.Z], () => _.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: i()(C.container),
        children: [
            (0, s.jsxs)(l.animated.div, {
                style: {
                    maxHeight: U.to([0, 1], [104, (null != Z ? Z : 0) + 12])
                },
                className: i()(C.rewardDescriptionContainer),
                children: [
                    (0, s.jsxs)('div', {
                        className: C.assetWrapper,
                        children: [
                            !j && B && (0, s.jsx)('div', { className: C.completionAnimation }),
                            P && !j
                                ? (0, s.jsxs)('div', {
                                      className: C.progressWrapper,
                                      children: [
                                          B &&
                                              (0, s.jsx)(c.LottieAnimation, {
                                                  importData: p,
                                                  className: C.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !V
                                              }),
                                          (0, s.jsx)(T.Z, {
                                              quest: A,
                                              size: 76,
                                              percentComplete: G,
                                              percentCompleteText: h ? w : void 0,
                                              children: (0, s.jsx)('div', {
                                                  className: C.circularRewardTileWrapper,
                                                  children: (0, s.jsx)(I.Z, {
                                                      quest: A,
                                                      questContent: f,
                                                      className: C.circularQuestRewardTileAsset,
                                                      location: m.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, s.jsx)(I.Z, {
                                      quest: A,
                                      autoplay: h,
                                      questContent: f,
                                      className: C.questRewardTileAsset,
                                      location: m.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        ref: L,
                        className: i()(C.textContainer, { [C.justifyCenter]: !D }),
                        children: [
                            (0, s.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: C.questName,
                                children: N.Z.Messages.QUEST.format({ questName: A.config.messages.questName })
                            }),
                            (0, s.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: C.header,
                                children: k
                            }),
                            F
                        ]
                    }),
                    D &&
                        (0, s.jsx)(l.animated.div, {
                            style: {
                                opacity: U.to([0, 1], [1, 0])
                            },
                            className: C.textOverflowBlur
                        })
                ]
            }),
            (0, s.jsx)(R.Z, {
                quest: A,
                location: f,
                contentPosition: S,
                rowIndex: M,
                onReceiveErrorHints: x
            })
        ]
    });
}
