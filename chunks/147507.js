n.d(t, {
  ZP: function() {
    return G
  }
}), n(47120);
var s, i, l, a, r = n(735250),
  o = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(887024),
  E = n(772848),
  _ = n(468194),
  I = n(477690),
  T = n(481060),
  m = n(230711),
  N = n(745510),
  h = n(739566),
  C = n(64078),
  S = n(29270),
  A = n(709586),
  g = n(482207),
  p = n(702346),
  f = n(267642),
  R = n(981631),
  O = n(689938),
  M = n(343774);
(l = s || (s = {})).ENTER = "enter", l.CONFETTI = "confetti", l.LEAF_PEEL = "leaf_peel", l.LEAF_FALL = "leaf_fall", l.EXIT = "exit";
let x = {
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
(a = i || (i = {})).TOP_LEFT = "TOP_LEFT", a.TOP_RIGHT = "TOP_RIGHT", a.BOTTOM_LEFT = "BOTTOM_LEFT", a.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let v = ["TOP_LEFT", "TOP_RIGHT"],
  L = (0, _.Mg)(I.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  Z = {
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
      ...Z,
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
      ...Z,
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
  D = "falling-leaf",
  j = ["#61D5B2"],
  U = n(303893),
  b = n(808392),
  y = [U, b];

function B() {
  return n.e("60005").then(n.t.bind(n, 931152, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function k(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: s,
    size: l
  } = e, a = o.useRef(null), [c, _] = o.useState(null), [I] = o.useState(null != s ? s : function() {
    switch (Math.floor(Math.random() * Object.keys(i).length)) {
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
    confettiCanvas: h
  } = o.useContext(N.h), [C, S] = o.useState(null), A = (0, d.uR)(h, C), g = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (v.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(c, I), p = v.includes(I), f = p && "exit" === c, R = o.useCallback(e => {
    _(e)
  }, []), O = o.useCallback(() => {
    "exit" === c && (null == t || t())
  }, [t, c]), Z = o.useCallback(e => {
    a.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === c) {
      let {
        confettiVelocityDirection: e
      } = P[I], t = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
          s = null == e ? void 0 : e.getBoundingClientRect();
        if (null == s) return {
          x: 0,
          y: 0
        };
        let i = P[t].getConfettiPosition(n);
        return {
          x: s.left + i.x,
          y: s.top + i.y
        }
      }(a.current, I, l);
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
  }, [m, I, c, l]), o.useEffect(() => {
    if (p && "leaf_fall" === c) {
      let e = P[I].leafRotationDirection;
      A.createConfetti({
        id: "".concat(D, "-").concat((0, E.Z)()),
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
          }(a.current, I)
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
        sprite: "TOP_LEFT" === I ? U : b
      })
    }
  }, [p, A, I, c]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Ji, {
      ref: S,
      sprites: y,
      colors: j,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(T.Clickable, {
      onClick: n,
      className: u()(M.easterEggAnimationClickTarget, {
        [M.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === I,
        [M.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === I,
        [M.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === I,
        [M.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === I
      }),
      children: (0, r.jsx)(T.SequencedLottieAnimation, {
        animationRef: Z,
        className: u()(M.easterEggAnimation, {
          [M.easterEggAnimationHideLeaf]: f
        }),
        nextScene: g,
        sceneSegments: x,
        onScenePlay: R,
        onSceneComplete: O,
        importData: B,
        pauseWhileUnfocused: !1
      })
    })]
  })
}

function G(e) {
  let t, {
      message: n,
      compact: s,
      guild: i,
      usernameHook: l,
      onClickMessage: a
    } = e,
    c = function(e) {
      switch (e.type) {
        case R.uaV.GUILD_BOOST_TIER_1:
          return R.Eu4.TIER_1;
        case R.uaV.GUILD_BOOST_TIER_2:
          return R.Eu4.TIER_2;
        case R.uaV.GUILD_BOOST_TIER_3:
          return R.Eu4.TIER_3
      }
      return null
    }(n),
    u = (0, S.Z)(n),
    {
      createMultipleConfettiAt: d,
      addClickListener: E
    } = o.useContext(N.h),
    [_, I] = o.useState(!1),
    x = o.useRef(null),
    {
      reducedMotion: v
    } = o.useContext(T.AccessibilityPreferencesContext),
    L = (0, h.ZH)(n),
    Z = L.nick,
    P = l(L);
  t = null == c || null == i ? u > 1 ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: Z,
    usernameHook: P,
    numSubscriptions: u
  }) : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: Z,
    usernameHook: P
  }) : u > 1 ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: Z,
    usernameHook: P,
    numSubscriptions: u,
    guildName: i.name,
    newTierName: (0, f.nW)(c)
  }) : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: Z,
    usernameHook: P,
    guildName: i.name,
    newTierName: (0, f.nW)(c)
  });
  let j = o.useCallback(() => {
      if (!v.enabled)
        if (_ || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = x.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null == t) return;
          d(t.left + t.width / 2, t.top + t.height / 2)
        } else I(!0)
    }, [d, v, _]),
    U = o.useCallback(() => {
      I(!1)
    }, []),
    b = o.useCallback(() => {
      (0, C.AI)({
        settingsVisible: !0
      }), m.Z.open(R.oAB.POGGERMODE), I(!1)
    }, []),
    y = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(D)) && b()
    }, [b]);
  o.useEffect(() => E(y));
  let B = (0, r.jsx)(T.Clickable, {
    className: M.iconWrapper,
    innerRef: x,
    onClick: a,
    children: (0, r.jsx)(A.Z, {
      className: M.icon,
      onMouseEnter: j
    })
  });
  return (0, r.jsxs)(p.Z, {
    iconNode: B,
    timestamp: n.timestamp,
    compact: s,
    children: [(0, r.jsx)("div", {
      onClick: a,
      className: M.message,
      children: t
    }), _ ? (0, r.jsx)(g.ZP, {
      children: (0, r.jsx)("div", {
        className: M.cannonWrapper,
        children: (0, r.jsx)(k, {
          onAnimationComplete: U,
          onClick: b
        })
      })
    }) : null]
  })
}