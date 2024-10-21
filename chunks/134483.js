n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    l = n.n(i),
    r = n(442837),
    o = n(780384),
    u = n(481060),
    d = n(358221),
    c = n(594190),
    E = n(687516),
    m = n(210887),
    C = n(937995),
    x = n(158776),
    _ = n(594174),
    T = n(617136),
    S = n(272008),
    h = n(113434),
    g = n(569984),
    p = n(497505),
    j = n(918701),
    N = n(5881),
    f = n(475595),
    v = n(566078),
    A = n(602667),
    M = n(340100),
    R = n(611855),
    I = n(644646),
    q = n(670638),
    Z = n(667105),
    U = n(860151),
    L = n(341907),
    b = n(46140),
    D = n(981631),
    O = n(354459),
    Q = n(689938),
    B = n(869630);
t.Z = function (e) {
    var t, n, i;
    let { channelId: y, previewQuest: P, isParticipatingOverride: w } = e,
        [H, k] = a.useState(!1),
        W = a.useCallback(() => k(!0), []),
        G = a.useCallback(() => k(!1), []),
        z = a.useContext(C.h9),
        V = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        F = (0, r.e7)([m.Z], () => m.Z.getState().theme),
        Y = (0, o.wj)(F) ? D.BRd.DARK : D.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: X, quest: K } = (0, r.cj)(
            [x.Z, d.Z, g.Z],
            () => {
                var e, t, n, s;
                let a = d.Z.getParticipants(y),
                    i =
                        null != P
                            ? P
                            : (function (e, t, n) {
                                  for (let l of e) {
                                      var s, a, i;
                                      if (l.type === O.fO.STREAM) {
                                          let e = null !== (a = (0, E.Um)(l.stream, n)) && void 0 !== a ? a : null,
                                              i = (0, j.ZZ)(t, e);
                                          if (null != i && (null === (s = i.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null) return i;
                                      }
                                      for (let s of e) {
                                          if (!(0, O.I)(s))
                                              for (let e of n.getActivities(s.user.id)) {
                                                  let n = (0, j.ZZ)(t, e);
                                                  if (null != n && (null === (i = n.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null && ((0, j.Nj)({ quest: n }) || (0, j.$J)(n))) return n;
                                              }
                                      }
                                  }
                                  return null;
                              })(a, g.Z.quests, x.Z);
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != i &&
                        null != V &&
                        ((e = a),
                        (t = i),
                        (n = V),
                        (s = x.Z),
                        e.some((e) => {
                            if (e.type !== O.fO.STREAM || e.user.id !== n.id) return !1;
                            let a = (0, E.Um)(e.stream, s);
                            return null != a && (0, j._D)(a, t);
                        })),
                    quest: i
                };
            },
            [y, V, P]
        ),
        J = null != K ? v.r.build(K.config) : null,
        $ = null == J ? void 0 : J.application.id,
        ee = (0, r.e7)(
            [c.ZP, x.Z],
            () => {
                if (null == K) return !1;
                let e = c.ZP.getRunningGames().map((e) => e.id);
                if ((0, j.$H)(K) && e.includes($)) return !0;
                let t = null != V ? x.Z.findActivity(V.id, (e) => e.type !== D.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, j.$J)(K) && (0, j._D)(t, K)) || !1;
            },
            [K, $, V]
        ),
        et = !0 === w || X || ee,
        en = (0, r.e7)([g.Z], () => null != K && g.Z.isEnrolling(K.id), [K]),
        es = (0, r.e7)([d.Z], () => ((null == V ? void 0 : V.id) == null ? null : d.Z.getParticipant(y, V.id)) != null, [y, V]),
        ea = (0, h.B6)(null == K ? void 0 : K.config.expiresAt),
        ei = (0, h.B6)(null == J ? void 0 : J.rewardsExpireAt),
        el = a.useCallback(() => {
            null != K &&
                (0, S.AH)(K.id, {
                    questContent: p.jn.QUEST_LIVE_STREAM,
                    questContentCTA: T.jZ.ACCEPT_QUEST
                });
        }, [K]),
        er = a.useCallback(() => {
            null != K &&
                ((0, T._3)({
                    questId: K.id,
                    questContent: p.jn.QUEST_LIVE_STREAM,
                    questContentCTA: T.jZ.TRACK_PROGRESS
                }),
                (0, L.navigateToQuestHome)(b.dr.QUEST_CHANNEL_CALL_HEADER, p.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        eo = a.useCallback(() => {
            null != K &&
                ((0, T._3)({
                    questId: K.id,
                    questContent: p.jn.QUEST_LIVE_STREAM,
                    questContentCTA: T.jZ.LEARN_MORE
                }),
                (0, L.navigateToQuestHome)(b.dr.QUEST_CHANNEL_CALL_HEADER, p.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        eu = (0, Z.hf)({
            quest: K,
            location: p.jn.QUEST_LIVE_STREAM
        }),
        ed = a.useMemo(
            () =>
                (0, N.T)({
                    quest: K,
                    location: b.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [K]
        ),
        ec = (0, h.tP)(K);
    if (null == K || !(0, j.dl)(K)) return null;
    let eE = (null === (t = K.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        em = (null === (n = K.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eC = null != K.userStatus && (0, j.zE)(K.userStatus, p.jn.QUEST_LIVE_STREAM),
        ex = null != K.userStatus && (0, j.zE)(K.userStatus, p.jn.QUEST_BAR),
        e_ = (0, j.Mi)(K, p.jn.QUEST_BAR) && !ex;
    ed.info({
        isQuestCallHeaderDismissed: eC,
        isQuestExpired: ec,
        isQuestBarShowing: e_,
        isCurrentUserCallParticipant: es
    });
    let eT = null != P && (null === (i = K.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null;
    if ((!eT && (eC || ec || e_)) || (!eT && !es)) return null;
    let eS = (0, j.il)(K),
        eh = (0, s.jsx)(I.Z, {
            className: B.rewardTile,
            autoplay: H,
            quest: K,
            questContent: p.jn.QUEST_LIVE_STREAM,
            location: b.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, s.jsx)(A.A, {
        questOrQuests: K,
        overrideVisibility: !z,
        questContent: p.jn.QUEST_LIVE_STREAM,
        children: () => {
            var e;
            return (0, s.jsxs)('div', {
                className: l()(B.wrapper, { [B.wrapperAccepted]: eE }),
                onFocus: W,
                onMouseEnter: W,
                onBlur: G,
                onMouseLeave: G,
                children: [
                    !eE &&
                        (0, s.jsxs)('div', {
                            className: B.rewardTileWrapper,
                            children: [
                                eh,
                                (0, s.jsx)(R.Z, {
                                    bgOpacity: 0.32,
                                    className: B.promotedTag
                                })
                            ]
                        }),
                    (0, s.jsxs)('div', {
                        className: B.content,
                        children: [
                            (0, s.jsxs)('div', {
                                className: B.heading,
                                children: [
                                    eE && et
                                        ? eh
                                        : (0, s.jsx)('img', {
                                              className: B.gameTile,
                                              alt: K.config.messages.gameTitle,
                                              src: (0, f.fh)(K, f.Bd.GAME_TILE, Y).url
                                          }),
                                    (0, s.jsxs)('div', {
                                        children: [
                                            (0, s.jsxs)('div', {
                                                className: B.headingWithSubmenu,
                                                children: [
                                                    (0, s.jsx)(u.Heading, {
                                                        className: B.questTitle,
                                                        variant: 'heading-md/semibold',
                                                        color: 'header-primary',
                                                        children: et
                                                            ? (0, j.AV)({
                                                                  quest: K,
                                                                  taskDetails: eS
                                                              })
                                                            : Q.Z.Messages.QUESTS_TITLE.format({ questName: K.config.messages.questName })
                                                    }),
                                                    (0, s.jsx)(q.r, {
                                                        questContent: p.jn.QUEST_LIVE_STREAM,
                                                        quest: K,
                                                        preventIdle: !0,
                                                        shouldShowDisclosure: (null === (e = K.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                                                        children: (e) =>
                                                            (0, s.jsx)(u.Clickable, {
                                                                ...e,
                                                                className: B.submenuWrapper,
                                                                'aria-label': Q.Z.Messages.ACTIONS,
                                                                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    className: B.submenuIcon
                                                                })
                                                            })
                                                    })
                                                ]
                                            }),
                                            (0, s.jsx)(u.Text, {
                                                color: 'header-secondary',
                                                variant: 'text-xs/medium',
                                                children: em ? Q.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ei }) : Q.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: ea })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            eE &&
                                !em &&
                                !et &&
                                (0, s.jsx)(U.Z, {
                                    autoplay: H,
                                    quest: K,
                                    questContent: p.jn.QUEST_LIVE_STREAM,
                                    taskDetails: eS,
                                    location: b.dr.QUEST_CHANNEL_CALL_HEADER
                                }),
                            (0, s.jsxs)('div', {
                                className: B.ctas,
                                children: [
                                    !eE &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)(u.Button, {
                                                    className: B.cta,
                                                    color: u.Button.Colors.PRIMARY,
                                                    fullWidth: !0,
                                                    size: u.Button.Sizes.SMALL,
                                                    onClick: eo,
                                                    children: Q.Z.Messages.QUESTS_LEARN_MORE_V2
                                                }),
                                                (0, s.jsx)(u.Button, {
                                                    className: B.cta,
                                                    color: u.Button.Colors.BRAND,
                                                    fullWidth: !0,
                                                    onClick: el,
                                                    size: u.Button.Sizes.SMALL,
                                                    submitting: en,
                                                    children: Q.Z.Messages.QUESTS_ACCEPT_QUEST
                                                })
                                            ]
                                        }),
                                    eE &&
                                        !em &&
                                        et &&
                                        (0, s.jsx)(M.Z, {
                                            color: u.tokens.colors.BG_BRAND,
                                            quest: K
                                        }),
                                    eE &&
                                        !em &&
                                        !et &&
                                        (0, s.jsx)(u.Button, {
                                            className: B.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: er,
                                            size: u.Button.Sizes.SMALL,
                                            children: Q.Z.Messages.QUESTS_CHECK_PROGRESS
                                        }),
                                    em &&
                                        (0, s.jsx)(u.Button, {
                                            className: B.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: u.Button.Sizes.SMALL,
                                            children: Q.Z.Messages.QUESTS_CLAIM_REWARD
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
