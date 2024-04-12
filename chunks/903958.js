"use strict";
i.r(t), i("47120");
var n, s = i("735250"),
  r = i("470079"),
  a = i("803997"),
  o = i.n(a),
  l = i("442837"),
  u = i("607070"),
  d = i("451478"),
  c = i("477094");

function p(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
class h extends(n = r.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: n,
      pause: s,
      isWindowFocused: r,
      useReducedMotion: a
    } = this.props, [o, {
      default: l
    }] = await Promise.all([e(), i.e("23755").then(i.t.bind(i, "500923", 23))]);
    null != this.animationRef && (this.animation = l.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: o
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (n && !r || s || a) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, i, n;
    let {
      nextScene: s,
      pauseWhileUnfocused: r,
      pause: a,
      isWindowFocused: o,
      useReducedMotion: l
    } = this.props;
    s !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(s), null != this.animation && (r && !e.isWindowFocused && o && !l && !0 !== a ? this.animation.play() : (l || r && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !l && (null === (i = this.animation) || void 0 === i || i.play()), e.nextScene !== s && a && (this.playScene(s), null === (n = this.animation) || void 0 === n || n.pause())
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
      sceneSegments: i,
      useReducedMotion: n
    } = this.props, s = i[e], r = i[this.currentScene];
    if (null != this.animation && (e === this.currentScene || s.BEG !== r.BEG || s.END !== r.END) && this.animation.playSegments([s.BEG, s.END], !0), this.currentScene = e, null != t && t(this.currentScene), n) {
      var a;
      null === (a = this.animation) || void 0 === a || a.pause()
    }
  }
  render() {
    return (0, s.jsx)("div", {
      ref: this.handleSetRef,
      className: o()(this.props.className, c.wrapper)
    })
  }
  constructor(...e) {
    super(...e), p(this, "animationRef", null), p(this, "animation", void 0), p(this, "currentScene", this.props.nextScene), p(this, "isUnmounted", !1), p(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), p(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), p(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), p(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
p(h, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
t.default = e => {
  let {
    componentRef: t,
    ignoreReducedMotion: i = !1,
    ...n
  } = e, r = (0, l.useStateFromStores)([d.default], () => d.default.isFocused()), a = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  return (0, s.jsx)(h, {
    ...n,
    isWindowFocused: r,
    useReducedMotion: a && !i,
    ref: t
  })
}