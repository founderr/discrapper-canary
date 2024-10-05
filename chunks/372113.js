var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    o = n(442837),
    r = n(481060),
    l = n(607070),
    u = n(706454),
    d = n(63063),
    c = n(930153),
    m = n(617136),
    E = n(113434),
    x = n(569984),
    C = n(497505),
    h = n(918701),
    _ = n(566078),
    g = n(340100),
    T = n(644646),
    p = n(667105),
    S = n(341907),
    j = n(128535),
    N = n(87894),
    f = n(2660),
    v = n(46140),
    M = n(981631),
    I = n(689938),
    q = n(389444),
    R = n(789002);
let A = (e, t, n) => ((0, N.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function Z(e) {
    let { containerSize: t, onClick: n, children: a, tabIndex: i } = e;
    return 'xs' === t
        ? (0, s.jsx)(r.Clickable, {
              tabIndex: i,
              className: q.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, s.jsx)(r.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: a
              })
          })
        : (0, s.jsx)(r.Button, {
              tabIndex: i,
              wrapperClassName: q.ctaButtonWrapper,
              color: r.ButtonColors.PRIMARY,
              onClick: n,
              children: a
          });
}
function O(e) {
    let { quest: t, progressState: n, isCollectibleQuest: a, location: i, questContentPosition: u, inGiftInventory: d } = e,
        c = n >= E.OH.COMPLETED,
        m = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        C = (0, o.e7)([x.Z], () => x.Z.isEnrolling(t.id)),
        _ = (0, h.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST),
        g = (0, p.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: _,
            location: i,
            isCollectibleQuest: a,
            questContentPosition: u,
            inGiftInventory: d
        }),
        T = _ && d && c,
        S = T ? q.inHouseButton : r.ButtonColors.BRAND,
        j = c && !m ? r.ShinyButton : r.Button;
    return (0, s.jsx)(
        r.Tooltip,
        {
            text: g.tooltipText,
            tooltipContentClassName: q.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, s.jsx)(j, {
                    ...e,
                    wrapperClassName: q.ctaButtonWrapper,
                    color: S,
                    disabled: null == g.onClick,
                    submitting: C,
                    onClick: null !== (t = g.onClick) && void 0 !== t ? t : () => {},
                    children: (0, s.jsxs)('div', {
                        className: q.ctaButtonInner,
                        children: [
                            T &&
                                (0, s.jsx)('img', {
                                    src: R,
                                    alt: '',
                                    className: q.inHouseIcon
                                }),
                            g.text
                        ]
                    })
                });
            }
        },
        g.tooltipText
    );
}
t.Z = (e) => {
    let { quest: t, location: n, size: a, isFocused: l, isQuestExpired: x, isExpanded: p, isAnimating: R, contentPosition: b } = e,
        D = (0, E._Q)(t),
        U = D >= E.OH.ACCEPTED,
        Q = D >= E.OH.COMPLETED,
        L = D >= E.OH.CLAIMED,
        y = (0, h.Xv)(t.config),
        B = (0, N.uq)(n),
        P = n === C.jn.QUESTS_EMBED,
        w = p || R,
        k = U && !L && B,
        H = (0, E.t5)(t, v.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: W } = (0, E.z6)(),
        G = (0, o.e7)([u.default], () => u.default.locale),
        F = (0, E.z)(t),
        X = B && y,
        Y = x && !Q,
        z = W.length > 0 && B && (0, h.$J)(t) && U && !Q && !F,
        K = (0, s.jsx)(T.Z, {
            autoplay: l,
            className: i()(q.gridImg, {
                [q.questRewardGiftInventory]: B && 'lg' === a,
                [q.questRewardEmbed]: P && 'lg' === a,
                [q.questRewardEmbedSm]: 'sm' === a,
                [q.questRewardEmbedXs]: 'xs' === a
            }),
            learnMoreStyle: B ? null : 'text',
            location: v.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: b
        });
    return (0, s.jsxs)('div', {
        className: q.root,
        children: [
            (0, s.jsxs)('div', {
                className: i()(q.outerContainer, {
                    [q.outerContainerSm]: 'sm' === a,
                    [q.outerContainerXs]: 'xs' === a,
                    [q.outerContainerNoProgress]: !k
                }),
                style: { visibility: w ? 'inherit' : 'hidden' },
                'aria-hidden': !w,
                children: [
                    (0, s.jsx)(r.Tooltip, {
                        text: Y ? I.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
                        tooltipContentClassName: q.rewardTileExpirationTooltip,
                        shouldShow: Y,
                        children: (e) =>
                            (0, s.jsxs)('div', {
                                className: q.rewardTileWrapper,
                                ...e,
                                children: [
                                    x &&
                                        (0, s.jsx)('div', {
                                            className: q.rewardTileExpired,
                                            children: (0, s.jsx)(r.CircleWarningIcon, { color: r.tokens.colors.WHITE })
                                        }),
                                    X
                                        ? (0, s.jsx)(f.Z, {
                                              questConfig: t.config,
                                              fallback: K,
                                              isFocused: l
                                          })
                                        : K
                                ]
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: i()(q.gridText, q.taskDetails),
                        children: [
                            (0, s.jsx)(r.Text, {
                                variant: A(n, a, U),
                                className: q.taskInstructions,
                                children: x ? I.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({ questName: t.config.messages.questName }) : H
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'lg' === a ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, s, a, i, o;
                                    let { quest: r, location: l, locale: u, isQuestExpired: m } = e,
                                        x = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                        C = x && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                        g = (0, h.zK)(r, v.S7.IN_HOUSE_CONSOLE_QUEST),
                                        T = (0, N.uq)(l),
                                        p = (0, E.B6)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                                        S = (0, h.oo)({ quest: r }),
                                        j = _.r.build(r.config).defaultReward.messages.nameWithArticle,
                                        f = (0, h.Kr)(r.config),
                                        q = (0, h.b7)(r);
                                    if (x && g && T) return I.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: p });
                                    if (C) {
                                        let e = S
                                                ? (0, h.o9)({
                                                      quest: r,
                                                      idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
                                                  })
                                                : null,
                                            t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
                                        return null != t
                                            ? I.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                                                  reward: t,
                                                  date: p
                                              })
                                            : I.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                                  reward: j,
                                                  date: p
                                              });
                                    }
                                    if (x)
                                        return S
                                            ? I.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: p })
                                            : I.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                                  reward: j,
                                                  date: p
                                              });
                                    let R = S
                                        ? (0, h.o9)({
                                              quest: r,
                                              idx: 0
                                          })
                                        : null;
                                    return m
                                        ? I.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({ reward: null !== (o = null == R ? void 0 : R.messages.nameWithArticle) && void 0 !== o ? o : j })
                                        : null != R && null != R.approximateCount
                                          ? I.Z.Messages.QUEST_REWARD_TIERED.format({
                                                maxReward: R.messages.nameWithArticle,
                                                maxRewardCount: (0, c.Bs)(R.approximateCount, u),
                                                helpCenterLink: d.Z.getArticleURL(M.BhN.QUESTS_LEARN_MORE)
                                            })
                                          : null != f
                                            ? I.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                                                  reward: j,
                                                  duration: f
                                              })
                                            : null != q
                                              ? q.description
                                              : I.Z.Messages.QUEST_REWARD.format({ reward: j });
                                })({
                                    quest: t,
                                    location: n,
                                    locale: G,
                                    isQuestExpired: x
                                })
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: i()(q.ctaButtonContainer, q.gridCtaButtons),
                        children: [
                            !B &&
                                (0, s.jsx)(Z, {
                                    containerSize: a,
                                    onClick: () => {
                                        (0, S.navigateToQuestHome)(v.dr.QUESTS_CARD, n, t.id),
                                            (0, m._3)({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: b,
                                                questContentCTA: m.jZ.LEARN_MORE
                                            });
                                    },
                                    children: I.Z.Messages.QUESTS_LEARN_MORE_V2
                                }),
                            x && !Q
                                ? null
                                : (0, s.jsx)(O, {
                                      quest: t,
                                      progressState: D,
                                      isCollectibleQuest: y,
                                      location: n,
                                      inGiftInventory: B
                                  })
                        ]
                    }),
                    k &&
                        (0, s.jsx)(g.Z, {
                            className: q.gridProgressBar,
                            color: Q ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
                            quest: t,
                            isInventory: B
                        })
                ]
            }),
            z &&
                (0, s.jsxs)('div', {
                    className: q.microphoneContainer,
                    children: [
                        (0, s.jsx)('div', { className: q.separator }),
                        (0, s.jsx)(j.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
