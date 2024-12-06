r.r(t),
    r.d(t, {
        default: function () {
            return P;
        }
    }),
    r(47120);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    s = r.n(a),
    i = r(703533),
    l = r(442837),
    d = r(692547),
    c = r(780384),
    p = r(481060),
    u = r(484614),
    m = r(410030),
    f = r(607070),
    _ = r(530618),
    C = r(454585),
    g = r(246946),
    h = r(572004),
    b = r(302221),
    w = r(617136),
    x = r(113434),
    T = r(569984),
    I = r(497505),
    S = r(918701),
    y = r(804127),
    v = r(566078),
    B = r(617889),
    R = r(652380),
    j = r(644646),
    N = r(78826),
    E = r(46140),
    W = r(675654),
    q = r(388032),
    A = r(993950);
function L(e) {
    var t;
    let { quest: r, rewardCode: o, hasTieredRewardCodes: a } = e,
        i = (0, c.wj)((0, m.ZP)()),
        l = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, b.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, b.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        u = (0, B.B)(r, !1),
        f = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o,
        { header: _, subHeader: C } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
                l = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                d = i ? '' : q.intl.string(q.t.UUKbio),
                c = i
                    ? (0, S.o9)({
                          quest: a,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = a.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                p = v.r.build(a.config),
                u = null != c && null !== (o = c.messages.name) && void 0 !== o ? o : p.defaultReward.messages.name,
                m = i ? q.intl.string(q.t.cfY4PD) : p.defaultReward.messages.name;
            return {
                subHeader: l ? q.intl.string(q.t.YpswQk) : d,
                header: l ? u : m
            };
        })({
            quest: r,
            rewardCode: o,
            hasTieredRewardCodes: a
        }),
        { hasError: g, isLoading: h } = (0, N.d7)();
    return (0, n.jsxs)('div', {
        style: l,
        className: A.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: A.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    h &&
                        !g &&
                        (0, n.jsx)(p.Spinner, {
                            className: A.rewardTileAssetStatusIcon,
                            type: p.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(p.ImageWarningIcon, { className: A.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(j.Z, {
                        className: s()(A.rewardTileAsset, { [A.rewardTileAssetLoading]: h || g }),
                        quest: r,
                        questContent: u.trackingCtx.content,
                        location: E.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: A.rewardSubheading,
                children: [
                    f &&
                        (0, n.jsx)(p.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: A.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(p.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: A.rewardSubheadingText,
                        children: C
                    })
                ]
            }),
            (0, n.jsx)(p.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: A.rewardHeading,
                children: _
            })
        ]
    });
}
function P(e) {
    let t = (0, l.e7)([T.Z], () => T.Z.getQuest(e.questId));
    return null != t
        ? (0, n.jsx)(M, {
              ...e,
              quest: t,
              preview: e.preview
          })
        : null;
}
function M(e) {
    var t;
    let { transitionState: r, onClose: a, quest: s, location: d, questContentPosition: c, preview: m } = e,
        b = o.useMemo(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []),
        B = v.r.build(s.config).rewardPlatforms,
        j = B.length > 1,
        [P, M] = o.useState(j ? null : B[0]),
        k = o.useRef(new i.qA()),
        O = o.useRef(null),
        [Z, D] = o.useState(null),
        U = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        F = (0, l.e7)([g.Z], () => g.Z.hidePersonalInformation),
        {
            questStoreRewardCode: G,
            isFetchingRewardCode: H,
            isClaimingReward: X
        } = (0, l.cj)([T.Z], () => ({
            questStoreRewardCode: T.Z.getRewardCode(s.id),
            isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
            isClaimingReward: T.Z.isClaimingReward(s.id)
        })),
        z = (0, S.oo)({ quest: s }),
        Q = !0 === m ? (0, R.b)(s) : G,
        J = j && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Q,
        {
            claimCode: Y,
            fetchCode: $,
            hasError: V,
            setHasError: K
        } = (0, y.u)({
            isClaimingReward: X,
            isFetchingRewardCode: H,
            quest: s,
            questContent: d,
            requiresPlatformSelection: J,
            rewardCode: Q,
            selectedPlatformType: P,
            preview: m
        }),
        ee = null;
    b && null != Q ? (ee = q.intl.string(q.t.srzsU1)) : null != Q ? (ee = q.intl.string(q.t.PJBpdX)) : J && (ee = q.intl.string(q.t.JRU8dn));
    let et =
            null != ee
                ? (0, n.jsx)(p.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: A.heading,
                      children: ee
                  })
                : null,
        er = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: s } = e,
                i = v.r.build(t.config);
            if (o)
                return (0, n.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: A.bodyCopy,
                    children: s ? q.intl.format(q.t.m0btAQ, {}) : q.intl.format(q.t['ZUA/Ul'], { rewardName: i.defaultReward.messages.name })
                });
            let l = (0, S.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != a && null != l
                ? (0, n.jsx)(p.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: A.bodyCopy,
                      children: C.Z.parse(l, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: P,
            requiresPlatformSelection: J,
            rewardCode: Q,
            hasTieredRewardCodes: z
        }),
        en = o.useMemo(
            () =>
                B.map((e) => ({
                    label: (0, S.t2)(e),
                    value: e
                })),
            [B]
        ),
        eo = null;
    J &&
        (eo = (0, n.jsxs)(p.FormItem, {
            title: q.intl.string(q.t.vVcTtL),
            children: [
                (0, n.jsx)(p.Select, {
                    placeholder: q.intl.string(q.t.EMrUHR),
                    options: en,
                    select: (e) => {
                        K(!1), M(e);
                    },
                    isSelected: (e) => e === P,
                    serialize: (e) => (0, S.t2)(e),
                    className: V ? A.errorInput : '',
                    isDisabled: X,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case I.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(p.ScienceIcon, { className: A.platformSelectionOptionIcon });
                                case I.y$.PC:
                                    return (0, n.jsx)(p.ScreenIcon, { className: A.platformSelectionOptionIcon });
                                case I.y$.PLAYSTATION:
                                    return (0, n.jsx)(p.PlaystationNeutralIcon, { className: A.platformSelectionOptionIcon });
                                case I.y$.SWITCH:
                                    return (0, n.jsx)(p.NintendoSwitchNeutralIcon, { className: A.platformSelectionOptionIcon });
                                case I.y$.XBOX:
                                    return (0, n.jsx)(p.XboxNeutralIcon, { className: A.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: A.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                V ? (0, n.jsx)(p.InputError, { error: q.intl.string(q.t.rbZBMT) }) : null
            ]
        }));
    let ea = null == Q && (H || X),
        es = ea && !J ? (0, n.jsx)(p.Spinner, {}) : null,
        ei = null;
    null != Q
        ? (ei = (0, n.jsx)(p.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, n.jsx)(u.Z, {
                  value: F ? q.intl.string(q.t['0n2u0t']) : Q.code,
                  delay: 1000,
                  buttonColor: p.Button.Colors.BRAND,
                  onCopy: () => {
                      F && (0, h.JG)(Q.code),
                          (0, w._3)({
                              questId: s.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: w.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : V &&
          !J &&
          (ei = (0, n.jsx)(p.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, n.jsx)(p.TextInput, {
                  disabled: !0,
                  error: q.intl.string(q.t.rbZBMT),
                  inputClassName: A.errorInput
              })
          }));
    let el = (0, y.G)({
            claimCode: Y,
            fetchCode: $,
            hasError: V,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: J,
            selectedPlatformType: P
        }),
        ed = J && X,
        ec = !ed && ((J && null == P) || ea),
        ep = q.intl.string(q.t['23SS+/']);
    J ? (ep = q.intl.string(q.t.SLZMi4)) : !J && V && (ep = q.intl.string(q.t.gNJHHh));
    let eu = !U && null != Q && !b && !V,
        em = null != es && z,
        ef = (0, x.Gd)(s.id);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: D,
                className: A.confettiCanvas,
                environment: k.current
            }),
            (0, n.jsx)('div', {
                ref: O,
                children: (0, n.jsxs)(p.ModalRoot, {
                    transitionState: r,
                    size: p.ModalSize.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: A.modalBody,
                            children: [
                                (0, n.jsx)(p.ModalCloseButton, {
                                    className: A.closeButton,
                                    onClick: () => a()
                                }),
                                !em &&
                                    (0, n.jsx)(N.p, {
                                        source: E.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(L, {
                                            quest: s,
                                            rewardCode: Q,
                                            hasTieredRewardCodes: z
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: A.modalContent,
                                    children: [
                                        et,
                                        er,
                                        eo,
                                        es,
                                        ei,
                                        null != s.config.cosponsorMetadata &&
                                            null != ef &&
                                            (0, n.jsxs)('div', {
                                                className: A.cosponsorFooter,
                                                children: [
                                                    (0, n.jsx)('img', {
                                                        className: A.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: ef.url
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'text-muted',
                                                        className: A.cosponsorName,
                                                        children: q.intl.format(q.t.CSf4ER, { cosponsorName: s.config.cosponsorMetadata.name })
                                                    }),
                                                    (0, n.jsx)(p.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'text-normal',
                                                        className: A.cosponsorRedemptionInstructions,
                                                        children: C.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, { allowLinks: !0 })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(p.ModalFooter, {
                            children: (0, n.jsx)(p.Button, {
                                onClick: el,
                                submitting: ed,
                                disabled: ec,
                                children: ep
                            })
                        })
                    ]
                })
            }),
            eu &&
                (0, n.jsx)(_.Z, {
                    confettiTarget: O.current,
                    confettiCanvas: Z,
                    sprites: W.CA,
                    colors: W.Br
                })
        ]
    });
}
