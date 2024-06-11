"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("120356"),
  r = s.n(n),
  o = s("887024"),
  i = s("442837"),
  u = s("692547"),
  d = s("979184"),
  c = s("984986"),
  C = s("299847"),
  f = s("533627"),
  m = s("381837"),
  E = s("718671"),
  R = s("432594"),
  h = s("780384"),
  S = s("481060"),
  p = s("484614"),
  v = s("410030"),
  g = s("607070"),
  _ = s("530618"),
  T = s("454585"),
  A = s("246946"),
  x = s("572004"),
  w = s("302221"),
  I = s("617136"),
  D = s("272008"),
  M = s("569984"),
  N = s("497505"),
  O = s("918701"),
  j = s("566078"),
  y = s("644646"),
  Q = s("78826"),
  L = s("46140"),
  b = s("675654"),
  U = s("689938"),
  P = s("620324");

function W(e) {
  var t;
  let {
    quest: s,
    rewardCode: a,
    hasTieredRewardCodes: n
  } = e, o = (0, h.isThemeDark)((0, v.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(o ? "var(--black)" : "var(--white)", "\n    ")
  }, C = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a, {
    header: f,
    subHeader: m
  } = function(e) {
    var t, s, l, a;
    let {
      quest: n,
      rewardCode: r,
      hasTieredRewardCodes: o
    } = e, i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, u = o ? "" : U.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, d = o ? (0, O.getRewardCodeQuestReward)({
      quest: n,
      idx: null !== (l = null == r ? void 0 : r.tier) && void 0 !== l ? l : null === (s = n.userStatus) || void 0 === s ? void 0 : s.claimedTier
    }) : null, c = j.SharedQuestFields.build(n.config), C = null != d && null !== (a = d.messages.name) && void 0 !== a ? a : c.defaultReward.messages.name, f = o ? U.default.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
    return {
      subHeader: i ? U.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : u,
      header: i ? C : f
    }
  }({
    quest: s,
    rewardCode: a,
    hasTieredRewardCodes: n
  }), {
    hasError: E,
    isLoading: R
  } = (0, Q.useQuestsAssetsLoadState)();
  return (0, l.jsxs)("div", {
    style: i,
    className: P.rewardTile,
    children: [(0, l.jsxs)("div", {
      className: P.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": s.config.colors.primary
      },
      children: [R && !E && (0, l.jsx)(S.Spinner, {
        className: P.rewardTileAssetStatusIcon,
        type: S.SpinnerTypes.SPINNING_CIRCLE
      }), E && (0, l.jsx)(c.ImageWarningIcon, {
        className: P.rewardTileAssetStatusIcon
      }), (0, l.jsx)(y.default, {
        className: r()(P.rewardTileAsset, {
          [P.rewardTileAssetLoading]: R || E
        }),
        quest: s,
        questContent: N.QuestContent.QUEST_BAR
      })]
    }), (0, l.jsxs)("div", {
      className: P.rewardSubheading,
      children: [C && (0, l.jsx)(d.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: u.default.colors.TEXT_MUTED,
        className: P.rewardSubheadingIcon
      }), (0, l.jsx)(S.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: P.rewardSubheadingText,
        children: m
      })]
    }), (0, l.jsx)(S.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: P.rewardHeading,
      children: f
    })]
  })
}

function B(e) {
  let t = (0, i.useStateFromStores)([M.default], () => M.default.getQuest(e.questId));
  return null != t ? (0, l.jsx)(F, {
    ...e,
    quest: t
  }) : null
}

