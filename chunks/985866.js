"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
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
  _ = s("572004"),
  T = s("302221"),
  M = s("617136"),
  N = s("272008"),
  A = s("569984"),
  I = s("497505"),
  O = s("918701"),
  j = s("406657"),
  w = s("675654"),
  D = s("689938"),
  y = s("430515");

function b(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, m.isThemeDark)((0, R.default)()), r = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: r,
    className: y.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, O.getRewardAssetUrl)(s),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: y.reward
    }), (0, a.jsxs)("div", {
      className: y.rewardSubheading,
      children: [u && (0, a.jsx)(i.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: y.rewardSubheadingIcon
      }), (0, a.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: y.rewardSubheadingText,
        children: u ? D.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : D.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: y.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function L(e) {
  return (0, r.useStateFromStores)([v.default], () => {
    var e;
    return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  }) ? (0, a.jsx)(B, {
    ...e
  }) : (0, a.jsx)(j.QuestsRewardCodeModalUnverified, {
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
  } = e, R = l.useMemo(() => {
    var e;
    return (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), v = i.config.rewardCodePlatforms.length > 1, [T, j] = l.useState(v ? null : i.config.rewardCodePlatforms[0]), L = l.useRef(new n.Environment), B = l.useRef(null), [U, k] = l.useState(null), F = (0, r.useStateFromStores)([p.default], () => p.default.useReducedMotion), P = (0, r.useStateFromStores)([g.default], () => g.default.hidePersonalInformation), {
    rewardCode: Q,
    isFetchingRewardCode: W,
    isClaimingRewardCode: H
  } = (0, r.useStateFromStoresObject)([A.default], () => ({
    rewardCode: A.default.getRewardCode(i.id),
    isFetchingRewardCode: A.default.isFetchingRewardCode(i.id),
    isClaimingRewardCode: A.default.isClaimingRewardCode(i.id)
  })), [V, Z] = l.useState(!1), q = v && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Q, G = l.useCallback((e, t, s) => {
    Z(!1), (0, N.claimQuestRewardCode)(e, t, s).catch(() => Z(!0))
  }, []), z = l.useCallback(e => {
    Z(!1), (0, N.fetchQuestRewardCode)(e).catch(() => Z(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == Q && !V && !H && !W && !q && ((null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != T ? G(i.id, T, m) : (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && z(i.id))
  }, [i, Q, H, W, V, q, T, m, G, z]);
  let X = null;
  R && null != Q ? X = D.default.Messages.QUESTS_REWARD_CODE_HEADER : null != Q ? X = D.default.Messages.QUESTS_REWARD_CODE_CONGRATS : q && (X = D.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let Y = null != X ? (0, a.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: y.heading,
      children: X
    }) : null,
    K = null;
  q && (K = D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: i.config.messages.rewardName
  }));
  let J = null != T ? T : null == Q ? void 0 : Q.platform,
    $ = null != J ? i.config.messages.rewardRedemptionInstructionsByPlatform[J] : void 0;
  null != Q && null != $ && (K = x.default.parse($, !1, {
    allowLinks: !0
  }));
  let ee = null != K ? (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: y.bodyCopy,
      children: K
    }) : null,
    et = l.useMemo(() => i.config.rewardCodePlatforms.map(e => ({
      label: (0, O.getPlatformString)(e),
      value: e
    })), [i.config.rewardCodePlatforms]),
    es = null;
  q && (es = (0, a.jsxs)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(h.Select, {
      placeholder: D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: et,
      select: e => {
        Z(!1), j(e)
      },
      isSelected: e => e === T,
      serialize: e => (0, O.getPlatformString)(e),
      className: V ? y.errorInput : "",
      isDisabled: H,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case I.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(c.ScienceIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(f.ScreenIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(d.PlaystationIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(u.NintendoSwitchNeutralIcon, {
                className: y.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(C.XboxIcon, {
                className: y.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: y.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), V ? (0, a.jsx)(h.InputError, {
      error: D.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let ea = null == Q && (W || H),
    el = ea && !q ? (0, a.jsx)(h.Spinner, {
      className: y.__invalid_spinner
    }) : null,
    en = null;
  null != Q ? en = (0, a.jsx)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(E.default, {
      value: P ? D.default.Messages.QUEST_REWARD_CODE_HIDDEN : Q.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        P && (0, _.copy)(Q.code), (0, M.trackQuestContentClicked)({
          questId: i.id,
          questContent: m,
          questContentCTA: M.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : V && !q && (en = (0, a.jsx)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(h.TextInput, {
      disabled: !0,
      error: D.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: y.errorInput
    })
  }));
  let er = () => {
      var e;
      q && null != T ? (G(i.id, T, m), (0, M.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: M.QuestContentCTA.GET_REWARD_CODE
      })) : V ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? z(i.id) : null != T && (G(i.id, T, m), (0, M.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: M.QuestContentCTA.GET_REWARD_CODE
      })) : o()
    },
    eo = q && H,
    ei = !eo && (q && null == T || ea),
    eu = D.default.Messages.QUESTS_REWARD_CODE_DONE;
  q ? eu = D.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !q && V && (eu = D.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ed = (0, a.jsx)(h.Button, {
    onClick: () => er(),
    submitting: eo,
    disabled: ei,
    children: eu
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.ConfettiCanvas, {
      ref: k,
      className: y.confettiCanvas,
      environment: L.current
    }), (0, a.jsx)("div", {
      ref: B,
      children: (0, a.jsxs)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.DYNAMIC,
        children: [(0, a.jsxs)("div", {
          className: y.modalBody,
          children: [(0, a.jsx)(h.ModalCloseButton, {
            className: y.closeButton,
            onClick: () => o()
          }), (0, a.jsx)(b, {
            quest: i,
            rewardCode: Q
          }), (0, a.jsxs)("div", {
            className: y.modalContent,
            children: [Y, ee, es, el, en]
          })]
        }), (0, a.jsx)(h.ModalFooter, {
          children: ed
        })]
      })
    }), !F && !R && null === el && !1 === V && (0, a.jsx)(S.default, {
      confettiTarget: B.current,
      confettiCanvas: U,
      sprites: w.COMMON_CONFETTI_SPRITES,
      colors: w.COMMON_CONFETTI_COLORS
    })]
  })
}