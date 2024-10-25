t.r(n),
    t.d(n, {
        default: function () {
            return B;
        }
    }),
    t(47120);
var r = t(200651),
    o = t(192379),
    a = t(120356),
    s = t.n(a),
    i = t(442837),
    l = t(780384),
    c = t(481060),
    u = t(607070),
    d = t(210887),
    m = t(617136),
    p = t(113434),
    f = t(569984),
    _ = t(497505),
    C = t(918701),
    E = t(475595),
    v = t(566078),
    S = t(164495),
    T = t(472144),
    g = t(644646),
    x = t(604162),
    N = t(747717),
    h = t(963123),
    I = t(46140),
    L = t(981631),
    O = t(689938),
    j = t(417575);
function b(e) {
    var n, t, a;
    let { transitionState: f, onClose: b, quest: B, autoplay: P } = e,
        k = (0, C.il)(B),
        y = (0, i.e7)([d.Z], () => d.Z.getState().theme),
        R = (0, l.wj)(y) ? L.BRd.DARK : L.BRd.LIGHT,
        D = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        A = o.useRef(null),
        [M, Z] = o.useState(k.progressSeconds),
        [U, G] = o.useState(!1),
        { completedRatio: V, completedRatioDisplay: F } = (0, p.I)(B),
        [w, H] = (0, x.G6)(O.Z.Messages.COPY_LINK, O.Z.Messages.LINK_COPIED, 1700),
        Q = (null === (n = B.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null ? O.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD : O.Z.Messages.QUESTS_CLAIM_REWARD,
        z = o.useCallback(() => {
            (0, C.f2)(B.id, {
                content: _.jn.QUEST_SHARE_LINK,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                H();
        }, [B.id, H]),
        W = o.useMemo(() => v.r.build(B.config).defaultReward.messages.name, [B]),
        Y = O.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({ rewardName: W });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)('div', {
            ref: A,
            children: (0, r.jsx)(c.ModalRoot, {
                transitionState: f,
                size: c.ModalSize.LARGE,
                className: j.modalRoot,
                children: (0, r.jsx)('div', {
                    className: j.modalBg,
                    children: (0, r.jsx)('div', {
                        className: j.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: j.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: j.contentHeader,
                                    children: [
                                        (0, r.jsxs)(c.Clickable, {
                                            className: j.contentHeaderGameInfo,
                                            onClick: () => {
                                                (0, C.FE)(B, {
                                                    content: _.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                                    ctaContent: m.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                                });
                                            },
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: B.config.messages.gameTitle,
                                                    className: s()(j.contentHeaderLogotype, j.accentOnHover),
                                                    src: (0, E.fh)(B, E.Bd.LOGO_TYPE, R).url
                                                }),
                                                (0, r.jsx)(N.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: j.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: O.Z.Messages.QUESTS_TITLE.format({ questName: B.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: B.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(c.Tooltip, {
                                            position: 'left',
                                            text: Y,
                                            onTooltipShow: () => {
                                                G(!0);
                                            },
                                            onTooltipHide: () => {
                                                G(!1);
                                            },
                                            children: (e) =>
                                                (0, r.jsx)(c.Clickable, {
                                                    className: j.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(T.Z, {
                                                        quest: B,
                                                        size: 48,
                                                        percentComplete: V,
                                                        percentCompleteText: U ? F : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(g.Z, {
                                                            className: j.questProgressRewardTile,
                                                            quest: B,
                                                            questContent: _.jn.QUEST_BAR_V2,
                                                            autoplay: !1,
                                                            location: I.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: j.videoPanel,
                                    children: (0, r.jsx)(h.Z, {
                                        quest: B,
                                        parentTransitionState: f,
                                        onOptimisticProgressUpdate: Z,
                                        onClose: b,
                                        autoplay: P
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: j.contentFooter,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: z,
                                            size: c.Button.Sizes.MEDIUM,
                                            className: j.copyLinkBtn,
                                            children: w
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: j.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(c.Button, {
                                                    onClick: b,
                                                    color: c.Button.Colors.PRIMARY,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    children: O.Z.Messages.CLOSE
                                                }),
                                                (0, r.jsx)(S.i0, {
                                                    className: j.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: B,
                                                    useReducedMotion: D,
                                                    isExpanded: (null === (t = B.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                                    disabled: (null === (a = B.userStatus) || void 0 === a ? void 0 : a.completedAt) == null,
                                                    ctaLabel: Q
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
function B(e) {
    let { questId: n, autoplay: t, ...o } = e,
        a = (0, i.e7)([f.Z], () => f.Z.getQuest(n));
    return null != a
        ? (0, r.jsx)(b, {
              ...o,
              quest: a,
              autoplay: t
          })
        : null;
}
