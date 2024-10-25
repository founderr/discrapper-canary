n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(442837),
    s = n(780384),
    i = n(481060),
    l = n(607070),
    c = n(210887),
    u = n(617136),
    d = n(113434),
    m = n(569984),
    p = n(497505),
    f = n(918701),
    C = n(475595),
    _ = n(566078),
    E = n(164495),
    v = n(472144),
    S = n(644646),
    T = n(604162),
    g = n(747717),
    x = n(963123),
    N = n(46140),
    h = n(981631),
    I = n(689938),
    L = n(417575);
function O(e) {
    var t, n, m;
    let { transitionState: O, onClose: j, quest: b, autoplay: B } = e,
        P = (0, f.il)(b),
        k = (0, a.e7)([c.Z], () => c.Z.getState().theme),
        y = (0, s.wj)(k) ? h.BRd.DARK : h.BRd.LIGHT,
        R = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        D = o.useRef(null),
        [A, M] = o.useState(P.progressSeconds),
        [Z, U] = o.useState(!1),
        { completedRatio: G, completedRatioDisplay: V } = (0, d.I)(b),
        [F, w] = (0, T.G6)(I.Z.Messages.COPY_LINK, I.Z.Messages.LINK_COPIED, 1700),
        H = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? I.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD : I.Z.Messages.QUESTS_CLAIM_REWARD,
        Q = o.useCallback(() => {
            (0, f.f2)(b.id, {
                content: p.jn.QUEST_SHARE_LINK,
                ctaContent: u.jZ.COPY_QUEST_URL
            }),
                w();
        }, [b.id, w]),
        z = o.useMemo(() => _.r.build(b.config).defaultReward.messages.name, [b]),
        W = I.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({ rewardName: z });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)('div', {
            ref: D,
            children: (0, r.jsx)(i.ModalRoot, {
                transitionState: O,
                size: i.ModalSize.LARGE,
                className: L.modalRoot,
                children: (0, r.jsx)('div', {
                    className: L.modalBg,
                    children: (0, r.jsx)('div', {
                        className: L.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: L.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: L.contentHeader,
                                    children: [
                                        (0, r.jsxs)(i.Clickable, {
                                            className: L.contentHeaderGameInfo,
                                            onClick: () => {
                                                (0, f.FE)(b, {
                                                    content: p.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                                    ctaContent: u.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                                });
                                            },
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: b.config.messages.gameTitle,
                                                    className: L.contentHeaderLogotype,
                                                    src: (0, C.fh)(b, C.Bd.LOGO_TYPE, y).url
                                                }),
                                                (0, r.jsx)(g.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: L.questHeading,
                                                    children: [
                                                        (0, r.jsx)(i.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: I.Z.Messages.QUESTS_TITLE.format({ questName: b.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(i.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: b.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(i.Tooltip, {
                                            position: 'left',
                                            text: W,
                                            onTooltipShow: () => {
                                                U(!0);
                                            },
                                            onTooltipHide: () => {
                                                U(!1);
                                            },
                                            children: (e) =>
                                                (0, r.jsx)(i.Clickable, {
                                                    className: L.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(v.Z, {
                                                        quest: b,
                                                        size: 48,
                                                        percentComplete: G,
                                                        percentCompleteText: Z ? V : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(S.Z, {
                                                            className: L.questProgressRewardTile,
                                                            quest: b,
                                                            questContent: p.jn.QUEST_BAR_V2,
                                                            autoplay: !1,
                                                            location: N.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: L.videoPanel,
                                    children: (0, r.jsx)(x.Z, {
                                        quest: b,
                                        parentTransitionState: O,
                                        onOptimisticProgressUpdate: M,
                                        onClose: j,
                                        autoplay: B
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: L.contentFooter,
                                    children: [
                                        (0, r.jsx)(i.Button, {
                                            color: i.Button.Colors.PRIMARY,
                                            onClick: Q,
                                            size: i.Button.Sizes.MEDIUM,
                                            className: L.copyLinkBtn,
                                            children: F
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: L.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(i.Button, {
                                                    onClick: j,
                                                    color: i.Button.Colors.PRIMARY,
                                                    size: i.Button.Sizes.MEDIUM,
                                                    children: I.Z.Messages.CLOSE
                                                }),
                                                (0, r.jsx)(E.i0, {
                                                    className: L.claimBtn,
                                                    size: i.Button.Sizes.MEDIUM,
                                                    quest: b,
                                                    useReducedMotion: R,
                                                    isExpanded: (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                                    disabled: (null === (m = b.userStatus) || void 0 === m ? void 0 : m.completedAt) == null,
                                                    ctaLabel: H
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
function j(e) {
    let { questId: t, autoplay: n, ...o } = e,
        s = (0, a.e7)([m.Z], () => m.Z.getQuest(t));
    return null != s
        ? (0, r.jsx)(O, {
              ...o,
              quest: s,
              autoplay: n
          })
        : null;
}
