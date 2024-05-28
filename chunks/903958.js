"use strict";
n.r(t), n("47120");
var s, r = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  u = n("442837"),
  o = n("607070"),
  c = n("451478"),
  d = n("122185");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(s = a.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: s,
      pause: r,
      isWindowFocused: a,
      useReducedMotion: l
    } = this.props, [i, {
      default: u
    }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
    null != this.animationRef && (this.animation = u.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: i
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (s && !a || r || l) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, s;
    let {
      nextScene: r,
      pauseWhileUnfocused: a,
      pause: l,
      isWindowFocused: i,
      useReducedMotion: u
    } = this.props;
    r !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(r), null != this.animation && (a && !e.isWindowFocused && i && !u && !0 !== l ? this.animation.play() : (u || a && e.isWindowFocused && !i) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && l && (this.playScene(r), null === (s = this.animation) || void 0 === s || s.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props;
    return !0 === e[this.currentScene].shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: s
    } = this.props, r = n[e], a = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), s) {
      var l;
      null === (l = this.animation) || void 0 === l || l.pause()
    }
  }
  render() {
    return (0, r.jsx)("div", {
      ref: this.handleSetRef,
      className: i()(this.props.className, d.wrapper)
    })
  }
  constructor(...e) {
    super(...e), f(this, "animationRef", null), f(this, "animation", void 0), f(this, "currentScene", this.props.nextScene), f(this, "isUnmounted", !1), f(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), f(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), f(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), f(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
f(p, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
t.default = e => {
  let {
    componentRef: t,
    ignoreReducedMotion: n = !1,
    ...s
  } = e, a = (0, u.useStateFromStores)([c.default], () => c.default.isFocused()), l = (0, u.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, r.jsx)(p, {
    ...s,
    isWindowFocused: a,
    useReducedMotion: l && !n,
    ref: t
  })
}