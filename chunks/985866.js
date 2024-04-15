"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("236471"),
  r = s("442837"),
  o = s("692547"),
  i = s("979184"),
  d = s("299847"),
  u = s("533627"),
  c = s("381837"),
  f = s("718671"),
  C = s("432594"),
  m = s("780384"),
  h = s("481060"),
  E = s("484614"),
  R = s("410030"),
  S = s("607070"),
  p = s("530618"),
  v = s("454585"),
  g = s("246946"),
  x = s("594174"),
  _ = s("572004"),
  T = s("302221"),
  A = s("617136"),
  N = s("272008"),
  M = s("569984"),
  I = s("497505"),
  w = s("918701"),
  j = s("644646"),
  D = s("406657"),
  O = s("675654"),
  b = s("689938"),
  y = s("430515");

function L(e) {
  var t;
  let {
    quest: s,
    rewardCode: a,
    hasTieredRewardCodes: n
  } = e, r = (0, m.isThemeDark)((0, R.default)()), d = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a, {
    header: c,
    subHeader: f
  } = function(e) {
    var t, s, l, a;
    let {
      quest: n,
      rewardCode: r,
      hasTieredRewardCodes: o
    } = e, i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, d = o ? "" : b.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, u = o ? (0, w.getRewardCodeQuestReward)({
      quest: n,
      idx: null !== (l = null == r ? void 0 : r.tier) && void 0 !== l ? l : null === (s = n.userStatus) || void 0 === s ? void 0 : s.claimedTier
    }) : null, c = null != u && null !== (a = u.messages.name) && void 0 !== a ? a : n.config.messages.rewardName, f = o ? b.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER_V2 : n.config.messages.rewardName;
    return {
      subHeader: i ? b.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
      header: i ? c : f
    }
  }({
    quest: s,
    rewardCode: a,
    hasTieredRewardCodes: n
  });
  return (0, l.jsxs)("div", {
    style: d,
    className: y.rewardTile,
    children: [(0, l.jsx)("div", {
      className: y.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": s.config.colors.primary
      },
      children: (0, l.jsx)(j.default, {
        className: y.rewardTileAsset,
        quest: s,
        questContent: I.QuestContent.QUEST_BAR
      })
    }), (0, l.jsxs)("div", {
      className: y.rewardSubheading,
      children: [u && (0, l.jsx)(i.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: y.rewardSubheadingIcon
      }), (0, l.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: y.rewardSubheadingText,
        children: f
      })]
    }), (0, l.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: y.rewardHeading,
      children: c
    })]
  })
}

function U(e) {
  let t = (0, r.useStateFromStores)([x.default], () => {
      var e;
      return null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
    }),
    s = (0, r.useStateFromStores)([M.default], () => M.default.getQuest(e.questId));
  return t ? null != s ? (0, l.jsx)(B, {
    ...e,
    quest: s
  }) : null : (0, l.jsx)(D.QuestsRewardCodeModalUnverified, {
    ...e
  })
}

