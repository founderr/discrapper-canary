n.r(t),
    n.d(t, {
        default: function () {
            return B;
        }
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    p = n(113434),
    f = n(569984),
    v = n(497505),
    C = n(918701),
    g = n(475595),
    x = n(566078),
    h = n(164495),
    S = n(472144),
    E = n(644646),
    b = n(604162),
    j = n(747717),
    N = n(963123),
    _ = n(46140),
    T = n(981631),
    I = n(388032),
    k = n(417575);
function y(e) {
    var t, n, i;
    let { transitionState: f, onClose: y, quest: B, autoplay: A } = e,
        L = (0, C.il)(B),
        P = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        D = (0, s.wj)(P) ? T.BRd.DARK : T.BRd.LIGHT,
        R = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        M = o.useRef(null),
        [O, w] = o.useState(L.progressSeconds),
        [F, Z] = o.useState(!1),
        { completedRatio: G, completedRatioDisplay: H } = (0, p.I)(B),
        [U, V] = (0, b.G6)(I.intl.string(I.t.WqhZsr), I.intl.string(I.t['+5kSoa']), 1700),
        z = (null === (t = B.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? I.intl.string(I.t.vTgCW1) : I.intl.string(I.t.cfY4PD),
        q = o.useCallback(() => {
            (0, C.f2)(B.id, {
                content: v.jn.QUEST_SHARE_LINK,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                V();
        }, [B.id, V]),
        Y = o.useMemo(() => x.r.build(B.config).defaultReward.messages.name, [B]),
        W = I.intl.formatToPlainString(I.t['12IWPz'], { rewardName: Y });
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)('div', {
            ref: M,
            children: (0, r.jsx)(c.ModalRoot, {
                transitionState: f,
                size: c.ModalSize.LARGE,
                className: k.modalRoot,
                children: (0, r.jsx)('div', {
                    className: k.modalBg,
                    children: (0, r.jsx)('div', {
                        className: k.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: k.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: k.contentHeader,
                                    children: [
                                        (0, r.jsxs)(c.Clickable, {
                                            className: k.contentHeaderGameInfo,
                                            onClick: () => {
                                                (0, C.FE)(B, {
                                                    content: v.jn.VIDEO_QUEST_VIDEO_PLAYER,
                                                    ctaContent: m.jZ.VIDEO_QUEST_VIDEO_PLAYER_HEADER_GAME_LINK
                                                });
                                            },
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: B.config.messages.gameTitle,
                                                    className: l()(k.contentHeaderLogotype, k.accentOnHover),
                                                    src: (0, g.fh)(B, g.eC.LOGO_TYPE, D).url
                                                }),
                                                (0, r.jsx)(j.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: k.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: I.intl.format(I.t.EQa7oq, { questName: B.config.messages.questName })
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
                                                Z(!0);
                                            },
                                            onTooltipHide: () => {
                                                Z(!1);
                                            },
                                            children: (e) =>
                                                (0, r.jsx)(c.Clickable, {
                                                    className: k.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(S.Z, {
                                                        quest: B,
                                                        size: 48,
                                                        percentComplete: G,
                                                        percentCompleteText: F ? H : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(E.Z, {
                                                            className: k.questProgressRewardTile,
                                                            quest: B,
                                                            questContent: v.jn.QUEST_BAR_V2,
                                                            autoplay: !1,
                                                            location: _.dr.VIDEO_QUEST_VIDEO_PLAYER_HEADER
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: k.videoPanel,
                                    children: (0, r.jsx)(N.Z, {
                                        quest: B,
                                        parentTransitionState: f,
                                        onOptimisticProgressUpdate: w,
                                        autoplay: A
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    className: k.contentFooter,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: q,
                                            size: c.Button.Sizes.MEDIUM,
                                            className: k.copyLinkBtn,
                                            children: U
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: k.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(c.Button, {
                                                    onClick: y,
                                                    color: c.Button.Colors.PRIMARY,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    children: I.intl.string(I.t.cpT0Cg)
                                                }),
                                                (0, r.jsx)(h.i0, {
                                                    className: k.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: B,
                                                    useReducedMotion: R,
                                                    isExpanded: (null === (n = B.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                                    disabled: (null === (i = B.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                                    ctaLabel: z
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
        i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
    return null != i
        ? (0, r.jsx)(y, {
              ...o,
              quest: i,
              autoplay: n
          })
        : null;
}
