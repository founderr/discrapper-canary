n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    }),
    n(47120);
var s = n(735250),
    o = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(887024),
    i = n(442837),
    u = n(692547),
    d = n(780384),
    c = n(481060),
    p = n(484614),
    m = n(410030),
    C = n(607070),
    E = n(530618),
    _ = n(454585),
    S = n(246946),
    T = n(572004),
    g = n(302221),
    x = n(617136),
    h = n(569984),
    f = n(497505),
    R = n(918701),
    I = n(804127),
    b = n(566078),
    N = n(617889),
    M = n(644646),
    j = n(78826),
    v = n(46140),
    D = n(675654),
    O = n(689938),
    A = n(880340);
function y(e) {
    var t;
    let { quest: n, rewardCode: o, hasTieredRewardCodes: a } = e,
        l = (0, d.wj)((0, m.ZP)()),
        i = {
            border: '1px solid '.concat(n.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, g.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, g.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, N.B)(n, !1),
        C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o,
        { header: E, subHeader: _ } = (function (e) {
            var t, n, s, o;
            let { quest: a, rewardCode: r, hasTieredRewardCodes: l } = e,
                i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r,
                u = l ? '' : O.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
                d = l
                    ? (0, R.o9)({
                          quest: a,
                          idx: null !== (s = null == r ? void 0 : r.tier) && void 0 !== s ? s : null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedTier
                      })
                    : null,
                c = b.r.build(a.config),
                p = null != d && null !== (o = d.messages.name) && void 0 !== o ? o : c.defaultReward.messages.name,
                m = l ? O.Z.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
            return {
                subHeader: i ? O.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : u,
                header: i ? p : m
            };
        })({
            quest: n,
            rewardCode: o,
            hasTieredRewardCodes: a
        }),
        { hasError: S, isLoading: T } = (0, j.d7)();
    return (0, s.jsxs)('div', {
        style: i,
        className: A.rewardTile,
        children: [
            (0, s.jsxs)('div', {
                className: A.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': n.config.colors.primary },
                children: [
                    T &&
                        !S &&
                        (0, s.jsx)(c.Spinner, {
                            className: A.rewardTileAssetStatusIcon,
                            type: c.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    S && (0, s.jsx)(c.ImageWarningIcon, { className: A.rewardTileAssetStatusIcon }),
                    (0, s.jsx)(M.Z, {
                        className: r()(A.rewardTileAsset, { [A.rewardTileAssetLoading]: T || S }),
                        quest: n,
                        questContent: p.trackingCtx.content,
                        location: v.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: A.rewardSubheading,
                children: [
                    C &&
                        (0, s.jsx)(c.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: u.Z.colors.TEXT_MUTED,
                            className: A.rewardSubheadingIcon
                        }),
                    (0, s.jsx)(c.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: A.rewardSubheadingText,
                        children: _
                    })
                ]
            }),
            (0, s.jsx)(c.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: A.rewardHeading,
                children: E
            })
        ]
    });
}
function w(e) {
    let t = (0, i.e7)([h.Z], () => h.Z.getQuest(e.questId));
    return null != t
        ? (0, s.jsx)(q, {
              ...e,
              quest: t
          })
        : null;
}
function q(e) {
    var t;
    let { transitionState: n, onClose: a, quest: r, location: u, questContentPosition: d } = e,
        m = o.useMemo(() => {
            var e;
            return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []),
        g = b.r.build(r.config).rewardPlatforms,
        N = g.length > 1,
        [M, w] = o.useState(N ? null : g[0]),
        q = o.useRef(new l.qA()),
        L = o.useRef(null),
        [Z, U] = o.useState(null),
        B = (0, i.e7)([C.Z], () => C.Z.useReducedMotion),
        P = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
        {
            rewardCode: Q,
            isFetchingRewardCode: k,
            isClaimingReward: W
        } = (0, i.cj)([h.Z], () => ({
            rewardCode: h.Z.getRewardCode(r.id),
            isFetchingRewardCode: h.Z.isFetchingRewardCode(r.id),
            isClaimingReward: h.Z.isClaimingReward(r.id)
        })),
        H = (0, R.oo)({ quest: r }),
        F = N && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Q,
        {
            claimCode: G,
            fetchCode: X,
            hasError: z,
            setHasError: Y
        } = (0, I.u)({
            isClaimingReward: W,
            isFetchingRewardCode: k,
            quest: r,
            questContent: u,
            requiresPlatformSelection: F,
            rewardCode: Q,
            selectedPlatformType: M
        }),
        K = null;
    m && null != Q ? (K = O.Z.Messages.QUESTS_REWARD_CODE_HEADER) : null != Q ? (K = O.Z.Messages.QUESTS_REWARD_CODE_CONGRATS) : F && (K = O.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
    let V =
            null != K
                ? (0, s.jsx)(c.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: A.heading,
                      children: K
                  })
                : null,
        $ = (function (e) {
            let { quest: t, selectedPlatform: n, requiresPlatformSelection: o, rewardCode: a, hasTieredRewardCodes: r } = e,
                l = b.r.build(t.config);
            if (o)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: A.bodyCopy,
                    children: r ? O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({ rewardName: l.defaultReward.messages.name })
                });
            let i = (0, R.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: n,
                sharedQuestFields: l
            });
            return null != a && null != i
                ? (0, s.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: A.bodyCopy,
                      children: _.Z.parse(i, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: r,
            selectedPlatform: M,
            requiresPlatformSelection: F,
            rewardCode: Q,
            hasTieredRewardCodes: H
        }),
        J = o.useMemo(
            () =>
                g.map((e) => ({
                    label: (0, R.t2)(e),
                    value: e
                })),
            [g]
        ),
        ee = null;
    F &&
        (ee = (0, s.jsxs)(c.FormItem, {
            title: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
                (0, s.jsx)(c.Select, {
                    placeholder: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                    options: J,
                    select: (e) => {
                        Y(!1), w(e);
                    },
                    isSelected: (e) => e === M,
                    serialize: (e) => (0, R.t2)(e),
                    className: z ? A.errorInput : '',
                    isDisabled: W,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case f.y$.CROSS_PLATFORM:
                                    return (0, s.jsx)(c.ScienceIcon, { className: A.platformSelectionOptionIcon });
                                case f.y$.PC:
                                    return (0, s.jsx)(c.ScreenIcon, { className: A.platformSelectionOptionIcon });
                                case f.y$.PLAYSTATION:
                                    return (0, s.jsx)(c.PlaystationNeutralIcon, { className: A.platformSelectionOptionIcon });
                                case f.y$.SWITCH:
                                    return (0, s.jsx)(c.NintendoSwitchNeutralIcon, { className: A.platformSelectionOptionIcon });
                                case f.y$.XBOX:
                                    return (0, s.jsx)(c.XboxNeutralIcon, { className: A.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, s.jsxs)('div', {
                            className: A.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                z ? (0, s.jsx)(c.InputError, { error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR }) : null
            ]
        }));
    let et = null == Q && (k || W),
        en = et && !F ? (0, s.jsx)(c.Spinner, {}) : null,
        es = null;
    null != Q
        ? (es = (0, s.jsx)(c.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(p.Z, {
                  value: P ? O.Z.Messages.QUEST_REWARD_CODE_HIDDEN : Q.code,
                  delay: 1000,
                  buttonColor: c.Button.Colors.BRAND,
                  onCopy: () => {
                      P && (0, T.JG)(Q.code),
                          (0, x._3)({
                              questId: r.id,
                              questContent: u,
                              questContentPosition: d,
                              questContentCTA: x.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : z &&
          !F &&
          (es = (0, s.jsx)(c.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(c.TextInput, {
                  disabled: !0,
                  error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  inputClassName: A.errorInput
              })
          }));
    let eo = (0, I.G)({
            claimCode: G,
            fetchCode: X,
            hasError: z,
            onDismiss: a,
            quest: r,
            questContent: u,
            questContentPosition: d,
            requiresPlatformSelection: F,
            selectedPlatformType: M
        }),
        ea = F && W,
        er = !ea && ((F && null == M) || et),
        el = O.Z.Messages.QUESTS_REWARD_CODE_DONE;
    F ? (el = O.Z.Messages.QUESTS_REWARD_CODE_GET_CODE) : !F && z && (el = O.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
    let ei = !B && null != Q && !m && !z,
        eu = null != en && H;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.O_, {
                ref: U,
                className: A.confettiCanvas,
                environment: q.current
            }),
            (0, s.jsx)('div', {
                ref: L,
                children: (0, s.jsxs)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    children: [
                        (0, s.jsxs)('div', {
                            className: A.modalBody,
                            children: [
                                (0, s.jsx)(c.ModalCloseButton, {
                                    className: A.closeButton,
                                    onClick: () => a()
                                }),
                                !eu &&
                                    (0, s.jsx)(j.p, {
                                        source: v.dr.REWARD_CODE_MODAL,
                                        questId: r.id,
                                        children: (0, s.jsx)(y, {
                                            quest: r,
                                            rewardCode: Q,
                                            hasTieredRewardCodes: H
                                        })
                                    }),
                                (0, s.jsxs)('div', {
                                    className: A.modalContent,
                                    children: [V, $, ee, en, es]
                                })
                            ]
                        }),
                        (0, s.jsx)(c.ModalFooter, {
                            children: (0, s.jsx)(c.Button, {
                                onClick: eo,
                                submitting: ea,
                                disabled: er,
                                children: el
                            })
                        })
                    ]
                })
            }),
            ei &&
                (0, s.jsx)(E.Z, {
                    confettiTarget: L.current,
                    confettiCanvas: Z,
                    sprites: D.CA,
                    colors: D.Br
                })
        ]
    });
}
