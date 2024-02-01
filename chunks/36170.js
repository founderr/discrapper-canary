"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  n = s("446674"),
  r = s("669491"),
  o = s("276825"),
  i = s("819855"),
  d = s("77078"),
  u = s("913801"),
  c = s("841098"),
  E = s("284679"),
  C = s("448881"),
  h = s("2973"),
  R = s("227231"),
  m = s("782340"),
  p = s("429383");

function f(e) {
  var t;
  let {
    quest: s,
    rewardCode: a
  } = e, n = (0, i.isThemeDark)((0, c.default)()), u = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, E.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, E.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, C = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a;
  return (0, l.jsxs)("div", {
    style: u,
    className: p.rewardTile,
    children: [(0, l.jsx)("img", {
      src: (0, R.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: p.reward
    }), (0, l.jsxs)("div", {
      className: p.rewardSubheading,
      children: [C && (0, l.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: r.default.colors.TEXT_MUTED,
        className: p.rewardSubheadingIcon
      }), (0, l.jsx)(d.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: p.rewardSubheadingText,
        children: C ? m.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : m.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, l.jsx)(d.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: p.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function S(e) {
  var t;
  let {
    transitionState: s,
    onClose: r,
    quest: o
  } = e, i = a.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), c = o.config.rewardCodePlatforms.length > 1, [E, S] = a.useState(c ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: g,
    isFetchingRewardCode: _,
    isClaimingRewardCode: D
  } = (0, n.useStateFromStoresObject)([h.default], () => ({
    rewardCode: h.default.getRewardCode(o.id),
    isFetchingRewardCode: h.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: h.default.isClaimingRewardCode(o.id)
  })), [x, T] = a.useState(!1), A = c && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == g, v = a.useCallback((e, t) => {
    T(!1), (0, C.claimQuestRewardCode)(e, t).catch(() => T(!0))
  }, []), M = a.useCallback(e => {
    T(!1), (0, C.fetchQuestRewardCode)(e).catch(() => T(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == g && !x && !D && !_ && !A && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != E ? v(o.id, E) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && M(o.id))
  }, [o, g, D, _, x, A, E, v, M]);
  let N = null;
  i && null != g ? N = m.default.Messages.QUESTS_REWARD_CODE_HEADER : null != g ? N = m.default.Messages.QUESTS_REWARD_CODE_CONGRATS : A && (N = m.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let O = null != N ? (0, l.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: p.heading,
      children: N
    }) : null,
    j = null;
  A ? j = m.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }) : null != g && (j = o.config.messages.rewardRedemptionInstructions);
  let w = null != j ? (0, l.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: p.bodyCopy,
      children: j
    }) : null,
    b = a.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, R.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    y = null;
  A && (y = (0, l.jsxs)(d.FormItem, {
    title: m.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(d.Select, {
      placeholder: m.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: b,
      select: e => {
        T(!1), S(e)
      },
      isSelected: e => e === E,
      serialize: e => (0, R.getPlatformString)(e),
      className: x ? p.errorInput : "",
      isDisabled: D
    }), x ? (0, l.jsx)(d.InputError, {
      error: m.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let I = null == g && (_ || D),
    U = I && !A ? (0, l.jsx)(d.Spinner, {
      className: p.spinner
    }) : null,
    k = null;
  null != g ? k = (0, l.jsx)(d.FormItem, {
    title: m.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(u.default, {
      value: g.code,
      delay: 1e3,
      buttonColor: d.Button.Colors.BRAND
    })
  }) : x && !A && (k = (0, l.jsx)(d.FormItem, {
    title: m.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(d.TextInput, {
      disabled: !0,
      error: m.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: p.errorInput
    })
  }));
  let B = () => {
      var e;
      A && null != E ? v(o.id, E) : x ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? M(o.id) : null != E && v(o.id, E) : r()
    },
    L = A && D,
    F = !L && (A && null == E || I),
    W = m.default.Messages.QUESTS_REWARD_CODE_DONE;
  A ? W = m.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !A && x && (W = m.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let P = (0, l.jsx)(d.Button, {
    onClick: () => B(),
    submitting: L,
    disabled: F,
    children: W
  });
  return (0, l.jsxs)(d.ModalRoot, {
    transitionState: s,
    size: d.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)("div", {
      className: p.modalBody,
      children: [(0, l.jsx)(d.ModalCloseButton, {
        className: p.closeButton,
        onClick: () => r()
      }), (0, l.jsx)(f, {
        quest: o,
        rewardCode: g
      }), (0, l.jsxs)("div", {
        className: p.modalContent,
        children: [O, w, y, U, k]
      })]
    }), (0, l.jsx)(d.ModalFooter, {
      children: P
    })]
  })
}