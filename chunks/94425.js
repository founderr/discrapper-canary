"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007"), n("808653");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("907002"),
  d = n("446674"),
  c = n("77078"),
  f = n("206230"),
  E = n("915639"),
  _ = n("471671"),
  h = n("491605"),
  C = n("433487"),
  I = n("284679"),
  T = n("448881"),
  S = n("374023"),
  p = n("2973"),
  m = n("588025"),
  g = n("227231"),
  A = n("555226"),
  N = n("315130"),
  R = n("228399"),
  O = n("45198"),
  L = n("686098"),
  v = n("166604"),
  M = n("782340"),
  P = n("874275");
let D = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  y = [0, .5, 1],
  x = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function b(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let U = new Map;
async function G(e, t) {
  let a = U.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return b(s, D, t), U.set(e, s), s
}
let j = new Map;
async function w(e, t) {
  let a = j.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return b(s, x, t), j.set(e, s), s
}

function k(e) {
  return e + .5 * (255 - e)
}

function F(e) {
  var t;
  let {
    expansionFactor: n,
    isExpanded: s,
    isExpansionAnimationComplete: l,
    quest: r
  } = e, o = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": s && l,
    className: i(P.content, P.contentCollapsed, {
      [P.contentCollapsedAccepted]: o
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: o ? (0, a.jsxs)("div", {
      className: P.questProgressWrapper,
      children: [(0, a.jsx)("img", {
        alt: r.config.messages.rewardName,
        className: P.questProgressRewardTile,
        src: (0, g.getRewardAssetUrl)(r.id)
      }), (0, a.jsx)(N.default, {
        className: P.questProgressBar,
        quest: r
      })]
    }) : (0, a.jsxs)("div", {
      className: P.brandingWrapper,
      children: [(0, a.jsx)(A.default, {
        className: P.partnerBranding,
        quest: r
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: P.questName,
        children: r.config.messages.questName
      })]
    })
  })
}
let B = s.forwardRef(function(e, t) {
  var n, l;
  let {
    expansionFactor: r,
    isExpanded: o,
    isExpansionAnimationComplete: f,
    quest: _
  } = e, h = (0, d.useStateFromStores)([p.default], () => p.default.isEnrolling(_.id), [_]), I = (0, d.useStateFromStores)([E.default], () => E.default.locale), S = s.useMemo(() => new Date(_.config.expiresAt).toLocaleDateString(I, {
    dateStyle: "long"
  }), [_.config.expiresAt, I]), m = s.useCallback(() => {}, []), A = s.useCallback(() => {
    (0, T.enrollInQuest)(_.id)
  }, [_]), v = (0, L.useHandleClaimQuestsReward)(_), D = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, y = (null === (l = _.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": !o && f,
    className: i(P.content, P.contentExpanded),
    style: {
      opacity: r.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: D ? (0, a.jsxs)("div", {
      className: P.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: P.utils,
        children: [(0, a.jsxs)("div", {
          className: P.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: _.config.messages.rewardName,
            className: P.questProgressRewardTile,
            src: (0, g.getRewardAssetUrl)(_.id)
          }), (0, a.jsxs)("div", {
            className: P.questAcceptedContentCopy,
            children: [(0, a.jsx)(c.Heading, {
              className: P.questAcceptedContentCopyHeading,
              color: "always-white",
              variant: "heading-sm/semibold",
              children: y ? M.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_COMPLETE : M.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_INCOMPLETE
            }), (0, a.jsx)(c.Text, {
              className: P.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: y ? M.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_COMPLETE.format({
                expirationDate: S
              }) : M.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_INCOMPLETE.format({
                expirationDate: S
              })
            })]
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: P.submenuWrapper,
          onClick: m,
          children: (0, a.jsx)(C.default, {
            className: P.submenuIcon
          })
        })]
      }), y ? (0, a.jsx)(c.Button, {
        className: i(P.cta, P.ctaClaimReward),
        color: c.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: v,
        size: c.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(c.Text, {
        className: P.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: M.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: _.config.messages.gameTitle,
          streamingDurationRequirement: _.config.streamDurationRequirementMinutes,
          questReward: _.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(N.default, {
        quest: _
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: P.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: P.utils,
          children: [(0, a.jsx)(O.default, {
            color: "always-white"
          }), (0, a.jsx)(c.Clickable, {
            className: P.submenuWrapper,
            onClick: m,
            children: (0, a.jsx)(C.default, {
              className: P.submenuIcon
            })
          })]
        }), (0, a.jsxs)("div", {
          className: P.details,
          children: [(0, a.jsx)(R.default, {
            className: P.rewardTile,
            quest: _
          }), (0, a.jsx)(c.Heading, {
            className: P.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: _.config.messages.questName
            })
          }), (0, a.jsx)(c.Text, {
            className: P.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: M.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: _.config.messages.gameTitle,
              streamingDurationRequirement: _.config.streamDurationRequirementMinutes,
              questReward: _.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: P.ctaWrapper,
          children: (0, a.jsx)(c.Button, {
            className: P.cta,
            color: c.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: A,
            size: c.Button.Sizes.NONE,
            submitting: h,
            children: M.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: P.heroAnimationWrapper,
        style: {
          color: _.config.colors.primary
        },
        children: (0, a.jsx)("img", {
          src: (0, g.getQuestBarHeroAssetUrl)(_.id),
          className: P.heroAnimation,
          alt: ""
        })
      })]
    })
  })
});
var H = function() {
  var e, t, n;
  let l = (0, S.useIsEligibleForQuests)({
      location: v.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion),
    o = (0, d.useStateFromStores)([p.default], () => (0, g.getQuestForTargetedContent)(p.default.quests, m.QuestContent.QUEST_BAR)),
    c = (0, d.useStateFromStores)([_.default], () => _.default.isFocused()),
    E = s.useRef(-1),
    C = s.useRef(!1),
    [T, A] = s.useState(!1),
    [N, R] = s.useState(!1),
    [O, L] = s.useState(!0),
    [M, D] = s.useState(240),
    x = s.useRef(!1),
    b = s.useRef(null),
    U = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    j = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    H = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    V = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, I.hexToRgb)(o.config.colors.primary);
      return [k(e.r) / 255, k(e.g) / 255, k(e.b) / 255]
    }, [o]),
    Y = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, I.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return y.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    {
      expansionFactor: W
    } = (0, u.useSpring)({
      from: {
        expansionFactor: 0
      },
      to: {
        expansionFactor: N ? 1 : 0
      },
      config: {
        tension: 300,
        friction: 30,
        clamp: !0
      },
      immediate: r,
      onRest: () => {
        L(!0)
      },
      onStart: () => {
        L(!1)
      }
    }),
    K = s.useCallback(() => {
      var e, t;
      D((null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), R(!0)
    }, []),
    z = s.useCallback(() => {
      window.clearTimeout(E.current), C.current = !0, x.current = !0, K(), A(!1)
    }, [K]),
    q = s.useCallback(() => {
      !j && (C.current = !1, E.current = window.setTimeout(() => {
        !C.current && R(!1)
      }, 200))
    }, [j]),
    Q = s.useCallback(() => {
      x.current = !0
    }, []);
  return (s.useEffect(() => {
    if (x.current) return;
    let e = window.setTimeout(() => {
      A(_.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    j && K()
  }, [j, K]), H || !l || null == o) ? null : (0, a.jsxs)("div", {
    className: P.wrapper,
    style: {
      color: o.config.colors.secondary,
      height: j && N ? M : void 0
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseOut: q,
      onMouseOver: z,
      onFocus: z,
      onBlur: q,
      className: i(P.contentWrapper, {
        [P.contentWrapperExpanded]: N,
        [P.contentWrapperAccepted]: U
      }),
      style: {
        backgroundImage: U ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: W.to({
          range: [0, 1],
          output: [40, U ? M : 240]
        })
      },
      children: [(0, a.jsx)(F, {
        expansionFactor: W,
        isExpanded: N,
        isExpansionAnimationComplete: O,
        quest: o
      }), (0, a.jsx)(B, {
        expansionFactor: W,
        isExpanded: N,
        isExpansionAnimationComplete: O,
        quest: o,
        ref: b
      })]
    }), null != Y && !U && (!N || N && !O) && (0, a.jsx)("div", {
      className: P.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(h.default, {
        importData: () => G(o.id, Y),
        shouldAnimate: !r && c,
        className: i(P.lottieAnimation, P.lottieAnimationBackground),
        loop: !0
      })
    }), !U && null != V && (0, a.jsx)(h.default, {
      importData: () => w(o.id, V),
      shouldAnimate: T,
      className: i(P.lottieAnimation, P.lottieAnimationForeground, {
        [P.lottieAnimationForegroundHidden]: !T
      }),
      loop: !1,
      onComplete: Q,
      autoplay: T
    }), null == Y && (0, a.jsx)("div", {
      className: P.backgroundFallback
    })]
  })
}