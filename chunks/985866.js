"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  r = s("692547"),
  o = s("979184"),
  i = s("299847"),
  d = s("533627"),
  c = s("381837"),
  u = s("718671"),
  f = s("432594"),
  C = s("780384"),
  h = s("481060"),
  m = s("484614"),
  E = s("410030"),
  R = s("454585"),
  p = s("246946"),
  g = s("594174"),
  S = s("302221"),
  x = s("617136"),
  v = s("272008"),
  _ = s("569984"),
  A = s("497505"),
  T = s("918701"),
  N = s("406657"),
  M = s("689938"),
  I = s("430515");

function w(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, C.isThemeDark)((0, E.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, S.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, S.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: i,
    className: I.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, T.getRewardAssetUrl)(s),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: I.reward
    }), (0, a.jsxs)("div", {
      className: I.rewardSubheading,
      children: [d && (0, a.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: r.default.colors.TEXT_MUTED,
        className: I.rewardSubheadingIcon
      }), (0, a.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: I.rewardSubheadingText,
        children: d ? M.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : M.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: I.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function j(e) {
  return (0, n.useStateFromStores)([g.default], () => {
    var e;
    return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  }) ? (0, a.jsx)(D, {
    ...e
  }) : (0, a.jsx)(N.QuestsRewardCodeModalUnverified, {
    ...e
  })
}

function D(e) {
  var t;
  let {
    transitionState: s,
    onClose: r,
    quest: o,
    location: C
  } = e, E = l.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), g = o.config.rewardCodePlatforms.length > 1, [S, N] = l.useState(g ? null : o.config.rewardCodePlatforms[0]), j = (0, n.useStateFromStores)([p.default], () => p.default.hidePersonalInformation), {
    rewardCode: D,
    isFetchingRewardCode: O,
    isClaimingRewardCode: b
  } = (0, n.useStateFromStoresObject)([_.default], () => ({
    rewardCode: _.default.getRewardCode(o.id),
    isFetchingRewardCode: _.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: _.default.isClaimingRewardCode(o.id)
  })), [y, L] = l.useState(!1), B = g && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == D, U = l.useCallback((e, t, s) => {
    L(!1), (0, v.claimQuestRewardCode)(e, t, s).catch(() => L(!0))
  }, []), k = l.useCallback(e => {
    L(!1), (0, v.fetchQuestRewardCode)(e).catch(() => L(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == D && !y && !b && !O && !B && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != S ? U(o.id, S, C) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && k(o.id))
  }, [o, D, b, O, y, B, S, C, U, k]);
  let Q = null;
  E && null != D ? Q = M.default.Messages.QUESTS_REWARD_CODE_HEADER : null != D ? Q = M.default.Messages.QUESTS_REWARD_CODE_CONGRATS : B && (Q = M.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let P = null != Q ? (0, a.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: I.heading,
      children: Q
    }) : null,
    F = null;
  B && (F = M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let W = null != S ? S : null == D ? void 0 : D.platform,
    H = null != W ? o.config.messages.rewardRedemptionInstructionsByPlatform[W] : void 0;
  null != D && null != H && (F = R.default.parse(H, !1, {
    allowLinks: !0
  }));
  let Z = null != F ? (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: I.bodyCopy,
      children: F
    }) : null,
    V = l.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, T.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    q = null;
  B && (q = (0, a.jsxs)(h.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(h.Select, {
      placeholder: M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: V,
      select: e => {
        L(!1), N(e)
      },
      isSelected: e => e === S,
      serialize: e => (0, T.getPlatformString)(e),
      className: y ? I.errorInput : "",
      isDisabled: b,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case A.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(c.ScienceIcon, {
                className: I.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(u.ScreenIcon, {
                className: I.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(d.PlaystationIcon, {
                className: I.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(i.NintendoSwitchNeutralIcon, {
                className: I.platformSelectionOptionIcon
              });
            case A.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(f.XboxIcon, {
                className: I.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: I.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), y ? (0, a.jsx)(h.InputError, {
      error: M.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let z = null == D && (O || b),
    G = z && !B ? (0, a.jsx)(h.Spinner, {
      className: I.__invalid_spinner
    }) : null,
    Y = null;
  null != D ? Y = (0, a.jsx)(h.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(m.default, {
      value: j ? M.default.Messages.QUEST_REWARD_CODE_HIDDEN : D.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        (0, x.trackQuestContentClicked)({
          questId: o.id,
          questContent: C,
          questContentCTA: x.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : y && !B && (Y = (0, a.jsx)(h.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(h.TextInput, {
      disabled: !0,
      error: M.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: I.errorInput
    })
  }));
  let X = () => {
      var e;
      B && null != S ? (U(o.id, S, C), (0, x.trackQuestContentClicked)({
        questId: o.id,
        questContent: C,
        questContentCTA: x.QuestContentCTA.GET_REWARD_CODE
      })) : y ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? k(o.id) : null != S && (U(o.id, S, C), (0, x.trackQuestContentClicked)({
        questId: o.id,
        questContent: C,
        questContentCTA: x.QuestContentCTA.GET_REWARD_CODE
      })) : r()
    },
    K = B && b,
    J = !K && (B && null == S || z),
    $ = M.default.Messages.QUESTS_REWARD_CODE_DONE;
  B ? $ = M.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !B && y && ($ = M.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ee = (0, a.jsx)(h.Button, {
    onClick: () => X(),
    submitting: K,
    disabled: J,
    children: $
  });
  return (0, a.jsxs)(h.ModalRoot, {
    transitionState: s,
    size: h.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)("div", {
      className: I.modalBody,
      children: [(0, a.jsx)(h.ModalCloseButton, {
        className: I.closeButton,
        onClick: () => r()
      }), (0, a.jsx)(w, {
        quest: o,
        rewardCode: D
      }), (0, a.jsxs)("div", {
        className: I.modalContent,
        children: [P, Z, q, G, Y]
      })]
    }), (0, a.jsx)(h.ModalFooter, {
      children: ee
    })]
  })
}