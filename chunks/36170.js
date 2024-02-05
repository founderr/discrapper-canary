"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  n = s("446674"),
  o = s("669491"),
  r = s("276825"),
  i = s("199179"),
  d = s("265614"),
  u = s("267013"),
  c = s("819855"),
  m = s("77078"),
  f = s("913801"),
  h = s("841098"),
  C = s("284679"),
  E = s("449008"),
  R = s("448881"),
  p = s("2973"),
  S = s("588025"),
  g = s("227231"),
  x = s("782340"),
  _ = s("429383");

function v(e) {
  var t;
  let {
    quest: s,
    rewardCode: a
  } = e, n = (0, c.isThemeDark)((0, h.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, C.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, C.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a;
  return (0, l.jsxs)("div", {
    style: i,
    className: _.rewardTile,
    children: [(0, l.jsx)("img", {
      src: (0, g.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: _.reward
    }), (0, l.jsxs)("div", {
      className: _.rewardSubheading,
      children: [d && (0, l.jsx)(r.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: o.default.colors.TEXT_MUTED,
        className: _.rewardSubheadingIcon
      }), (0, l.jsx)(m.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: _.rewardSubheadingText,
        children: d ? x.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : x.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, l.jsx)(m.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: _.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function D(e) {
  var t;
  let {
    transitionState: s,
    onClose: o,
    quest: r
  } = e, c = a.useMemo(() => {
    var e;
    return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), h = r.config.rewardCodePlatforms.length > 1, [C, D] = a.useState(h ? null : r.config.rewardCodePlatforms[0]), {
    rewardCode: T,
    isFetchingRewardCode: A,
    isClaimingRewardCode: N
  } = (0, n.useStateFromStoresObject)([p.default], () => ({
    rewardCode: p.default.getRewardCode(r.id),
    isFetchingRewardCode: p.default.isFetchingRewardCode(r.id),
    isClaimingRewardCode: p.default.isClaimingRewardCode(r.id)
  })), [w, M] = a.useState(!1), I = h && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == T, O = a.useCallback((e, t) => {
    M(!1), (0, R.claimQuestRewardCode)(e, t).catch(() => M(!0))
  }, []), j = a.useCallback(e => {
    M(!1), (0, R.fetchQuestRewardCode)(e).catch(() => M(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == T && !w && !N && !A && !I && ((null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != C ? O(r.id, C) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && j(r.id))
  }, [r, T, N, A, w, I, C, O, j]);
  let b = null;
  c && null != T ? b = x.default.Messages.QUESTS_REWARD_CODE_HEADER : null != T ? b = x.default.Messages.QUESTS_REWARD_CODE_CONGRATS : I && (b = x.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let y = null != b ? (0, l.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: _.heading,
      children: b
    }) : null,
    L = null;
  I && (L = x.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: r.config.messages.rewardName
  }));
  let B = null != C ? r.config.messages.rewardRedemptionInstructionsByPlatform[C] : void 0;
  null != T && null != B && (L = B);
  let U = null != L ? (0, l.jsx)(m.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: _.bodyCopy,
      children: L
    }) : null,
    k = a.useMemo(() => r.config.rewardCodePlatforms.map(e => ({
      label: (0, g.getPlatformString)(e),
      value: e
    })), [r.config.rewardCodePlatforms]),
    P = null;
  I && (P = (0, l.jsxs)(m.FormItem, {
    title: x.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(m.Select, {
      placeholder: x.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: k,
      select: e => {
        M(!1), D(e)
      },
      isSelected: e => e === C,
      serialize: e => (0, g.getPlatformString)(e),
      className: w ? _.errorInput : "",
      isDisabled: N,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case S.QuestRewardCodePlatforms.CROSS_PLATFORM:
            case S.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(d.ScreenIcon, {
                className: _.platformSelectionOptionIcon
              });
            case S.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(i.PlaystationIcon, {
                className: _.platformSelectionOptionIcon
              });
            case S.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(d.ScreenIcon, {
                className: _.platformSelectionOptionIcon
              });
            case S.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(u.XboxIcon, {
                className: _.platformSelectionOptionIcon
              });
            default:
              (0, E.assertNever)(e)
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: _.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), w ? (0, l.jsx)(m.InputError, {
      error: x.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let Q = null == T && (A || N),
    F = Q && !I ? (0, l.jsx)(m.Spinner, {
      className: _.spinner
    }) : null,
    W = null;
  null != T ? W = (0, l.jsx)(m.FormItem, {
    title: x.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(f.default, {
      value: T.code,
      delay: 1e3,
      buttonColor: m.Button.Colors.BRAND
    })
  }) : w && !I && (W = (0, l.jsx)(m.FormItem, {
    title: x.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(m.TextInput, {
      disabled: !0,
      error: x.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: _.errorInput
    })
  }));
  let H = () => {
      var e;
      I && null != C ? O(r.id, C) : w ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? j(r.id) : null != C && O(r.id, C) : o()
    },
    z = I && N,
    V = !z && (I && null == C || Q),
    Z = x.default.Messages.QUESTS_REWARD_CODE_DONE;
  I ? Z = x.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !I && w && (Z = x.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let G = (0, l.jsx)(m.Button, {
    onClick: () => H(),
    submitting: z,
    disabled: V,
    children: Z
  });
  return (0, l.jsxs)(m.ModalRoot, {
    transitionState: s,
    size: m.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)("div", {
      className: _.modalBody,
      children: [(0, l.jsx)(m.ModalCloseButton, {
        className: _.closeButton,
        onClick: () => o()
      }), (0, l.jsx)(v, {
        quest: r,
        rewardCode: T
      }), (0, l.jsxs)("div", {
        className: _.modalContent,
        children: [y, U, P, F, W]
      })]
    }), (0, l.jsx)(m.ModalFooter, {
      children: G
    })]
  })
}