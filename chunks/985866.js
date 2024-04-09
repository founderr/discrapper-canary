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
  d = s("299847"),
  c = s("533627"),
  u = s("381837"),
  f = s("718671"),
  C = s("432594"),
  m = s("780384"),
  h = s("481060"),
  E = s("484614"),
  R = s("410030"),
  p = s("607070"),
  S = s("530618"),
  g = s("454585"),
  v = s("246946"),
  x = s("594174"),
  _ = s("572004"),
  T = s("302221"),
  N = s("617136"),
  M = s("272008"),
  A = s("569984"),
  I = s("497505"),
  j = s("918701"),
  w = s("406657"),
  O = s("675654"),
  D = s("689938"),
  b = s("430515");

function y(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, m.isThemeDark)((0, R.default)()), r = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, T.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: r,
    className: b.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, j.getRewardAssetUrl)(s),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: b.reward
    }), (0, a.jsxs)("div", {
      className: b.rewardSubheading,
      children: [d && (0, a.jsx)(i.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: b.rewardSubheadingIcon
      }), (0, a.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: b.rewardSubheadingText,
        children: d ? D.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : D.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: b.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function L(e) {
  return (0, r.useStateFromStores)([x.default], () => {
    var e;
    return null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  }) ? (0, a.jsx)(B, {
    ...e
  }) : (0, a.jsx)(w.QuestsRewardCodeModalUnverified, {
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
  }, []), x = i.config.rewardCodePlatforms.length > 1, [T, w] = l.useState(x ? null : i.config.rewardCodePlatforms[0]), L = l.useRef(new n.Environment), B = l.useRef(null), [U, k] = l.useState(null), Q = (0, r.useStateFromStores)([p.default], () => p.default.useReducedMotion), F = (0, r.useStateFromStores)([v.default], () => v.default.hidePersonalInformation), {
    rewardCode: P,
    isFetchingRewardCode: W,
    isClaimingRewardCode: H
  } = (0, r.useStateFromStoresObject)([A.default], () => ({
    rewardCode: A.default.getRewardCode(i.id),
    isFetchingRewardCode: A.default.isFetchingRewardCode(i.id),
    isClaimingRewardCode: A.default.isClaimingRewardCode(i.id)
  })), [Z, V] = l.useState(!1), q = x && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == P, z = l.useCallback((e, t, s) => {
    V(!1), (0, M.claimQuestRewardCode)(e, t, s).catch(() => V(!0))
  }, []), G = l.useCallback(e => {
    V(!1), (0, M.fetchQuestRewardCode)(e).catch(() => V(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == P && !Z && !H && !W && !q && ((null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != T ? z(i.id, T, m) : (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && G(i.id))
  }, [i, P, H, W, Z, q, T, m, z, G]);
  let Y = null;
  R && null != P ? Y = D.default.Messages.QUESTS_REWARD_CODE_HEADER : null != P ? Y = D.default.Messages.QUESTS_REWARD_CODE_CONGRATS : q && (Y = D.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let X = null != Y ? (0, a.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: b.heading,
      children: Y
    }) : null,
    K = null;
  q && (K = D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: i.config.messages.rewardName
  }));
  let J = null != T ? T : null == P ? void 0 : P.platform,
    $ = null != J ? i.config.messages.rewardRedemptionInstructionsByPlatform[J] : void 0;
  null != P && null != $ && (K = g.default.parse($, !1, {
    allowLinks: !0
  }));
  let ee = null != K ? (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: b.bodyCopy,
      children: K
    }) : null,
    et = l.useMemo(() => i.config.rewardCodePlatforms.map(e => ({
      label: (0, j.getPlatformString)(e),
      value: e
    })), [i.config.rewardCodePlatforms]),
    es = null;
  q && (es = (0, a.jsxs)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(h.Select, {
      placeholder: D.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: et,
      select: e => {
        V(!1), w(e)
      },
      isSelected: e => e === T,
      serialize: e => (0, j.getPlatformString)(e),
      className: Z ? b.errorInput : "",
      isDisabled: H,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case I.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(u.ScienceIcon, {
                className: b.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(f.ScreenIcon, {
                className: b.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(c.PlaystationIcon, {
                className: b.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(d.NintendoSwitchNeutralIcon, {
                className: b.platformSelectionOptionIcon
              });
            case I.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(C.XboxIcon, {
                className: b.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: b.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), Z ? (0, a.jsx)(h.InputError, {
      error: D.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let ea = null == P && (W || H),
    el = ea && !q ? (0, a.jsx)(h.Spinner, {
      className: b.__invalid_spinner
    }) : null,
    en = null;
  null != P ? en = (0, a.jsx)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(E.default, {
      value: F ? D.default.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        F && (0, _.copy)(P.code), (0, N.trackQuestContentClicked)({
          questId: i.id,
          questContent: m,
          questContentCTA: N.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : Z && !q && (en = (0, a.jsx)(h.FormItem, {
    title: D.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(h.TextInput, {
      disabled: !0,
      error: D.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: b.errorInput
    })
  }));
  let er = () => {
      var e;
      q && null != T ? (z(i.id, T, m), (0, N.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE
      })) : Z ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? G(i.id) : null != T && (z(i.id, T, m), (0, N.trackQuestContentClicked)({
        questId: i.id,
        questContent: m,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE
      })) : o()
    },
    eo = q && H,
    ei = !eo && (q && null == T || ea),
    ed = D.default.Messages.QUESTS_REWARD_CODE_DONE;
  q ? ed = D.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !q && Z && (ed = D.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ec = !Q && null != P && !R && !Z,
    eu = (0, a.jsx)(h.Button, {
      onClick: () => er(),
      submitting: eo,
      disabled: ei,
      children: ed
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.ConfettiCanvas, {
      ref: k,
      className: b.confettiCanvas,
      environment: L.current
    }), (0, a.jsx)("div", {
      ref: B,
      children: (0, a.jsxs)(h.ModalRoot, {
        transitionState: s,
        size: h.ModalSize.DYNAMIC,
        children: [(0, a.jsxs)("div", {
          className: b.modalBody,
          children: [(0, a.jsx)(h.ModalCloseButton, {
            className: b.closeButton,
            onClick: () => o()
          }), (0, a.jsx)(y, {
            quest: i,
            rewardCode: P
          }), (0, a.jsxs)("div", {
            className: b.modalContent,
            children: [X, ee, es, el, en]
          })]
        }), (0, a.jsx)(h.ModalFooter, {
          children: eu
        })]
      })
    }), ec && (0, a.jsx)(S.default, {
      confettiTarget: B.current,
      confettiCanvas: U,
      sprites: O.COMMON_CONFETTI_SPRITES,
      colors: O.COMMON_CONFETTI_COLORS
    })]
  })
}