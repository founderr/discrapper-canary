n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    p = n(113434),
    f = n(569984),
    C = n(497505),
    _ = n(918701),
    v = n(475595),
    E = n(566078),
    S = n(164495),
    T = n(472144),
    g = n(644646),
    x = n(604162),
    N = n(747717),
    h = n(963123),
    I = n(46140),
    O = n(981631),
    b = n(689938),
    j = n(417575);
function L(e) {
    var t, n, a;
    let { transitionState: f, onClose: L, quest: B, autoplay: k } = e,
        y = (0, _.il)(B),
        P = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        R = (0, l.wj)(P) ? O.BRd.DARK : O.BRd.LIGHT,
        D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        M = o.useRef(null),
        [A, Z] = o.useState(y.progressSeconds),
        [U, G] = o.useState(!1),
        { completedRatio: V, completedRatioDisplay: F } = (0, p.I)(B),
        [w, H] = (0, x.G6)(b.Z.Messages.COPY_LINK, b.Z.Messages.LINK_COPIED, 1700),
        Q = (null === (t = B.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? b.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD : b.Z.Messages.QUESTS_CLAIM_REWARD,
        z = o.useCallback(() => {
            (0, _.f2)(B.id, {
                content: C.jn.QUEST_SHARE_LINK,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                H();
        }, [B.id, H]),
        Y = o.useMemo(() => E.r.build(B.config).defaultReward.messages.name, [B]),
        W = b.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({ rewardName: Y });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)('div', {
            ref: M,
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
                                                (0, _.FE)(B, {
                                                    content: C.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                                    ctaContent: m.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                                });
                                            },
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: B.config.messages.gameTitle,
                                                    className: i()(j.contentHeaderLogotype, j.accentOnHover),
                                                    src: (0, v.fh)(B, v.Bd.LOGO_TYPE, R).url
                                                }),
                                                (0, r.jsx)(N.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: j.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: b.Z.Messages.QUESTS_TITLE.format({ questName: B.config.messages.questName })
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
                                            text: W,
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
                                                            questContent: C.jn.QUEST_BAR_V2,
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
                                        autoplay: k
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
                                                    onClick: L,
                                                    color: c.Button.Colors.PRIMARY,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    children: b.Z.Messages.CLOSE
                                                }),
                                                (0, r.jsx)(S.i0, {
                                                    className: j.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: B,
                                                    useReducedMotion: D,
                                                    isExpanded: (null === (n = B.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
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
    let { questId: t, autoplay: n, ...o } = e,
        a = (0, s.e7)([f.Z], () => f.Z.getQuest(t));
    return null != a
        ? (0, r.jsx)(L, {
              ...o,
              quest: a,
              autoplay: n
          })
        : null;
}
