var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(212433),
    s = n(91192),
    l = n(442837),
    u = n(780384),
    c = n(481060),
    d = n(287734),
    _ = n(872810),
    E = n(393238),
    f = n(40851),
    h = n(607070),
    p = n(258609),
    m = n(382182),
    I = n(210887),
    T = n(592125),
    g = n(430824),
    S = n(496675),
    A = n(979651),
    v = n(617136),
    N = n(113434),
    O = n(497505),
    R = n(475595),
    C = n(602667),
    y = n(644646),
    L = n(667105),
    b = n(341907),
    D = n(46140),
    M = n(981631),
    P = n(231338),
    U = n(689938),
    w = n(242468);
let x = '4px',
    G = '11px',
    k = 222;
function B(e, t) {
    return null != e && null != t && (0, m.p9)(t, A.Z, g.Z, S.Z, p.Z)[0];
}
function F(e) {
    var t, r, p;
    let { quest: m, memberListItemRef: g, applicationStream: S, position: A, closePopout: F, updatePosition: Z } = e,
        V = (0, l.e7)([T.Z], () => {
            var e;
            return null !== (e = T.Z.getChannel(null == S ? void 0 : S.channelId)) && void 0 !== e ? e : null;
        }),
        H = (0, L.hf)({
            quest: m,
            location: O.jn.MEMBERS_LIST
        }),
        Y = (0, N.tP)(m),
        j = (null == m ? void 0 : null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        W = (null == m ? void 0 : null === (r = m.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null,
        K = (null == m ? void 0 : null === (p = m.userStatus) || void 0 === p ? void 0 : p.completedAt) != null,
        z = (0, l.e7)([I.Z], () => I.Z.getState().theme),
        q = (0, u.wj)(z) ? P.BR.DARK : P.BR.LIGHT,
        Q = (0, l.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: X, height: $ } = (0, E.Z)(),
        [J, ee] = a.useState(Q),
        et = (0, f.Aq)(),
        en = (0, s.eg)();
    a.useEffect(() => {
        let e = en.current;
        return (
            null == e || e.addEventListener('scroll', F),
            () => {
                null == e || e.removeEventListener('scroll', F);
            }
        );
    }, [F, en]),
        a.useEffect(() => {
            let e = en.current,
                t = g.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => Z());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [g, en, Z]);
    let er = (0, c.useSpring)({
            from: { height: 0 },
            height: null != $ ? $ : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => ee(!0)
        }),
        ei = (0, c.useTransition)(J, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }),
        ea = () => {
            et.dispatch(M.CkL.POPOUT_CLOSE);
        },
        eo = 'top' === A ? ''.concat(x, ' ').concat(x, ' 0 0') : '0 0 '.concat(x, ' ').concat(x);
    if (null == m || Y || (j && !B(S, V))) return null;
    let es = () => {
            (0, v._3)({
                questId: m.id,
                questContent: O.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('4266').then(n.bind(n, 316210));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            questContent: O.jn.MEMBERS_LIST,
                            quest: m
                        });
                });
        },
        el = () => {
            (0, v._3)({
                questId: m.id,
                questContent: O.jn.MEMBERS_LIST,
                questContentCTA: v.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0
            }),
                (0, b.navigateToQuestHome)(D.dr.MEMBERS_LIST, O.jn.MEMBERS_LIST, m.id);
        },
        eu = (e) => {
            e.stopPropagation(), es();
        },
        ec = () => {
            if (B(S, V) && null != V)
                return (
                    (0, v._3)({
                        questId: m.id,
                        questContent: O.jn.MEMBERS_LIST,
                        questContentCTA: v.jZ.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }),
                    d.default.selectVoiceChannel(V.id),
                    (0, _.iV)(S)
                );
            el();
        },
        ed = (() =>
            K && !j
                ? {
                      headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                      ctaText: U.Z.Messages.QUESTS_CLAIM_REWARD,
                      handleClickCta: H,
                      tileAssetType: 'reward'
                  }
                : W && !j
                  ? {
                        headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_FINISH,
                        ctaText: U.Z.Messages.QUESTS_CHECK_PROGRESS,
                        handleClickCta: el,
                        tileAssetType: 'reward'
                    }
                  : B(S, V)
                    ? {
                          headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                          ctaText: U.Z.Messages.QUESTS_JOIN_ME,
                          handleClickCta: ec,
                          tileAssetType: 'game'
                      }
                    : {
                          headerText: U.Z.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                          ctaText: U.Z.Messages.QUESTS_UNLOCK_REWARDS,
                          handleClickCta: el,
                          tileAssetType: 'game'
                      })();
    return (0, i.jsx)(C.A, {
        questOrQuests: m,
        questContent: O.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(o.animated.div, {
                ref: (t) => {
                    e.current = t;
                },
                'aria-expanded': J,
                className: w.wrapper,
                style: {
                    width: null !== (n = null === (t = g.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== n ? n : k,
                    height: er.height,
                    overflow: J ? 'visible' : 'hidden',
                    borderRadius: eo
                },
                children: (0, i.jsxs)('div', {
                    ref: (e) => {
                        X.current = e;
                    },
                    className: w.container,
                    style: { borderRadius: eo },
                    children: [
                        (0, i.jsxs)('div', {
                            className: w.top,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: w.left,
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: ed.headerText
                                        }),
                                        (0, i.jsxs)(c.Clickable, {
                                            className: w.help,
                                            onClick: (e) => {
                                                ea(), eu(e);
                                            },
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    className: w.helpText,
                                                    children: U.Z.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({ gamePublisher: m.config.messages.gamePublisher })
                                                }),
                                                (0, i.jsx)(c.CircleQuestionIcon, {
                                                    size: 'custom',
                                                    className: w.helpIcon,
                                                    width: G,
                                                    height: G,
                                                    color: c.tokens.colors.INTERACTIVE_NORMAL
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    className: w.right,
                                    children: (0, i.jsxs)('div', {
                                        className: w.imgWrapper,
                                        children: [
                                            ei(
                                                (e, t) =>
                                                    t &&
                                                    (0, i.jsx)(o.animated.div, {
                                                        style: e,
                                                        className: w.imgUnderlay
                                                    })
                                            ),
                                            'game' === ed.tileAssetType &&
                                                (0, i.jsx)('img', {
                                                    alt: U.Z.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                                        gameTitle: m.config.messages.gameTitle,
                                                        gamePublisher: m.config.messages.gamePublisher
                                                    }),
                                                    className: w.assetTile,
                                                    src: (0, R.fh)(m, R.Bd.GAME_TILE, q).url
                                                }),
                                            'reward' === ed.tileAssetType &&
                                                (0, i.jsx)(y.Z, {
                                                    className: w.assetTile,
                                                    quest: m,
                                                    questContent: O.jn.MEMBERS_LIST,
                                                    learnMoreStyle: 'icon',
                                                    location: D.dr.MEMBERS_LIST,
                                                    onClick: ea
                                                })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Button, {
                            onClick: () => {
                                ea(), ed.handleClickCta();
                            },
                            color: c.Button.Colors.CUSTOM,
                            className: w.ctaButton,
                            children: ed.ctaText
                        })
                    ]
                })
            });
        }
    });
}
t.Z = F;