function B(e) {
  var t;
  let {
    transitionState: s,
    onClose: o,
    quest: i,
    location: m
  } = e, R = a.useMemo(() => {
    var e;
    return (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), x = i.config.rewardCodePlatforms.length > 1, [T, j] = a.useState(x ? null : i.config.rewardCodePlatforms[0]), D = a.useRef(new n.Environment), U = a.useRef(null), [B, Q] = a.useState(null), k = (0, r.useStateFromStores)([S.default], () => S.default.useReducedMotion), F = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    rewardCode: P,
    isFetchingRewardCode: W,
    isClaimingRewardCode: H
  } = (0, r.useStateFromStoresObject)([M.default], () => ({
    rewardCode: M.default.getRewardCode(i.id),
    isFetchingRewardCode: M.default.isFetchingRewardCode(i.id),
    isClaimingRewardCode: M.default.isClaimingRewardCode(i.id) || M.default.isClaimingReward(i.id)
  })), Z = (0, w.isTieredRewardCodeQuest)({
    quest: i
  }), [V, q] = a.useState(!1), z = x && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == P, G = a.useCallback((e, t, s) => {
    q(!1), Z ? (0, N.claimQuestReward)(e, t, s).catch(() => q(!0)) : (0, N.claimQuestRewardCode)(e, t, s).catch(() => q(!0))
  }, [Z]), Y = a.useCallback(e => {
    q(!1), (0, N.fetchQuestRewardCode)(e).catch(() => q(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == P && !V && !H && !W && !z && ((null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != T ? G(i.id, T, m) : (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && Y(i.id))
  }, [i, P, H, W, V, z, T, m, G, Y]);
  let X = null;
  R && null != P ? X = b.default.Messages.QUESTS_REWARD_CODE_HEADER : null != P ? X = b.default.Messages.QUESTS_REWARD_CODE_CONGRATS : z && (X = b.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let K = null != X ? (0, l.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: y.heading,
      children: X
    }) : null,
    J = function(e) {
      var t, s, a, n;
      let {
        quest: r,
        selectedPlatform: o,
        needsToConfirmPlatform: i,
        rewardCode: d,
        hasTieredRewardCodes: u
      } = e;
      if (i) return (0, l.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: y.bodyCopy,
        children: u ? b.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : b.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: r.config.messages.rewardName
        })
      });
      let c = null != o ? o : null == d ? void 0 : d.platform,
        f = u ? (0, w.getRewardCodeQuestReward)({
          quest: r,
          idx: null !== (a = null == d ? void 0 : d.tier) && void 0 !== a ? a : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
        }) : null,
        C = null !== (n = null == f ? void 0 : null === (s = f.messages) || void 0 === s ? void 0 : s.redemptionInstructionsByPlatform) && void 0 !== n ? n : r.config.messages.rewardRedemptionInstructionsByPlatform,
        m = null != c ? C[c] : void 0;
      return null != d && null != m ? (0, l.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: y.bodyCopy,
        children: v.default.parse(m, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: i,
      selectedPlatform: T,
      needsToConfirmPlatform: z,
      rewardCode: P,
      hasTieredRewardCodes: Z
    }),
    $ = a.useMemo(() => i.config.rewardCodePlatforms.map(e => ({
      label: (0, w.getPlatformString)(e),
      value: e
    })), [i.config.rewardCodePlatforms]),
    ee = null;
  z && (ee = (0, l.jsxs)(h.FormItem, {
    title: b.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(h.Select, {
      placeholder: b.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: $,
      select: e => {
        q(!1), j(e)
      },
      isSelected: e => e === T,
      serialize: e => (0, w.getPlatformString)(e),
      className: V ? y.errorInput : "",
      isDisabled: H,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case I.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(c.ScienceIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(f.ScreenIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(u.PlaystationIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(d.NintendoSwitchNeutralIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(C.XboxIcon, {
                className: y.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: y.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), V ? (0, l.jsx)(h.InputError, {
      error: b.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let et = null == P && (W || H),
    es = et && !z ? (0, l.jsx)(h.Spinner, {}) : null,
    el = null;
  null != P ? el = (0, l.jsx)(h.FormItem, {
    title: b.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(E.default, {
      value: F ? b.default.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        F && (0, _.copy)(P.code), (0, A.trackQuestContentClicked)({
          questId: i.id,
          questContent: m,
          questContentCTA: A.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : V && !z && (el = (0, l.jsx)(h.FormItem, {
    title: b.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(h.TextInput, {
      disabled: !0,
      error: b.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: y.errorInput
    })
  }));
  let ea = () => {
      var e;
      z && null != T ? (G(i.id, T, m), (0, A.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: A.QuestContentCTA.GET_REWARD_CODE
      })) : V ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? Y(i.id) : null != T && (G(i.id, T, m), (0, A.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: A.QuestContentCTA.GET_REWARD_CODE
      })) : o()
    },
    en = z && H,
    er = !en && (z && null == T || et),
    eo = b.default.Messages.QUESTS_REWARD_CODE_DONE;
  z ? eo = b.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !z && V && (eo = b.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ei = !k && null != P && !R && !V,
    ed = (0, l.jsx)(h.Button, {
      onClick: () => ea(),
      submitting: en,
      disabled: er,
      children: eo
    }),
    eu = null != es && Z;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(n.ConfettiCanvas, {
      ref: Q,
      className: y.confettiCanvas,
      environment: D.current
    }), (0, l.jsx)("div", {
      ref: U,
      children: (0, l.jsxs)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: y.modalBody,
          children: [(0, l.jsx)(h.ModalCloseButton, {
            className: y.closeButton,
            onClick: () => o()
          }), !eu && (0, l.jsx)(L, {
            quest: i,
            rewardCode: P,
            hasTieredRewardCodes: Z
          }), (0, l.jsxs)("div", {
            className: y.modalContent,
            children: [K, J, ee, es, el]
          })]
        }), (0, l.jsx)(h.ModalFooter, {
          children: ed
        })]
      })
    }), ei && (0, l.jsx)(p.default, {
      confettiTarget: U.current,
      confettiCanvas: B,
      sprites: O.COMMON_CONFETTI_SPRITES,
      colors: O.COMMON_CONFETTI_COLORS
    })]
  })
}