n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(56217),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    _ = n(113434),
    E = n(566078),
    h = n(472144),
    m = n(644646),
    I = n(69439),
    g = n(46140),
    p = n(642145),
    T = n(689938),
    S = n(684688);
let C = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function f(e) {
    var t, n, s;
    let { quest: f, questContent: N, isHovering: A, contentPosition: v, rowIndex: L, onReceiveErrorHints: Z } = e,
        R = E.r.build(f.config),
        O = R.defaultReward.messages.name,
        x = R.defaultReward.messages.nameWithArticle,
        b = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: P, scrollHeight: M } = (0, d.Z)(),
        D = 104 !== M,
        { expansionSpring: y } = (0, c.useSpring)({
            expansionSpring: A ? 1 : 0,
            config: {
                ...p.Y,
                clamp: !0
            }
        }),
        j = (null === (n = f.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = (null === (s = f.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: G, completedRatioDisplay: w } = (0, _.I)(f),
        k = (0, _.Bd)(f),
        B = a.useCallback(
            (e) =>
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: S.header,
                    children: e
                }),
            []
        ),
        H = a.useMemo(() => (U ? B(O) : T.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({ rewardWithArticleHook: () => B(x) })), [O, x, U, B]),
        V = a.useMemo(() => {
            if (null != k)
                return (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: r()(S.description),
                    children: k
                });
        }, [k]),
        F = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: r()(S.container),
        children: [
            (0, i.jsxs)(l.animated.div, {
                style: {
                    maxHeight: y.to([0, 1], [104, (null != M ? M : 0) + 12])
                },
                className: r()(S.rewardDescriptionContainer),
                children: [
                    (0, i.jsxs)('div', {
                        className: S.assetWrapper,
                        children: [
                            !U && j && (0, i.jsx)('div', { className: S.completionAnimation }),
                            b && !U
                                ? (0, i.jsxs)('div', {
                                      className: S.progressWrapper,
                                      children: [
                                          j &&
                                              (0, i.jsx)(c.LottieAnimation, {
                                                  importData: C,
                                                  className: S.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !F
                                              }),
                                          (0, i.jsx)(h.Z, {
                                              quest: f,
                                              size: 76,
                                              percentComplete: G,
                                              percentCompleteText: A ? w : void 0,
                                              children: (0, i.jsx)('div', {
                                                  className: S.circularRewardTileWrapper,
                                                  children: (0, i.jsx)(m.Z, {
                                                      quest: f,
                                                      questContent: N,
                                                      className: S.circularQuestRewardTileAsset,
                                                      location: g.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(m.Z, {
                                      quest: f,
                                      autoplay: A,
                                      questContent: N,
                                      className: S.questRewardTileAsset,
                                      location: g.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        ref: P,
                        className: r()(S.textContainer, { [S.justifyCenter]: !D }),
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: S.questName,
                                children: T.Z.Messages.QUEST.format({ questName: f.config.messages.questName })
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: S.header,
                                children: H
                            }),
                            V
                        ]
                    }),
                    D &&
                        (0, i.jsx)(l.animated.div, {
                            style: {
                                opacity: y.to([0, 1], [1, 0])
                            },
                            className: S.textOverflowBlur
                        })
                ]
            }),
            (0, i.jsx)(I.Z, {
                quest: f,
                location: N,
                contentPosition: v,
                rowIndex: L,
                onReceiveErrorHints: Z
            })
        ]
    });
}
