"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  r = s("446674"),
  n = s("669491"),
  o = s("276825"),
  i = s("199179"),
  u = s("91297"),
  d = s("265614"),
  c = s("267013"),
  f = s("819855"),
  m = s("77078"),
  R = s("437822"),
  h = s("913801"),
  E = s("599417"),
  C = s("841098"),
  p = s("697218"),
  S = s("284679"),
  g = s("449008"),
  x = s("448881"),
  v = s("2973"),
  _ = s("588025"),
  T = s("227231"),
  A = s("782340"),
  I = s("435251");

function M(e) {
  var t;
  let {
    quest: s,
    rewardCode: a
  } = e, r = (0, f.isThemeDark)((0, C.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, S.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, S.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a;
  return (0, l.jsxs)("div", {
    style: i,
    className: I.rewardTile,
    children: [(0, l.jsx)("img", {
      src: (0, T.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: I.reward
    }), (0, l.jsxs)("div", {
      className: I.rewardSubheading,
      children: [u && (0, l.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: n.default.colors.TEXT_MUTED,
        className: I.rewardSubheadingIcon
      }), (0, l.jsx)(m.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: I.rewardSubheadingText,
        children: u ? A.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : A.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, l.jsx)(m.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: I.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function N(e) {
  let t = (0, r.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return t ? (0, l.jsx)(w, {
    ...e
  }) : (0, l.jsx)(D, {
    ...e
  })
}

function D(e) {
  let t = (0, r.useStateFromStores)([p.default], () => {
      var e;
      return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
    }),
    [s, n] = a.useState({
      status: "unknown"
    });
  return a.useEffect(() => {
    n({
      status: "loading"
    }), R.default.verifyResend().then(() => n({
      status: "success"
    }), e => n({
      status: "error",
      message: new E.default(e).message
    }))
  }, []), (0, l.jsxs)(m.ConfirmModal, {
    ...e,
    confirmText: A.default.Messages.CLOSE,
    confirmButtonColor: m.Button.Colors.BRAND,
    header: A.default.Messages.QUEST_REWARD_VERIFICATION_TITLE,
    children: ["loading" === s.status && (0, l.jsx)(m.Spinner, {}), "error" === s.status && (0, l.jsx)(m.Text, {
      variant: "text-md/normal",
      children: A.default.Messages.QUEST_REWARD_VERIFICATION_ERROR.format({
        message: s.message
      })
    }), "success" === s.status && (0, l.jsx)(m.Text, {
      variant: "text-md/normal",
      children: A.default.Messages.VERIFICATION_EMAIL_BODY.format({
        email: t
      })
    })]
  })
}

function w(e) {
  var t;
  let {
    transitionState: s,
    onClose: n,
    quest: o
  } = e, f = a.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), R = o.config.rewardCodePlatforms.length > 1, [E, C] = a.useState(R ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: p,
    isFetchingRewardCode: S,
    isClaimingRewardCode: N
  } = (0, r.useStateFromStoresObject)([v.default], () => ({
    rewardCode: v.default.getRewardCode(o.id),
    isFetchingRewardCode: v.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: v.default.isClaimingRewardCode(o.id)
  })), [D, w] = a.useState(!1), O = R && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == p, j = a.useCallback((e, t) => {
    w(!1), (0, x.claimQuestRewardCode)(e, t).catch(() => w(!0))
  }, []), y = a.useCallback(e => {
    w(!1), (0, x.fetchQuestRewardCode)(e).catch(() => w(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == p && !D && !N && !S && !O && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != E ? j(o.id, E) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && y(o.id))
  }, [o, p, N, S, D, O, E, j, y]);
  let L = null;
  f && null != p ? L = A.default.Messages.QUESTS_REWARD_CODE_HEADER : null != p ? L = A.default.Messages.QUESTS_REWARD_CODE_CONGRATS : O && (L = A.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let B = null != L ? (0, l.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: I.heading,
      children: L
    }) : null,
    b = null;
  O && (b = A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let U = null != E ? o.config.messages.rewardRedemptionInstructionsByPlatform[E] : void 0;
  null != p && null != U && (b = U);
  let k = null != b ? (0, l.jsx)(m.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: I.bodyCopy,
      children: b
    }) : null,
    P = a.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, T.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    F = null;
  O && (F = (0, l.jsxs)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(m.Select, {
      placeholder: A.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: P,
      select: e => {
        w(!1), C(e)
      },
      isSelected: e => e === E,
      serialize: e => (0, T.getPlatformString)(e),
      className: D ? I.errorInput : "",
      isDisabled: N,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case _.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(u.ScienceIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(d.ScreenIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(i.PlaystationIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(d.ScreenIcon, {
                className: I.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(c.XboxIcon, {
                className: I.platformSelectionOptionIcon
              });
            default:
              (0, g.assertNever)(e)
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: I.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), D ? (0, l.jsx)(m.InputError, {
      error: A.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let Q = null == p && (S || N),
    W = Q && !O ? (0, l.jsx)(m.Spinner, {
      className: I.spinner
    }) : null,
    H = null;
  null != p ? H = (0, l.jsx)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(h.default, {
      value: p.code,
      delay: 1e3,
      buttonColor: m.Button.Colors.BRAND
    })
  }) : D && !O && (H = (0, l.jsx)(m.FormItem, {
    title: A.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(m.TextInput, {
      disabled: !0,
      error: A.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: I.errorInput
    })
  }));
  let Z = () => {
      var e;
      O && null != E ? j(o.id, E) : D ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? y(o.id) : null != E && j(o.id, E) : n()
    },
    V = O && N,
    z = !V && (O && null == E || Q),
    Y = A.default.Messages.QUESTS_REWARD_CODE_DONE;
  O ? Y = A.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !O && D && (Y = A.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let G = (0, l.jsx)(m.Button, {
    onClick: () => Z(),
    submitting: V,
    disabled: z,
    children: Y
  });
  return (0, l.jsxs)(m.ModalRoot, {
    transitionState: s,
    size: m.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)("div", {
      className: I.modalBody,
      children: [(0, l.jsx)(m.ModalCloseButton, {
        className: I.closeButton,
        onClick: () => n()
      }), (0, l.jsx)(M, {
        quest: o,
        rewardCode: p
      }), (0, l.jsxs)("div", {
        className: I.modalContent,
        children: [B, k, F, W, H]
      })]
    }), (0, l.jsx)(m.ModalFooter, {
      children: G
    })]
  })
}