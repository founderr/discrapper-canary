n(47120);
var r = n(735250),
    i = n(470079),
    a = n(212433),
    s = n(91192),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(287734),
    d = n(872810),
    _ = n(393238),
    E = n(40851),
    f = n(607070),
    h = n(258609),
    p = n(382182),
    I = n(210887),
    m = n(592125),
    T = n(430824),
    S = n(496675),
    g = n(979651),
    A = n(617136),
    N = n(113434),
    R = n(497505),
    O = n(475595),
    v = n(602667),
    C = n(644646),
    L = n(667105),
    y = n(341907),
    D = n(46140),
    b = n(981631),
    M = n(231338),
    P = n(689938),
    U = n(242468);
let w = '11px';
function x(e, t) {
    return null != e && null != t && (0, p.p9)(t, g.Z, T.Z, S.Z, h.Z)[0];
}
t.Z = function (e) {
    var t, n, h;
    let { quest: p, memberListItemRef: T, applicationStream: S, position: g, closePopout: G, updatePosition: k } = e,
        B = (0, o.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getChannel(null == S ? void 0 : S.channelId)) && void 0 !== e ? e : null;
        }),
        F = (0, L.hf)({
            quest: p,
            location: R.jn.MEMBERS_LIST
        }),
        V = (0, N.tP)(p),
        H = (null == p ? void 0 : null === (t = p.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        Z = (null == p ? void 0 : null === (n = p.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        Y = (null == p ? void 0 : null === (h = p.userStatus) || void 0 === h ? void 0 : h.completedAt) != null,
        j = (0, o.e7)([I.Z], () => I.Z.getState().theme),
        W = (0, l.wj)(j) ? M.BR.DARK : M.BR.LIGHT,
        K = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
        { ref: z, height: q } = (0, _.Z)(),
        [Q, X] = i.useState(K),
        $ = (0, E.Aq)(),
        J = (0, s.eg)();
    i.useEffect(() => {
        let e = J.current;
        return (
            null == e || e.addEventListener('scroll', G),
            () => {
                null == e || e.removeEventListener('scroll', G);
            }
        );
    }, [G, J]),
        i.useEffect(() => {
            let e = J.current,
                t = T.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => k());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [T, J, k]);
    let ee = (0, u.useSpring)({
            from: { height: 0 },
            height: null != q ? q : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => X(!0)
        }),
        et = (0, u.useTransition)(Q, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        en = () => {
            $.dispatch(b.CkL.POPOUT_CLOSE);
        },
        er = 'top' === g ? ''.concat('4px', ' ').concat('4px', ' 0 0') : '0 0 '.concat('4px', ' ').concat('4px');
    if (null == p || V || (H && !x(S, B))) return null;
    let ei = () => {
            (0, A._3)({
                questId: p.id,
                questContent: R.jn.MEMBERS_LIST,
                questContentCTA: A.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, y.openDisclosureModal)(p, {
                    content: R.jn.MEMBERS_LIST,
                    ctaContent: A.jZ.OPEN_DISCLOSURE
                });
        },
        ea = () => {
            (0, A._3)({
                questId: p.id,
                questContent: R.jn.MEMBERS_LIST,
                questContentCTA: A.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, y.navigateToQuestHome)(D.dr.MEMBERS_LIST, R.jn.MEMBERS_LIST, p.id);
        },
        es = (e) => {
            e.stopPropagation(), ei();
        },
        eo = () => {
            if (x(S, B) && null != B)
                return (
                    (0, A._3)({
                        questId: p.id,
                        questContent: R.jn.MEMBERS_LIST,
                        questContentCTA: A.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    c.default.selectVoiceChannel(B.id),
                    (0, d.iV)(S)
                );
            ea();
        },
        el =
            Y && !H
                ? {
                      headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                      ctaText: P.Z.Messages.QUESTS_CLAIM_REWARD,
                      handleClickCta: F,
                      tileAssetType: 'reward'
                  }
                : Z && !H
                  ? {
                        headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
                        ctaText: P.Z.Messages.QUESTS_CHECK_PROGRESS,
                        handleClickCta: ea,
                        tileAssetType: 'reward'
                    }
                  : x(S, B)
                    ? {
                          headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                          ctaText: P.Z.Messages.QUESTS_JOIN_ME,
                          handleClickCta: eo,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: P.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                          ctaText: P.Z.Messages.QUESTS_UNLOCK_REWARDS,
                          handleClickCta: ea,
                          tileAssetType: 'game'
                      };
    return (0, r.jsx)(v.A, {
        questOrQuests: p,
        questContent: R.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(a.animated.div, {
                ref: (t) => {
                    e.current = t;
                },
                'aria-expanded': Q,
                className: U.wrapper,
                style: {
                    width: null !== (n = null === (t = T.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : 222,
                    height: ee.height,
                    overflow: Q ? 'visible' : 'hidden',
                    borderRadius: er
                },
                children: (0, r.jsxs)('div', {
                    ref: (e) => {
                        z.current = e;
                    },
                    className: U.container,
                    style: { borderRadius: er },
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.top,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: U.left,
                                    children: [
                                        (0, r.jsx)(u.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: el.headerText
                                        }),
                                        (0, r.jsxs)(u.Clickable, {
                                            className: U.help,
                                            onClick: (e) => {
                                                en(), es(e);
                                            },
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    className: U.helpText,
                                                    children: P.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({ gamePublisher: p.config.messages.gamePublisher })
                                                }),
                                                (0, r.jsx)(u.CircleQuestionIcon, {
                                                    size: 'custom',
                                                    className: U.helpIcon,
                                                    width: w,
                                                    height: w,
                                                    color: u.tokens.colors.INTERACTIVE_NORMAL
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: U.right,
                                    children: (0, r.jsxs)('div', {
                                        className: U.imgWrapper,
                                        children: [
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, r.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: U.imgUnderlay
                                                    })
                                            ),
                                            'game' === el.tileAssetType &&
                                                (0, r.jsx)('img', {
                                                    alt: P.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                                        gameTitle: p.config.messages.gameTitle,
                                                        gamePublisher: p.config.messages.gamePublisher
                                                    }),
                                                    className: U.assetTile,
                                                    src: (0, O.fh)(p, O.Bd.GAME_TILE, W).url
                                                }),
                                            'reward' === el.tileAssetType &&
                                                (0, r.jsx)(C.Z, {
                                                    className: U.assetTile,
                                                    quest: p,
                                                    questContent: R.jn.MEMBERS_LIST,
                                                    learnMoreStyle: 'icon',
                                                    location: D.dr.MEMBERS_LIST,
                                                    onClick: en
                                                })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.Button, {
                            onClick: () => {
                                en(), el.handleClickCta();
                            },
                            color: u.Button.Colors.CUSTOM,
                            className: U.ctaButton,
                            children: el.ctaText
                        })
                    ]
                })
            });
        }
    });
};
