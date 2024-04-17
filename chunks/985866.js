"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("236471"),
  r = s("442837"),
  o = s("692547"),
  i = s("979184"),
  u = s("299847"),
  d = s("533627"),
  c = s("381837"),
  f = s("718671"),
  C = s("432594"),
  m = s("780384"),
  h = s("481060"),
  R = s("484614"),
  E = s("410030"),
  p = s("607070"),
  v = s("530618"),
  S = s("454585"),
  g = s("246946"),
  _ = s("572004"),
  x = s("302221"),
  T = s("617136"),
  A = s("272008"),
  w = s("569984"),
  N = s("497505"),
  D = s("918701"),
  M = s("644646"),
  I = s("675654"),
  O = s("689938"),
  j = s("430515");

function y(e) {
  var t;
  let {
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  } = e, r = (0, m.isThemeDark)((0, E.default)()), u = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, x.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, x.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != n, {
    header: c,
    subHeader: f
  } = function(e) {
    var t, s, l, n;
    let {
      quest: a,
      rewardCode: r,
      hasTieredRewardCodes: o
    } = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, u = o ? "" : O.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, d = o ? (0, D.getRewardCodeQuestReward)({
      quest: a,
      idx: null !== (l = null == r ? void 0 : r.tier) && void 0 !== l ? l : null === (s = a.userStatus) || void 0 === s ? void 0 : s.claimedTier
    }) : null, c = null != d && null !== (n = d.messages.name) && void 0 !== n ? n : a.config.messages.rewardName, f = o ? O.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER_V2 : a.config.messages.rewardName;
    return {
      subHeader: i ? O.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : u,
      header: i ? c : f
    }
  }({
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  });
  return (0, l.jsxs)("div", {
    style: u,
    className: j.rewardTile,
    children: [(0, l.jsx)("div", {
      className: j.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": s.config.colors.primary
      },
      children: (0, l.jsx)(M.default, {
        className: j.rewardTileAsset,
        quest: s,
        questContent: N.QuestContent.QUEST_BAR
      })
    }), (0, l.jsxs)("div", {
      className: j.rewardSubheading,
      children: [d && (0, l.jsx)(i.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: j.rewardSubheadingIcon
      }), (0, l.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: j.rewardSubheadingText,
        children: f
      })]
    }), (0, l.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: j.rewardHeading,
      children: c
    })]
  })
}

function b(e) {
  let t = (0, r.useStateFromStores)([w.default], () => w.default.getQuest(e.questId));
  return null != t ? (0, l.jsx)(L, {
    ...e,
    quest: t
  }) : null
}

