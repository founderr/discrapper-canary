"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  r = s("446674"),
  n = s("669491"),
  o = s("276825"),
  i = s("199179"),
  u = s("91297"),
  d = s("265614"),
  c = s("267013"),
  f = s("819855"),
  m = s("77078"),
  h = s("437822"),
  R = s("913801"),
  E = s("599417"),
  C = s("841098"),
  p = s("697218"),
  g = s("284679"),
  S = s("449008"),
  v = s("448881"),
  x = s("2973"),
  _ = s("588025"),
  T = s("227231"),
  A = s("782340"),
  I = s("435251");

function w(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, r = (0, f.isThemeDark)((0, C.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: i,
    className: I.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, T.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: I.reward
    }), (0, a.jsxs)("div", {
      className: I.rewardSubheading,
      children: [u && (0, a.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: n.default.colors.TEXT_MUTED,
        className: I.rewardSubheadingIcon
      }), (0, a.jsx)(m.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: I.rewardSubheadingText,
        children: u ? A.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : A.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(m.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: I.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function M(e) {
  let t = (0, r.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return t ? (0, a.jsx)(D, {
    ...e
  }) : (0, a.jsx)(N, {
    ...e
  })
}

function N(e) {
  let t = (0, r.useStateFromStores)([p.default], () => {
      var e;
      return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
    }),
    [s, n] = l.useState({
      status: "unknown"
    });
  return l.useEffect(() => {
    n({
      status: "loading"
    }), h.default.verifyResend().then(() => n({
      status: "success"
    }), e => n({
      status: "error",
      message: new E.default(e).message
    }))
  }, []), (0, a.jsxs)(m.ConfirmModal, {
    ...e,
    confirmText: A.default.Messages.CLOSE,
    confirmButtonColor: m.Button.Colors.BRAND,
    header: A.default.Messages.QUEST_REWARD_VERIFICATION_TITLE,
    children: ["loading" === s.status && (0, a.jsx)(m.Spinner, {}), "error" === s.status && (0, a.jsx)(m.Text, {
      variant: "text-md/normal",
      children: A.default.Messages.QUEST_REWARD_VERIFICATION_ERROR.format({
        message: s.message
      })
    }), "success" === s.status && (0, a.jsx)(m.Text, {
      variant: "text-md/normal",
      children: A.default.Messages.VERIFICATION_EMAIL_BODY.format({
        email: t
      })
    })]
  })
}

function D(e) {
  var t;
  let {
    transitionState: s,
    onClose: n,
    quest: o,
    location: f
  } = e, h = l.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), E = o.config.rewardCodePlatforms.length > 1, [C, p] = l.useState(E ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: g,
    isFetchingRewardCode: M,
    isClaimingRewardCode: N
  } = (0, r.useStateFromStoresObject)([x.default], () => ({
    rewardCode: x.default.getRewardCode(o.id),
    isFetchingRewardCode: x.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: x.default.isClaimingRewardCode(o.id)
  })), [D, O] = l.useState(!1), j = E && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == g, y = l.useCallback((e, t, s) => {
    O(!1), (0, v.claimQuestRewardCode)(e, t, s).catch(() => O(!0))
  }, []), L = l.useCallback(e => {
    O(!1), (0, v.fetchQuestRewardCode)(e).catch(() => O(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == g && !D && !N && !M && !j && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != C ? y(o.id, C, f) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && L(o.id))
  }, [o, g, N, M, D, j, C, f, y, L]);
  let B = null;
  h && null != g ? B = A.default.Messages.QUESTS_REWARD_CODE_HEADER : null != g ? B = A.default.Messages.QUESTS_REWARD_CODE_CONGRATS : j && (B = A.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let b = null != B ? (0, a.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: I.heading,
      children: B
    }) : null,
    U = null;
  j && (U = A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let k = null != C ? o.config.messages.rewardRedemptionInstructionsByPlatform[C] : void 0;
  null != g && null != k && (U = k);
  let P = null != U ? (0, a.jsx)(m.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: I.bodyCopy,
      children: U
    }) : null,
    F = l.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, T.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    Q = null;
  j && (Q = (0, a.jsxs)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(m.Select, {
      placeholder: A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: F,
      select: e => {
        O(!1), p(e)
      },
      isSelected: e => e === C,
      serialize: e => (0, T.getPlatformString)(e),
      className: D ? I.errorInput : "",
      isDisabled: N,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case _.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(u.ScienceIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(d.ScreenIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(i.PlaystationIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(d.ScreenIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(c.XboxIcon, {
                className: I.platformSelectionOptionIcon
              });
            default:
              (0, S.assertNever)(e)
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: I.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), D ? (0, a.jsx)(m.InputError, {
      error: A.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let W = null == g && (M || N),
    H = W && !j ? (0, a.jsx)(m.Spinner, {
      className: I.spinner
    }) : null,
    Z = null;
  null != g ? Z = (0, a.jsx)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(R.default, {
      value: g.code,
      delay: 1e3,
      buttonColor: m.Button.Colors.BRAND
    })
  }) : D && !j && (Z = (0, a.jsx)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(m.TextInput, {
      disabled: !0,
      error: A.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: I.errorInput
    })
  }));
  let V = () => {
      var e;
      j && null != C ? y(o.id, C, f) : D ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? L(o.id) : null != C && y(o.id, C, f) : n()
    },
    z = j && N,
    Y = !z && (j && null == C || W),
    G = A.default.Messages.QUESTS_REWARD_CODE_DONE;
  j ? G = A.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !j && D && (G = A.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let X = (0, a.jsx)(m.Button, {
    onClick: () => V(),
    submitting: z,
    disabled: Y,
    children: G
  });
  return (0, a.jsxs)(m.ModalRoot, {
    transitionState: s,
    size: m.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)("div", {
      className: I.modalBody,
      children: [(0, a.jsx)(m.ModalCloseButton, {
        className: I.closeButton,
        onClick: () => n()
      }), (0, a.jsx)(w, {
        quest: o,
        rewardCode: g
      }), (0, a.jsxs)("div", {
        className: I.modalContent,
        children: [b, P, Q, H, Z]
      })]
    }), (0, a.jsx)(m.ModalFooter, {
      children: X
    })]
  })
}