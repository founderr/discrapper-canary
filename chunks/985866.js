"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("120356"),
  r = s.n(a),
  o = s("887024"),
  i = s("442837"),
  u = s("692547"),
  d = s("979184"),
  c = s("984986"),
  f = s("299847"),
  C = s("533627"),
  h = s("381837"),
  R = s("718671"),
  m = s("432594"),
  E = s("780384"),
  p = s("481060"),
  S = s("484614"),
  v = s("410030"),
  g = s("607070"),
  x = s("530618"),
  _ = s("454585"),
  T = s("246946"),
  A = s("572004"),
  w = s("302221"),
  I = s("617136"),
  N = s("272008"),
  M = s("569984"),
  D = s("497505"),
  O = s("918701"),
  j = s("566078"),
  y = s("644646"),
  b = s("78826"),
  L = s("46140"),
  Q = s("675654"),
  B = s("689938"),
  k = s("620324");

function P(e) {
  var t;
  let {
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  } = e, o = (0, E.isThemeDark)((0, v.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(o ? "var(--black)" : "var(--white)", "\n    ")
  }, f = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != n, {
    header: C,
    subHeader: h
  } = function(e) {
    var t, s, l, n;
    let {
      quest: a,
      rewardCode: r,
      hasTieredRewardCodes: o
    } = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, u = o ? "" : B.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, d = o ? (0, O.getRewardCodeQuestReward)({
      quest: a,
      idx: null !== (l = null == r ? void 0 : r.tier) && void 0 !== l ? l : null === (s = a.userStatus) || void 0 === s ? void 0 : s.claimedTier
    }) : null, c = j.SharedQuestFields.build(a.config), f = null != d && null !== (n = d.messages.name) && void 0 !== n ? n : c.defaultReward.messages.name, C = o ? B.default.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
    return {
      subHeader: i ? B.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : u,
      header: i ? f : C
    }
  }({
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  }), {
    hasError: R,
    isLoading: m
  } = (0, b.useQuestsAssetsLoadState)();
  return (0, l.jsxs)("div", {
    style: i,
    className: k.rewardTile,
    children: [(0, l.jsxs)("div", {
      className: k.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": s.config.colors.primary
      },
      children: [m && !R && (0, l.jsx)(p.Spinner, {
        className: k.rewardTileAssetStatusIcon,
        type: p.SpinnerTypes.SPINNING_CIRCLE
      }), R && (0, l.jsx)(c.ImageWarningIcon, {
        className: k.rewardTileAssetStatusIcon
      }), (0, l.jsx)(y.default, {
        className: r()(k.rewardTileAsset, {
          [k.rewardTileAssetLoading]: m || R
        }),
        quest: s,
        questContent: D.QuestContent.QUEST_BAR
      })]
    }), (0, l.jsxs)("div", {
      className: k.rewardSubheading,
      children: [f && (0, l.jsx)(d.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: u.default.colors.TEXT_MUTED,
        className: k.rewardSubheadingIcon
      }), (0, l.jsx)(p.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: k.rewardSubheadingText,
        children: h
      })]
    }), (0, l.jsx)(p.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: k.rewardHeading,
      children: C
    })]
  })
}