function L(e) {
  var t;
  let {
    transitionState: s,
    onClose: o,
    quest: i,
    location: m
  } = e, E = n.useMemo(() => {
    var e;
    return (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), x = i.config.rewardCodePlatforms.length > 1, [M, b] = n.useState(x ? null : i.config.rewardCodePlatforms[0]), L = n.useRef(new a.Environment), B = n.useRef(null), [Q, k] = n.useState(null), U = (0, r.useStateFromStores)([p.default], () => p.default.useReducedMotion), P = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    rewardCode: W,
    isFetchingRewardCode: F,
    isClaimingRewardCode: H
  } = (0, r.useStateFromStoresObject)([w.default], () => ({
    rewardCode: w.default.getRewardCode(i.id),
    isFetchingRewardCode: w.default.isFetchingRewardCode(i.id),
    isClaimingRewardCode: w.default.isClaimingRewardCode(i.id) || w.default.isClaimingReward(i.id)
  })), Z = (0, D.isTieredRewardCodeQuest)({
    quest: i
  }), [V, q] = n.useState(!1), z = x && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == W, G = n.useCallback((e, t, s) => {
    q(!1), Z ? (0, A.claimQuestReward)(e, t, s).catch(() => q(!0)) : (0, A.claimQuestRewardCode)(e, t, s).catch(() => q(!0))
  }, [Z]), Y = n.useCallback(e => {
    q(!1), (0, A.fetchQuestRewardCode)(e).catch(() => q(!0))
  }, []);
  n.useEffect(() => {
    var e, t;
    null == W && !V && !H && !F && !z && ((null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != M ? G(i.id, M, m) : (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && Y(i.id))
  }, [i, W, H, F, V, z, M, m, G, Y]);
  let X = null;
  E && null != W ? X = O.default.Messages.QUESTS_REWARD_CODE_HEADER : null != W ? X = O.default.Messages.QUESTS_REWARD_CODE_CONGRATS : z && (X = O.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let J = null != X ? (0, l.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: j.heading,
      children: X
    }) : null,
    K = function(e) {
      var t, s, n, a;
      let {
        quest: r,
        selectedPlatform: o,
        needsToConfirmPlatform: i,
        rewardCode: u,
        hasTieredRewardCodes: d
      } = e;
      if (i) return (0, l.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: j.bodyCopy,
        children: d ? O.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : O.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: r.config.messages.rewardName
        })
      });
      let c = null != o ? o : null == u ? void 0 : u.platform,
        f = d ? (0, D.getRewardCodeQuestReward)({
          quest: r,
          idx: null !== (n = null == u ? void 0 : u.tier) && void 0 !== n ? n : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
        }) : null,
        C = null !== (a = null == f ? void 0 : null === (s = f.messages) || void 0 === s ? void 0 : s.redemptionInstructionsByPlatform) && void 0 !== a ? a : r.config.messages.rewardRedemptionInstructionsByPlatform,
        m = null != c ? C[c] : void 0;
      return null != u && null != m ? (0, l.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: j.bodyCopy,
        children: S.default.parse(m, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: i,
      selectedPlatform: M,
      needsToConfirmPlatform: z,
      rewardCode: W,
      hasTieredRewardCodes: Z
    }),
    $ = n.useMemo(() => i.config.rewardCodePlatforms.map(e => ({
      label: (0, D.getPlatformString)(e),
      value: e
    })), [i.config.rewardCodePlatforms]),
    ee = null;
  z && (ee = (0, l.jsxs)(h.FormItem, {
    title: O.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(h.Select, {
      placeholder: O.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: $,
      select: e => {
        q(!1), b(e)
      },
      isSelected: e => e === M,
      serialize: e => (0, D.getPlatformString)(e),
      className: V ? j.errorInput : "",
      isDisabled: H,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case N.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(c.ScienceIcon, {
                className: j.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(f.ScreenIcon, {
                className: j.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(d.PlaystationIcon, {
                className: j.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(u.NintendoSwitchNeutralIcon, {
                className: j.platformSelectionOptionIcon
              });
            case N.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(C.XboxIcon, {
                className: j.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: j.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), V ? (0, l.jsx)(h.InputError, {
      error: O.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let et = null == W && (F || H),
    es = et && !z ? (0, l.jsx)(h.Spinner, {}) : null,
    el = null;
  null != W ? el = (0, l.jsx)(h.FormItem, {
    title: O.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(R.default, {
      value: P ? O.default.Messages.QUEST_REWARD_CODE_HIDDEN : W.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        P && (0, _.copy)(W.code), (0, T.trackQuestContentClicked)({
          questId: i.id,
          questContent: m,
          questContentCTA: T.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : V && !z && (el = (0, l.jsx)(h.FormItem, {
    title: O.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(h.TextInput, {
      disabled: !0,
      error: O.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: j.errorInput
    })
  }));
  let en = () => {
      var e;
      z && null != M ? (G(i.id, M, m), (0, T.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: T.QuestContentCTA.GET_REWARD_CODE
      })) : V ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? Y(i.id) : null != M && (G(i.id, M, m), (0, T.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: T.QuestContentCTA.GET_REWARD_CODE
      })) : o()
    },
    ea = z && H,
    er = !ea && (z && null == M || et),
    eo = O.default.Messages.QUESTS_REWARD_CODE_DONE;
  z ? eo = O.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !z && V && (eo = O.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ei = !U && null != W && !E && !V,
    eu = (0, l.jsx)(h.Button, {
      onClick: () => en(),
      submitting: ea,
      disabled: er,
      children: eo
    }),
    ed = null != es && Z;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.ConfettiCanvas, {
      ref: k,
      className: j.confettiCanvas,
      environment: L.current
    }), (0, l.jsx)("div", {
      ref: B,
      children: (0, l.jsxs)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: j.modalBody,
          children: [(0, l.jsx)(h.ModalCloseButton, {
            className: j.closeButton,
            onClick: () => o()
          }), !ed && (0, l.jsx)(y, {
            quest: i,
            rewardCode: W,
            hasTieredRewardCodes: Z
          }), (0, l.jsxs)("div", {
            className: j.modalContent,
            children: [J, K, ee, es, el]
          })]
        }), (0, l.jsx)(h.ModalFooter, {
          children: eu
        })]
      })
    }), ei && (0, l.jsx)(v.default, {
      confettiTarget: B.current,
      confettiCanvas: Q,
      sprites: I.COMMON_CONFETTI_SPRITES,
      colors: I.COMMON_CONFETTI_COLORS
    })]
  })
}