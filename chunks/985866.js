t.r(s), t.d(s, {
  default: function() {
    return Z
  }
}), t(47120);
var n = t(735250),
  l = t(470079),
  a = t(120356),
  o = t.n(a),
  r = t(887024),
  i = t(442837),
  d = t(692547),
  u = t(780384),
  c = t(481060),
  E = t(484614),
  C = t(410030),
  m = t(607070),
  R = t(530618),
  S = t(454585),
  _ = t(246946),
  p = t(572004),
  D = t(302221),
  h = t(617136),
  T = t(272008),
  A = t(569984),
  g = t(497505),
  v = t(918701),
  x = t(566078),
  I = t(644646),
  f = t(78826),
  O = t(46140),
  j = t(675654),
  N = t(689938),
  M = t(391454);

function y(e) {
  var s;
  let {
    quest: t,
    rewardCode: l,
    hasTieredRewardCodes: a
  } = e, r = (0, u.wj)((0, C.ZP)()), i = {
    border: "1px solid ".concat(t.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, D.aD)(t.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, D.aD)(t.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(r ? "var(--black)" : "var(--white)", "\n    ")
  }, E = (null === (s = t.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null || null != l, {
    header: m,
    subHeader: R
  } = function(e) {
    var s, t, n, l;
    let {
      quest: a,
      rewardCode: o,
      hasTieredRewardCodes: r
    } = e, i = (null === (s = a.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null || null != o, d = r ? "" : N.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, u = r ? (0, v.o9)({
      quest: a,
      idx: null !== (n = null == o ? void 0 : o.tier) && void 0 !== n ? n : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
    }) : null, c = x.r.build(a.config), E = null != u && null !== (l = u.messages.name) && void 0 !== l ? l : c.defaultReward.messages.name, C = r ? N.Z.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
    return {
      subHeader: i ? N.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
      header: i ? E : C
    }
  }({
    quest: t,
    rewardCode: l,
    hasTieredRewardCodes: a
  }), {
    hasError: S,
    isLoading: _
  } = (0, f.d7)();
  return (0, n.jsxs)("div", {
    style: i,
    className: M.rewardTile,
    children: [(0, n.jsxs)("div", {
      className: M.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": t.config.colors.primary
      },
      children: [_ && !S && (0, n.jsx)(c.Spinner, {
        className: M.rewardTileAssetStatusIcon,
        type: c.SpinnerTypes.SPINNING_CIRCLE
      }), S && (0, n.jsx)(c.ImageWarningIcon, {
        className: M.rewardTileAssetStatusIcon
      }), (0, n.jsx)(I.Z, {
        className: o()(M.rewardTileAsset, {
          [M.rewardTileAssetLoading]: _ || S
        }),
        quest: t,
        questContent: g.jn.QUEST_BAR
      })]
    }), (0, n.jsxs)("div", {
      className: M.rewardSubheading,
      children: [E && (0, n.jsx)(c.CheckmarkSmallIcon, {
        size: "xs",
        color: d.Z.colors.TEXT_MUTED,
        className: M.rewardSubheadingIcon
      }), (0, n.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: M.rewardSubheadingText,
        children: R
      })]
    }), (0, n.jsx)(c.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: M.rewardHeading,
      children: m
    })]
  })
}

function Z(e) {
  let s = (0, i.e7)([A.Z], () => A.Z.getQuest(e.questId));
  return null != s ? (0, n.jsx)(w, {
    ...e,
    quest: s
  }) : null
}

function w(e) {
  var s;
  let {
    transitionState: t,
    onClose: a,
    quest: o,
    location: d,
    questContentPosition: u
  } = e, C = l.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), D = x.r.build(o.config).rewardPlatforms, I = D.length > 1, [Z, w] = l.useState(I ? null : D[0]), b = l.useRef(new r.qA), L = l.useRef(null), [U, W] = l.useState(null), B = (0, i.e7)([m.Z], () => m.Z.useReducedMotion), P = (0, i.e7)([_.Z], () => _.Z.hidePersonalInformation), {
    rewardCode: Q,
    isFetchingRewardCode: k,
    isClaimingRewardCode: F
  } = (0, i.cj)([A.Z], () => ({
    rewardCode: A.Z.getRewardCode(o.id),
    isFetchingRewardCode: A.Z.isFetchingRewardCode(o.id),
    isClaimingRewardCode: A.Z.isClaimingRewardCode(o.id) || A.Z.isClaimingReward(o.id)
  })), q = (0, v.oo)({
    quest: o
  }), [H, G] = l.useState(!1), z = I && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null && null == Q, V = l.useCallback((e, s, t) => {
    G(!1), q || 2 === o.config.configVersion ? (0, T.QB)(e, s, t).catch(() => G(!0)) : (0, T.Tj)(e, s, t).catch(() => G(!0))
  }, [q, o.config.configVersion]), $ = l.useCallback(e => {
    G(!1), (0, T.pf)(e).catch(() => G(!0))
  }, []);
  l.useEffect(() => {
    var e, s;
    if (null == Q && !H && !F && !k && !z)(null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != Z ? V(o.id, Z, d) : (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null && $(o.id)
  }, [o, Q, F, k, H, z, Z, d, V, $]);
  let X = null;
  C && null != Q ? X = N.Z.Messages.QUESTS_REWARD_CODE_HEADER : null != Q ? X = N.Z.Messages.QUESTS_REWARD_CODE_CONGRATS : z && (X = N.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let Y = null != X ? (0, n.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: M.heading,
      children: X
    }) : null,
    J = function(e) {
      var s, t, l, a;
      let {
        quest: o,
        selectedPlatform: r,
        needsToConfirmPlatform: i,
        rewardCode: d,
        hasTieredRewardCodes: u
      } = e, E = x.r.build(o.config);
      if (i) return (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: M.bodyCopy,
        children: u ? N.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : N.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: E.defaultReward.messages.name
        })
      });
      let C = null != r ? r : null == d ? void 0 : d.platform,
        m = u ? (0, v.o9)({
          quest: o,
          idx: null !== (l = null == d ? void 0 : d.tier) && void 0 !== l ? l : null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedTier
        }) : null,
        R = null !== (a = null == m ? void 0 : null === (t = m.messages) || void 0 === t ? void 0 : t.redemptionInstructionsByPlatform) && void 0 !== a ? a : E.defaultRewardRedemptionInstructionsByPlatform,
        _ = null != C ? R[C] : void 0;
      return null != d && null != _ ? (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: M.bodyCopy,
        children: S.Z.parse(_, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: o,
      selectedPlatform: Z,
      needsToConfirmPlatform: z,
      rewardCode: Q,
      hasTieredRewardCodes: q
    }),
    K = l.useMemo(() => D.map(e => ({
      label: (0, v.t2)(e),
      value: e
    })), [D]),
    ee = null;
  z && (ee = (0, n.jsxs)(c.FormItem, {
    title: N.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, n.jsx)(c.Select, {
      placeholder: N.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: K,
      select: e => {
        G(!1), w(e)
      },
      isSelected: e => e === Z,
      serialize: e => (0, v.t2)(e),
      className: H ? M.errorInput : "",
      isDisabled: F,
      renderOptionLabel: e => {
        let s = function(e) {
          switch (e) {
            case g.y$.CROSS_PLATFORM:
              return (0, n.jsx)(c.ScienceIcon, {
                className: M.platformSelectionOptionIcon
              });
            case g.y$.PC:
              return (0, n.jsx)(c.ScreenIcon, {
                className: M.platformSelectionOptionIcon
              });
            case g.y$.PLAYSTATION:
              return (0, n.jsx)(c.PlaystationIcon, {
                className: M.platformSelectionOptionIcon
              });
            case g.y$.SWITCH:
              return (0, n.jsx)(c.NintendoSwitchNeutralIcon, {
                className: M.platformSelectionOptionIcon
              });
            case g.y$.XBOX:
              return (0, n.jsx)(c.XboxIcon, {
                className: M.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, n.jsxs)("div", {
          className: M.platformSelectionOptionLabelContainer,
          children: [s, e.label]
        })
      }
    }), H ? (0, n.jsx)(c.InputError, {
      error: N.Z.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let es = null == Q && (k || F),
    et = es && !z ? (0, n.jsx)(c.Spinner, {}) : null,
    en = null;
  null != Q ? en = (0, n.jsx)(c.FormItem, {
    title: N.Z.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, n.jsx)(E.Z, {
      value: P ? N.Z.Messages.QUEST_REWARD_CODE_HIDDEN : Q.code,
      delay: 1e3,
      buttonColor: c.Button.Colors.BRAND,
      onCopy: () => {
        P && (0, p.JG)(Q.code), (0, h._3)({
          questId: o.id,
          questContent: d,
          questContentPosition: u,
          questContentCTA: h.jZ.COPY_REWARD_CODE
        })
      }
    })
  }) : H && !z && (en = (0, n.jsx)(c.FormItem, {
    title: N.Z.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, n.jsx)(c.TextInput, {
      disabled: !0,
      error: N.Z.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: M.errorInput
    })
  }));
  let el = () => {
      var e;
      z && null != Z ? (V(o.id, Z, d), (0, h._3)({
        questId: o.id,
        questContent: d,
        questContentCTA: h.jZ.GET_REWARD_CODE,
        questContentPosition: u
      })) : H ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? $(o.id) : null != Z && (V(o.id, Z, d), (0, h._3)({
        questId: o.id,
        questContent: d,
        questContentCTA: h.jZ.GET_REWARD_CODE,
        questContentPosition: u
      })) : a()
    },
    ea = z && F,
    eo = !ea && (z && null == Z || es),
    er = N.Z.Messages.QUESTS_REWARD_CODE_DONE;
  z ? er = N.Z.Messages.QUESTS_REWARD_CODE_GET_CODE : !z && H && (er = N.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ei = !B && null != Q && !C && !H,
    ed = (0, n.jsx)(c.Button, {
      onClick: () => el(),
      submitting: ea,
      disabled: eo,
      children: er
    }),
    eu = null != et && q;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.O_, {
      ref: W,
      className: M.confettiCanvas,
      environment: b.current
    }), (0, n.jsx)("div", {
      ref: L,
      children: (0, n.jsxs)(c.ModalRoot, {
        transitionState: t,
        size: c.ModalSize.DYNAMIC,
        children: [(0, n.jsxs)("div", {
          className: M.modalBody,
          children: [(0, n.jsx)(c.ModalCloseButton, {
            className: M.closeButton,
            onClick: () => a()
          }), !eu && (0, n.jsx)(f.p, {
            sentrySource: O.dr.REWARD_CODE_MODAL,
            children: (0, n.jsx)(y, {
              quest: o,
              rewardCode: Q,
              hasTieredRewardCodes: q
            })
          }), (0, n.jsxs)("div", {
            className: M.modalContent,
            children: [Y, J, ee, et, en]
          })]
        }), (0, n.jsx)(c.ModalFooter, {
          children: ed
        })]
      })
    }), ei && (0, n.jsx)(R.Z, {
      confettiTarget: L.current,
      confettiCanvas: U,
      sprites: j.CA,
      colors: j.Br
    })]
  })
}