n.r(t),
    n.d(t, {
        default: function () {
            return A;
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
    S = n(644646),
    _ = n(604162),
    N = n(747717),
    j = n(963123),
    I = n(46140),
    T = n(981631),
    b = n(388032),
    D = n(417575);
function y(e) {
    var t, n, i;
    let { transitionState: f, onClose: y, quest: A, autoplay: B } = e,
        k = (0, C.il)(A),
        L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, s.wj)(L) ? T.BRd.DARK : T.BRd.LIGHT,
        M = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [O, R] = o.useState(k.progressSeconds),
        [w, Z] = o.useState(!1),
        { completedRatio: F, completedRatioDisplay: U } = (0, p.I)(A),
        [V, G] = (0, _.G6)(b.intl.string(b.t.RDE0SU), b.intl.string(b.t['+5kSoa']), 1700),
        q = (null === (t = A.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? b.intl.string(b.t.vTgCW1) : b.intl.string(b.t.cfY4PD),
        H = o.useCallback(() => {
            (0, C.f2)(A.id, {
                content: v.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                G();
        }, [A.id, G]),
        z = o.useMemo(() => x.r.build(A.config).defaultReward.messages.name, [A]),
        Y = b.intl.formatToPlainString(b.t['12IWPz'], { rewardName: z });
    return (0, r.jsx)(c.ModalRoot, {
        transitionState: f,
        size: c.ModalSize.DYNAMIC,
        className: D.modalRoot,
        children: (0, r.jsx)('div', {
            className: D.modalBg,
            children: (0, r.jsx)('div', {
                className: D.modalBody,
                children: (0, r.jsxs)('div', {
                    className: D.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.contentHeader,
                            children: [
                                (0, r.jsxs)(c.Clickable, {
                                    className: D.contentHeaderGameInfo,
                                    onClick: () => {
                                        (0, C.FE)(A, {
                                            content: v.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: A.config.messages.gameTitle,
                                            className: l()(D.contentHeaderLogotype, D.accentOnHover),
                                            src: (0, g.fh)(A, g.eC.LOGO_TYPE, P).url
                                        }),
                                        (0, r.jsx)(N.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: D.questHeading,
                                            children: [
                                                (0, r.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: b.intl.format(b.t.EQa7oq, { questName: A.config.messages.questName })
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: A.config.messages.gameTitle
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(c.Tooltip, {
                                    position: 'left',
                                    text: Y,
                                    onTooltipShow: () => {
                                        Z(!0);
                                    },
                                    onTooltipHide: () => {
                                        Z(!1);
                                    },
                                    children: (e) =>
                                        (0, r.jsx)(c.Clickable, {
                                            className: D.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(E.Z, {
                                                quest: A,
                                                size: 48,
                                                percentComplete: F,
                                                percentCompleteText: w ? U : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(S.Z, {
                                                    className: D.questProgressRewardTile,
                                                    quest: A,
                                                    questContent: v.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: I.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(j.Z, {
                            quest: A,
                            parentTransitionState: f,
                            onOptimisticProgressUpdate: R,
                            autoplay: B
                        }),
                        (0, r.jsxs)('div', {
                            className: D.contentFooter,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: H,
                                    size: c.Button.Sizes.MEDIUM,
                                    className: D.copyLinkBtn,
                                    children: V
                                }),
                                (0, r.jsxs)('div', {
                                    className: D.contentFooterButtonCont,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            onClick: y,
                                            color: c.Button.Colors.PRIMARY,
                                            size: c.Button.Sizes.MEDIUM,
                                            children: b.intl.string(b.t.cpT0Cg)
                                        }),
                                        (0, r.jsx)(h.i0, {
                                            className: D.claimBtn,
                                            size: c.Button.Sizes.MEDIUM,
                                            quest: A,
                                            useReducedMotion: M,
                                            isExpanded: (null === (n = A.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = A.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                            ctaLabel: q
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
function A(e) {
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
