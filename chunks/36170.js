"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  r = s("446674"),
  n = s("669491"),
  o = s("276825"),
  i = s("199179"),
  u = s("265614"),
  d = s("267013"),
  c = s("819855"),
  f = s("77078"),
  m = s("437822"),
  E = s("913801"),
  R = s("599417"),
  C = s("841098"),
  h = s("697218"),
  p = s("284679"),
  S = s("449008"),
  g = s("448881"),
  x = s("2973"),
  _ = s("588025"),
  v = s("227231"),
  T = s("782340"),
  A = s("435251");

function D(e) {
  var t;
  let {
    quest: s,
    rewardCode: a
  } = e, r = (0, c.isThemeDark)((0, C.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, p.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, p.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, u = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a;
  return (0, l.jsxs)("div", {
    style: i,
    className: A.rewardTile,
    children: [(0, l.jsx)("img", {
      src: (0, v.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: A.reward
    }), (0, l.jsxs)("div", {
      className: A.rewardSubheading,
      children: [u && (0, l.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: n.default.colors.TEXT_MUTED,
        className: A.rewardSubheadingIcon
      }), (0, l.jsx)(f.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: A.rewardSubheadingText,
        children: u ? T.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : T.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, l.jsx)(f.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: A.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function I(e) {
  let t = (0, r.useStateFromStores)([h.default], () => {
    var e;
    return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return t ? (0, l.jsx)(M, {
    ...e
  }) : (0, l.jsx)(N, {
    ...e
  })
}

function N(e) {
  let t = (0, r.useStateFromStores)([h.default], () => {
      var e;
      return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
    }),
    [s, n] = a.useState({
      status: "unknown"
    });
  return a.useEffect(() => {
    n({
      status: "loading"
    }), m.default.verifyResend().then(() => n({
      status: "success"
    }), e => n({
      status: "error",
      message: new R.default(e).message
    }))
  }, []), (0, l.jsxs)(f.ConfirmModal, {
    ...e,
    confirmText: T.default.Messages.CLOSE,
    confirmButtonColor: f.Button.Colors.BRAND,
    header: T.default.Messages.QUEST_REWARD_VERIFICATION_TITLE,
    children: ["loading" === s.status && (0, l.jsx)(f.Spinner, {}), "error" === s.status && (0, l.jsx)(f.Text, {
      variant: "text-md/normal",
      children: T.default.Messages.QUEST_REWARD_VERIFICATION_ERROR.format({
        message: s.message
      })
    }), "success" === s.status && (0, l.jsx)(f.Text, {
      variant: "text-md/normal",
      children: T.default.Messages.VERIFICATION_EMAIL_BODY.format({
        email: t
      })
    })]
  })
}

function M(e) {
  var t;
  let {
    transitionState: s,
    onClose: n,
    quest: o
  } = e, c = a.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), m = o.config.rewardCodePlatforms.length > 1, [R, C] = a.useState(m ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: h,
    isFetchingRewardCode: p,
    isClaimingRewardCode: I
  } = (0, r.useStateFromStoresObject)([x.default], () => ({
    rewardCode: x.default.getRewardCode(o.id),
    isFetchingRewardCode: x.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: x.default.isClaimingRewardCode(o.id)
  })), [N, M] = a.useState(!1), O = m && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == h, w = a.useCallback((e, t) => {
    M(!1), (0, g.claimQuestRewardCode)(e, t).catch(() => M(!0))
  }, []), j = a.useCallback(e => {
    M(!1), (0, g.fetchQuestRewardCode)(e).catch(() => M(!0))
  }, []);
  a.useEffect(() => {
    var e, t;
    null == h && !N && !I && !p && !O && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != R ? w(o.id, R) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && j(o.id))
  }, [o, h, I, p, N, O, R, w, j]);
  let L = null;
  c && null != h ? L = T.default.Messages.QUESTS_REWARD_CODE_HEADER : null != h ? L = T.default.Messages.QUESTS_REWARD_CODE_CONGRATS : O && (L = T.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let y = null != L ? (0, l.jsx)(f.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: A.heading,
      children: L
    }) : null,
    b = null;
  O && (b = T.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let B = null != R ? o.config.messages.rewardRedemptionInstructionsByPlatform[R] : void 0;
  null != h && null != B && (b = B);
  let U = null != b ? (0, l.jsx)(f.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: A.bodyCopy,
      children: b
    }) : null,
    k = a.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, v.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    P = null;
  O && (P = (0, l.jsxs)(f.FormItem, {
    title: T.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(f.Select, {
      placeholder: T.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: k,
      select: e => {
        M(!1), C(e)
      },
      isSelected: e => e === R,
      serialize: e => (0, v.getPlatformString)(e),
      className: N ? A.errorInput : "",
      isDisabled: I,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case _.QuestRewardCodePlatforms.CROSS_PLATFORM:
            case _.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(u.ScreenIcon, {
                className: A.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(i.PlaystationIcon, {
                className: A.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(u.ScreenIcon, {
                className: A.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(d.XboxIcon, {
                className: A.platformSelectionOptionIcon
              });
            default:
              (0, S.assertNever)(e)
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: A.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), N ? (0, l.jsx)(f.InputError, {
      error: T.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let F = null == h && (p || I),
    Q = F && !O ? (0, l.jsx)(f.Spinner, {
      className: A.spinner
    }) : null,
    W = null;
  null != h ? W = (0, l.jsx)(f.FormItem, {
    title: T.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(E.default, {
      value: h.code,
      delay: 1e3,
      buttonColor: f.Button.Colors.BRAND
    })
  }) : N && !O && (W = (0, l.jsx)(f.FormItem, {
    title: T.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(f.TextInput, {
      disabled: !0,
      error: T.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: A.errorInput
    })
  }));
  let H = () => {
      var e;
      O && null != R ? w(o.id, R) : N ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? j(o.id) : null != R && w(o.id, R) : n()
    },
    V = O && I,
    z = !V && (O && null == R || F),
    Z = T.default.Messages.QUESTS_REWARD_CODE_DONE;
  O ? Z = T.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !O && N && (Z = T.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let Y = (0, l.jsx)(f.Button, {
    onClick: () => H(),
    submitting: V,
    disabled: z,
    children: Z
  });
  return (0, l.jsxs)(f.ModalRoot, {
    transitionState: s,
    size: f.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)("div", {
      className: A.modalBody,
      children: [(0, l.jsx)(f.ModalCloseButton, {
        className: A.closeButton,
        onClick: () => n()
      }), (0, l.jsx)(D, {
        quest: o,
        rewardCode: h
      }), (0, l.jsxs)("div", {
        className: A.modalContent,
        children: [y, U, P, Q, W]
      })]
    }), (0, l.jsx)(f.ModalFooter, {
      children: Y
    })]
  })
}