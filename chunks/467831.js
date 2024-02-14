"use strict";
n.r(t), n.d(t, {
  PremiumPaymentAnimationTier0: function() {
    return C
  },
  PremiumPaymentAnimationTier1: function() {
    return R
  },
  PremiumPaymentAnimationTier2: function() {
    return A
  },
  PremiumPaymentGuildAnimation: function() {
    return O
  }
}), n("222007");
var s, a, r, i, l, o, u, d, c = n("37983"),
  f = n("884691"),
  _ = n("414456"),
  E = n.n(_),
  h = n("907002"),
  m = n("458960"),
  p = n("273108"),
  S = n("577567");
(l = s || (s = {})).NORMAL = "normal", l.SPEED_START = "speed_start", l.SPEED_LOOP = "speed_loop", l.FINISH = "finish", l.IDLE = "idle";
let I = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: !0
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class C extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case C.Scenes.SPEED_START:
        return C.Scenes.SPEED_LOOP;
      case C.Scenes.FINISH:
        return C.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: s,
      pause: a,
      pauseWhileUnfocused: r
    } = this.props;
    return (0, c.jsx)(p.default, {
      className: E(S.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: a ? "idle" : t,
      sceneSegments: I,
      onScenePlay: n,
      onSceneComplete: s,
      pauseWhileUnfocused: r,
      pause: a
    })
  }
}
C.Scenes = s, (o = a || (a = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
let g = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: !0
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class R extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case R.Scenes.SPEED_START:
        return R.Scenes.SPEED_LOOP;
      case R.Scenes.FINISH:
        return R.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.el("73902").then(n.t.bind(n, "73902", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: s,
      pause: a,
      pauseWhileUnfocused: r
    } = this.props;
    return (0, c.jsx)(p.default, {
      className: E(S.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: a ? "idle" : t,
      sceneSegments: g,
      onScenePlay: n,
      onSceneComplete: s,
      pauseWhileUnfocused: r,
      pause: a
    })
  }
}
R.Scenes = a, (u = r || (r = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
let N = {
  idle_entry: {
    BEG: 0,
    END: 50
  },
  idle_loop: {
    BEG: 50,
    END: 230,
    shouldForcePlayAfter: !0
  },
  boost_start: {
    BEG: 230,
    END: 275
  },
  boost_loop: {
    BEG: 275,
    END: 290
  },
  boost_end: {
    BEG: 386,
    END: 455
  },
  victory: {
    BEG: 470,
    END: 525
  },
  error: {
    BEG: 290,
    END: 375
  }
};
class T extends f.PureComponent {
  getStyle(e) {
    let {
      animation: t
    } = this.props;
    return {
      transform: [{
        translateX: t.x.interpolate({
          inputRange: [0, 1],
          outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
        })
      }, {
        translateY: t.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["100%", "0%"]
        })
      }]
    }
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, c.jsxs)("div", {
      className: S.panningAnimation,
      children: [(0, c.jsx)(m.default.div, {
        className: e,
        style: this.getStyle(!1)
      }), (0, c.jsx)(m.default.div, {
        className: e,
        style: this.getStyle(!0)
      })]
    })
  }
}
let L = Object.freeze({
  IDLE_ENTRY: {
    toValue: 1,
    duration: 1500
  },
  IDLE_LOOP: {
    toValue: 1,
    duration: 6e3,
    easing: m.default.Easing.linear
  },
  BOOST_START: {
    toValue: 0,
    duration: 2e3,
    delay: 500
  },
  ERROR: {
    toValue: 1,
    duration: 1500,
    delay: 1e3
  }
});
class A extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case A.Scenes.IDLE_ENTRY:
        return A.Scenes.IDLE_LOOP;
      case A.Scenes.BOOST_START:
        return A.Scenes.BOOST_LOOP;
      case A.Scenes.BOOST_END:
        return A.Scenes.VICTORY;
      case A.Scenes.VICTORY:
        return A.Scenes.IDLE_ENTRY;
      case A.Scenes.ERROR:
        return A.Scenes.IDLE_LOOP;
      default:
        return e
    }
  }
  componentWillUnmount() {
    this.didUnmount = !0
  }
  importData() {
    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  animateEntry(e) {
    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), m.default.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: 1.2 * e.duration,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(L.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(L.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
      toValue: L.BOOST_START.toValue,
      duration: L.BOOST_START.duration,
      delay: L.BOOST_START.delay
    }), m.default.timing(this.backgroundAnimation.y, {
      toValue: L.BOOST_START.toValue,
      duration: 1.2 * L.BOOST_START.duration,
      delay: L.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: s
    } = this.props;
    return (0, c.jsxs)("div", {
      className: E(S.tier2Animation, e),
      children: [n ? (0, c.jsx)(c.Fragment, {
        children: (0, c.jsxs)("div", {
          className: S.panningAnimation,
          children: [(0, c.jsx)("div", {
            className: S.tier2Background
          }), (0, c.jsx)("div", {
            className: S.tier2Foreground
          })]
        })
      }) : (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(T, {
          className: S.tier2Background,
          animation: this.backgroundAnimation
        }), (0, c.jsx)(T, {
          className: S.tier2Foreground,
          animation: this.foregroundAnimation
        })]
      }), (0, c.jsx)(p.default, {
        className: S.sequencedAnimation,
        importData: this.importData,
        nextScene: n ? "idle_loop" : t,
        sceneSegments: N,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: s,
        pauseWhileUnfocused: !1,
        pause: n
      })]
    })
  }
  constructor(...e) {
    super(...e), this.backgroundAnimation = new m.default.ValueXY({
      x: 0,
      y: 0
    }), this.foregroundAnimation = new m.default.ValueXY({
      x: 0,
      y: 0
    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
      !this.didUnmount && (this.backgroundAnimation.x.setValue(0), m.default.timing(this.backgroundAnimation.x, {
        toValue: L.IDLE_LOOP.toValue,
        duration: 1.2 * L.IDLE_LOOP.duration,
        easing: m.default.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }, this.animateIdleLoopForeground = () => {
      !this.didUnmount && (this.foregroundAnimation.x.setValue(0), m.default.timing(this.foregroundAnimation.x, {
        toValue: L.IDLE_LOOP.toValue,
        duration: L.IDLE_LOOP.duration,
        easing: L.IDLE_LOOP.easing
      }).start(this.animateIdleLoopForeground))
    }, this.handleScenePlay = e => {
      switch (e) {
        case "idle_entry":
          this.animateIdleEntry(), this.animateIdleLoop();
          break;
        case "error":
          this.animateError();
          break;
        case "boost_start":
          this.animateBoostStart()
      }
      let {
        onScenePlay: t
      } = this.props;
      null != t && t(e)
    }
  }
}
A.Scenes = r, (d = i || (i = {})).ENTRY = "entry", d.IDLE = "idle", d.STARS = "stars", d.ERROR = "error", d.SUCCESS = "success";
let M = {
    entry: {
      BEG: 0,
      END: 180
    },
    idle: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: !0
    },
    stars: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: !0
    },
    error: {
      BEG: 360,
      END: 540
    },
    success: {
      BEG: 540,
      END: 778
    }
  },
  x = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  D = [{
    left: 29,
    top: 100,
    color: x.WHITE
  }, {
    left: 245,
    top: 11,
    color: x.PINK
  }, {
    left: 393,
    top: 22,
    color: x.WHITE
  }, {
    left: 74,
    top: 30,
    color: x.PINK
  }, {
    left: 188,
    top: 9,
    color: x.WHITE
  }, {
    left: 379,
    top: 97,
    color: x.PINK
  }],
  v = Object.freeze({
    SCALE_INITIAL: 0,
    SCALE_MIDDLE: 1,
    SCALE_END: 0,
    ROTATE_INITIAL: 0,
    ROTATE_MIDDLE: 180,
    ROTATE_END: 360,
    DELAY_MIN: 200,
    DELAY_MAX: 500,
    DELAY_STAGGER: 200,
    DURATION_MIDDLE: 400,
    DURATION_END: 250,
    SIZE_MIN: 7,
    SIZE_MAX: 15,
    EASING_MIDDLE: m.default.Easing.bezier(.3, .01, 0, .99),
    EASING_END: m.default.Easing.bezier(0, -.01, .99, 0)
  });

function U(e) {
  let {
    animate: t
  } = e, [n, s] = f.useState(0), a = (0, h.useSprings)(D.length, D.map((e, a) => {
    let r = a > 0 ? v.DELAY_STAGGER * a + Math.random() * (v.DELAY_MAX - v.DELAY_MIN) + v.DELAY_MIN : 0,
      i = Math.random() * (v.SIZE_MAX - v.SIZE_MIN) + v.SIZE_MIN;
    return {
      from: {
        scale: v.SCALE_INITIAL,
        rotate: v.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: i,
        height: i
      },
      to: async e => {
        t ? (await e({
          scale: v.SCALE_MIDDLE,
          rotate: v.ROTATE_MIDDLE,
          delay: r,
          config: {
            duration: v.DURATION_MIDDLE,
            easing: v.EASING_MIDDLE
          }
        }), await e({
          scale: v.SCALE_END,
          rotate: v.ROTATE_END,
          config: {
            duration: v.DURATION_END,
            easing: v.EASING_END
          }
        }), await e({
          scale: v.SCALE_INITIAL,
          rotate: v.ROTATE_INITIAL,
          immediate: !0
        }), a === D.length - 1 && s(n + 1)) : await e({
          scale: v.SCALE_INITIAL,
          rotate: v.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, c.jsx)(c.Fragment, {
    children: a.map((e, t) => {
      let n = D[t];
      return (0, c.jsx)(h.animated.svg, {
        style: e,
        className: S.guildStar,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12.14 12.24",
        children: (0, c.jsx)("path", {
          d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
          fill: n.color
        })
      }, t)
    })
  })
}
class O extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case "entry":
      case "error":
      case "success":
        return "idle";
      default:
        return e
    }
  }
  importData() {
    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onScenePlay: s,
      onSceneComplete: a,
      pauseWhileUnfocused: r
    } = this.props;
    return (0, c.jsxs)("div", {
      className: E(S.guildWrapper, e),
      children: [(0, c.jsx)(p.default, {
        className: S.guildBackground,
        importData: this.importData,
        nextScene: n ? "idle" : t,
        sceneSegments: M,
        onScenePlay: s,
        onSceneComplete: a,
        pauseWhileUnfocused: r,
        pause: n
      }), (0, c.jsx)(U, {
        animate: !n && "stars" === t
      })]
    })
  }
}
O.Scenes = i