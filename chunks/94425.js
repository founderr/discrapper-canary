"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
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
  L = n("275986"),
  M = n("686098"),
  P = n("166604"),
  D = n("843455"),
  y = n("782340"),
  x = n("335294");
let b = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  U = [0, .5, 1],
  G = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function j(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let w = new Map;
async function k(e, t) {
  let a = w.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return j(s, b, t), w.set(e, s), s
}
let F = new Map;
async function B(e, t) {
  let a = F.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return j(s, G, t), F.set(e, s), s
}

function H(e) {
  return e + .5 * (255 - e)
}

function V(e) {
  var t;
  let {
    expansionFactor: n,
    isExpanded: s,
    isExpansionAnimationComplete: l,
    quest: r
  } = e, o = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": s && l,
    className: i(x.content, x.contentCollapsed, {
      [x.contentCollapsedAccepted]: o
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: o ? (0, a.jsxs)("div", {
      className: x.questProgressWrapper,
      children: [(0, a.jsx)("img", {
        alt: r.config.messages.rewardName,
        className: x.questProgressRewardTile,
        src: (0, A.getRewardAssetUrl)(r.id)
      }), (0, a.jsx)(R.default, {
        className: x.questProgressBar,
        quest: r
      })]
    }) : (0, a.jsxs)("div", {
      className: x.brandingWrapper,
      children: [(0, a.jsx)(N.default, {
        className: x.partnerBranding,
        quest: r
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: x.questName,
        children: r.config.messages.questName
      })]
    })
  })
}
let Y = s.forwardRef(function(e, t) {
  var n, l;
  let {
    expansionFactor: r,
    isExpanded: o,
    isExpansionAnimationComplete: f,
    onCtxMenuOpen: h,
    onCtxMenuClose: _,
    onCtxMenuSelect: S,
    quest: m,
    useReducedMotion: N
  } = e, P = (0, d.useStateFromStores)([T.default], () => T.default.isEnrolling(m.id), [m]), b = (0, d.useStateFromStores)([E.default], () => E.default.locale), U = s.useMemo(() => new Date(m.config.expiresAt).toLocaleDateString(b, {
    dateStyle: "long"
  }), [m.config.expiresAt, b]), G = s.useMemo(() => m.config.videoAssets.includes(g.QuestContent.QUEST_BAR), [m]), j = s.useCallback(() => {
    (0, p.enrollInQuest)(m.id)
  }, [m]), w = (0, M.useHandleClaimQuestsReward)(m), k = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, F = (null === (l = m.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": !o && f,
    className: i(x.content, x.contentExpanded),
    style: {
      opacity: r.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: k ? (0, a.jsxs)("div", {
      className: x.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: x.utils,
        children: [(0, a.jsxs)("div", {
          className: x.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: m.config.messages.rewardName,
            className: x.questProgressRewardTile,
            src: (0, A.getRewardAssetUrl)(m.id)
          }), (0, a.jsxs)("div", {
            className: x.questAcceptedContentCopy,
            children: [(0, a.jsx)(c.Heading, {
              className: x.questAcceptedContentCopyHeading,
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, A.getContextualEntrypointHeading)(m)
            }), (0, a.jsx)(c.Text, {
              className: x.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: F ? y.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: U
              }) : y.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), (0, a.jsx)(L.QuestsEntryContextMenuPopout, {
          onOpen: h,
          onClose: _,
          onSelect: S,
          onHide: D.NOOP,
          getGameLink: m.config.getGameLink,
          shouldShowDisclosure: !1,
          children: e => (0, a.jsx)(c.Clickable, {
            ...e,
            className: x.submenuWrapper,
            children: (0, a.jsx)(C.default, {
              className: x.submenuIcon
            })
          })
        })]
      }), F ? (0, a.jsx)(c.Button, {
        className: i(x.cta, x.ctaClaimReward),
        color: c.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: w,
        size: c.Button.Sizes.NONE,
        children: y.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(c.Text, {
        className: x.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: y.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: m.config.messages.gameTitle,
          streamingDurationRequirement: m.config.streamDurationRequirementMinutes,
          questReward: m.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(R.default, {
        quest: m
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: x.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: x.utils,
          children: [(0, a.jsx)(v.default, {
            color: "always-white"
          }), (0, a.jsx)(L.QuestsEntryContextMenuPopout, {
            onOpen: h,
            onClose: _,
            onSelect: S,
            onHide: D.NOOP,
            getGameLink: m.config.getGameLink,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: x.submenuWrapper,
              children: (0, a.jsx)(C.default, {
                className: x.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: x.details,
          children: [(0, a.jsx)(O.default, {
            className: x.rewardTile,
            quest: m
          }), (0, a.jsx)(c.Heading, {
            className: x.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: y.default.Messages.QUESTS_TITLE.format({
              questName: m.config.messages.questName
            })
          }), (0, a.jsx)(c.Text, {
            className: x.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: y.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: m.config.messages.gameTitle,
              streamingDurationRequirement: m.config.streamDurationRequirementMinutes,
              questReward: m.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: x.ctaWrapper,
          children: (0, a.jsx)(c.Button, {
            className: x.cta,
            color: c.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: j,
            size: c.Button.Sizes.NONE,
            submitting: P,
            children: y.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: x.heroAssetWrapper,
        style: {
          color: m.config.colors.primary
        },
        children: (0, a.jsx)(I.default, {
          autoPlay: !N,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: x.heroAsset,
          controls: !1,
          poster: (0, A.getQuestBarStaticHeroAssetUrl)(m.id),
          children: N || !G ? null : (0, a.jsx)("source", {
            src: (0, A.getQuestBarAnimatedHeroAssetUrl)(m.id),
            type: "video/webm"
          })
        }, N ? "static" : "animated")
      })]
    })
  })
});
var W = function() {
  var e, t, n;
  let l = (0, m.useIsEligibleForQuests)({
      location: P.QuestsExperimentLocations.ACTIVITY_PANEL,
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
    [v, L] = s.useState(!1),
    [M, D] = s.useState(!0),
    [y, b] = s.useState(240),
    G = s.useRef(!1),
    j = s.useRef(null),
    w = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    F = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    W = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    K = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary);
      return [H(e.r) / 255, H(e.g) / 255, H(e.b) / 255]
    }, [o]),
    z = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return U.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    {
      expansionFactor: q
    } = (0, u.useSpring)({
      from: {
        expansionFactor: 0
      },
      to: {
        expansionFactor: v ? 1 : 0
      },
      config: {
        tension: 300,
        friction: 30,
        clamp: !0
      },
      immediate: r,
      onRest: () => {
        D(!0)
      },
      onStart: () => {
        D(!1)
      }
    }),
    Q = s.useCallback(() => {
      var e, t;
      b((null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), L(!0)
    }, []),
    Z = s.useCallback(() => {
      N(!0)
    }, []),
    X = s.useCallback(() => {
      N(!1), !I.current && L(!1)
    }, []),
    J = s.useCallback(() => {
      N(!1), L(!1), I.current = !1
    }, []),
    $ = s.useCallback(() => {
      window.clearTimeout(C.current), G.current = !0, O(!1), Q()
    }, [Q]),
    ee = s.useCallback(() => {
      if (!F) !p && (C.current = window.setTimeout(() => {
        !I.current && L(!1)
      }, 200))
    }, [p, F]),
    et = s.useCallback(() => {
      I.current = !0, $()
    }, [$]),
    en = s.useCallback(() => {
      I.current = !1, ee()
    }, [ee]),
    ea = s.useCallback(() => {
      G.current = !0
    }, []);
  return (s.useEffect(() => {
    if (G.current) return;
    let e = window.setTimeout(() => {
      O(h.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    F && Q()
  }, [F, Q]), W || !l || null == o) ? null : (0, a.jsxs)("div", {
    className: x.wrapper,
    style: {
      color: o.config.colors.secondary,
      height: F && v ? y : void 0
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseLeave: en,
      onMouseEnter: et,
      onFocus: $,
      onBlur: ee,
      className: i(x.contentWrapper, {
        [x.contentWrapperExpanded]: v,
        [x.contentWrapperAccepted]: w
      }),
      style: {
        backgroundImage: w ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: q.to({
          range: [0, 1],
          output: [40, w ? y : 240]
        })
      },
      children: [(0, a.jsx)(V, {
        expansionFactor: q,
        isExpanded: v,
        isExpansionAnimationComplete: M,
        quest: o
      }), (0, a.jsx)(Y, {
        onCtxMenuOpen: Z,
        onCtxMenuClose: X,
        onCtxMenuSelect: J,
        expansionFactor: q,
        isExpanded: v,
        isExpansionAnimationComplete: M,
        quest: o,
        useReducedMotion: r,
        ref: j
      })]
    }), null != z && !w && (!v || v && !M) && (0, a.jsx)("div", {
      className: x.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(_.default, {
        importData: () => k(o.id, z),
        shouldAnimate: E,
        className: i(x.lottieAnimation, x.lottieAnimationBackground),
        loop: !0
      })
    }), !w && null != K && (0, a.jsx)(_.default, {
      importData: () => B(o.id, K),
      shouldAnimate: R,
      className: i(x.lottieAnimation, x.lottieAnimationForeground, {
        [x.lottieAnimationForegroundHidden]: !R
      }),
      loop: !1,
      onComplete: ea,
      autoplay: R
    }), null == z && (0, a.jsx)("div", {
      className: x.backgroundFallback
    })]
  })
}