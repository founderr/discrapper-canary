n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(780384),
    u = n(481060),
    c = n(358221),
    d = n(594190),
    m = n(687516),
    x = n(210887),
    h = n(937995),
    C = n(158776),
    p = n(594174),
    g = n(617136),
    E = n(272008),
    j = n(113434),
    T = n(569984),
    f = n(497505),
    v = n(918701),
    S = n(5881),
    N = n(475595),
    q = n(566078),
    _ = n(602667),
    A = n(340100),
    R = n(611855),
    b = n(644646),
    M = n(670638),
    I = n(667105),
    L = n(860151),
    Z = n(341907),
    y = n(46140),
    P = n(981631),
    B = n(354459),
    U = n(388032),
    D = n(869630);
t.Z = function (e) {
    var t, n, l;
    let { channelId: w, previewQuest: Q, isParticipatingOverride: k } = e,
        [O, H] = s.useState(!1),
        W = s.useCallback(() => H(!0), []),
        G = s.useCallback(() => H(!1), []),
        z = s.useContext(h.h9),
        F = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
        X = (0, a.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
        { isCurrentUserStreamingQuestApplication: Y, quest: K } = (0, o.cj)(
            [C.Z, c.Z, T.Z],
            () => {
                var e, t, n, i;
                let s = c.Z.getParticipants(w),
                    l =
                        null != Q
                            ? Q
                            : (function (e, t, n) {
                                  for (let r of e) {
                                      var i, s, l;
                                      if (r.type === B.fO.STREAM) {
                                          let e = null !== (s = (0, m.Um)(r.stream, n)) && void 0 !== s ? s : null,
                                              l = (0, v.ZZ)(t, e);
                                          if (null != l && (null === (i = l.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null) return l;
                                      }
                                      for (let i of e) {
                                          if (!(0, B.I)(i))
                                              for (let e of n.getActivities(i.user.id)) {
                                                  let n = (0, v.ZZ)(t, e);
                                                  if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null && ((0, v.Nj)({ quest: n }) || (0, v.$J)(n))) return n;
                                              }
                                      }
                                  }
                                  return null;
                              })(s, T.Z.quests, C.Z);
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != l &&
                        null != F &&
                        ((e = s),
                        (t = l),
                        (n = F),
                        (i = C.Z),
                        e.some((e) => {
                            if (e.type !== B.fO.STREAM || e.user.id !== n.id) return !1;
                            let s = (0, m.Um)(e.stream, i);
                            return null != s && (0, v._D)(s, t);
                        })),
                    quest: l
                };
            },
            [w, F, Q]
        ),
        J = null != K ? q.r.build(K.config) : null,
        $ = null == J ? void 0 : J.application.id,
        ee = (0, o.e7)(
            [d.ZP, C.Z],
            () => {
                if (null == K) return !1;
                let e = d.ZP.getRunningGames().map((e) => e.id);
                if ((0, v.$H)(K) && e.includes($)) return !0;
                let t = null != F ? C.Z.findActivity(F.id, (e) => e.type !== P.IIU.CUSTOM_STATUS) : null;
                return !!(null != t && (0, v.$J)(K) && (0, v._D)(t, K)) || !1;
            },
            [K, $, F]
        ),
        et = !0 === k || Y || ee,
        en = (0, o.e7)([T.Z], () => null != K && T.Z.isEnrolling(K.id), [K]),
        ei = (0, o.e7)([c.Z], () => ((null == F ? void 0 : F.id) == null ? null : c.Z.getParticipant(w, F.id)) != null, [w, F]),
        es = (0, j.B6)(null == K ? void 0 : K.config.expiresAt),
        el = (0, j.B6)(null == J ? void 0 : J.rewardsExpireAt),
        er = s.useCallback(() => {
            null != K &&
                (0, E.AH)(K.id, {
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.ACCEPT_QUEST
                });
        }, [K]),
        eo = s.useCallback(() => {
            null != K &&
                ((0, g._3)({
                    questId: K.id,
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.TRACK_PROGRESS
                }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        ea = s.useCallback(() => {
            null != K &&
                ((0, g._3)({
                    questId: K.id,
                    questContent: f.jn.QUEST_LIVE_STREAM,
                    questContentCTA: g.jZ.LEARN_MORE
                }),
                (0, Z.navigateToQuestHome)(y.dr.QUEST_CHANNEL_CALL_HEADER, f.jn.QUEST_LIVE_STREAM, K.id));
        }, [K]),
        eu = (0, I.hf)({
            quest: K,
            location: f.jn.QUEST_LIVE_STREAM
        }),
        ec = s.useMemo(
            () =>
                (0, S.T)({
                    quest: K,
                    location: y.dr.QUEST_CHANNEL_CALL_HEADER
                }),
            [K]
        ),
        ed = (0, j.tP)(K);
    if (null == K) return null;
    let em = (null === (t = K.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        ex = (null === (n = K.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        eh = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_LIVE_STREAM),
        eC = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_BAR),
        ep = (0, v.Mi)(K, f.jn.QUEST_BAR) && !eC;
    ec.info({
        isQuestCallHeaderDismissed: eh,
        isQuestExpired: ed,
        isQuestBarShowing: ep,
        isCurrentUserCallParticipant: ei
    });
    let eg = null != Q && (null === (l = K.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null;
    if ((!eg && (eh || ed || ep)) || (!eg && !ei)) return null;
    let eE = (0, v.il)(K),
        ej = (0, i.jsx)(b.Z, {
            className: D.rewardTile,
            autoplay: O,
            quest: K,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER
        });
    return (0, i.jsx)(_.A, {
        questOrQuests: K,
        overrideVisibility: !z,
        questContent: f.jn.QUEST_LIVE_STREAM,
        children: () => {
            var e;
            return (0, i.jsxs)('div', {
                className: r()(D.wrapper, { [D.wrapperAccepted]: em }),
                onFocus: W,
                onMouseEnter: W,
                onBlur: G,
                onMouseLeave: G,
                children: [
                    !em &&
                        (0, i.jsxs)('div', {
                            className: D.rewardTileWrapper,
                            children: [
                                ej,
                                (0, i.jsx)(R.Z, {
                                    bgOpacity: 0.32,
                                    className: D.promotedTag
                                })
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: D.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.heading,
                                children: [
                                    em && et
                                        ? ej
                                        : (0, i.jsx)('img', {
                                              className: D.gameTile,
                                              alt: K.config.messages.gameTitle,
                                              src: (0, N.fh)(K, N.eC.GAME_TILE, X).url
                                          }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: D.headingWithSubmenu,
                                                children: [
                                                    (0, i.jsx)(u.Heading, {
                                                        className: D.questTitle,
                                                        variant: 'heading-md/semibold',
                                                        color: 'header-primary',
                                                        children: et
                                                            ? (0, v.AV)({
                                                                  quest: K,
                                                                  taskDetails: eE
                                                              })
                                                            : U.intl.formatToPlainString(U.t.EQa7oq, { questName: K.config.messages.questName })
                                                    }),
                                                    (0, i.jsx)(M.r, {
                                                        questContent: f.jn.QUEST_LIVE_STREAM,
                                                        quest: K,
                                                        preventIdle: !0,
                                                        shouldShowDisclosure: (null === (e = K.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                                                        children: (e) =>
                                                            (0, i.jsx)(u.Clickable, {
                                                                ...e,
                                                                className: D.submenuWrapper,
                                                                'aria-label': U.intl.string(U.t.DEoVWV),
                                                                children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    className: D.submenuIcon
                                                                })
                                                            })
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                color: 'header-secondary',
                                                variant: 'text-xs/medium',
                                                children: ex ? U.intl.formatToPlainString(U.t.APddvL, { expirationDate: el }) : U.intl.formatToPlainString(U.t['pX+fmp'], { expirationDate: es })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            em &&
                                !ex &&
                                !et &&
                                (0, i.jsx)(L.Z, {
                                    autoplay: O,
                                    quest: K,
                                    questContent: f.jn.QUEST_LIVE_STREAM,
                                    taskDetails: eE,
                                    location: y.dr.QUEST_CHANNEL_CALL_HEADER
                                }),
                            (0, i.jsxs)('div', {
                                className: D.ctas,
                                children: [
                                    !em &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(u.Button, {
                                                    className: D.cta,
                                                    color: u.Button.Colors.PRIMARY,
                                                    fullWidth: !0,
                                                    size: u.Button.Sizes.SMALL,
                                                    onClick: ea,
                                                    children: U.intl.string(U.t.LLLLPD)
                                                }),
                                                (0, i.jsx)(u.Button, {
                                                    className: D.cta,
                                                    color: u.Button.Colors.BRAND,
                                                    fullWidth: !0,
                                                    onClick: er,
                                                    size: u.Button.Sizes.SMALL,
                                                    submitting: en,
                                                    children: U.intl.string(U.t.l7E81t)
                                                })
                                            ]
                                        }),
                                    em &&
                                        !ex &&
                                        et &&
                                        (0, i.jsx)(A.Z, {
                                            color: u.tokens.colors.BG_BRAND,
                                            quest: K
                                        }),
                                    em &&
                                        !ex &&
                                        !et &&
                                        (0, i.jsx)(u.Button, {
                                            className: D.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eo,
                                            size: u.Button.Sizes.SMALL,
                                            children: U.intl.string(U.t.VN1Ajo)
                                        }),
                                    ex &&
                                        (0, i.jsx)(u.Button, {
                                            className: D.cta,
                                            color: u.Button.Colors.BRAND,
                                            fullWidth: !0,
                                            onClick: eu,
                                            size: u.Button.Sizes.SMALL,
                                            children: U.intl.string(U.t.cfY4PD)
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
