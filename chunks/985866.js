n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(703533),
    l = n(442837),
    d = n(692547),
    c = n(780384),
    u = n(481060),
    p = n(484614),
    f = n(410030),
    _ = n(607070),
    m = n(530618),
    C = n(454585),
    g = n(246946),
    h = n(572004),
    b = n(302221),
    w = n(617136),
    x = n(569984),
    I = n(497505),
    T = n(918701),
    S = n(804127),
    v = n(566078),
    y = n(617889),
    B = n(652380),
    R = n(644646),
    j = n(78826),
    E = n(46140),
    N = n(675654),
    q = n(388032),
    W = n(422446);
function A(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o } = e,
        s = (0, c.wj)((0, f.ZP)()),
        l = {
            border: '1px solid '.concat(n.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, b.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, b.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(s ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, y.B)(n, !1),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a,
        { header: m, subHeader: C } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: i, hasTieredRewardCodes: s } = e,
                l = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != i,
                d = s ? '' : q.intl.string(q.t.UUKbio),
                c = s
                    ? (0, T.o9)({
                          quest: o,
                          idx: null !== (r = null == i ? void 0 : i.tier) && void 0 !== r ? r : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedTier
                      })
                    : null,
                u = v.r.build(o.config),
                p = null != c && null !== (a = c.messages.name) && void 0 !== a ? a : u.defaultReward.messages.name,
                f = s ? q.intl.string(q.t.cfY4PD) : u.defaultReward.messages.name;
            return {
                subHeader: l ? q.intl.string(q.t.YpswQk) : d,
                header: l ? p : f
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: g, isLoading: h } = (0, j.d7)();
    return (0, r.jsxs)('div', {
        style: l,
        className: W.rewardTile,
        children: [
            (0, r.jsxs)('div', {
                className: W.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': n.config.colors.primary },
                children: [
                    h &&
                        !g &&
                        (0, r.jsx)(u.Spinner, {
                            className: W.rewardTileAssetStatusIcon,
                            type: u.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    g && (0, r.jsx)(u.ImageWarningIcon, { className: W.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(R.Z, {
                        className: i()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: h || g }),
                        quest: n,
                        questContent: p.trackingCtx.content,
                        location: E.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: W.rewardSubheading,
                children: [
                    _ &&
                        (0, r.jsx)(u.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon
                        }),
                    (0, r.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: W.rewardSubheadingText,
                        children: C
                    })
                ]
            }),
            (0, r.jsx)(u.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: W.rewardHeading,
                children: m
            })
        ]
    });
}
function P(e) {
    let t = (0, l.e7)([x.Z], () => x.Z.getQuest(e.questId));
    return null != t
        ? (0, r.jsx)(L, {
              ...e,
              quest: t,
              preview: e.preview
          })
        : null;
}
function L(e) {
    var t;
    let { transitionState: n, onClose: o, quest: i, location: d, questContentPosition: c, preview: f } = e,
        b = a.useMemo(() => {
            var e;
            return (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []),
        y = v.r.build(i.config).rewardPlatforms,
        R = y.length > 1,
        [P, L] = a.useState(R ? null : y[0]),
        M = a.useRef(new s.qA()),
        k = a.useRef(null),
        [O, D] = a.useState(null),
        Z = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        U = (0, l.e7)([g.Z], () => g.Z.hidePersonalInformation),
        {
            questStoreRewardCode: H,
            isFetchingRewardCode: F,
            isClaimingReward: G
        } = (0, l.cj)([x.Z], () => ({
            questStoreRewardCode: x.Z.getRewardCode(i.id),
            isFetchingRewardCode: x.Z.isFetchingRewardCode(i.id),
            isClaimingReward: x.Z.isClaimingReward(i.id)
        })),
        X = (0, T.oo)({ quest: i }),
        z = !0 === f ? (0, B.b)(i) : H,
        Q = R && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == z,
        {
            claimCode: V,
            fetchCode: J,
            hasError: Y,
            setHasError: $
        } = (0, S.u)({
            isClaimingReward: G,
            isFetchingRewardCode: F,
            quest: i,
            questContent: d,
            requiresPlatformSelection: Q,
            rewardCode: z,
            selectedPlatformType: P,
            preview: f
        }),
        K = null;
    b && null != z ? (K = q.intl.string(q.t.srzsU1)) : null != z ? (K = q.intl.string(q.t.PJBpdX)) : Q && (K = q.intl.string(q.t.JRU8dn));
    let ee =
            null != K
                ? (0, r.jsx)(u.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: W.heading,
                      children: K
                  })
                : null,
        et = (function (e) {
            let { quest: t, selectedPlatform: n, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: i } = e,
                s = v.r.build(t.config);
            if (a)
                return (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: W.bodyCopy,
                    children: i ? q.intl.format(q.t.m0btAQ, {}) : q.intl.format(q.t['ZUA/Ul'], { rewardName: s.defaultReward.messages.name })
                });
            let l = (0, T.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: n,
                sharedQuestFields: s
            });
            return null != o && null != l
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: W.bodyCopy,
                      children: C.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: i,
            selectedPlatform: P,
            requiresPlatformSelection: Q,
            rewardCode: z,
            hasTieredRewardCodes: X
        }),
        en = a.useMemo(
            () =>
                y.map((e) => ({
                    label: (0, T.t2)(e),
                    value: e
                })),
            [y]
        ),
        er = null;
    Q &&
        (er = (0, r.jsxs)(u.FormItem, {
            title: q.intl.string(q.t.vVcTtL),
            children: [
                (0, r.jsx)(u.Select, {
                    placeholder: q.intl.string(q.t.EMrUHR),
                    options: en,
                    select: (e) => {
                        $(!1), L(e);
                    },
                    isSelected: (e) => e === P,
                    serialize: (e) => (0, T.t2)(e),
                    className: Y ? W.errorInput : '',
                    isDisabled: G,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case I.y$.CROSS_PLATFORM:
                                    return (0, r.jsx)(u.ScienceIcon, { className: W.platformSelectionOptionIcon });
                                case I.y$.PC:
                                    return (0, r.jsx)(u.ScreenIcon, { className: W.platformSelectionOptionIcon });
                                case I.y$.PLAYSTATION:
                                    return (0, r.jsx)(u.PlaystationNeutralIcon, { className: W.platformSelectionOptionIcon });
                                case I.y$.SWITCH:
                                    return (0, r.jsx)(u.NintendoSwitchNeutralIcon, { className: W.platformSelectionOptionIcon });
                                case I.y$.XBOX:
                                    return (0, r.jsx)(u.XboxNeutralIcon, { className: W.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, r.jsxs)('div', {
                            className: W.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                Y ? (0, r.jsx)(u.InputError, { error: q.intl.string(q.t.rbZBMT) }) : null
            ]
        }));
    let ea = null == z && (F || G),
        eo = ea && !Q ? (0, r.jsx)(u.Spinner, {}) : null,
        ei = null;
    null != z
        ? (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(p.Z, {
                  value: U ? q.intl.string(q.t['0n2u0t']) : z.code,
                  delay: 1000,
                  buttonColor: u.Button.Colors.BRAND,
                  onCopy: () => {
                      U && (0, h.JG)(z.code),
                          (0, w._3)({
                              questId: i.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: w.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : Y &&
          !Q &&
          (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(u.TextInput, {
                  disabled: !0,
                  error: q.intl.string(q.t.rbZBMT),
                  inputClassName: W.errorInput
              })
          }));
    let es = (0, S.G)({
            claimCode: V,
            fetchCode: J,
            hasError: Y,
            onDismiss: o,
            quest: i,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: Q,
            selectedPlatformType: P
        }),
        el = Q && G,
        ed = !el && ((Q && null == P) || ea),
        ec = q.intl.string(q.t['23SS+/']);
    Q ? (ec = q.intl.string(q.t.SLZMi4)) : !Q && Y && (ec = q.intl.string(q.t.gNJHHh));
    let eu = !Z && null != z && !b && !Y,
        ep = null != eo && X;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: D,
                className: W.confettiCanvas,
                environment: M.current
            }),
            (0, r.jsx)('div', {
                ref: k,
                children: (0, r.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    size: u.ModalSize.DYNAMIC,
                    children: [
                        (0, r.jsxs)('div', {
                            className: W.modalBody,
                            children: [
                                (0, r.jsx)(u.ModalCloseButton, {
                                    className: W.closeButton,
                                    onClick: () => o()
                                }),
                                !ep &&
                                    (0, r.jsx)(j.p, {
                                        source: E.dr.REWARD_CODE_MODAL,
                                        questId: i.id,
                                        children: (0, r.jsx)(A, {
                                            quest: i,
                                            rewardCode: z,
                                            hasTieredRewardCodes: X
                                        })
                                    }),
                                (0, r.jsxs)('div', {
                                    className: W.modalContent,
                                    children: [ee, et, er, eo, ei]
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ModalFooter, {
                            children: (0, r.jsx)(u.Button, {
                                onClick: es,
                                submitting: el,
                                disabled: ed,
                                children: ec
                            })
                        })
                    ]
                })
            }),
            eu &&
                (0, r.jsx)(m.Z, {
                    confettiTarget: k.current,
                    confettiCanvas: O,
                    sprites: N.CA,
                    colors: N.Br
                })
        ]
    });
}
