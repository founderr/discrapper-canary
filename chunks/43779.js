n.d(t, {
    Z: function () {
        return E;
    }
});
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    p = n(113434),
    m = n(566078),
    x = n(472144),
    g = n(644646),
    f = n(69439),
    h = n(46140),
    C = n(642145),
    v = n(388032),
    j = n(684688);
let _ = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));
function E(e) {
    var t, n, s;
    let { quest: E, questContent: b, isHovering: N, contentPosition: S, rowIndex: T, onReceiveErrorHints: B } = e,
        A = m.r.build(E.config),
        y = A.defaultReward.messages.name,
        R = A.defaultReward.messages.nameWithArticle,
        w = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        { ref: I, scrollHeight: k } = (0, d.Z)(),
        q = 104 !== k,
        { expansionSpring: P } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: {
                ...C.Y,
                clamp: !0
            }
        }),
        O = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        M = (null === (s = E.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        { completedRatio: W, completedRatioDisplay: L } = (0, p.I)(E),
        Q = (0, p.Bd)(E),
        Z = r.useCallback(
            (e) =>
                (0, o.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-normal',
                    tag: 'span',
                    className: j.header,
                    children: e
                }),
            []
        ),
        D = r.useMemo(() => (M ? Z(y) : v.intl.format(v.t['0IUT4e'], { rewardWithArticleHook: () => Z(R) })), [y, R, M, Z]),
        H = r.useMemo(() => {
            if (null != Q)
                return (0, o.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: a()(j.description),
                    children: Q
                });
        }, [Q]),
        U = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, o.jsxs)('div', {
        className: a()(j.container),
        children: [
            (0, o.jsxs)(i.animated.div, {
                style: {
                    maxHeight: P.to([0, 1], [104, (null != k ? k : 0) + 12])
                },
                className: a()(j.rewardDescriptionContainer),
                children: [
                    (0, o.jsxs)('div', {
                        className: j.assetWrapper,
                        children: [
                            !M && O && (0, o.jsx)('div', { className: j.completionAnimation }),
                            w && !M
                                ? (0, o.jsxs)('div', {
                                      className: j.progressWrapper,
                                      children: [
                                          O &&
                                              (0, o.jsx)(c.LottieAnimation, {
                                                  importData: _,
                                                  className: j.confetti,
                                                  loop: !1,
                                                  autoplay: !1,
                                                  shouldAnimate: !U
                                              }),
                                          (0, o.jsx)(x.Z, {
                                              quest: E,
                                              size: 76,
                                              percentComplete: W,
                                              percentCompleteText: N ? L : void 0,
                                              children: (0, o.jsx)('div', {
                                                  className: j.circularRewardTileWrapper,
                                                  children: (0, o.jsx)(g.Z, {
                                                      quest: E,
                                                      questContent: b,
                                                      className: j.circularQuestRewardTileAsset,
                                                      location: h.dr.QUEST_HOME_DESKTOP
                                                  })
                                              })
                                          })
                                      ]
                                  })
                                : (0, o.jsx)(g.Z, {
                                      quest: E,
                                      autoplay: N,
                                      questContent: b,
                                      className: j.questRewardTileAsset,
                                      location: h.dr.QUEST_HOME_DESKTOP
                                  })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        ref: I,
                        className: a()(j.textContainer, { [j.justifyCenter]: !q }),
                        children: [
                            (0, o.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'text-brand',
                                className: j.questName,
                                children: v.intl.format(v.t.EAYZAg, { questName: E.config.messages.questName })
                            }),
                            (0, o.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: j.header,
                                children: D
                            }),
                            H
                        ]
                    }),
                    q &&
                        (0, o.jsx)(i.animated.div, {
                            style: {
                                opacity: P.to([0, 1], [1, 0])
                            },
                            className: j.textOverflowBlur
                        })
                ]
            }),
            (0, o.jsx)(f.Z, {
                quest: E,
                location: b,
                contentPosition: S,
                rowIndex: T,
                onReceiveErrorHints: B
            })
        ]
    });
}
