var s = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(442837),
    r = n(481060),
    o = n(607070),
    u = n(706454),
    d = n(63063),
    c = n(930153),
    E = n(617136),
    m = n(113434),
    C = n(569984),
    x = n(497505),
    _ = n(918701),
    T = n(566078),
    S = n(340100),
    h = n(644646),
    g = n(667105),
    p = n(341907),
    j = n(128535),
    N = n(87894),
    f = n(2660),
    v = n(46140),
    A = n(981631),
    M = n(689938),
    R = n(389444),
    I = n(789002);
let q = (e, t, n) => ((0, N.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function Z(e) {
    let { containerSize: t, onClick: n, children: a, tabIndex: i } = e;
    return 'xs' === t
        ? (0, s.jsx)(r.Clickable, {
              tabIndex: i,
              className: R.learnMoreLink,
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
              wrapperClassName: R.ctaButtonWrapper,
              color: r.ButtonColors.PRIMARY,
              onClick: n,
              children: a
          });
}
function U(e) {
    let { quest: t, progressState: n, isCollectibleQuest: a, location: i, questContentPosition: u, inGiftInventory: d } = e,
        c = n >= m.OH.COMPLETED,
        E = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        x = (0, l.e7)([C.Z], () => C.Z.isEnrolling(t.id)),
        T = (0, _.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST),
        S = (0, g.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: T,
            location: i,
            isCollectibleQuest: a,
            questContentPosition: u,
            inGiftInventory: d
        }),
        h = T && d && c,
        p = h ? R.inHouseButton : r.ButtonColors.BRAND,
        j = c && !E ? r.ShinyButton : r.Button;
    return (0, s.jsx)(
        r.Tooltip,
        {
            text: S.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, s.jsx)(j, {
                    ...e,
                    wrapperClassName: R.ctaButtonWrapper,
                    color: p,
                    disabled: null == S.onClick,
                    submitting: x,
                    onClick: null !== (t = S.onClick) && void 0 !== t ? t : () => {},
                    children: (0, s.jsxs)('div', {
                        className: R.ctaButtonInner,
                        children: [
                            h &&
                                (0, s.jsx)('img', {
                                    src: I,
                                    alt: '',
                                    className: R.inHouseIcon
                                }),
                            S.text
                        ]
                    })
                });
            }
        },
        S.tooltipText
    );
}
t.Z = (e) => {
    let { quest: t, location: n, size: a, isFocused: o, isQuestExpired: C, isExpanded: g, isAnimating: I, contentPosition: L } = e,
        b = (0, m._Q)(t),
        D = b >= m.OH.ACCEPTED,
        O = b >= m.OH.COMPLETED,
        Q = b >= m.OH.CLAIMED,
        B = (0, _.Xv)(t.config),
        y = (0, N.uq)(n),
        P = n === x.jn.QUESTS_EMBED,
        w = g || I,
        H = D && !Q && y,
        k = (0, m.t5)(t, v.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: W } = (0, m.z6)(),
        G = (0, l.e7)([u.default], () => u.default.locale),
        z = (0, m.z)(t),
        V = y && B,
        F = C && !O,
        Y = W.length > 0 && y && (0, _.$J)(t) && D && !O && !z,
        X = (0, s.jsx)(h.Z, {
            autoplay: o,
            className: i()(R.gridImg, {
                [R.questRewardGiftInventory]: y && 'lg' === a,
                [R.questRewardEmbed]: P && 'lg' === a,
                [R.questRewardEmbedSm]: 'sm' === a,
                [R.questRewardEmbedXs]: 'xs' === a
            }),
            learnMoreStyle: y ? null : 'text',
            location: v.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: L
        });
    return (0, s.jsxs)('div', {
        className: R.root,
        children: [
            (0, s.jsxs)('div', {
                className: i()(R.outerContainer, {
                    [R.outerContainerSm]: 'sm' === a,
                    [R.outerContainerXs]: 'xs' === a,
                    [R.outerContainerNoProgress]: !H
                }),
                style: { visibility: w ? 'inherit' : 'hidden' },
                'aria-hidden': !w,
                children: [
                    (0, s.jsx)(r.Tooltip, {
                        text: F ? M.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
                        tooltipContentClassName: R.rewardTileExpirationTooltip,
                        shouldShow: F,
                        children: (e) =>
                            (0, s.jsxs)('div', {
                                className: R.rewardTileWrapper,
                                ...e,
                                children: [
                                    C &&
                                        (0, s.jsx)('div', {
                                            className: R.rewardTileExpired,
                                            children: (0, s.jsx)(r.CircleWarningIcon, { color: r.tokens.colors.WHITE })
                                        }),
                                    V
                                        ? (0, s.jsx)(f.Z, {
                                              questConfig: t.config,
                                              fallback: X,
                                              isFocused: o
                                          })
                                        : X
                                ]
                            })
                    }),
                    (0, s.jsxs)('div', {
                        className: i()(R.gridText, R.taskDetails),
                        children: [
                            (0, s.jsx)(r.Text, {
                                variant: q(n, a, D),
                                className: R.taskInstructions,
                                children: C ? M.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({ questName: t.config.messages.questName }) : k
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'lg' === a ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: (function (e) {
                                    var t, n, s, a, i, l;
                                    let { quest: r, location: o, locale: u, isQuestExpired: E } = e,
                                        C = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                        x = C && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
                                        S = (0, _.zK)(r, v.S7.IN_HOUSE_CONSOLE_QUEST),
                                        h = (0, N.uq)(o),
                                        g = (0, m.B6)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                                        p = (0, _.oo)({ quest: r }),
                                        j = T.r.build(r.config).defaultReward.messages.nameWithArticle,
                                        f = (0, _.Kr)(r.config),
                                        R = (0, _.b7)(r);
                                    if (C && S && h) return M.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: g });
                                    if (x) {
                                        let e = p
                                                ? (0, _.o9)({
                                                      quest: r,
                                                      idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
                                                  })
                                                : null,
                                            t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
                                        return null != t
                                            ? M.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                                                  reward: t,
                                                  date: g
                                              })
                                            : M.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                                  reward: j,
                                                  date: g
                                              });
                                    }
                                    if (C)
                                        return p
                                            ? M.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: g })
                                            : M.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                                  reward: j,
                                                  date: g
                                              });
                                    let I = p
                                        ? (0, _.o9)({
                                              quest: r,
                                              idx: 0
                                          })
                                        : null;
                                    return E
                                        ? M.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({ reward: null !== (l = null == I ? void 0 : I.messages.nameWithArticle) && void 0 !== l ? l : j })
                                        : null != I && null != I.approximateCount
                                          ? M.Z.Messages.QUEST_REWARD_TIERED.format({
                                                maxReward: I.messages.nameWithArticle,
                                                maxRewardCount: (0, c.Bs)(I.approximateCount, u),
                                                helpCenterLink: d.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE)
                                            })
                                          : null != f
                                            ? M.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                                                  reward: j,
                                                  duration: f
                                              })
                                            : null != R
                                              ? R.description
                                              : M.Z.Messages.QUEST_REWARD.format({ reward: j });
                                })({
                                    quest: t,
                                    location: n,
                                    locale: G,
                                    isQuestExpired: C
                                })
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: i()(R.ctaButtonContainer, R.gridCtaButtons),
                        children: [
                            !y &&
                                (0, s.jsx)(Z, {
                                    containerSize: a,
                                    onClick: () => {
                                        (0, p.navigateToQuestHome)(v.dr.QUESTS_CARD, n, t.id),
                                            (0, E._3)({
                                                questId: t.id,
                                                questContent: n,
                                                questContentPosition: L,
                                                questContentCTA: E.jZ.LEARN_MORE
                                            });
                                    },
                                    children: M.Z.Messages.QUESTS_LEARN_MORE_V2
                                }),
                            C && !O
                                ? null
                                : (0, s.jsx)(U, {
                                      quest: t,
                                      progressState: b,
                                      isCollectibleQuest: B,
                                      location: n,
                                      inGiftInventory: y
                                  })
                        ]
                    }),
                    H &&
                        (0, s.jsx)(S.Z, {
                            className: R.gridProgressBar,
                            color: O ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
                            quest: t,
                            isInventory: y
                        })
                ]
            }),
            Y &&
                (0, s.jsxs)('div', {
                    className: R.microphoneContainer,
                    children: [
                        (0, s.jsx)('div', { className: R.separator }),
                        (0, s.jsx)(j.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
