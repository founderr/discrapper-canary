"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("911765"),
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
  E = s("484614"),
  R = s("410030"),
  p = s("607070"),
  S = s("530618"),
  x = s("454585"),
  g = s("246946"),
  v = s("594174"),
  _ = s("302221"),
  T = s("617136"),
  M = s("272008"),
  N = s("569984"),
  A = s("497505"),
  I = s("918701"),
  O = s("406657"),
  j = s("675654"),
  w = s("689938"),
  D = s("430515");

function y(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, m.isThemeDark)((0, R.default)()), r = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, _.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, _.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: r,
    className: D.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, I.getRewardAssetUrl)(s),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: D.reward
    }), (0, a.jsxs)("div", {
      className: D.rewardSubheading,
      children: [u && (0, a.jsx)(i.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: D.rewardSubheadingIcon
      }), (0, a.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: D.rewardSubheadingText,
        children: u ? w.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : w.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: D.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function b(e) {
  return (0, r.useStateFromStores)([v.default], () => {
    var e;
    return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  }) ? (0, a.jsx)(L, {
    ...e
  }) : (0, a.jsx)(O.QuestsRewardCodeModalUnverified, {
    ...e
  })
}

function L(e) {
  var t;
  let {
    transitionState: s,
    onClose: o,
    quest: i,
    location: m
  } = e, R = l.useMemo(() => {
    var e;
    return (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), v = i.config.rewardCodePlatforms.length > 1, [_, O] = l.useState(v ? null : i.config.rewardCodePlatforms[0]), b = l.useRef(new n.Environment), L = l.useRef(null), [B, U] = l.useState(null), k = (0, r.useStateFromStores)([p.default], () => p.default.useReducedMotion), F = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    rewardCode: P,
    isFetchingRewardCode: Q,
    isClaimingRewardCode: W
  } = (0, r.useStateFromStoresObject)([N.default], () => ({
    rewardCode: N.default.getRewardCode(i.id),
    isFetchingRewardCode: N.default.isFetchingRewardCode(i.id),
    isClaimingRewardCode: N.default.isClaimingRewardCode(i.id)
  })), [H, V] = l.useState(!1), Z = v && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == P, q = l.useCallback((e, t, s) => {
    V(!1), (0, M.claimQuestRewardCode)(e, t, s).catch(() => V(!0))
  }, []), G = l.useCallback(e => {
    V(!1), (0, M.fetchQuestRewardCode)(e).catch(() => V(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == P && !H && !W && !Q && !Z && ((null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != _ ? q(i.id, _, m) : (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && G(i.id))
  }, [i, P, W, Q, H, Z, _, m, q, G]);
  let z = null;
  R && null != P ? z = w.default.Messages.QUESTS_REWARD_CODE_HEADER : null != P ? z = w.default.Messages.QUESTS_REWARD_CODE_CONGRATS : Z && (z = w.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let X = null != z ? (0, a.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: D.heading,
      children: z
    }) : null,
    Y = null;
  Z && (Y = w.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: i.config.messages.rewardName
  }));
  let K = null != _ ? _ : null == P ? void 0 : P.platform,
    J = null != K ? i.config.messages.rewardRedemptionInstructionsByPlatform[K] : void 0;
  null != P && null != J && (Y = x.default.parse(J, !1, {
    allowLinks: !0
  }));
  let $ = null != Y ? (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: D.bodyCopy,
      children: Y
    }) : null,
    ee = l.useMemo(() => i.config.rewardCodePlatforms.map(e => ({
      label: (0, I.getPlatformString)(e),
      value: e
    })), [i.config.rewardCodePlatforms]),
    et = null;
  Z && (et = (0, a.jsxs)(h.FormItem, {
    title: w.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(h.Select, {
      placeholder: w.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: ee,
      select: e => {
        V(!1), O(e)
      },
      isSelected: e => e === _,
      serialize: e => (0, I.getPlatformString)(e),
      className: H ? D.errorInput : "",
      isDisabled: W,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case A.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(c.ScienceIcon, {
                className: D.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(f.ScreenIcon, {
                className: D.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(d.PlaystationIcon, {
                className: D.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(u.NintendoSwitchNeutralIcon, {
                className: D.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(C.XboxIcon, {
                className: D.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: D.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), H ? (0, a.jsx)(h.InputError, {
      error: w.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let es = null == P && (Q || W),
    ea = es && !Z ? (0, a.jsx)(h.Spinner, {
      className: D.__invalid_spinner
    }) : null,
    el = null;
  null != P ? el = (0, a.jsx)(h.FormItem, {
    title: w.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(E.default, {
      value: F ? w.default.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        (0, T.trackQuestContentClicked)({
          questId: i.id,
          questContent: m,
          questContentCTA: T.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : H && !Z && (el = (0, a.jsx)(h.FormItem, {
    title: w.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(h.TextInput, {
      disabled: !0,
      error: w.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: D.errorInput
    })
  }));
  let en = () => {
      var e;
      Z && null != _ ? (q(i.id, _, m), (0, T.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: T.QuestContentCTA.GET_REWARD_CODE
      })) : H ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? G(i.id) : null != _ && (q(i.id, _, m), (0, T.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: T.QuestContentCTA.GET_REWARD_CODE
      })) : o()
    },
    er = Z && W,
    eo = !er && (Z && null == _ || es),
    ei = w.default.Messages.QUESTS_REWARD_CODE_DONE;
  Z ? ei = w.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !Z && H && (ei = w.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let eu = (0, a.jsx)(h.Button, {
    onClick: () => en(),
    submitting: er,
    disabled: eo,
    children: ei
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.ConfettiCanvas, {
      ref: U,
      className: D.confettiCanvas,
      environment: b.current
    }), (0, a.jsx)("div", {
      ref: L,
      children: (0, a.jsxs)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.DYNAMIC,
        children: [(0, a.jsxs)("div", {
          className: D.modalBody,
          children: [(0, a.jsx)(h.ModalCloseButton, {
            className: D.closeButton,
            onClick: () => o()
          }), (0, a.jsx)(y, {
            quest: i,
            rewardCode: P
          }), (0, a.jsxs)("div", {
            className: D.modalContent,
            children: [X, $, et, ea, el]
          })]
        }), (0, a.jsx)(h.ModalFooter, {
          children: eu
        })]
      })
    }), !k && !R && null === ea && !1 === H && (0, a.jsx)(S.default, {
      confettiTarget: L.current,
      confettiCanvas: B,
      sprites: j.COMMON_CONFETTI_SPRITES,
      colors: j.COMMON_CONFETTI_COLORS
    })]
  })
}