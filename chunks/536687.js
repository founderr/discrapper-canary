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
    h = n(644646),
    _ = n(604162),
    T = n(747717),
    I = n(963123),
    j = n(46140),
    N = n(981631),
    b = n(388032),
    D = n(417575);
function y(e) {
    var t, n, i;
    let { transitionState: f, onClose: y, quest: B, autoplay: k } = e,
        A = (0, C.il)(B),
        L = (0, a.e7)([d.Z], () => d.Z.getState().theme),
        O = (0, s.wj)(L) ? N.BRd.DARK : N.BRd.LIGHT,
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [M, R] = o.useState(A.progressSeconds),
        [F, Z] = o.useState(!1),
        { completedRatio: U, completedRatioDisplay: w } = (0, p.I)(B),
        [G, V] = (0, _.G6)(b.intl.string(b.t.RDE0SU), b.intl.string(b.t['+5kSoa']), 1700),
        q = (null === (t = B.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? b.intl.string(b.t.vTgCW1) : b.intl.string(b.t.cfY4PD),
        H = o.useCallback(() => {
            (0, C.f2)(B.id, {
                content: v.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                V();
        }, [B.id, V]),
        z = o.useMemo(() => x.r.build(B.config).defaultReward.messages.name, [B]),
        W = b.intl.formatToPlainString(b.t['12IWPz'], { rewardName: z });
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
                                        (0, C.FE)(B, {
                                            content: v.jn.VIDEO_MODAL,
                                            ctaContent: m.jZ.OPEN_GAME_LINK
                                        });
                                    },
                                    children: [
                                        (0, r.jsx)('img', {
                                            alt: B.config.messages.gameTitle,
                                            className: l()(D.contentHeaderLogotype, D.accentOnHover),
                                            src: (0, g.fh)(B, g.eC.LOGO_TYPE, O).url
                                        }),
                                        (0, r.jsx)(T.Z, {}),
                                        (0, r.jsxs)('div', {
                                            className: D.questHeading,
                                            children: [
                                                (0, r.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'header-primary',
                                                    children: b.intl.format(b.t.EQa7oq, { questName: B.config.messages.questName })
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
                                            className: D.progressCont,
                                            ...e,
                                            children: (0, r.jsx)(E.Z, {
                                                quest: B,
                                                size: 48,
                                                percentComplete: U,
                                                percentCompleteText: F ? w : void 0,
                                                percentCompleteTextVariant: 'text-sm/medium',
                                                children: (0, r.jsx)(h.Z, {
                                                    className: D.questProgressRewardTile,
                                                    quest: B,
                                                    questContent: v.jn.VIDEO_MODAL,
                                                    autoplay: !1,
                                                    location: j.dr.VIDEO_MODAL
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, r.jsx)(I.Z, {
                            quest: B,
                            parentTransitionState: f,
                            onOptimisticProgressUpdate: R,
                            autoplay: k
                        }),
                        (0, r.jsxs)('div', {
                            className: D.contentFooter,
                            children: [
                                (0, r.jsx)(c.Button, {
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: H,
                                    size: c.Button.Sizes.MEDIUM,
                                    className: D.copyLinkBtn,
                                    children: G
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
                                        (0, r.jsx)(S.i0, {
                                            className: D.claimBtn,
                                            size: c.Button.Sizes.MEDIUM,
                                            quest: B,
                                            useReducedMotion: P,
                                            isExpanded: (null === (n = B.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                                            disabled: (null === (i = B.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
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
