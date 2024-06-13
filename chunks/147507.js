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
  T = n("481060"),
  m = n("230711"),
  I = n("745510"),
  N = n("739566"),
  p = n("64078"),
  h = n("29270"),
  S = n("709586"),
  C = n("482207"),
  A = n("702346"),
  g = n("267642"),
  M = n("981631"),
  R = n("689938"),
  O = n("603277");
(l = s || (s = {})).ENTER = "enter", l.CONFETTI = "confetti", l.LEAF_PEEL = "leaf_peel", l.LEAF_FALL = "leaf_fall", l.EXIT = "exit";
let v = {
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
  P = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  D = Object.freeze({
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
      ...P,
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
      ...P,
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
  G = [j, b];

function F() {
  return n.e("60005").then(n.t.bind(n, "931152", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function B(e) {
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
    createMultipleConfettiAt: m,
    confettiCanvas: N
  } = o.useContext(I.ConfettiCannonContext), [p, h] = o.useState(null), S = (0, c.useConfettiCannon)(N, p), C = function(e, t) {
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
  }(u, _), A = x.includes(_), g = A && "exit" === u, M = o.useCallback(e => {
    E(e)
  }, []), R = o.useCallback(() => {
    "exit" === u && (null == t || t())
  }, [t, u]), P = o.useCallback(e => {
    i.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === u) {
      let {
        confettiVelocityDirection: e
      } = D[_], t = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
          s = null == e ? void 0 : e.getBoundingClientRect();
        if (null == s) return {
          x: 0,
          y: 0
        };
        let a = D[t].getConfettiPosition(n);
        return {
          x: s.left + a.x,
          y: s.top + a.y
        }
      }(i.current, _, l);
      m(t.x, t.y, {
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
  }, [m, _, u, l]), o.useEffect(() => {
    if (A && "leaf_fall" === u) {
      let e = D[_].leafRotationDirection;
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
            let s = D[t];
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
  }, [A, S, _, u]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: h,
      sprites: G,
      colors: U,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(T.Clickable, {
      onClick: n,
      className: d()(O.easterEggAnimationClickTarget, {
        [O.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
        [O.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
        [O.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
        [O.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
      }),
      children: (0, r.jsx)(T.SequencedLottieAnimation, {
        animationRef: P,
        className: d()(O.easterEggAnimation, {
          [O.easterEggAnimationHideLeaf]: g
        }),
        nextScene: C,
        sceneSegments: v,
        onScenePlay: M,
        onSceneComplete: R,
        importData: F,
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
    d = (0, h.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: f
    } = o.useContext(I.ConfettiCannonContext),
    [E, _] = o.useState(!1),
    v = o.useRef(null),
    {
      reducedMotion: x
    } = o.useContext(T.AccessibilityPreferencesContext),
    L = (0, N.getMessageAuthor)(n),
    P = L.nick,
    D = l(L);
  t = null == u || null == a ? d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: P,
    usernameHook: D,
    numSubscriptions: d
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: P,
    usernameHook: D
  }) : d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: P,
    usernameHook: D,
    numSubscriptions: d,
    guildName: a.name,
    newTierName: (0, g.getTierName)(u)
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: P,
    usernameHook: D,
    guildName: a.name,
    newTierName: (0, g.getTierName)(u)
  });
  let U = o.useCallback(() => {
      if (!x.enabled) {
        if (E || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
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
      }), m.default.open(M.UserSettingsSections.POGGERMODE), _(!1)
    }, []),
    G = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(y)) && b()
    }, [b]);
  o.useEffect(() => f(G));
  let F = (0, r.jsx)(T.Clickable, {
    className: O.iconWrapper,
    innerRef: v,
    onClick: i,
    children: (0, r.jsx)(S.default, {
      className: O.icon,
      onMouseEnter: U
    })
  });
  return (0, r.jsxs)(A.default, {
    iconNode: F,
    timestamp: n.timestamp,
    compact: s,
    children: [(0, r.jsx)("div", {
      onClick: i,
      className: O.message,
      children: t
    }), E ? (0, r.jsx)(C.default, {
      children: (0, r.jsx)("div", {
        className: O.cannonWrapper,
        children: (0, r.jsx)(B, {
          onAnimationComplete: j,
          onClick: b
        })
      })
    }) : null]
  })
}