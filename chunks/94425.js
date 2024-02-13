"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
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
  h = n("471671"),
  _ = n("491605"),
  C = n("433487"),
  I = n("58608"),
  S = n("284679"),
  p = n("448881"),
  m = n("374023"),
  T = n("2973"),
  g = n("588025"),
  A = n("227231"),
  N = n("555226"),
  R = n("315130"),
  O = n("228399"),
  v = n("45198"),
  L = n("686098"),
  M = n("166604"),
  P = n("782340"),
  D = n("874275");
let y = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  x = [0, .5, 1],
  b = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function U(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let G = new Map;
async function j(e, t) {
  let a = G.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return U(s, y, t), G.set(e, s), s
}
let w = new Map;
async function k(e, t) {
  let a = w.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return U(s, b, t), w.set(e, s), s
}

function F(e) {
  return e + .5 * (255 - e)
}

function B(e) {
  var t;
  let {
    expansionFactor: n,
    isExpanded: s,
    isExpansionAnimationComplete: l,
    quest: r
  } = e, o = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": s && l,
    className: i(D.content, D.contentCollapsed, {
      [D.contentCollapsedAccepted]: o
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: o ? (0, a.jsxs)("div", {
      className: D.questProgressWrapper,
      children: [(0, a.jsx)("img", {
        alt: r.config.messages.rewardName,
        className: D.questProgressRewardTile,
        src: (0, A.getRewardAssetUrl)(r.id)
      }), (0, a.jsx)(R.default, {
        className: D.questProgressBar,
        quest: r
      })]
    }) : (0, a.jsxs)("div", {
      className: D.brandingWrapper,
      children: [(0, a.jsx)(N.default, {
        className: D.partnerBranding,
        quest: r
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: D.questName,
        children: r.config.messages.questName
      })]
    })
  })
}
let H = s.forwardRef(function(e, t) {
  var n, l;
  let {
    expansionFactor: r,
    isExpanded: o,
    isExpansionAnimationComplete: f,
    quest: h,
    useReducedMotion: _
  } = e, S = (0, d.useStateFromStores)([T.default], () => T.default.isEnrolling(h.id), [h]), m = (0, d.useStateFromStores)([E.default], () => E.default.locale), N = s.useMemo(() => new Date(h.config.expiresAt).toLocaleDateString(m, {
    dateStyle: "long"
  }), [h.config.expiresAt, m]), M = s.useMemo(() => h.config.videoAssets.includes(g.QuestContent.QUEST_BAR), [h]), y = s.useCallback(() => {}, []), x = s.useCallback(() => {
    (0, p.enrollInQuest)(h.id)
  }, [h]), b = (0, L.useHandleClaimQuestsReward)(h), U = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, G = (null === (l = h.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": !o && f,
    className: i(D.content, D.contentExpanded),
    style: {
      opacity: r.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: U ? (0, a.jsxs)("div", {
      className: D.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: D.utils,
        children: [(0, a.jsxs)("div", {
          className: D.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: h.config.messages.rewardName,
            className: D.questProgressRewardTile,
            src: (0, A.getRewardAssetUrl)(h.id)
          }), (0, a.jsxs)("div", {
            className: D.questAcceptedContentCopy,
            children: [(0, a.jsx)(c.Heading, {
              className: D.questAcceptedContentCopyHeading,
              color: "always-white",
              variant: "heading-sm/semibold",
              children: G ? P.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_COMPLETE : P.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_HEADING_INCOMPLETE
            }), (0, a.jsx)(c.Text, {
              className: D.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: G ? P.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_COMPLETE.format({
                expirationDate: N
              }) : P.default.Messages.QUESTS_BAR_PROGRESS_EXPANDED_SUBHEADING_INCOMPLETE.format({
                expirationDate: N
              })
            })]
          })]
        }), (0, a.jsx)(c.Clickable, {
          className: D.submenuWrapper,
          onClick: y,
          children: (0, a.jsx)(C.default, {
            className: D.submenuIcon
          })
        })]
      }), G ? (0, a.jsx)(c.Button, {
        className: i(D.cta, D.ctaClaimReward),
        color: c.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: b,
        size: c.Button.Sizes.NONE,
        children: P.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(c.Text, {
        className: D.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: P.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: h.config.messages.gameTitle,
          streamingDurationRequirement: h.config.streamDurationRequirementMinutes,
          questReward: h.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(R.default, {
        quest: h
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: D.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: D.utils,
          children: [(0, a.jsx)(v.default, {
            color: "always-white"
          }), (0, a.jsx)(c.Clickable, {
            className: D.submenuWrapper,
            onClick: y,
            children: (0, a.jsx)(C.default, {
              className: D.submenuIcon
            })
          })]
        }), (0, a.jsxs)("div", {
          className: D.details,
          children: [(0, a.jsx)(O.default, {
            className: D.rewardTile,
            quest: h
          }), (0, a.jsx)(c.Heading, {
            className: D.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: P.default.Messages.QUESTS_TITLE.format({
              questName: h.config.messages.questName
            })
          }), (0, a.jsx)(c.Text, {
            className: D.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: P.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: h.config.messages.gameTitle,
              streamingDurationRequirement: h.config.streamDurationRequirementMinutes,
              questReward: h.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: D.ctaWrapper,
          children: (0, a.jsx)(c.Button, {
            className: D.cta,
            color: c.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: x,
            size: c.Button.Sizes.NONE,
            submitting: S,
            children: P.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: D.heroAssetWrapper,
        style: {
          color: h.config.colors.primary
        },
        children: (0, a.jsx)(I.default, {
          autoPlay: !_,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: D.heroAsset,
          controls: !1,
          poster: (0, A.getQuestBarStaticHeroAssetUrl)(h.id),
          children: _ || !M ? null : (0, a.jsx)("source", {
            src: (0, A.getQuestBarAnimatedHeroAssetUrl)(h.id),
            type: "video/webm"
          })
        }, _ ? "static" : "animated")
      })]
    })
  })
});
var V = function() {
  var e, t, n;
  let l = (0, m.useIsEligibleForQuests)({
      location: M.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion),
    o = (0, d.useStateFromStores)([T.default], () => (0, A.getQuestForTargetedContent)(T.default.quests, g.QuestContent.QUEST_BAR)),
    c = (0, d.useStateFromStores)([h.default], () => h.default.isFocused()),
    E = !r && c,
    C = s.useRef(-1),
    I = s.useRef(!1),
    [p, N] = s.useState(!1),
    [R, O] = s.useState(!1),
    [v, L] = s.useState(!0),
    [P, y] = s.useState(240),
    b = s.useRef(!1),
    U = s.useRef(null),
    G = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    w = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    V = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    Y = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary);
      return [F(e.r) / 255, F(e.g) / 255, F(e.b) / 255]
    }, [o]),
    W = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return x.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    {
      expansionFactor: K
    } = (0, u.useSpring)({
      from: {
        expansionFactor: 0
      },
      to: {
        expansionFactor: R ? 1 : 0
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
    z = s.useCallback(() => {
      var e, t;
      y((null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), O(!0)
    }, []),
    q = s.useCallback(() => {
      window.clearTimeout(C.current), I.current = !0, b.current = !0, z(), N(!1)
    }, [z]),
    Q = s.useCallback(() => {
      !w && (I.current = !1, C.current = window.setTimeout(() => {
        !I.current && O(!1)
      }, 200))
    }, [w]),
    Z = s.useCallback(() => {
      b.current = !0
    }, []);
  return (s.useEffect(() => {
    if (b.current) return;
    let e = window.setTimeout(() => {
      N(h.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    w && z()
  }, [w, z]), V || !l || null == o) ? null : (0, a.jsxs)("div", {
    className: D.wrapper,
    style: {
      color: o.config.colors.secondary,
      height: w && R ? P : void 0
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseOut: Q,
      onMouseOver: q,
      onFocus: q,
      onBlur: Q,
      className: i(D.contentWrapper, {
        [D.contentWrapperExpanded]: R,
        [D.contentWrapperAccepted]: G
      }),
      style: {
        backgroundImage: G ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: K.to({
          range: [0, 1],
          output: [40, G ? P : 240]
        })
      },
      children: [(0, a.jsx)(B, {
        expansionFactor: K,
        isExpanded: R,
        isExpansionAnimationComplete: v,
        quest: o
      }), (0, a.jsx)(H, {
        expansionFactor: K,
        isExpanded: R,
        isExpansionAnimationComplete: v,
        quest: o,
        useReducedMotion: r,
        ref: U
      })]
    }), null != W && !G && (!R || R && !v) && (0, a.jsx)("div", {
      className: D.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(_.default, {
        importData: () => j(o.id, W),
        shouldAnimate: E,
        className: i(D.lottieAnimation, D.lottieAnimationBackground),
        loop: !0
      })
    }), !G && null != Y && (0, a.jsx)(_.default, {
      importData: () => k(o.id, Y),
      shouldAnimate: p,
      className: i(D.lottieAnimation, D.lottieAnimationForeground, {
        [D.lottieAnimationForegroundHidden]: !p
      }),
      loop: !1,
      onComplete: Z,
      autoplay: p
    }), null == W && (0, a.jsx)("div", {
      className: D.backgroundFallback
    })]
  })
}