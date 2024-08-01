n.r(t), n.d(t, {
  default: function() {
return y;
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(887024),
  i = n(442837),
  d = n(692547),
  u = n(780384),
  c = n(481060),
  p = n(484614),
  m = n(410030),
  C = n(607070),
  E = n(530618),
  _ = n(454585),
  S = n(246946),
  T = n(572004),
  x = n(302221),
  g = n(617136),
  h = n(272008),
  R = n(569984),
  f = n(497505),
  I = n(918701),
  b = n(566078),
  v = n(617889),
  j = n(644646),
  M = n(78826),
  N = n(46140),
  A = n(675654),
  D = n(689938),
  O = n(754301);

function w(e) {
  var t;
  let {
quest: n,
rewardCode: o,
hasTieredRewardCodes: a
  } = e, l = (0, u.wj)((0, m.ZP)()), i = {
border: '1px solid '.concat(n.config.colors.primary),
background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '.concat((0, x.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ').concat((0, x.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ').concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
  }, p = (0, v.B)(n, !1), C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o, {
header: E,
subHeader: _
  } = function(e) {
var t, n, s, o;
let {
  quest: a,
  rewardCode: r,
  hasTieredRewardCodes: l
} = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, d = l ? '' : D.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, u = l ? (0, I.o9)({
  quest: a,
  idx: null !== (s = null == r ? void 0 : r.tier) && void 0 !== s ? s : null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedTier
}) : null, c = b.r.build(a.config), p = null != u && null !== (o = u.messages.name) && void 0 !== o ? o : c.defaultReward.messages.name, m = l ? D.Z.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
return {
  subHeader: i ? D.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
  header: i ? p : m
};
  }({
quest: n,
rewardCode: o,
hasTieredRewardCodes: a
  }), {
hasError: S,
isLoading: T
  } = (0, M.d7)();
  return (0, s.jsxs)('div', {
style: i,
className: O.rewardTile,
children: [
  (0, s.jsxs)('div', {
    className: O.rewardTileWrapper,
    style: {
      '--custom-reward-tile-border-color': n.config.colors.primary
    },
    children: [
      T && !S && (0, s.jsx)(c.Spinner, {
        className: O.rewardTileAssetStatusIcon,
        type: c.SpinnerTypes.SPINNING_CIRCLE
      }),
      S && (0, s.jsx)(c.ImageWarningIcon, {
        className: O.rewardTileAssetStatusIcon
      }),
      (0, s.jsx)(j.Z, {
        className: r()(O.rewardTileAsset, {
          [O.rewardTileAssetLoading]: T || S
        }),
        quest: n,
        questContent: p.trackingCtx.content,
        location: N.dr.REWARD_CODE_MODAL
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: O.rewardSubheading,
    children: [
      C && (0, s.jsx)(c.CheckmarkSmallIcon, {
        size: 'xs',
        color: d.Z.colors.TEXT_MUTED,
        className: O.rewardSubheadingIcon
      }),
      (0, s.jsx)(c.Text, {
        variant: 'eyebrow',
        color: 'text-muted',
        className: O.rewardSubheadingText,
        children: _
      })
    ]
  }),
  (0, s.jsx)(c.Heading, {
    variant: 'display-sm',
    color: 'header-primary',
    className: O.rewardHeading,
    children: E
  })
]
  });
}

function y(e) {
  let t = (0, i.e7)([R.Z], () => R.Z.getQuest(e.questId));
  return null != t ? (0, s.jsx)(q, {
...e,
quest: t
  }) : null;
}

function q(e) {
  var t;
  let {
transitionState: n,
onClose: a,
quest: r,
location: d,
questContentPosition: u
  } = e, m = o.useMemo(() => {
var e;
return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
  }, []), x = b.r.build(r.config).rewardPlatforms, v = x.length > 1, [j, y] = o.useState(v ? null : x[0]), q = o.useRef(new l.qA()), Z = o.useRef(null), [L, B] = o.useState(null), U = (0, i.e7)([C.Z], () => C.Z.useReducedMotion), P = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation), {
rewardCode: W,
isFetchingRewardCode: Q,
isClaimingReward: k
  } = (0, i.cj)([R.Z], () => ({
rewardCode: R.Z.getRewardCode(r.id),
isFetchingRewardCode: R.Z.isFetchingRewardCode(r.id),
isClaimingReward: R.Z.isClaimingReward(r.id)
  })), F = (0, I.oo)({
quest: r
  }), [G, H] = o.useState(!1), X = v && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == W, z = o.useCallback((e, t, n) => {
H(!1), (0, h.QB)(e, t, n).catch(() => H(!0));
  }, []), Y = o.useCallback(e => {
H(!1), (0, h.pf)(e).catch(() => H(!0));
  }, []);
  o.useEffect(() => {
var e, t;
if (null == W && !G && !k && !Q && !X)
  (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != j ? z(r.id, j, d) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && Y(r.id);
  }, [
r,
W,
k,
Q,
G,
X,
j,
d,
z,
Y
  ]);
  let $ = null;
  m && null != W ? $ = D.Z.Messages.QUESTS_REWARD_CODE_HEADER : null != W ? $ = D.Z.Messages.QUESTS_REWARD_CODE_CONGRATS : X && ($ = D.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let K = null != $ ? (0, s.jsx)(c.Heading, {
  variant: 'heading-xl/semibold',
  color: 'header-primary',
  className: O.heading,
  children: $
}) : null,
J = function(e) {
  var t, n, o, a;
  let {
    quest: r,
    selectedPlatform: l,
    needsToConfirmPlatform: i,
    rewardCode: d,
    hasTieredRewardCodes: u
  } = e, p = b.r.build(r.config);
  if (i)
    return (0, s.jsx)(c.Text, {
      variant: 'text-sm/normal',
      color: 'text-normal',
      className: O.bodyCopy,
      children: u ? D.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : D.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
        rewardName: p.defaultReward.messages.name
      })
    });
  let m = null != l ? l : null == d ? void 0 : d.platform,
    C = u ? (0, I.o9)({
      quest: r,
      idx: null !== (o = null == d ? void 0 : d.tier) && void 0 !== o ? o : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
    }) : null,
    E = null !== (a = null == C ? void 0 : null === (n = C.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== a ? a : p.defaultRewardRedemptionInstructionsByPlatform,
    S = null != m ? E[m] : void 0;
  return null != d && null != S ? (0, s.jsx)(c.Text, {
    variant: 'text-sm/normal',
    color: 'text-normal',
    className: O.bodyCopy,
    children: _.Z.parse(S, !1, {
      allowLinks: !0
    })
  }) : null;
}({
  quest: r,
  selectedPlatform: j,
  needsToConfirmPlatform: X,
  rewardCode: W,
  hasTieredRewardCodes: F
}),
V = o.useMemo(() => x.map(e => ({
  label: (0, I.t2)(e),
  value: e
})), [x]),
ee = null;
  X && (ee = (0, s.jsxs)(c.FormItem, {
title: D.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
children: [
  (0, s.jsx)(c.Select, {
    placeholder: D.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
    options: V,
    select: e => {
      H(!1), y(e);
    },
    isSelected: e => e === j,
    serialize: e => (0, I.t2)(e),
    className: G ? O.errorInput : '',
    isDisabled: k,
    renderOptionLabel: e => {
      let t = function(e) {
        switch (e) {
          case f.y$.CROSS_PLATFORM:
            return (0, s.jsx)(c.ScienceIcon, {
              className: O.platformSelectionOptionIcon
            });
          case f.y$.PC:
            return (0, s.jsx)(c.ScreenIcon, {
              className: O.platformSelectionOptionIcon
            });
          case f.y$.PLAYSTATION:
            return (0, s.jsx)(c.PlaystationIcon, {
              className: O.platformSelectionOptionIcon
            });
          case f.y$.SWITCH:
            return (0, s.jsx)(c.NintendoSwitchNeutralIcon, {
              className: O.platformSelectionOptionIcon
            });
          case f.y$.XBOX:
            return (0, s.jsx)(c.XboxIcon, {
              className: O.platformSelectionOptionIcon
            });
        }
      }(e.value);
      return (0, s.jsxs)('div', {
        className: O.platformSelectionOptionLabelContainer,
        children: [
          t,
          e.label
        ]
      });
    }
  }),
  G ? (0, s.jsx)(c.InputError, {
    error: D.Z.Messages.QUESTS_REWARD_CODE_ERROR
  }) : null
]
  }));
  let et = null == W && (Q || k),
en = et && !X ? (0, s.jsx)(c.Spinner, {}) : null,
es = null;
  null != W ? es = (0, s.jsx)(c.FormItem, {
title: D.Z.Messages.QUESTS_REWARD_CODE_HEADER,
children: (0, s.jsx)(p.Z, {
  value: P ? D.Z.Messages.QUEST_REWARD_CODE_HIDDEN : W.code,
  delay: 1000,
  buttonColor: c.Button.Colors.BRAND,
  onCopy: () => {
    P && (0, T.JG)(W.code), (0, g._3)({
      questId: r.id,
      questContent: d,
      questContentPosition: u,
      questContentCTA: g.jZ.COPY_REWARD_CODE
    });
  }
})
  }) : G && !X && (es = (0, s.jsx)(c.FormItem, {
title: D.Z.Messages.QUESTS_REWARD_CODE_HEADER,
children: (0, s.jsx)(c.TextInput, {
  disabled: !0,
  error: D.Z.Messages.QUESTS_REWARD_CODE_ERROR,
  inputClassName: O.errorInput
})
  }));
  let eo = () => {
  var e;
  X && null != j ? (z(r.id, j, d), (0, g._3)({
    questId: r.id,
    questContent: d,
    questContentCTA: g.jZ.GET_REWARD_CODE,
    questContentPosition: u
  })) : G ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? Y(r.id) : null != j && (z(r.id, j, d), (0, g._3)({
    questId: r.id,
    questContent: d,
    questContentCTA: g.jZ.GET_REWARD_CODE,
    questContentPosition: u
  })) : a();
},
ea = X && k,
er = !ea && (X && null == j || et),
el = D.Z.Messages.QUESTS_REWARD_CODE_DONE;
  X ? el = D.Z.Messages.QUESTS_REWARD_CODE_GET_CODE : !X && G && (el = D.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ei = !U && null != W && !m && !G,
ed = (0, s.jsx)(c.Button, {
  onClick: () => eo(),
  submitting: ea,
  disabled: er,
  children: el
}),
eu = null != en && F;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(l.O_, {
    ref: B,
    className: O.confettiCanvas,
    environment: q.current
  }),
  (0, s.jsx)('div', {
    ref: Z,
    children: (0, s.jsxs)(c.ModalRoot, {
      transitionState: n,
      size: c.ModalSize.DYNAMIC,
      children: [
        (0, s.jsxs)('div', {
          className: O.modalBody,
          children: [
            (0, s.jsx)(c.ModalCloseButton, {
              className: O.closeButton,
              onClick: () => a()
            }),
            !eu && (0, s.jsx)(M.p, {
              source: N.dr.REWARD_CODE_MODAL,
              questId: r.id,
              children: (0, s.jsx)(w, {
                quest: r,
                rewardCode: W,
                hasTieredRewardCodes: F
              })
            }),
            (0, s.jsxs)('div', {
              className: O.modalContent,
              children: [
                K,
                J,
                ee,
                en,
                es
              ]
            })
          ]
        }),
        (0, s.jsx)(c.ModalFooter, {
          children: ed
        })
      ]
    })
  }),
  ei && (0, s.jsx)(E.Z, {
    confettiTarget: Z.current,
    confettiCanvas: L,
    sprites: A.CA,
    colors: A.Br
  })
]
  });
}