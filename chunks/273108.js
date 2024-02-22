"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  i = n.n(r),
  l = n("446674"),
  o = n("206230"),
  u = n("471671"),
  d = n("708721");
class c extends a.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: s,
      pause: a,
      isWindowFocused: r,
      useReducedMotion: i
    } = this.props, [l, {
      default: o
    }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: l
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (s && !r || a || i) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, s;
    let {
      nextScene: a,
      pauseWhileUnfocused: r,
      pause: i,
      isWindowFocused: l,
      useReducedMotion: o
    } = this.props;
    a !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && l && !o && !0 !== i ? this.animation.play() : (o || r && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && i ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !i && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && i && (this.playScene(a), null === (s = this.animation) || void 0 === s || s.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props, t = e[this.currentScene];
    return !0 === t.shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: s
    } = this.props, a = n[e], r = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), s) {
      var i;
      null === (i = this.animation) || void 0 === i || i.pause()
    }
  }
  render() {
    return (0, s.jsx)("div", {
      ref: this.handleSetRef,
      className: i(this.props.className, d.wrapper)
    })
  }
  constructor(...e) {
    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }, this.handleComplete = () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }, this.handleSetRef = e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    }
  }
}
c.defaultProps = {
  pauseWhileUnfocused: !0,
  pause: !1
};
var f = e => {
  let {
    componentRef: t,
    ...n
  } = e, a = (0, l.useStateFromStores)([u.default], () => u.default.isFocused()), r = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, s.jsx)(c, {
    ...n,
    isWindowFocused: a,
    useReducedMotion: r,
    ref: t
  })
}