function F(e) {
  var t;
  let {
    transitionState: s,
    onClose: n,
    quest: r,
    location: u,
    questContentPosition: d
  } = e, c = a.useMemo(() => {
    var e;
    return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), h = j.SharedQuestFields.build(r.config).rewardPlatforms, v = h.length > 1, [w, y] = a.useState(v ? null : h[0]), B = a.useRef(new o.Environment), F = a.useRef(null), [k, Z] = a.useState(null), H = (0, i.useStateFromStores)([g.default], () => g.default.useReducedMotion), V = (0, i.useStateFromStores)([A.default], () => A.default.hidePersonalInformation), {
    rewardCode: q,
    isFetchingRewardCode: G,
    isClaimingRewardCode: z
  } = (0, i.useStateFromStoresObject)([M.default], () => ({
    rewardCode: M.default.getRewardCode(r.id),
    isFetchingRewardCode: M.default.isFetchingRewardCode(r.id),
    isClaimingRewardCode: M.default.isClaimingRewardCode(r.id) || M.default.isClaimingReward(r.id)
  })), X = (0, O.isTieredRewardCodeQuest)({
    quest: r
  }), [Y, J] = a.useState(!1), K = v && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == q, $ = a.useCallback((e, t, s) => {
    J(!1), X || 2 === r.config.configVersion ? (0, D.claimQuestReward)(e, t, s).catch(() => J(!0)) : (0, D.claimQuestRewardCode)(e, t, s).catch(() => J(!0))
  }, [X, r.config.configVersion]), ee = a.useCallback(e => {
    J(!1), (0, D.fetchQuestRewardCode)(e).catch(() => J(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == q && !Y && !z && !G && !K && ((null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != w ? $(r.id, w, u) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && ee(r.id))
  }, [r, q, z, G, Y, K, w, u, $, ee]);
  let et = null;
  c && null != q ? et = U.default.Messages.QUESTS_REWARD_CODE_HEADER : null != q ? et = U.default.Messages.QUESTS_REWARD_CODE_CONGRATS : K && (et = U.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let es = null != et ? (0, l.jsx)(S.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: P.heading,
      children: et
    }) : null,
    el = function(e) {
      var t, s, a, n;
      let {
        quest: r,
        selectedPlatform: o,
        needsToConfirmPlatform: i,
        rewardCode: u,
        hasTieredRewardCodes: d
      } = e, c = j.SharedQuestFields.build(r.config);
      if (i) return (0, l.jsx)(S.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: P.bodyCopy,
        children: d ? U.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : U.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: c.defaultReward.messages.name
        })
      });
      let C = null != o ? o : null == u ? void 0 : u.platform,
        f = d ? (0, O.getRewardCodeQuestReward)({
          quest: r,
          idx: null !== (a = null == u ? void 0 : u.tier) && void 0 !== a ? a : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
        }) : null,
        m = null !== (n = null == f ? void 0 : null === (s = f.messages) || void 0 === s ? void 0 : s.redemptionInstructionsByPlatform) && void 0 !== n ? n : c.defaultRewardRedemptionInstructionsByPlatform,
        E = null != C ? m[C] : void 0;
      return null != u && null != E ? (0, l.jsx)(S.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: P.bodyCopy,
        children: T.default.parse(E, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: r,
      selectedPlatform: w,
      needsToConfirmPlatform: K,
      rewardCode: q,
      hasTieredRewardCodes: X
    }),
    ea = a.useMemo(() => h.map(e => ({
      label: (0, O.getPlatformString)(e),
      value: e
    })), [h]),
    en = null;
  K && (en = (0, l.jsxs)(S.FormItem, {
    title: U.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(S.Select, {
      placeholder: U.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: ea,
      select: e => {
        J(!1), y(e)
      },
      isSelected: e => e === w,
      serialize: e => (0, O.getPlatformString)(e),
      className: Y ? P.errorInput : "",
      isDisabled: z,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case N.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(m.ScienceIcon, {
                className: P.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(E.ScreenIcon, {
                className: P.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(f.PlaystationIcon, {
                className: P.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(C.NintendoSwitchNeutralIcon, {
                className: P.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(R.XboxIcon, {
                className: P.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: P.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), Y ? (0, l.jsx)(S.InputError, {
      error: U.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let er = null == q && (G || z),
    eo = er && !K ? (0, l.jsx)(S.Spinner, {}) : null,
    ei = null;
  null != q ? ei = (0, l.jsx)(S.FormItem, {
    title: U.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(p.default, {
      value: V ? U.default.Messages.QUEST_REWARD_CODE_HIDDEN : q.code,
      delay: 1e3,
      buttonColor: S.Button.Colors.BRAND,
      onCopy: () => {
        V && (0, x.copy)(q.code), (0, I.trackQuestContentClicked)({
          questId: r.id,
          questContent: u,
          questContentPosition: d,
          questContentCTA: I.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : Y && !K && (ei = (0, l.jsx)(S.FormItem, {
    title: U.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(S.TextInput, {
      disabled: !0,
      error: U.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: P.errorInput
    })
  }));
  let eu = () => {
      var e;
      K && null != w ? ($(r.id, w, u), (0, I.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: I.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : Y ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? ee(r.id) : null != w && ($(r.id, w, u), (0, I.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: I.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : n()
    },
    ed = K && z,
    ec = !ed && (K && null == w || er),
    eC = U.default.Messages.QUESTS_REWARD_CODE_DONE;
  K ? eC = U.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !K && Y && (eC = U.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ef = !H && null != q && !c && !Y,
    em = (0, l.jsx)(S.Button, {
      onClick: () => eu(),
      submitting: ed,
      disabled: ec,
      children: eC
    }),
    eE = null != eo && X;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.ConfettiCanvas, {
      ref: Z,
      className: P.confettiCanvas,
      environment: B.current
    }), (0, l.jsx)("div", {
      ref: F,
      children: (0, l.jsxs)(S.ModalRoot, {
        transitionState: s,
        size: S.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: P.modalBody,
          children: [(0, l.jsx)(S.ModalCloseButton, {
            className: P.closeButton,
            onClick: () => n()
          }), !eE && (0, l.jsx)(Q.QuestsAssetContextProvider, {
            sentrySource: L.QuestsExperimentLocations.REWARD_CODE_MODAL,
            children: (0, l.jsx)(W, {
              quest: r,
              rewardCode: q,
              hasTieredRewardCodes: X
            })
          }), (0, l.jsxs)("div", {
            className: P.modalContent,
            children: [es, el, en, eo, ei]
          })]
        }), (0, l.jsx)(S.ModalFooter, {
          children: em
        })]
      })
    }), ef && (0, l.jsx)(_.default, {
      confettiTarget: F.current,
      confettiCanvas: k,
      sprites: b.COMMON_CONFETTI_SPRITES,
      colors: b.COMMON_CONFETTI_COLORS
    })]
  })
}