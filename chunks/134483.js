n(47120);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    h = n(687516),
    _ = n(210887),
    f = n(937995),
    E = n(158776),
    p = n(594174),
    m = n(617136),
    C = n(272008),
    S = n(113434),
    I = n(569984),
    g = n(497505),
    T = n(918701),
    R = n(5881),
    N = n(566078),
    v = n(602667),
    x = n(340100),
    A = n(611855),
    L = n(644646),
    b = n(670638),
    O = n(667105),
    Z = n(860151),
    P = n(341907),
    M = n(46140),
    y = n(981631),
    j = n(354459),
    U = n(689938),
    D = n(869630);
t.Z = function (e) {
    var t, n, l;
    let { channelId: B, previewQuest: k, isParticipatingOverride: F } = e,
        [H, w] = i.useState(!1),
        G = i.useCallback(() => w(!0), []),
        z = i.useCallback(() => w(!1), []),
        Q = i.useContext(f.h9),
        V = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        q = (0, a.e7)([_.Z], () => _.Z.getState().theme),
        W = (0, o.wj)(q) ? y.BRd.DARK : y.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: K, quest: Y } = (0, a.cj)(
            [E.Z, c.Z, I.Z],
            () => {
                var e, t, n, r;
                let i = c.Z.getParticipants(B),
                    l =
                        null != k
                            ? k
                            : (function (e, t, n) {
                                  for (let s of e) {
                                      var r, i, l;
                                      if (s.type === j.fO.STREAM) {
                                          let e = null !== (i = (0, h.Um)(s.stream, n)) && void 0 !== i ? i : null,
                                              l = (0, T.ZZ)(t, e);
                                          if (null != l && (null === (r = l.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null) return l;
                                      }
                                      for (let r of e) {
                                          if (!(0, j.I)(r))
                                              for (let e of n.getActivities(r.user.id)) {
                                                  let n = (0, T.ZZ)(t, e);
                                                  if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null && ((0, T.Nj)({ quest: n }) || (0, T.$J)(n))) return n;
                                              }
                                      }
                                  }
                                  return null;
                              })(i, I.Z.quests, E.Z);
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != l &&
                        null != V &&
                        ((e = i),
                        (t = l),
                        (n = V),
                        (r = E.Z),
                        e.some((e) => {
                            if (e.type !== j.fO.STREAM || e.user.id !== n.id) return !1;
                            let i = (0, h.Um)(e.stream, r);
                            return null != i && (0, T._D)(i, t);
                        })),
                    quest: l
                };
            },
            [B, V, k]
        ),
        J = null != Y ? N.r.build(Y.config) : null,
        X = null == J ? void 0 : J.application.id,
        $ = (0, a.e7)(
            [d.ZP, E.Z],
            () => {
                if (null == Y) return !1;
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, T.$H)(Y) && e.includes(X)) return !0;
                let t = null != V ? E.Z.findActivity(V.id, (e) => e.type !== y.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, T.$J)(Y) && (0, T._D)(t, Y)) || !1;
            },
            [Y, X, V]
        ),
        ee = !0 === F || K || $,
        et = (0, a.e7)([I.Z], () => null != Y && I.Z.isEnrolling(Y.id), [Y]),
        en = (0, a.e7)([c.Z], () => ((null == V ? void 0 : V.id) == null ? null : c.Z.getParticipant(B, V.id)) != null, [B, V]),
        er = (0, S.B6)(null == Y ? void 0 : Y.config.expiresAt),
        ei = (0, S.B6)(null == J ? void 0 : J.rewardsExpireAt),
        el = i.useCallback(() => {
            null != Y &&
                (0, C.AH)(Y.id, {
                    questContent: g.jn.QUEST_LIVE_STREAM,
                    questContentCTA: m.jZ.ACCEPT_QUEST
                });
        }, [Y]),
        es = i.useCallback(() => {
            null != Y &&
                ((0, m._3)({
                    questId: Y.id,
                    questContent: g.jn.QUEST_LIVE_STREAM,
                    questContentCTA: m.jZ.TRACK_PROGRESS
                }),
                (0, P.navigateToQuestHome)(M.dr.QUEST_CHANNEL_CALL_HEADER, g.jn.QUEST_LIVE_STREAM, Y.id));
        }, [Y]),
        ea = i.useCallback(() => {
            null != Y &&
                ((0, m._3)({
                    questId: Y.id,
                    questContent: g.jn.QUEST_LIVE_STREAM,
                    questContentCTA: m.jZ.LEARN_MORE
                }),
                (0, P.navigateToQuestHome)(M.dr.QUEST_CHANNEL_CALL_HEADER, g.jn.QUEST_LIVE_STREAM, Y.id));
        }, [Y]),
        eo = (0, O.hf)({
            quest: Y,
            location: g.jn.QUEST_LIVE_STREAM
        }),
        eu = i.useMemo(
            () =>
                (0, R.T)({
                    quest: Y,
                    location: M.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [Y]
        ),
        ec = (0, S.tP)(Y);
    if (null == Y || !(0, T.dl)(Y)) return null;
    let ed = (null === (t = Y.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        eh = (null === (n = Y.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        e_ = null != Y.userStatus && (0, T.zE)(Y.userStatus, g.jn.QUEST_LIVE_STREAM),
        ef = null != Y.userStatus && (0, T.zE)(Y.userStatus, g.jn.QUEST_BAR),
        eE = (0, T.Mi)(Y, g.jn.QUEST_BAR) && !ef;
    eu.info({
        isQuestCallHeaderDismissed: e_,
        isQuestExpired: ec,
        isQuestBarShowing: eE,
        isCurrentUserCallParticipant: en
    });
    let ep = null != k && (null === (l = Y.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
    if ((!ep && (e_ || ec || eE)) || (!ep && !en)) return null;
    let em = (0, T.il)(Y),
        eC = (0, r.jsx)(L.Z, {
            className: D.rewardTile,
            autoplay: H,
            quest: Y,
            questContent: g.jn.QUEST_LIVE_STREAM,
            location: M.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, r.jsx)(v.A, {
        questOrQuests: Y,
        overrideVisibility: !Q,
        questContent: g.jn.QUEST_LIVE_STREAM,
        children: () => {
            var e;
            return (0, r.jsxs)('div', {
                className: s()(D.wrapper, { [D.wrapperAccepted]: ed }),
                onFocus: G,
                onMouseEnter: G,
                onBlur: z,
                onMouseLeave: z,
                children: [
                    !ed &&
                        (0, r.jsxs)('div', {
                            className: D.rewardTileWrapper,
                            children: [
                                eC,
                                (0, r.jsx)(A.Z, {
                                    bgOpacity: 0.32,
                                    className: D.promotedTag
                                })
                            ]
                        }),
                    (0, r.jsxs)('div', {
                        className: D.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: D.heading,
                                children: [
                                    ed && ee
                                        ? eC
                                        : (0, r.jsx)('img', {
                                              className: D.gameTile,
                                              alt: Y.config.messages.gameTitle,
                                              src: (0, T.uo)(Y, W)
                                          }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: D.headingWithSubmenu,
                                                children: [
                                                    (0, r.jsx)(u.Heading, {
                                                        className: D.questTitle,
                                                        variant: 'heading-md/semibold',
                                                        color: 'header-primary',
                                                        children: ee
                                                            ? (0, T.AV)({
                                                                  quest: Y,
                                                                  taskDetails: em
                                                              })
                                                            : U.Z.Messages.QUESTS_TITLE.format({ questName: Y.config.messages.questName })
                                                    }),
                                                    (0, r.jsx)(b.r, {
                                                        questContent: g.jn.QUEST_LIVE_STREAM,
                                                        quest: Y,
                                                        preventIdle: !0,
                                                        shouldShowDisclosure: (null === (e = Y.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                                                        children: (e) =>
                                                            (0, r.jsx)(u.Clickable, {
                                                                ...e,
                                                                className: D.submenuWrapper,
                                                                'aria-label': U.Z.Messages.ACTIONS,
                                                                children: (0, r.jsx)(u.MoreHorizontalIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    className: D.submenuIcon
                                                                })
                                                            })
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                color: 'header-secondary',
                                                variant: 'text-xs/medium',
                                                children: eh ? U.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ei }) : U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: er })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ed &&
                                !eh &&
                                !ee &&
                                (0, r.jsx)(Z.Z, {
                                    autoplay: H,
                                    quest: Y,
                                    questContent: g.jn.QUEST_LIVE_STREAM,
                                    taskDetails: em,
                                    location: M.dr.QUEST_CHANNEL_CALL_HEADER
                                }),
                            (0, r.jsxs)('div', {
                                className: D.ctas,
                                children: [
                                    !ed &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.Button, {
                                                    className: D.cta,
                                                    color: u.Button.Colors.PRIMARY,
                                                    fullWidth: !0,
                                                    size: u.Button.Sizes.SMALL,
                                                    onClick: ea,
                                                    children: U.Z.Messages.QUESTS_LEARN_MORE_V2
                                                }),
                                                (0, r.jsx)(u.Button, {
                                                    className: D.cta,
                                                    color: u.Button.Colors.BRAND,
                                                    fullWidth: !0,
                                                    onClick: el,
                                                    size: u.Button.Sizes.SMALL,
                                                    submitting: et,
                                                    children: U.Z.Messages.QUESTS_ACCEPT_QUEST
                                                })
                                            ]
                                        }),
                                    ed &&
                                        !eh &&
                                        ee &&
                                        (0, r.jsx)(x.Z, {
                                            color: u.tokens.colors.BG_BRAND,
                                            quest: Y
                                        }),
                                    ed &&
                                        !eh &&
                                        !ee &&
                                        (0, r.jsx)(u.Button, {
                                            className: D.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: es,
                                            size: u.Button.Sizes.SMALL,
                                            children: U.Z.Messages.QUESTS_CHECK_PROGRESS
                                        }),
                                    eh &&
                                        (0, r.jsx)(u.Button, {
                                            className: D.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eo,
                                            size: u.Button.Sizes.SMALL,
                                            children: U.Z.Messages.QUESTS_CLAIM_REWARD
                                        })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    });
};
