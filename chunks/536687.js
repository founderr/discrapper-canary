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
    S = n(164495),
    E = n(472144),
    h = n(602667),
    _ = n(644646),
    T = n(604162),
    I = n(747717),
    N = n(963123),
    j = n(281055),
    b = n(46140),
    D = n(981631),
    A = n(388032),
    y = n(417575);
function k(e) {
    var t;
    let { transitionState: n, onClose: i, quest: f, autoplay: k } = e,
        B = (0, C.il)(f),
        L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        M = (0, s.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [O, R] = o.useState(B.progressSeconds),
        [w, F] = o.useState(!1),
        { completedRatio: Z, completedRatioDisplay: U } = (0, p.I)(f),
        [G, V] = (0, T.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t['+5kSoa']), 1700),
        q = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD),
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
        K = A.intl.formatToPlainString(A.t['12IWPz'], { rewardName: Q });
    return (0, r.jsx)(c.ModalRoot, {
        transitionState: n,
        size: c.ModalSize.DYNAMIC,
        className: y.modalRoot,
        children: (0, r.jsx)(h.A, {
            questOrQuests: f,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: j.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
                var t, o;
                return (0, r.jsx)('div', {
                    ref: (t) => {
                        e.current = t;
                    },
                    className: y.modalBg,
                    children: (0, r.jsx)('div', {
                        className: y.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: y.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: y.contentHeader,
                                    children: [
                                        (0, r.jsxs)(c.Clickable, {
                                            className: y.contentHeaderGameInfo,
                                            onClick: z,
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: f.config.messages.gameTitle,
                                                    className: l()(y.contentHeaderLogotype, y.accentOnHover),
                                                    src: (0, g.fh)(f, g.eC.LOGO_TYPE, M).url
                                                }),
                                                (0, r.jsx)(I.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: y.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: A.intl.format(A.t.EQa7oq, { questName: f.config.messages.questName })
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
                                                    className: y.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(E.Z, {
                                                        quest: f,
                                                        size: 48,
                                                        percentComplete: Z,
                                                        percentCompleteText: w ? U : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: y.questProgressRewardTile,
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
                                (0, r.jsx)(N.Z, {
                                    quest: f,
                                    parentTransitionState: n,
                                    onOptimisticProgressUpdate: R,
                                    autoplay: k
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.contentFooter,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            onClick: i,
                                            color: c.Button.Colors.PRIMARY,
                                            size: c.Button.Sizes.MEDIUM,
                                            children: A.intl.string(A.t.cpT0Cg)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: y.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(c.Button, {
                                                    color: c.Button.Colors.PRIMARY,
                                                    onClick: H,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    className: y.copyLinkBtn,
                                                    children: G
                                                }),
                                                (0, r.jsx)(S.i0, {
                                                    className: y.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: f,
                                                    useReducedMotion: P,
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
function B(e) {
    let { questId: t, autoplay: n, ...o } = e,
        i = (0, a.e7)([f.Z], () => f.Z.getQuest(t));
    return null != i
        ? (0, r.jsx)(k, {
              ...o,
              quest: i,
              autoplay: n
          })
        : null;
}
