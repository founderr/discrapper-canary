n.r(t),
    n.d(t, {
        default: function () {
            return O;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(210887),
    m = n(617136),
    v = n(113434),
    p = n(569984),
    E = n(497505),
    f = n(918701),
    g = n(475595),
    C = n(566078),
    S = n(164495),
    x = n(472144),
    h = n(602667),
    _ = n(644646),
    T = n(604162),
    I = n(747717),
    D = n(963123),
    N = n(281055),
    j = n(46140),
    A = n(981631),
    b = n(388032),
    L = n(451680);
function M(e) {
    var t;
    let { transitionState: n, onClose: l, quest: p, autoplay: M, videoSessionId: O } = e,
        k = (0, f.il)(p),
        y = (0, s.e7)([d.Z], () => d.Z.getState().theme),
        P = (0, a.wj)(y) ? A.BRd.DARK : A.BRd.LIGHT,
        R = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        [w, Z] = i.useState(k.progressSeconds),
        [B, U] = i.useState(!1),
        { completedRatio: F, completedRatioDisplay: V } = (0, v.I)(p),
        [q, G] = (0, T.G6)(b.intl.string(b.t.RDE0SU), b.intl.string(b.t['+5kSoa']), 1700),
        z = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? b.intl.string(b.t.vTgCW1) : b.intl.string(b.t.cfY4PD),
        H = i.useCallback(() => {
            (0, f.f2)(p.id, {
                content: E.jn.VIDEO_MODAL,
                ctaContent: m.jZ.COPY_QUEST_URL
            }),
                G();
        }, [p.id, G]),
        Y = () => {
            (0, f.FE)(p, {
                content: E.jn.VIDEO_MODAL,
                ctaContent: m.jZ.OPEN_GAME_LINK
            });
        },
        Q = () => {
            U(!0);
        },
        W = () => {
            U(!1);
        },
        K = i.useMemo(() => C.r.build(p.config).defaultReward.messages.name, [p]),
        X = b.intl.formatToPlainString(b.t['12IWPz'], { rewardName: K });
    return (0, r.jsx)(u.ModalRoot, {
        transitionState: n,
        size: u.ModalSize.DYNAMIC,
        className: L.modalRoot,
        children: (0, r.jsx)(h.A, {
            questOrQuests: p,
            questContent: E.jn.VIDEO_MODAL,
            minViewTimeSeconds: N.zw,
            trackGuildAndChannelMetadata: !0,
            children: (e) => {
                var t, i;
                return (0, r.jsx)('div', {
                    ref: (t) => {
                        e.current = t;
                    },
                    className: L.modalBg,
                    children: (0, r.jsx)('div', {
                        className: L.modalBody,
                        children: (0, r.jsxs)('div', {
                            className: L.modalContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: L.contentHeader,
                                    children: [
                                        (0, r.jsxs)(u.Clickable, {
                                            className: L.contentHeaderGameInfo,
                                            onClick: Y,
                                            children: [
                                                (0, r.jsx)('img', {
                                                    alt: p.config.messages.gameTitle,
                                                    className: o()(L.contentHeaderLogotype, L.accentOnHover),
                                                    src: (0, g.fh)(p, g.eC.LOGO_TYPE, P).url
                                                }),
                                                (0, r.jsx)(I.Z, {}),
                                                (0, r.jsxs)('div', {
                                                    className: L.questHeading,
                                                    children: [
                                                        (0, r.jsx)(u.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'header-primary',
                                                            children: b.intl.format(b.t.EQa7oq, { questName: p.config.messages.questName })
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'header-secondary',
                                                            children: p.config.messages.gameTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(u.Tooltip, {
                                            position: 'left',
                                            text: X,
                                            onTooltipShow: Q,
                                            onTooltipHide: W,
                                            children: (e) =>
                                                (0, r.jsx)(u.Clickable, {
                                                    className: L.progressCont,
                                                    ...e,
                                                    children: (0, r.jsx)(x.Z, {
                                                        quest: p,
                                                        size: 48,
                                                        percentComplete: F,
                                                        percentCompleteText: B ? V : void 0,
                                                        percentCompleteTextVariant: 'text-sm/medium',
                                                        children: (0, r.jsx)(_.Z, {
                                                            className: L.questProgressRewardTile,
                                                            quest: p,
                                                            questContent: E.jn.VIDEO_MODAL,
                                                            autoplay: !1,
                                                            location: j.dr.VIDEO_MODAL
                                                        })
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(D.Z, {
                                    quest: p,
                                    videoSessionId: O,
                                    parentTransitionState: n,
                                    onOptimisticProgressUpdate: Z,
                                    autoplay: M
                                }),
                                (0, r.jsxs)('div', {
                                    className: L.contentFooter,
                                    children: [
                                        (0, r.jsx)(u.Button, {
                                            onClick: l,
                                            color: u.Button.Colors.PRIMARY,
                                            size: u.Button.Sizes.MEDIUM,
                                            children: b.intl.string(b.t.cpT0Cg)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: L.contentFooterButtonCont,
                                            children: [
                                                (0, r.jsx)(u.Button, {
                                                    color: u.Button.Colors.PRIMARY,
                                                    onClick: H,
                                                    size: u.Button.Sizes.MEDIUM,
                                                    className: L.copyLinkBtn,
                                                    children: q
                                                }),
                                                (0, r.jsx)(S.i0, {
                                                    className: L.claimBtn,
                                                    size: u.Button.Sizes.MEDIUM,
                                                    quest: p,
                                                    useReducedMotion: R,
                                                    isExpanded: (null === (t = p.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
                                                    disabled: (null === (i = p.userStatus) || void 0 === i ? void 0 : i.completedAt) == null,
                                                    ctaLabel: z
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
function O(e) {
    let { questId: t, overrideQuest: n, autoplay: i, ...l } = e,
        o = (0, s.e7)([p.Z], () => p.Z.getQuest(t)),
        a = null != n ? n : o;
    return null != a
        ? (0, r.jsx)(M, {
              ...l,
              quest: a,
              autoplay: i
          })
        : null;
}
