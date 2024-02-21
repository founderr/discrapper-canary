"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
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
  m = n("448881"),
  p = n("374023"),
  T = n("2973"),
  g = n("588025"),
  A = n("227231"),
  N = n("555226"),
  R = n("315130"),
  v = n("228399"),
  O = n("45198"),
  L = n("275986"),
  M = n("686098"),
  P = n("166604"),
  D = n("782340"),
  y = n("335294");
let x = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  b = [0, .5, 1],
  U = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function G(e, t, n) {
  for (let a in t) {
    let s = t[a],
      l = o.get(e, a);
    if (null == l) continue;
    let i = l.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, i)
  }
}
let j = new Map;
async function w(e, t) {
  let a = j.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return G(s, x, t), j.set(e, s), s
}
let k = new Map;
async function F(e, t) {
  let a = k.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return G(s, U, t), k.set(e, s), s
}

function B(e) {
  return e + .5 * (255 - e)
}

function H(e) {
  var t;
  let {
    expansionFactor: n,
    isExpanded: s,
    isExpansionAnimationComplete: l,
    quest: r
  } = e, o = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": s && l,
    className: i(y.content, y.contentCollapsed, {
      [y.contentCollapsedAccepted]: o
    }),
    style: {
      opacity: n.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: o ? (0, a.jsxs)("div", {
      className: y.questProgressWrapper,
      children: [(0, a.jsx)("img", {
        alt: r.config.messages.rewardName,
        className: y.questProgressRewardTile,
        src: (0, A.getRewardAssetUrl)(r.id)
      }), (0, a.jsx)(R.default, {
        className: y.questProgressBar,
        quest: r
      })]
    }) : (0, a.jsxs)("div", {
      className: y.brandingWrapper,
      children: [(0, a.jsx)(N.default, {
        className: y.partnerBranding,
        quest: r
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: y.questName,
        children: r.config.messages.questName
      })]
    })
  })
}
let V = s.forwardRef(function(e, t) {
  var n, l;
  let {
    expansionFactor: r,
    isExpanded: o,
    isExpansionAnimationComplete: f,
    onCtxMenuOpen: h,
    onCtxMenuClose: _,
    onCtxMenuSelect: S,
    quest: p,
    useReducedMotion: N
  } = e, P = (0, d.useStateFromStores)([T.default], () => T.default.isEnrolling(p.id), [p]), x = (0, d.useStateFromStores)([E.default], () => E.default.locale), b = s.useMemo(() => new Date(p.config.expiresAt).toLocaleDateString(x, {
    dateStyle: "long"
  }), [p.config.expiresAt, x]), U = s.useMemo(() => p.config.videoAssets.includes(g.QuestContent.QUEST_BAR), [p]), G = s.useCallback(() => {
    (0, m.enrollInQuest)(p.id)
  }, [p]), j = (0, M.useHandleClaimQuestsReward)(p), w = (null === (n = p.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, k = (null === (l = p.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": !o && f,
    className: i(y.content, y.contentExpanded),
    style: {
      opacity: r.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: w ? (0, a.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: y.utils,
        children: [(0, a.jsxs)("div", {
          className: y.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: p.config.messages.rewardName,
            className: y.questProgressRewardTile,
            src: (0, A.getRewardAssetUrl)(p.id)
          }), (0, a.jsxs)("div", {
            className: y.questAcceptedContentCopy,
            children: [(0, a.jsx)(c.Heading, {
              className: y.questAcceptedContentCopyHeading,
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, A.getContextualEntrypointHeading)(p)
            }), (0, a.jsx)(c.Text, {
              className: y.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: k ? D.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: b
              }) : D.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: b
              })
            })]
          })]
        }), (0, a.jsx)(L.QuestsEntryContextMenuPopout, {
          onOpen: h,
          onClose: _,
          onSelect: S,
          questContent: g.QuestContent.QUEST_BAR,
          quest: p,
          shouldShowDisclosure: !1,
          children: e => (0, a.jsx)(c.Clickable, {
            ...e,
            className: y.submenuWrapper,
            children: (0, a.jsx)(C.default, {
              className: y.submenuIcon
            })
          })
        })]
      }), k ? (0, a.jsx)(c.Button, {
        className: i(y.cta, y.ctaClaimReward),
        color: c.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: j,
        size: c.Button.Sizes.NONE,
        children: D.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(c.Text, {
        className: y.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: D.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: p.config.messages.gameTitle,
          streamingDurationRequirement: p.config.streamDurationRequirementMinutes,
          questReward: p.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(R.default, {
        quest: p
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: y.utils,
          children: [(0, a.jsx)(O.default, {
            color: "always-white"
          }), (0, a.jsx)(L.QuestsEntryContextMenuPopout, {
            onOpen: h,
            onClose: _,
            onSelect: S,
            questContent: g.QuestContent.QUEST_BAR,
            quest: p,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: y.submenuWrapper,
              children: (0, a.jsx)(C.default, {
                className: y.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: y.details,
          children: [(0, a.jsx)(v.default, {
            className: y.rewardTile,
            quest: p
          }), (0, a.jsx)(c.Heading, {
            className: y.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: D.default.Messages.QUESTS_TITLE.format({
              questName: p.config.messages.questName
            })
          }), (0, a.jsx)(c.Text, {
            className: y.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: D.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: p.config.messages.gameTitle,
              streamingDurationRequirement: p.config.streamDurationRequirementMinutes,
              questReward: p.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: y.ctaWrapper,
          children: (0, a.jsx)(c.Button, {
            className: y.cta,
            color: c.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: G,
            size: c.Button.Sizes.NONE,
            submitting: P,
            children: D.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: y.heroAssetWrapper,
        style: {
          color: p.config.colors.primary
        },
        children: (0, a.jsx)(I.default, {
          autoPlay: !N,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: y.heroAsset,
          controls: !1,
          poster: (0, A.getQuestBarStaticHeroAssetUrl)(p.id),
          children: N || !U ? null : (0, a.jsx)("source", {
            src: (0, A.getQuestBarAnimatedHeroAssetUrl)(p.id),
            type: "video/webm"
          })
        }, N ? "static" : "animated")
      })]
    })
  })
});
var Y = function() {
  var e, t, n;
  let l = (0, p.useIsEligibleForQuests)({
      location: P.QuestsExperimentLocations.ACTIVITY_PANEL,
      autoTrackExposure: !0
    }),
    r = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion),
    o = (0, d.useStateFromStores)([T.default], () => (0, A.getQuestForTargetedContent)(T.default.quests, g.QuestContent.QUEST_BAR)),
    c = (0, d.useStateFromStores)([h.default], () => h.default.isFocused()),
    E = !r && c,
    C = s.useRef(-1),
    I = s.useRef(!1),
    [m, N] = s.useState(!1),
    [R, v] = s.useState(!1),
    [O, L] = s.useState(!1),
    [M, D] = s.useState(!0),
    [x, U] = s.useState(240),
    G = s.useRef(!1),
    j = s.useRef(null),
    k = (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null,
    Y = (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
    W = (null == o ? void 0 : null === (n = o.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
    K = (null == o ? void 0 : o.userStatus) != null && (0, A.isDismissed)(null == o ? void 0 : o.userStatus, g.QuestContent.QUEST_BAR),
    z = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary);
      return [B(e.r) / 255, B(e.g) / 255, B(e.b) / 255]
    }, [o]),
    q = s.useMemo(() => {
      if (null == o) return null;
      let e = (0, S.hexToRgb)(o.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return b.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [o]),
    {
      expansionFactor: Q
    } = (0, u.useSpring)({
      from: {
        expansionFactor: 0
      },
      to: {
        expansionFactor: O ? 1 : 0
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
    Z = s.useCallback(() => {
      var e, t;
      U((null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 16), L(!0)
    }, []),
    X = s.useCallback(() => {
      N(!0)
    }, []),
    J = s.useCallback(() => {
      N(!1), !I.current && !Y && L(!1)
    }, [Y]),
    $ = s.useCallback(() => {
      N(!1), L(!1), I.current = !1
    }, []),
    ee = s.useCallback(() => {
      window.clearTimeout(C.current), G.current = !0, v(!1), Z()
    }, [Z]),
    et = s.useCallback(() => {
      if (!Y) !m && (C.current = window.setTimeout(() => {
        !I.current && L(!1)
      }, 200))
    }, [m, Y]),
    en = s.useCallback(() => {
      I.current = !0, ee()
    }, [ee]),
    ea = s.useCallback(() => {
      I.current = !1, et()
    }, [et]),
    es = s.useCallback(() => {
      G.current = !0
    }, []);
  return (s.useEffect(() => {
    if (G.current) return;
    let e = window.setTimeout(() => {
      v(h.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), s.useEffect(() => {
    Y && Z()
  }, [Y, Z]), W || !l || K || null == o) ? null : (0, a.jsxs)("div", {
    className: y.wrapper,
    style: {
      color: o.config.colors.secondary,
      height: Y && O ? x : void 0
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseLeave: ea,
      onMouseEnter: en,
      onFocus: ee,
      onBlur: et,
      className: i(y.contentWrapper, {
        [y.contentWrapperExpanded]: O,
        [y.contentWrapperAccepted]: k
      }),
      style: {
        backgroundImage: k ? "linear-gradient(90deg, ".concat(o.config.colors.primary, ", ").concat(o.config.colors.secondary, ")") : void 0,
        height: Q.to({
          range: [0, 1],
          output: [40, k ? x : 240]
        })
      },
      children: [(0, a.jsx)(H, {
        expansionFactor: Q,
        isExpanded: O,
        isExpansionAnimationComplete: M,
        quest: o
      }), (0, a.jsx)(V, {
        onCtxMenuOpen: X,
        onCtxMenuClose: J,
        onCtxMenuSelect: $,
        expansionFactor: Q,
        isExpanded: O,
        isExpansionAnimationComplete: M,
        quest: o,
        useReducedMotion: r,
        ref: j
      })]
    }), null != q && !k && (!O || O && !M) && (0, a.jsx)("div", {
      className: y.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(_.default, {
        importData: () => w(o.id, q),
        shouldAnimate: E,
        className: i(y.lottieAnimation, y.lottieAnimationBackground),
        loop: !0
      })
    }), !k && null != z && (0, a.jsx)(_.default, {
      importData: () => F(o.id, z),
      shouldAnimate: R,
      className: i(y.lottieAnimation, y.lottieAnimationForeground, {
        [y.lottieAnimationForegroundHidden]: !R
      }),
      loop: !1,
      onComplete: es,
      autoplay: R
    }), null == q && (0, a.jsx)("div", {
      className: y.backgroundFallback
    })]
  })
}