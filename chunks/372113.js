var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(607070),
    u = n(706454),
    c = n(63063),
    d = n(930153),
    _ = n(617136),
    E = n(113434),
    f = n(569984),
    h = n(497505),
    p = n(918701),
    m = n(566078),
    I = n(340100),
    T = n(644646),
    g = n(667105),
    S = n(341907),
    A = n(128535),
    v = n(87894),
    N = n(2660),
    O = n(46140),
    R = n(981631),
    C = n(689938),
    y = n(389444),
    b = n(789002);
let L = (e, t, n) => ((0, v.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function D(e) {
    let { containerSize: t, onClick: n, children: i, tabIndex: a } = e;
    return 'xs' === t
        ? (0, r.jsx)(s.Clickable, {
              tabIndex: a,
              className: y.learnMoreLink,
              tag: 'span',
              onClick: n,
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-link',
                  children: i
              })
          })
        : (0, r.jsx)(s.Button, {
              tabIndex: a,
              wrapperClassName: y.ctaButtonWrapper,
              color: s.ButtonColors.PRIMARY,
              onClick: n,
              children: i
          });
}
function M(e) {
    var t, n, r, i, a, o;
    let { quest: s, location: l, locale: u, isQuestExpired: _ } = e,
        f = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        h = f && (null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        I = (0, p.zK)(s, O.S7.IN_HOUSE_CONSOLE_QUEST),
        T = (0, v.uq)(l),
        g = (0, E.B6)(null === (r = s.userStatus) || void 0 === r ? void 0 : r.completedAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        S = (0, p.oo)({ quest: s }),
        A = m.r.build(s.config).defaultReward.messages.nameWithArticle,
        N = (0, p.Kr)(s.config),
        y = (0, p.b7)(s);
    if (f && I && T) return C.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: g });
    if (h) {
        let e = S
                ? (0, p.o9)({
                      quest: s,
                      idx: null === (i = s.userStatus) || void 0 === i ? void 0 : i.claimedTier
                  })
                : null,
            t = null !== (a = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== a ? a : null;
        return null != t
            ? C.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                  reward: t,
                  date: g
              })
            : C.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: A,
                  date: g
              });
    }
    if (f)
        return S
            ? C.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: g })
            : C.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: A,
                  date: g
              });
    let b = S
        ? (0, p.o9)({
              quest: s,
              idx: 0
          })
        : null;
    return _
        ? C.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({ reward: null !== (o = null == b ? void 0 : b.messages.nameWithArticle) && void 0 !== o ? o : A })
        : null != b && null != b.approximateCount
          ? C.Z.Messages.QUEST_REWARD_TIERED.format({
                maxReward: b.messages.nameWithArticle,
                maxRewardCount: (0, d.Bs)(b.approximateCount, u),
                helpCenterLink: c.Z.getArticleURL(R.BhN.QUESTS_LEARN_MORE)
            })
          : null != N
            ? C.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                  reward: A,
                  duration: N
              })
            : null != y
              ? y.description
              : C.Z.Messages.QUEST_REWARD.format({ reward: A });
}
let P = (e) => {
    let { quest: t, location: n, size: i, isFocused: l, isQuestExpired: c, isExpanded: d, isAnimating: f, contentPosition: m } = e,
        g = (0, E._Q)(t),
        R = g >= E.OH.ACCEPTED,
        b = g >= E.OH.COMPLETED,
        P = g >= E.OH.CLAIMED,
        w = (0, p.Xv)(t.config),
        x = (0, v.uq)(n),
        G = n === h.jn.QUESTS_EMBED,
        k = d || f,
        B = R && !P && x,
        F = (0, E.t5)(t, O.dr.QUESTS_CARD, n),
        { xboxAndPlaystationAccounts: Z } = (0, E.z6)(),
        V = () => {
            (0, S.navigateToQuestHome)(O.dr.QUESTS_CARD, n, t.id),
                (0, _._3)({
                    questId: t.id,
                    questContent: n,
                    questContentPosition: m,
                    questContentCTA: _.jZ.LEARN_MORE
                });
        },
        H = (0, o.e7)([u.default], () => u.default.locale),
        Y = (0, E.z)(t),
        j = x && w,
        W = c && !b,
        K = Z.length > 0 && x && (0, p.$J)(t) && R && !b && !Y,
        z = (0, r.jsx)(T.Z, {
            autoplay: l,
            className: a()(y.gridImg, {
                [y.questRewardGiftInventory]: x && 'lg' === i,
                [y.questRewardEmbed]: G && 'lg' === i,
                [y.questRewardEmbedSm]: 'sm' === i,
                [y.questRewardEmbedXs]: 'xs' === i
            }),
            learnMoreStyle: x ? null : 'text',
            location: O.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: m
        }),
        q = () =>
            c && !b
                ? null
                : (0, r.jsx)(U, {
                      quest: t,
                      progressState: g,
                      isCollectibleQuest: w,
                      location: n,
                      inGiftInventory: x
                  });
    return (0, r.jsxs)('div', {
        className: y.root,
        children: [
            (0, r.jsxs)('div', {
                className: a()(y.outerContainer, {
                    [y.outerContainerSm]: 'sm' === i,
                    [y.outerContainerXs]: 'xs' === i,
                    [y.outerContainerNoProgress]: !B
                }),
                style: { visibility: k ? 'inherit' : 'hidden' },
                'aria-hidden': !k,
                children: [
                    (0, r.jsx)(s.Tooltip, {
                        text: W ? C.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
                        tooltipContentClassName: y.rewardTileExpirationTooltip,
                        shouldShow: W,
                        children: (e) =>
                            (0, r.jsxs)('div', {
                                className: y.rewardTileWrapper,
                                ...e,
                                children: [
                                    c &&
                                        (0, r.jsx)('div', {
                                            className: y.rewardTileExpired,
                                            children: (0, r.jsx)(s.CircleWarningIcon, { color: s.tokens.colors.WHITE })
                                        }),
                                    j
                                        ? (0, r.jsx)(N.Z, {
                                              questConfig: t.config,
                                              fallback: z,
                                              isFocused: l
                                          })
                                        : z
                                ]
                            })
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(y.gridText, y.taskDetails),
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: L(n, i, R),
                                className: y.taskInstructions,
                                children: c ? C.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({ questName: t.config.messages.questName }) : F
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                                color: 'text-muted',
                                children: M({
                                    quest: t,
                                    location: n,
                                    locale: H,
                                    isQuestExpired: c
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(y.ctaButtonContainer, y.gridCtaButtons),
                        children: [
                            !x &&
                                (0, r.jsx)(D, {
                                    containerSize: i,
                                    onClick: V,
                                    children: C.Z.Messages.QUESTS_LEARN_MORE_V2
                                }),
                            q()
                        ]
                    }),
                    B &&
                        (0, r.jsx)(I.Z, {
                            className: y.gridProgressBar,
                            color: b ? s.tokens.colors.TEXT_POSITIVE : s.tokens.colors.BG_BRAND,
                            quest: t,
                            isInventory: x
                        })
                ]
            }),
            K &&
                (0, r.jsxs)('div', {
                    className: y.microphoneContainer,
                    children: [
                        (0, r.jsx)('div', { className: y.separator }),
                        (0, r.jsx)(A.Z, {
                            quest: t,
                            location: n
                        })
                    ]
                })
        ]
    });
};
function U(e) {
    let { quest: t, progressState: n, isCollectibleQuest: i, location: a, questContentPosition: u, inGiftInventory: c } = e,
        d = n >= E.OH.COMPLETED,
        _ = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        h = (0, o.e7)([f.Z], () => f.Z.isEnrolling(t.id)),
        m = (0, p.zK)(t, O.S7.IN_HOUSE_CONSOLE_QUEST),
        I = (0, g.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: m,
            location: a,
            isCollectibleQuest: i,
            questContentPosition: u,
            inGiftInventory: c
        }),
        T = m && c && d,
        S = T ? y.inHouseButton : s.ButtonColors.BRAND,
        A = d && !_ ? s.ShinyButton : s.Button;
    return (0, r.jsx)(
        s.Tooltip,
        {
            text: I.tooltipText,
            tooltipContentClassName: y.ctaTooltipText,
            children: (e) => {
                var t;
                return (0, r.jsx)(A, {
                    ...e,
                    wrapperClassName: y.ctaButtonWrapper,
                    color: S,
                    disabled: null == I.onClick,
                    submitting: h,
                    onClick: null !== (t = I.onClick) && void 0 !== t ? t : () => {},
                    children: (0, r.jsxs)('div', {
                        className: y.ctaButtonInner,
                        children: [
                            T &&
                                (0, r.jsx)('img', {
                                    src: b,
                                    alt: '',
                                    className: y.inHouseIcon
                                }),
                            I.text
                        ]
                    })
                });
            }
        },
        I.tooltipText
    );
}
t.Z = P;
