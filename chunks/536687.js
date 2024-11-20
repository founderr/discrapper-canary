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
    s = n(442837),
    a = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(210887),
    m = n(617136),
    f = n(113434),
    p = n(569984),
    v = n(497505),
    C = n(918701),
    g = n(475595),
    x = n(566078),
    S = n(164495),
    _ = n(472144),
    E = n(602667),
    h = n(644646),
    T = n(604162),
    I = n(747717),
    N = n(963123),
    b = n(281055),
    j = n(46140),
    D = n(981631),
    A = n(388032),
    y = n(417575);
function k(e) {
    var t;
    let { transitionState: n, onClose: i, quest: p, autoplay: k } = e,
        B = (0, C.il)(p),
        L = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, a.wj)(L) ? D.BRd.DARK : D.BRd.LIGHT,
        M = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [O, R] = o.useState(B.progressSeconds),
        [w, F] = o.useState(!1),
        { completedRatio: Z, completedRatioDisplay: U } = (0, f.I)(p),
        [V, q] = (0, T.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t['+5kSoa']), 1700),
        G = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD),
        H = o.useCallback(() => {
            (0, C.f2)(p.id, {
                content: v.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                q();
        }, [p.id, q]),
        z = () => {
            (0, C.FE)(p, {
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
        Q = o.useMemo(() => x.r.build(p.config).defaultReward.messages.name, [p]),
        K = A.intl.formatToPlainString(A.t['12IWPz'], { rewardName: Q });
    return (0, r.jsx)(c.ModalRoot, {
        transitionState: n,
        size: c.ModalSize.DYNAMIC,
        className: y.modalRoot,
        children: (0, r.jsx)(E.A, {
            questOrQuests: p,
            questContent: v.jn.VIDEO_MODAL,
            minViewTimeSeconds: b.zw,
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
                                                    alt: p.config.messages.gameTitle,
                                                    className: l()(y.contentHeaderLogotype, y.accentOnHover),
                                                    src: (0, g.fh)(p, g.eC.LOGO_TYPE, P).url
                                                }),
                                                (0, r.jsx)(I.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: y.questHeading,
                                                    children: [
                                                        (0, r.jsx)(c.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: A.intl.format(A.t.EQa7oq, { questName: p.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(c.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: p.config.messages.gameTitle
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
                                                    children: (0, r.jsx)(_.Z, {
                                                        quest: p,
                                                        size: 48,
                                                        percentComplete: Z,
                                                        percentCompleteText: w ? U : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(h.Z, {
                                                            className: y.questProgressRewardTile,
                                                            quest: p,
                                                            questContent: v.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: j.dr.VIDEO_MODAL
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(N.Z, {
                                    quest: p,
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
                                                    children: V
                                                }),
                                                (0, r.jsx)(S.i0, {
                                                    className: y.claimBtn,
                                                    size: c.Button.Sizes.MEDIUM,
                                                    quest: p,
                                                    useReducedMotion: M,
                                                    isExpanded: (null === (t = p.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                                    disabled: (null === (o = p.userStatus) || void 0 === o ? void 0 : o.completedAt) == null,
                                                    ctaLabel: G
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
        i = (0, s.e7)([p.Z], () => p.Z.getQuest(t));
    return null != i
        ? (0, r.jsx)(k, {
              ...o,
              quest: i,
              autoplay: n
          })
        : null;
}
