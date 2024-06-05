"use strict";
s.r(t), s("47120");
var n, a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  l = s.n(i),
  u = s("442837"),
  o = s("607070"),
  c = s("451478"),
  d = s("122185");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class E extends(n = r.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: n,
      pause: a,
      isWindowFocused: r,
      useReducedMotion: i
    } = this.props, [l, {
      default: u
    }] = await Promise.all([e(), s.e("23755").then(s.t.bind(s, "500923", 23))]);
    null != this.animationRef && (this.animation = u.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: l
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (n && !r || a || i) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, s, n;
    let {
      nextScene: a,
      pauseWhileUnfocused: r,
      pause: i,
      isWindowFocused: l,
      useReducedMotion: u
    } = this.props;
    a !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && l && !u && !0 !== i ? this.animation.play() : (u || r && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && i ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !i && !u && (null === (s = this.animation) || void 0 === s || s.play()), e.nextScene !== a && i && (this.playScene(a), null === (n = this.animation) || void 0 === n || n.pause())
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
      sceneSegments: s,
      useReducedMotion: n
    } = this.props, a = s[e], r = s[this.currentScene];
    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), n) {
      var i;
      null === (i = this.animation) || void 0 === i || i.pause()
    }
  }
  render() {
    return (0, a.jsx)("div", {
      ref: this.handleSetRef,
      className: l()(this.props.className, d.wrapper)
    })
  }
  constructor(...e) {
    super(...e), C(this, "animationRef", null), C(this, "animation", void 0), C(this, "currentScene", this.props.nextScene), C(this, "isUnmounted", !1), C(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), C(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), C(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), C(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
C(E, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
t.default = e => {
  let {
    componentRef: t,
    ignoreReducedMotion: s = !1,
    ...n
  } = e, r = (0, u.useStateFromStores)([c.default], () => c.default.isFocused()), i = (0, u.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, a.jsx)(E, {
    ...n,
    isWindowFocused: r,
    useReducedMotion: i && !s,
    ref: t
  })
}