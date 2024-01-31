"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  o = s("446674"),
  n = s("77078"),
  r = s("913801"),
  i = s("448881"),
  u = s("2973"),
  d = s("227231"),
  c = s("782340"),
  C = s("429383");

function E(e) {
  var t;
  let {
    transitionState: s,
    onClose: E,
    quest: R
  } = e, h = a.useMemo(() => {
    var e;
    return (null === (e = R.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), f = R.config.rewardCodePlatforms.length > 1, [m, p] = a.useState(f ? null : R.config.rewardCodePlatforms[0]), {
    rewardCode: S,
    isFetchingRewardCode: _,
    isClaimingRewardCode: g
  } = (0, o.useStateFromStoresObject)([u.default], () => ({
    rewardCode: u.default.getRewardCode(R.id),
    isFetchingRewardCode: u.default.isFetchingRewardCode(R.id),
    isClaimingRewardCode: u.default.isClaimingRewardCode(R.id)
  })), [D, x] = a.useState(!1), A = f && (null === (t = R.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == S, M = a.useCallback((e, t) => {
    x(!1), (0, i.claimQuestRewardCode)(e, t).catch(() => x(!0))
  }, []), T = a.useCallback(e => {
    x(!1), (0, i.fetchQuestRewardCode)(e).catch(() => x(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == S && !D && !g && !_ && !A && ((null === (e = R.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != m ? M(R.id, m) : (null === (t = R.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && T(R.id))
  }, [R, S, g, _, D, A, m, M, T]);
  let v = null;
  h && null != S ? v = c.default.Messages.QUESTS_REWARD_CODE_HEADER : null != S ? v = c.default.Messages.QUESTS_REWARD_CODE_CONGRATS : A && (v = c.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let N = null != v ? (0, l.jsx)(n.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: C.heading,
      children: v
    }) : null,
    O = null;
  A ? O = c.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: R.config.messages.rewardName
  }) : null != S && (O = R.config.messages.rewardRedemptionInstructions);
  let j = null != O ? (0, l.jsx)(n.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: C.bodyCopy,
      children: O
    }) : null,
    B = a.useMemo(() => R.config.rewardCodePlatforms.map(e => ({
      label: (0, d.getPlatformString)(e),
      value: e
    })), [R.config.rewardCodePlatforms]),
    I = null;
  A && (I = (0, l.jsxs)(n.FormItem, {
    title: c.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(n.Select, {
      placeholder: c.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: B,
      select: e => {
        x(!1), p(e)
      },
      isSelected: e => e === m,
      serialize: e => (0, d.getPlatformString)(e),
      className: D ? C.errorInput : "",
      isDisabled: g
    }), D ? (0, l.jsx)(n.InputError, {
      error: c.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let k = null == S && (_ || g),
    w = k && !A ? (0, l.jsx)(n.Spinner, {
      className: C.spinner
    }) : null,
    L = null;
  null != S ? L = (0, l.jsx)(n.FormItem, {
    title: c.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(r.default, {
      value: S.code,
      delay: 1e3,
      buttonColor: n.Button.Colors.BRAND
    })
  }) : D && !A && (L = (0, l.jsx)(n.FormItem, {
    title: c.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(n.TextInput, {
      disabled: !0,
      error: c.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: C.errorInput
    })
  }));
  let U = () => {
      var e;
      A && null != m ? M(R.id, m) : D ? (null === (e = R.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? T(R.id) : null != m && M(R.id, m) : E()
    },
    b = A && g,
    y = !b && (A && null == m || k),
    F = c.default.Messages.QUESTS_REWARD_CODE_DONE;
  A ? F = c.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !A && D && (F = c.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let P = (0, l.jsx)(n.Button, {
    onClick: () => U(),
    submitting: b,
    disabled: y,
    children: F
  });
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: s,
    size: n.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)("div", {
      className: C.modalBody,
      children: [(0, l.jsx)(n.ModalCloseButton, {
        className: C.closeButton,
        onClick: () => E()
      }), (0, l.jsx)("div", {
        className: C.rewardTile,
        children: (0, l.jsx)("img", {
          src: (0, d.getRewardAssetUrl)(R.id),
          alt: R.config.messages.rewardName,
          className: C.reward
        })
      }), (0, l.jsxs)("div", {
        className: C.modalContent,
        children: [N, j, I, w, L]
      })]
    }), (0, l.jsx)(n.ModalFooter, {
      children: P
    })]
  })
}