function U(e) {
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
    onClose: a,
    quest: r,
    location: u,
    questContentPosition: d
  } = e, c = n.useMemo(() => {
    var e;
    return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), E = j.SharedQuestFields.build(r.config).rewardPlatforms, v = E.length > 1, [w, y] = n.useState(v ? null : E[0]), U = n.useRef(new o.Environment), F = n.useRef(null), [W, Z] = n.useState(null), H = (0, i.useStateFromStores)([g.default], () => g.default.useReducedMotion), q = (0, i.useStateFromStores)([T.default], () => T.default.hidePersonalInformation), {
    rewardCode: V,
    isFetchingRewardCode: G,
    isClaimingRewardCode: z
  } = (0, i.useStateFromStoresObject)([M.default], () => ({
    rewardCode: M.default.getRewardCode(r.id),
    isFetchingRewardCode: M.default.isFetchingRewardCode(r.id),
    isClaimingRewardCode: M.default.isClaimingRewardCode(r.id) || M.default.isClaimingReward(r.id)
  })), Y = (0, O.isTieredRewardCodeQuest)({
    quest: r
  }), [X, J] = n.useState(!1), K = v && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == V, $ = n.useCallback((e, t, s) => {
    J(!1), Y ? (0, N.claimQuestReward)(e, t, s).catch(() => J(!0)) : (0, N.claimQuestRewardCode)(e, t, s).catch(() => J(!0))
  }, [Y]), ee = n.useCallback(e => {
    J(!1), (0, N.fetchQuestRewardCode)(e).catch(() => J(!0))
  }, []);
  n.useEffect(() => {
    var e, t;
    null == V && !X && !z && !G && !K && ((null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != w ? $(r.id, w, u) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && ee(r.id))
  }, [r, V, z, G, X, K, w, u, $, ee]);
  let et = null;
  c && null != V ? et = B.default.Messages.QUESTS_REWARD_CODE_HEADER : null != V ? et = B.default.Messages.QUESTS_REWARD_CODE_CONGRATS : K && (et = B.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let es = null != et ? (0, l.jsx)(p.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: k.heading,
      children: et
    }) : null,
    el = function(e) {
      var t, s, n, a;
      let {
        quest: r,
        selectedPlatform: o,
        needsToConfirmPlatform: i,
        rewardCode: u,
        hasTieredRewardCodes: d
      } = e, c = j.SharedQuestFields.build(r.config);
      if (i) return (0, l.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: k.bodyCopy,
        children: d ? B.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : B.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: c.defaultReward.messages.name
        })
      });
      let f = null != o ? o : null == u ? void 0 : u.platform,
        C = d ? (0, O.getRewardCodeQuestReward)({
          quest: r,
          idx: null !== (n = null == u ? void 0 : u.tier) && void 0 !== n ? n : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
        }) : null,
        h = null !== (a = null == C ? void 0 : null === (s = C.messages) || void 0 === s ? void 0 : s.redemptionInstructionsByPlatform) && void 0 !== a ? a : c.defaultRewardRedemptionInstructionsByPlatform,
        R = null != f ? h[f] : void 0;
      return null != u && null != R ? (0, l.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: k.bodyCopy,
        children: _.default.parse(R, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: r,
      selectedPlatform: w,
      needsToConfirmPlatform: K,
      rewardCode: V,
      hasTieredRewardCodes: Y
    }),
    en = n.useMemo(() => E.map(e => ({
      label: (0, O.getPlatformString)(e),
      value: e
    })), [E]),
    ea = null;
  K && (ea = (0, l.jsxs)(p.FormItem, {
    title: B.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(p.Select, {
      placeholder: B.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: en,
      select: e => {
        J(!1), y(e)
      },
      isSelected: e => e === w,
      serialize: e => (0, O.getPlatformString)(e),
      className: X ? k.errorInput : "",
      isDisabled: z,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case D.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(h.ScienceIcon, {
                className: k.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(R.ScreenIcon, {
                className: k.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(C.PlaystationIcon, {
                className: k.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(f.NintendoSwitchNeutralIcon, {
                className: k.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(m.XboxIcon, {
                className: k.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: k.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), X ? (0, l.jsx)(p.InputError, {
      error: B.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let er = null == V && (G || z),
    eo = er && !K ? (0, l.jsx)(p.Spinner, {}) : null,
    ei = null;
  null != V ? ei = (0, l.jsx)(p.FormItem, {
    title: B.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(S.default, {
      value: q ? B.default.Messages.QUEST_REWARD_CODE_HIDDEN : V.code,
      delay: 1e3,
      buttonColor: p.Button.Colors.BRAND,
      onCopy: () => {
        q && (0, A.copy)(V.code), (0, I.trackQuestContentClicked)({
          questId: r.id,
          questContent: u,
          questContentPosition: d,
          questContentCTA: I.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : X && !K && (ei = (0, l.jsx)(p.FormItem, {
    title: B.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(p.TextInput, {
      disabled: !0,
      error: B.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: k.errorInput
    })
  }));
  let eu = () => {
      var e;
      K && null != w ? ($(r.id, w, u), (0, I.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: I.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : X ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? ee(r.id) : null != w && ($(r.id, w, u), (0, I.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: I.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : a()
    },
    ed = K && z,
    ec = !ed && (K && null == w || er),
    ef = B.default.Messages.QUESTS_REWARD_CODE_DONE;
  K ? ef = B.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !K && X && (ef = B.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let eC = !H && null != V && !c && !X,
    eh = (0, l.jsx)(p.Button, {
      onClick: () => eu(),
      submitting: ed,
      disabled: ec,
      children: ef
    }),
    eR = null != eo && Y;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.ConfettiCanvas, {
      ref: Z,
      className: k.confettiCanvas,
      environment: U.current
    }), (0, l.jsx)("div", {
      ref: F,
      children: (0, l.jsxs)(p.ModalRoot, {
        transitionState: s,
        size: p.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: k.modalBody,
          children: [(0, l.jsx)(p.ModalCloseButton, {
            className: k.closeButton,
            onClick: () => a()
          }), !eR && (0, l.jsx)(b.QuestsAssetContextProvider, {
            sentrySource: L.QuestsExperimentLocations.REWARD_CODE_MODAL,
            children: (0, l.jsx)(P, {
              quest: r,
              rewardCode: V,
              hasTieredRewardCodes: Y
            })
          }), (0, l.jsxs)("div", {
            className: k.modalContent,
            children: [es, el, ea, eo, ei]
          })]
        }), (0, l.jsx)(p.ModalFooter, {
          children: eh
        })]
      })
    }), eC && (0, l.jsx)(x.default, {
      confettiTarget: F.current,
      confettiCanvas: W,
      sprites: Q.COMMON_CONFETTI_SPRITES,
      colors: Q.COMMON_CONFETTI_COLORS
    })]
  })
}