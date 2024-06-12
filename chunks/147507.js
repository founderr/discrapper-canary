"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("47120");
var s, a, l, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("887024"),
  f = n("153832"),
  E = n("468194"),
  _ = n("477690"),
  m = n("481060"),
  T = n("230711"),
  I = n("745510"),
  h = n("739566"),
  p = n("64078"),
  N = n("29270"),
  S = n("709586"),
  C = n("482207"),
  g = n("702346"),
  A = n("267642"),
  M = n("981631"),
  R = n("689938"),
  v = n("603277");
(l = s || (s = {})).ENTER = "enter", l.CONFETTI = "confetti", l.LEAF_PEEL = "leaf_peel", l.LEAF_FALL = "leaf_fall", l.EXIT = "exit";
let O = {
  enter: {
    BEG: 0,
    END: 22
  },
  confetti: {
    BEG: 23,
    END: 119
  },
  leaf_peel: {
    BEG: 120,
    END: 160
  },
  leaf_fall: {
    BEG: 161,
    END: 163
  },
  exit: {
    BEG: 164,
    END: 200
  }
};
(i = a || (a = {})).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let x = ["TOP_LEFT", "TOP_RIGHT"],
  L = (0, E.cssValueToNumber)(_.default.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  D = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  P = Object.freeze({
    TOP_LEFT: {
      getConfettiPosition: e => ({
        x: e - 11,
        y: e - 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: 1
      },
      leafPosition: {
        x: 100,
        y: 144
      },
      leafRotationDirection: 1
    },
    TOP_RIGHT: {
      getConfettiPosition: e => ({
        x: 11,
        y: e - 125
      }),
      confettiVelocityDirection: {
        x: -1,
        y: 1
      },
      leafPosition: {
        x: 90,
        y: 144
      },
      leafRotationDirection: -1
    },
    BOTTOM_LEFT: {
      ...D,
      getConfettiPosition: e => ({
        x: e - 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: -1
      }
    },
    BOTTOM_RIGHT: {
      ...D,
      getConfettiPosition: e => ({
        x: 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: -1,
        y: -1
      }
    }
  }),
  y = "falling-leaf",
  U = ["#61D5B2"],
  j = n("303893"),
  b = n("808392"),
  F = [j, b];

function B() {
  return n.e("60005").then(n.t.bind(n, "931152", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function G(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: s,
    size: l
  } = e, i = o.useRef(null), [u, E] = o.useState(null), [_] = o.useState(null != s ? s : function() {
    switch (Math.floor(Math.random() * Object.keys(a).length)) {
      case 0:
        return "TOP_LEFT";
      case 2:
        return "TOP_RIGHT";
      case 3:
        return "BOTTOM_LEFT";
      default:
        return "BOTTOM_RIGHT"
    }
  }()), {
    createMultipleConfettiAt: T,
    confettiCanvas: h
  } = o.useContext(I.ConfettiCannonContext), [p, N] = o.useState(null), S = (0, c.useConfettiCannon)(h, p), C = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (x.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(u, _), g = x.includes(_), A = g && "exit" === u, M = o.useCallback(e => {
    E(e)
  }, []), R = o.useCallback(() => {
    "exit" === u && (null == t || t())
  }, [t, u]), D = o.useCallback(e => {
    i.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === u) {
      let {
        confettiVelocityDirection: e
      } = P[_], t = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
          s = null == e ? void 0 : e.getBoundingClientRect();
        if (null == s) return {
          x: 0,
          y: 0
        };
        let a = P[t].getConfettiPosition(n);
        return {
          x: s.left + a.x,
          y: s.top + a.y
        }
      }(i.current, _, l);
      T(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: 10 * e.x,
            y: 80 * e.y
          },
          maxValue: {
            x: 80 * e.x,
            y: 180 * e.y
          }
        }
      })
    }
  }, [T, _, u, l]), o.useEffect(() => {
    if (g && "leaf_fall" === u) {
      let e = P[_].leafRotationDirection;
      S.createConfetti({
        id: "".concat(y, "-").concat((0, f.v4)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let s = P[t];
            return {
              x: n.left + s.leafPosition.x,
              y: n.top + s.leafPosition.y
            }
          }(i.current, _)
        },
        size: {
          type: "static",
          value: 45
        },
        rotation: {
          type: "linear-random",
          minValue: {
            x: 0,
            y: 0,
            z: 0
          },
          maxValue: {
            x: 0,
            y: 0,
            z: 0
          },
          minAddValue: {
            x: 0,
            y: 0,
            z: 8 * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: 12 * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === _ ? j : b
      })
    }
  }, [g, S, _, u]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: N,
      sprites: F,
      colors: U,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(m.Clickable, {
      onClick: n,
      className: d()(v.easterEggAnimationClickTarget, {
        [v.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
        [v.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
        [v.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
        [v.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
      }),
      children: (0, r.jsx)(m.SequencedLottieAnimation, {
        animationRef: D,
        className: d()(v.easterEggAnimation, {
          [v.easterEggAnimationHideLeaf]: A
        }),
        nextScene: C,
        sceneSegments: O,
        onScenePlay: M,
        onSceneComplete: R,
        importData: B,
        pauseWhileUnfocused: !1
      })
    })]
  })
}

function k(e) {
  let t, {
      message: n,
      compact: s,
      guild: a,
      usernameHook: l,
      onClickMessage: i
    } = e,
    u = function(e) {
      switch (e.type) {
        case M.MessageTypes.GUILD_BOOST_TIER_1:
          return M.BoostedGuildTiers.TIER_1;
        case M.MessageTypes.GUILD_BOOST_TIER_2:
          return M.BoostedGuildTiers.TIER_2;
        case M.MessageTypes.GUILD_BOOST_TIER_3:
          return M.BoostedGuildTiers.TIER_3
      }
      return null
    }(n),
    d = (0, N.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: f
    } = o.useContext(I.ConfettiCannonContext),
    [E, _] = o.useState(!1),
    O = o.useRef(null),
    {
      reducedMotion: x
    } = o.useContext(m.AccessibilityPreferencesContext),
    L = (0, h.getMessageAuthor)(n),
    D = L.nick,
    P = l(L);
  t = null == u || null == a ? d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: D,
    usernameHook: P,
    numSubscriptions: d
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: D,
    usernameHook: P
  }) : d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: P,
    numSubscriptions: d,
    guildName: a.name,
    newTierName: (0, A.getTierName)(u)
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: P,
    guildName: a.name,
    newTierName: (0, A.getTierName)(u)
  });
  let U = o.useCallback(() => {
      if (!x.enabled) {
        if (E || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null != t) c(t.left + t.width / 2, t.top + t.height / 2)
        } else _(!0)
      }
    }, [c, x, E]),
    j = o.useCallback(() => {
      _(!1)
    }, []),
    b = o.useCallback(() => {
      (0, p.updatePoggermodeSettings)({
        settingsVisible: !0
      }), T.default.open(M.UserSettingsSections.POGGERMODE), _(!1)
    }, []),
    F = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(y)) && b()
    }, [b]);
  o.useEffect(() => f(F));
  let B = (0, r.jsx)(m.Clickable, {
    className: v.iconWrapper,
    innerRef: O,
    onClick: i,
    children: (0, r.jsx)(S.default, {
      className: v.icon,
      onMouseEnter: U
    })
  });
  return (0, r.jsxs)(g.default, {
    iconNode: B,
    timestamp: n.timestamp,
    compact: s,
    children: [(0, r.jsx)("div", {
      onClick: i,
      className: v.message,
      children: t
    }), E ? (0, r.jsx)(C.default, {
      children: (0, r.jsx)("div", {
        className: v.cannonWrapper,
        children: (0, r.jsx)(G, {
          onAnimationComplete: j,
          onClick: b
        })
      })
    }) : null]
  })
}