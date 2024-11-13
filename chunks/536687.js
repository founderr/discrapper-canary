n.r(t),
    n.d(t, {
        default: function () {
            return k;
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
    E = n(472144),
    S = n(602667),
    _ = n(644646),
    T = n(604162),
    N = n(747717),
    j = n(963123),
    I = n(281055),
    b = n(46140),
    D = n(981631),
    y = n(388032),
    B = n(417575);
function A(e) {
    var t;
    let { transitionState: n, onClose: i, quest: f, autoplay: A } = e,
        k = (0, C.il)(f),
        L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, s.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
        M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [O, R] = o.useState(k.progressSeconds),
        [w, F] = o.useState(!1),
        { completedRatio: Z, completedRatioDisplay: U } = (0, p.I)(f),
        [G, V] = (0, T.G6)(y.intl.string(y.t.RDE0SU), y.intl.string(y.t['+5kSoa']), 1700),
        q = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? y.intl.string(y.t.vTgCW1) : y.intl.string(y.t.cfY4PD),
        H = o.useCallback(() => {
            (0, C.f2)(f.id, {
                content: v.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                V();
        }, [f.id, V]),
        z = () => {
            (0, C.FE)(f, {
                content: v.jn.VIDEO_MODAL,
                ctaContent: m.jZ.OPEN_GAME_LINK
            });
        },
        Y = () => {
            F(!0);
        },
        W = () => {
            F(!1);
        },
        Q = o.useMemo(() => x.r.build(f.config).defaultReward.messages.name, [f]),
        K = y.intl.formatToPlainString(y.t['12IWPz'], { rewardName: Q });
    return (0, r.jsx)(c.ModalRoot, {
        transitionState: n,
        size: c.ModalSize.DYNAMIC,
        className: B.modalRoot,
        children: (0, r.jsx)(S.A, {
            questOrQuests: f,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: I.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
                var t, o;
                return (0, r.jsx)('div', {
                    ref: (t) => {
                        e.current = t;
                    },
                    className: B.modalBg,
                    children: (0, r.jsx)('div', {
                        className: B.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: B.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: B.contentHeader,
                                    children: [
                                        (0, r.jsxs)(c.Clickable, {
                                            className: B.contentHeaderGameInfo,
                                            onClick: z,
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: f.config.messages.gameTitle,
                                                    className: l()(B.contentHeaderLogotype, B.accentOnHover),
                                                    src: (0, g.fh)(f, g.eC.LOGO_TYPE, P).url
                                                }),
                                                (0, r.jsx)(N.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: B.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: y.intl.format(y.t.EQa7oq, { questName: f.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: f.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(c.Tooltip, {
                                            position: 'left',
                                            text: K,
                                            onTooltipShow: Y,
                                            onTooltipHide: W,
                                            children: (e) =>
                                                (0, r.jsx)(c.Clickable, {
                                                    className: B.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(E.Z, {
                                                        quest: f,
                                                        size: 48,
                                                        percentComplete: Z,
                                                        percentCompleteText: w ? U : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: B.questProgressRewardTile,
                                                            quest: f,
                                                            questContent: v.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: b.dr.VIDEO_MODAL
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(j.Z, {
                                    quest: f,
                                    parentTransitionState: n,
                                    onOptimisticProgressUpdate: R,
                                    autoplay: A
                                }),
                                (0, r.jsxs)('div', {
                                    className: B.contentFooter,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            onClick: i,
                                            color: c.Button.Colors.PRIMARY,
                                            size: c.Button.Sizes.MEDIUM,
                                            children: y.intl.string(y.t.cpT0Cg)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: B.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(c.Button, {
                                                    color: c.Button.Colors.PRIMARY,
                                                    onClick: H,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    className: B.copyLinkBtn,
                                                    children: G
                                                }),
                                                (0, r.jsx)(h.i0, {
                                                    className: B.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: f,
                                                    useReducedMotion: M,
                                                    isExpanded: (null === (t = f.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                                    disabled: (null === (o = f.userStatus) || void 0 === o ? void 0 : o.completedAt) == null,
                                                    ctaLabel: q
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                });
            }
        })
    });
}
function k(e) {
    let { questId: t, autoplay: n, ...o } = e,
        i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
    return null != i
        ? (0, r.jsx)(A, {
              ...o,
              quest: i,
              autoplay: n
          })
        : null;
}
