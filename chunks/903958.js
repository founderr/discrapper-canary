"use strict";
n.r(t), n("47120");
var i, l = n("735250"),
  s = n("470079"),
  a = n("803997"),
  u = n.n(a),
  o = n("442837"),
  r = n("607070"),
  c = n("451478"),
  d = n("477094");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(i = s.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: i,
      pause: l,
      isWindowFocused: s,
      useReducedMotion: a
    } = this.props, [u, {
      default: o
    }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: u
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (i && !s || l || a) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, i;
    let {
      nextScene: l,
      pauseWhileUnfocused: s,
      pause: a,
      isWindowFocused: u,
      useReducedMotion: o
    } = this.props;
    l !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(l), null != this.animation && (s && !e.isWindowFocused && u && !o && !0 !== a ? this.animation.play() : (o || s && e.isWindowFocused && !u) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== l && a && (this.playScene(l), null === (i = this.animation) || void 0 === i || i.pause())
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
      useReducedMotion: i
    } = this.props, l = n[e], s = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || l.BEG !== s.BEG || l.END !== s.END) && this.animation.playSegments([l.BEG, l.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
      var a;
      null === (a = this.animation) || void 0 === a || a.pause()
    }
  }
  render() {
    return (0, l.jsx)("div", {
      ref: this.handleSetRef,
      className: u()(this.props.className, d.wrapper)
    })
  }
  constructor(...e) {
    super(...e), S(this, "animationRef", null), S(this, "animation", void 0), S(this, "currentScene", this.props.nextScene), S(this, "isUnmounted", !1), S(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), S(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), S(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), S(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
S(p, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
t.default = e => {
  let {
    componentRef: t,
    ignoreReducedMotion: n = !1,
    ...i
  } = e, s = (0, o.useStateFromStores)([c.default], () => c.default.isFocused()), a = (0, o.useStateFromStores)([r.default], () => r.default.useReducedMotion);
  return (0, l.jsx)(p, {
    ...i,
    isWindowFocused: s,
    useReducedMotion: a && !n,
    ref: t
  })
}