n.r(t),
    n.d(t, {
        default: function () {
            return O;
        }
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(442837),
    s = n(780384),
    l = n(481060),
    i = n(607070),
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
    T = n(644646),
    S = n(747717),
    g = n(963123),
    x = n(46140),
    N = n(981631),
    h = n(689938),
    I = n(417575);
function L(e) {
    var t, n, m;
    let { transitionState: L, onClose: O, quest: j, autoplay: b } = e,
        B = (0, f.il)(j),
        P = (0, a.e7)([c.Z], () => c.Z.getState().theme),
        k = (0, s.wj)(P) ? N.BRd.DARK : N.BRd.LIGHT,
        R = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
        y = o.useRef(null),
        [D, A] = o.useState(B.progressSeconds),
        [M, Z] = o.useState(!1),
        { completedRatio: U, completedRatioDisplay: G } = (0, d.I)(j),
        V = (null === (t = j.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? h.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD : h.Z.Messages.QUESTS_CLAIM_REWARD,
        w = o.useCallback(() => {
            (0, f.f2)(j.id, {
                content: p.jn.QUEST_SHARE_LINK,
                ctaContent: u.jZ.COPY_QUEST_URL
            }),
                (0, l.showToast)((0, l.createToast)(h.Z.Messages.COPIED_LINK, l.ToastType.LINK));
        }, [j.id]),
        F = o.useMemo(() => _.r.build(j.config).defaultReward.messages.name, [j]),
        H = h.Z.Messages.QUESTS_VIDEO_REWARD_TOOLTIP.format({ rewardName: F });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)('div', {
            ref: y,
            children: (0, r.jsx)(l.ModalRoot, {
                transitionState: L,
                size: l.ModalSize.LARGE,
                className: I.modalRoot,
                children: (0, r.jsx)('div', {
                    className: I.modalBg,
                    children: (0, r.jsx)('div', {
                        className: I.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: I.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: I.contentHeader,
                                    children: [
                                        (0, r.jsxs)(l.Clickable, {
                                            className: I.contentHeaderGameInfo,
                                            onClick: () => {
                                                (0, f.FE)(j, {
                                                    content: p.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                                    ctaContent: u.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                                });
                                            },
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: j.config.messages.gameTitle,
                                                    className: I.contentHeaderLogotype,
                                                    src: (0, C.fh)(j, C.Bd.LOGO_TYPE, k).url
                                                }),
                                                (0, r.jsx)(S.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: I.questHeading,
                                                    children: [
                                                        (0, r.jsx)(l.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: h.Z.Messages.QUESTS_TITLE.format({ questName: j.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(l.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: j.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(l.Tooltip, {
                                            position: 'left',
                                            text: H,
                                            onTooltipShow: () => {
                                                Z(!0);
                                            },
                                            onTooltipHide: () => {
                                                Z(!1);
                                            },
                                            children: (e) =>
                                                (0, r.jsx)(l.Clickable, {
                                                    className: I.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(v.Z, {
                                                        quest: j,
                                                        size: 48,
                                                        percentComplete: U,
                                                        percentCompleteText: M ? G : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(T.Z, {
                                                            className: I.questProgressRewardTile,
                                                            quest: j,
                                                            questContent: p.jn.QUEST_BAR_V2,
                                                            autoplay: !1,
                                                            location: x.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: I.videoPanel,
                                    children: (0, r.jsx)(g.Z, {
                                        quest: j,
                                        parentTransitionState: L,
                                        onOptimisticProgressUpdate: A,
                                        onClose: O,
                                        autoplay: b
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.contentFooter,
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            color: l.Button.Colors.PRIMARY,
                                            onClick: w,
                                            children: h.Z.Messages.COPY_LINK
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: I.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(l.Button, {
                                                    onClick: O,
                                                    color: l.Button.Colors.PRIMARY,
                                                    size: l.Button.Sizes.MEDIUM,
                                                    children: h.Z.Messages.CLOSE
                                                }),
                                                (0, r.jsx)(E.i0, {
                                                    className: I.claimBtn,
                                                    size: l.Button.Sizes.MEDIUM,
                                                    quest: j,
                                                    useReducedMotion: R,
                                                    isExpanded: (null === (n = j.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                                    disabled: (null === (m = j.userStatus) || void 0 === m ? void 0 : m.completedAt) == null,
                                                    ctaLabel: V
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
function O(e) {
    let { questId: t, autoplay: n, ...o } = e,
        s = (0, a.e7)([m.Z], () => m.Z.getQuest(t));
    return null != s
        ? (0, r.jsx)(L, {
              ...o,
              quest: s,
              autoplay: n
          })
        : null;
}
