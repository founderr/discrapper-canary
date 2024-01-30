"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007"), n("808653");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
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
  S = n("879364"),
  m = n("2973"),
  p = n("588025"),
  A = n("227231"),
  g = n("555226"),
  N = n("315130"),
  R = n("228399"),
  O = n("45198"),
  L = n("166604"),
  v = n("782340"),
  M = n("874275");
let P = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  D = [0, .5, 1],
  y = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function x(e, t, n) {
  for (let a in t) {
    let s = t[a],
      i = o.get(e, a);
    if (null == i) continue;
    let l = i.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, l)
  }
}
let b = new Map;
async function U(e, t) {
  let a = b.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return x(s, P, t), b.set(e, s), s
}
let G = new Map;
async function j(e, t) {
  let a = G.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return x(s, y, t), G.set(e, s), s
}

function w(e) {
  return e + .5 * (255 - e)
}

function k(e) {
  var t;
  let {
    expansionFactor: n,
    isExpanded: s,
    isExpansionAnimationComplete: i,
    quest: r
  } = e, o = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": s && i,
    className: l(M.content, M.contentCollapsed, {
      [M.contentCollapsedAccepted]: o
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: o ? (0, a.jsxs)("div", {
      className: M.questProgressWrapper,
      children: [(0, a.jsx)("img", {
        alt: r.config.messages.rewardName,
        className: M.questProgressRewardTile,
        src: (0, A.getRewardAssetUrl)(r.id)
      }), (0, a.jsx)(N.default, {
        className: M.questProgressBar,
        quest: r
      })]
    }) : (0, a.jsxs)("div", {
      className: M.brandingWrapper,
      children: [(0, a.jsx)(g.default, {
        className: M.partnerBranding,
        quest: r
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: M.questName,
        children: r.config.messages.questName
      })]
    })
  })
}
let F = s.forwardRef(function(e, t) {
  var i, r;
  let {
    expansionFactor: o,
    isExpanded: f,
    isExpansionAnimationComplete: _,
    quest: h
  } = e, I = (0, d.useStateFromStores)([m.default], () => m.default.isEnrolling(h.id), [h]), S = (0, d.useStateFromStores)([E.default], () => E.default.locale), p = s.useMemo(() => new Date(h.config.expiresAt).toLocaleDateString(S, {
    dateStyle: "long"
  }), [h.config.expiresAt, S]), g = s.useCallback(() => {}, []), L = s.useCallback(() => {
    (0, T.enrollInQuest)(h.id)
  }, [h]), P = s.useCallback(() => {
    (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("36170").then(n.bind(n, "36170"));
      return t => (0, a.jsx)(e, {
        ...t,
        quest: h
      })
    })
  }, [h]), D = (null === (i = h.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null, y = (null === (r = h.userStatus) || void 0 === r ? void 0 : r.completedAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": !f && _,
    className: l(M.content, M.contentExpanded),
    style: {
      opacity: o.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: D ? (0, a.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: M.utils,
        children: [(0, a.jsxs)("div", {
          className: M.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: h.config.messages.rewardName,
            className: M.questProgressRewardTile,
            src: (0, A.getRewardAssetUrl)(h.id)
          }), (0, a.jsxs)("div", {
            className: M.questAcceptedContentCopy,
            children: [(0, a.jsx)(c.Heading, {
              className: M.questAcceptedContentCopyHeading,
              color: "always-white",
              variant: "heading-sm/semibold",
              children: y ? v.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_COMPLETE : v.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_INCOMPLETE
            }), (0, a.jsx)(c.Text, {
              className: M.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: y ? v.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_COMPLETE.format({
                expirationDate: p
              }) : v.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_INCOMPLETE.format({
                expirationDate: p
              })
            })]
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: M.submenuWrapper,
          onClick: g,
          children: (0, a.jsx)(C.default, {
            className: M.submenuIcon
          })
        })]
      }), y ? (0, a.jsx)(c.Button, {
        className: l(M.cta, M.ctaClaimReward),
        color: c.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: P,
        size: c.Button.Sizes.NONE,
        children: v.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(c.Text, {
        className: M.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: v.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: h.config.messages.gameTitle,
          streamingDurationRequirement: h.config.streamDurationRequirementMinutes,
          questReward: h.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(N.default, {
        quest: h
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: M.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: M.utils,
          children: [(0, a.jsx)(O.default, {}), (0, a.jsx)(c.Clickable, {
            className: M.submenuWrapper,
            onClick: g,
            children: (0, a.jsx)(C.default, {
              className: M.submenuIcon
            })
          })]
        }), (0, a.jsxs)("div", {
          className: M.details,
          children: [(0, a.jsx)(R.default, {
            className: M.rewardTile,
            quest: h
          }), (0, a.jsx)(c.Heading, {
            className: M.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: v.default.Messages.QUESTS_TITLE.format({
              questName: h.config.messages.questName
            })
          }), (0, a.jsx)(c.Text, {
            className: M.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: v.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: h.config.messages.gameTitle,
              streamingDurationRequirement: h.config.streamDurationRequirementMinutes,
              questReward: h.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: M.ctaWrapper,
          children: (0, a.jsx)(c.Button, {
            className: M.cta,
            color: c.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: L,
            size: c.Button.Sizes.NONE,
            submitting: I,
            children: v.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: M.heroAnimationWrapper,
        style: {
          color: h.config.colors.primary
        },
        children: (0, a.jsx)("img", {
          src: (0, A.getQuestBarHeroAssetUrl)(h.id),
          className: M.heroAnimation,
          alt: ""
        })
      })]
    })
  })
});
var H = function() {
  var e, t, n;
  let i = (0, S.useIsEligibleForQuests)(L.QuestExperimentLocations.ACTIVITY_PANEL),
    r = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion),
    o = (0, d.useStateFromStores)([m.default], () => (0, A.getQuestForTargetedContent)(m.default.quests, p.QuestContent.QUEST_BAR)),
    c = (0, d.useStateFromStores)([_.default], () => _.default.isFocused()),
    E = s.useRef(-1),
    C = s.useRef(!1),
    [T, g] = s.useState(!1),
    [N, R] = s.useState(!1),
    [O, v] = s.useState(!0),
    [P, y] = s.useState(240),
    x = s.useRef(!1),
    b = s.useRef(null),
    G = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    H = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    B = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    V = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, I.hexToRgb)(o.config.colors.primary);
      return [w(e.r) / 255, w(e.g) / 255, w(e.b) / 255]
    }, [o]),
    Y = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, I.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return D.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
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
        v(!0)
      },
      onStart: () => {
        v(!1)
      }
    }),
    K = s.useCallback(() => {
      var e, t;
      y((null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), R(!0)
    }, []),
    z = s.useCallback(() => {
      window.clearTimeout(E.current), C.current = !0, x.current = !0, K(), g(!1)
    }, [K]),
    q = s.useCallback(() => {
      !H && (C.current = !1, E.current = window.setTimeout(() => {
        !C.current && R(!1)
      }, 200))
    }, [H]),
    Q = s.useCallback(() => {
      x.current = !0
    }, []);
  return (s.useEffect(() => {
    if (x.current) return;
    let e = window.setTimeout(() => {
      g(_.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    H && K()
  }, [H, K]), B || !i || null == o) ? null : (0, a.jsxs)("div", {
    className: M.wrapper,
    style: {
      color: o.config.colors.secondary,
      height: H && N ? P : void 0
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseOut: q,
      onMouseOver: z,
      onFocus: z,
      onBlur: q,
      className: l(M.contentWrapper, {
        [M.contentWrapperExpanded]: N,
        [M.contentWrapperAccepted]: G
      }),
      style: {
        backgroundImage: G ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: W.to({
          range: [0, 1],
          output: [40, G ? P : 240]
        })
      },
      children: [(0, a.jsx)(k, {
        expansionFactor: W,
        isExpanded: N,
        isExpansionAnimationComplete: O,
        quest: o
      }), (0, a.jsx)(F, {
        expansionFactor: W,
        isExpanded: N,
        isExpansionAnimationComplete: O,
        quest: o,
        ref: b
      })]
    }), null != Y && !G && (!N || N && !O) && (0, a.jsx)("div", {
      className: M.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(h.default, {
        importData: () => U(o.id, Y),
        shouldAnimate: !r && c,
        className: l(M.lottieAnimation, M.lottieAnimationBackground),
        loop: !0
      })
    }), !G && null != V && (0, a.jsx)(h.default, {
      importData: () => j(o.id, V),
      shouldAnimate: T,
      className: l(M.lottieAnimation, M.lottieAnimationForeground, {
        [M.lottieAnimationForegroundHidden]: !T
      }),
      loop: !1,
      onComplete: Q,
      autoplay: T
    }), null == Y && (0, a.jsx)("div", {
      className: M.backgroundFallback
    })]
  })
}