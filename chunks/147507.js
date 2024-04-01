"use strict";
n.r(t), n.d(t, {
  EasterEggAnimation: function() {
    return F
  },
  EasterEggPosition: function() {
    return l
  },
  default: function() {
    return w
  }
}), n("47120");
var s, l, a, i, r = n("735250"),
  o = n("470079"),
  u = n("803997"),
  d = n.n(u),
  c = n("911765"),
  E = n("153832"),
  f = n("468194"),
  _ = n("477690"),
  T = n("481060"),
  I = n("230711"),
  m = n("745510"),
  N = n("739566"),
  p = n("64078"),
  S = n("29270"),
  C = n("903958"),
  A = n("709586"),
  h = n("482207"),
  g = n("702346"),
  M = n("267642"),
  O = n("981631"),
  R = n("689938"),
  v = n("152209");
(a = s || (s = {})).ENTER = "enter", a.CONFETTI = "confetti", a.LEAF_PEEL = "leaf_peel", a.LEAF_FALL = "leaf_fall", a.EXIT = "exit";
let L = {
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
(i = l || (l = {})).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let P = ["TOP_LEFT", "TOP_RIGHT"],
  D = (0, f.cssValueToNumber)(_.default.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  x = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  y = Object.freeze({
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
      ...x,
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
      ...x,
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
  U = "falling-leaf",
  j = ["#61D5B2"],
  b = n("303893"),
  G = n("808392"),
  B = [b, G];

function k() {
  return n.e("60005").then(n.t.bind(n, "931152", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function F(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: s,
    size: a
  } = e, i = o.useRef(null), [u, f] = o.useState(null), [_] = o.useState(null != s ? s : function() {
    switch (Math.floor(Math.random() * Object.keys(l).length)) {
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
    createMultipleConfettiAt: I,
    confettiCanvas: N
  } = o.useContext(m.ConfettiCannonContext), [p, S] = o.useState(null), A = (0, c.useConfettiCannon)(N, p), h = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (P.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(u, _), g = P.includes(_), M = g && "exit" === u, O = o.useCallback(e => {
    f(e)
  }, []), R = o.useCallback(() => {
    "exit" === u && (null == t || t())
  }, [t, u]), x = o.useCallback(e => {
    i.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === u) {
      let {
        confettiVelocityDirection: e
      } = y[_], t = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D,
          s = null == e ? void 0 : e.getBoundingClientRect();
        if (null == s) return {
          x: 0,
          y: 0
        };
        let l = y[t].getConfettiPosition(n);
        return {
          x: s.left + l.x,
          y: s.top + l.y
        }
      }(i.current, _, a);
      I(t.x, t.y, {
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
  }, [I, _, u, a]), o.useEffect(() => {
    if (g && "leaf_fall" === u) {
      let e = y[_].leafRotationDirection;
      A.createConfetti({
        id: "".concat(U, "-").concat((0, E.v4)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let s = y[t];
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
        sprite: "TOP_LEFT" === _ ? b : G
      })
    }
  }, [g, A, _, u]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: S,
      sprites: B,
      colors: j,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(T.Clickable, {
      onClick: n,
      className: d()(v.easterEggAnimationClickTarget, {
        [v.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
        [v.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
        [v.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
        [v.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
      }),
      children: (0, r.jsx)(C.default, {
        animationRef: x,
        className: d()(v.easterEggAnimation, {
          [v.easterEggAnimationHideLeaf]: M
        }),
        nextScene: h,
        sceneSegments: L,
        onScenePlay: O,
        onSceneComplete: R,
        importData: k,
        pauseWhileUnfocused: !1
      })
    })]
  })
}

function w(e) {
  let t, {
      message: n,
      compact: s,
      guild: l,
      usernameHook: a,
      onClickMessage: i
    } = e,
    u = function(e) {
      switch (e.type) {
        case O.MessageTypes.GUILD_BOOST_TIER_1:
          return O.BoostedGuildTiers.TIER_1;
        case O.MessageTypes.GUILD_BOOST_TIER_2:
          return O.BoostedGuildTiers.TIER_2;
        case O.MessageTypes.GUILD_BOOST_TIER_3:
          return O.BoostedGuildTiers.TIER_3
      }
      return null
    }(n),
    d = (0, S.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: E
    } = o.useContext(m.ConfettiCannonContext),
    [f, _] = o.useState(!1),
    C = o.useRef(null),
    {
      reducedMotion: L
    } = o.useContext(T.AccessibilityPreferencesContext),
    P = (0, N.getMessageAuthor)(n),
    D = P.nick,
    x = a(P);
  t = null == u || null == l ? d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: D,
    usernameHook: x,
    numSubscriptions: d
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: D,
    usernameHook: x
  }) : d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: x,
    numSubscriptions: d,
    guildName: l.name,
    newTierName: (0, M.getTierName)(u)
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: x,
    guildName: l.name,
    newTierName: (0, M.getTierName)(u)
  });
  let y = o.useCallback(() => {
      if (!L.enabled) {
        if (f || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null != t) c(t.left + t.width / 2, t.top + t.height / 2)
        } else _(!0)
      }
    }, [c, L, f]),
    j = o.useCallback(() => {
      _(!1)
    }, []),
    b = o.useCallback(() => {
      (0, p.updatePoggermodeSettings)({
        settingsVisible: !0
      }), I.default.open(O.UserSettingsSections.POGGERMODE), _(!1)
    }, []),
    G = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(U)) && b()
    }, [b]);
  o.useEffect(() => E(G));
  let B = (0, r.jsx)(T.Clickable, {
    className: v.iconWrapper,
    innerRef: C,
    onClick: i,
    children: (0, r.jsx)(A.default, {
      className: v.icon,
      onMouseEnter: y
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
    }), f ? (0, r.jsx)(h.default, {
      children: (0, r.jsx)("div", {
        className: v.cannonWrapper,
        children: (0, r.jsx)(F, {
          onAnimationComplete: j,
          onClick: b
        })
      })
    }) : null]
  })
}